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
            ->prepend($admin->first())
            ->each(function($user, $key){
                $user->campaigns()->saveMany(
                    factory('App\Campaign', 2)->make()
                );

                $user->campaigns()
                    ->each(function ($campaign) {
                        $campaign->factions()->saveMany(
                            factory('App\Faction', 3)->make()
                        );

                        $campaign->locations()->saveMany(
                            factory('App\Location', 3)->make()
                        );

                        $party = factory('App\Character', 4)->make();
                        $campaign->characters()->saveMany($party);

                        $npcs = factory('App\Character', 10)->make(['npc' => true]);
                        $campaign->npcs()->saveMany($npcs);
                    });
            });
    }
}
