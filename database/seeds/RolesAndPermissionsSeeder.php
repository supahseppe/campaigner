<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
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
}
