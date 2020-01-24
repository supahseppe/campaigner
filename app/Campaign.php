<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Campaign extends Model
{
    use RevisionableTrait, Sluggable, SluggableScopeHelpers;

    protected $fillable = ['title', 'description'];

    /**
     * Revision Settings
     */
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 100; //Maintain a maximum of 500 changes at any point of time, while cleaning up old revisions.
    protected $dontKeepRevisionOf = ['id'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return $this->getSlugKeyName();
    }

    public function users() {
        return $this->belongsToMany('App\User')->withPivot('role');
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
