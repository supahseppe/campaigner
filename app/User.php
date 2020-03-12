<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles, Sluggable, SluggableScopeHelpers;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'username'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return $this->getSlugKeyName();
    }

    public function campaigns () {
        return $this->belongsToMany('App\Campaign')->withPivot(['role']);
    }

    public function campaign () {
        return $this->belongsTo('App\Campaign');
    }

    public function characters () {
        return $this->belongsToMany('App\Character')->where('npc', false)->withPivot('role');
    }

    public function npcs () {
        return $this->belongsToMany('App\Character')->where('npc', true)->withPivot('role');
    }

    /**
     * Scope a query to only include campaigns where user has a particular role
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $role
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWithRole($query, $role)
    {
        return $query->where('role', $role);
    }
}
