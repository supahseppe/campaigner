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

        $users->each(function($user) {
            $campaign = factory('App\Campaign')->create();
            $campaign->users()->attach($user, ['role' => 'owner']);
            $campaign->factions()->saveMany(factory('App\Faction', 5)->make());
            $campaign->locations()->saveMany(factory('App\Location', 5)->make());

            $npcs = factory('App\Character', 10, ['npc' => true])->create();
            $campaign->npcs()->saveMany($npcs);

            $party = factory('App\Character', 5)->create();
            $party->each(function($char) {
                $char->users()->save(factory('App\Character')->make());
            });
            $campaign->characters()->saveMany($party);
        });
    }
}
