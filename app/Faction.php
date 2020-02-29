<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Faction extends Model
{
    use RevisionableTrait, Sluggable, SluggableScopeHelpers;

    protected $fillable = [
        'name',
        'description',
        'private',
    ];

    /**
     * Revision Settings
     */
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 100; //Maintain a maximum of 500 changes at any point of time, while cleaning up old revisions.

    // Use only one of the following:
    // protected $keepRevisionOf = ['title'];
    // protected $dontKeepRevisionOf = ['category_id'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return $this->getSlugKeyName();
    }

    public function campaigns()
    {
        return $this->belongsToMany('App\Campaign');
    }

    public function tasks() {
        return $this->belongsToMany('App\Task');
    }

    public function characters() {
        return $this->belongsToMany('App\Character');
    }
}
