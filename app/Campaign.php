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

    /**
     * Get the campaign's summary
     *
     * @param  string  $value
     * @return string
     */
    public function getSummaryAttribute()
    {
        $str = strip_tags($this->description);
        $str = wordwrap($str, 140);
        $str = explode("\n", $str);
        $str = $str[0] . '...';
        return $str;
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

    public function users() {
        return $this->belongsToMany('App\User')->withPivot('role');
    }

    public function owners() {
        return $this->belongsToMany('App\User')->wherePivot('role', '=', 'owner');
    }

    public function players() {
        return $this->belongsToMany('App\User')->wherePivot('role', '=', 'player');
    }

    public function characters() {
        return $this->belongsToMany('App\Character')->where('npc', false);
    }

    public function npcs() {
        return $this->belongsToMany('App\Character')->where('npc', true);
    }

    public function factions() {
        return $this->belongsToMany('App\Faction');
    }

    public function locations() {
        return $this->belongsToMany('App\Location');
    }

    public function tasks() {
        return $this->belongsToMany('App\Task');
    }
}
