<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->roles_permissions();
        $this->dummy_content();
    }

    protected function roles_permissions()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'view_any']);
        Permission::create(['name' => 'view_own']);
        Permission::create(['name' => 'view_public']);
        Permission::create(['name' => 'create']);
        Permission::create(['name' => 'delete_any']);
        Permission::create(['name' => 'delete_own']);
        Permission::create(['name' => 'delete_revisions']);
        Permission::create(['name' => 'edit_any']);
        Permission::create(['name' => 'edit_own']);
        Permission::create(['name' => 'revert_revisions']);
        Permission::create(['name' => 'view_revisions']);

        // create roles and assign created permissions

        // this can be done as separate statements
        $role = Role::create(['name' => 'authenticated']);
        $role->givePermissionTo([
            'view_own',
            'view_public',
            'create',
            'delete_own',
            'delete_revisions',
            'edit_own',
            'revert_revisions',
            'view_revisions',
        ]);

        $role = Role::create(['name' => 'super-admin']);
        $role->givePermissionTo(Permission::all());
    }

    protected function dummy_content()
    {
        $admin = factory('App\User', 1)->create([
            'username' => 'Admin',
            'email' => 'gdaristotile@gmail.com',
            'password' => Hash::make('AdminPass'),
        ]);

        $users = factory('App\User', 4)
            ->create()
            ->each(function($user){
                $user->assignRole('authenticated');
            })
            ->prepend($admin->first());

        // These users will be DMs, so let's make them campaigns!
        $users->each(function($user) {
            $campaign = factory('App\Campaign')->create();
            $campaign->users()->attach($user, ['role' => 'owner']);

            // Create party, Players and Characters
            $party = factory('App\Character', 5)->create();
            $party->each(function($char) {
                $user = factory('App\User')->create();
                $char->users()->attach($user, ['role' => 'owner']);
            });
            $campaign->characters()->saveMany($party);

            // Create NPCs
            $npcs = factory('App\Character', 10)->create(['npc' => true]);
            $user->characters()->saveMany($npcs);
            $campaign->npcs()->saveMany($npcs);

            // Create factions
            $factions = factory('App\Faction', 5)->create();
            $campaign->factions()->saveMany($factions);

            // Create locations
            $locations = factory('App\Location', 25)->create();
            $campaign->locations()->saveMany($locations);

            // Tie factions, PCs, NPCs, and Locations together
            $factions->each(function($faction) use($locations) {
                $faction->locations()->saveMany($locations->random(2));
            });

            $npcs->each(function($npc) use($factions, $locations) {
                $npc->locations()->saveMany($locations->random(2));
                $npc->factions()->saveMany($factions->random(2));
            });

            $party->each(function($pc) use($factions) {
                $pc->factions()->saveMany($factions->random(3));
            });

            // Tasks
            $tasks = factory('App\Task', 25)->create();
            $campaign->tasks()->saveMany($tasks);
            $faction_chunks = $tasks->chunk(5);
            $faction_chunks->each(function($chunk, $key) use($factions) {
                echo $key;
                die();
//                $faction = $factions->get($key);
//                $faction->tasks()->saveMany($chunk);
            });
        });
    }
}
