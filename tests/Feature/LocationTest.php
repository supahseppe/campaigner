<?php

namespace Tests\Feature;

use App\Campaign;
use App\Location;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class LocationTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $campaign;
    protected $location;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory('App\User')->create();
        $this->campaign = factory('App\Campaign')->create();
        $this->location = factory('App\Location')->create();

        $this->campaign->locations()->save($this->location);
        $this->user->campaigns()->save($this->campaign);
        $this->user->campaign = $this->campaign;
    }

    /** @test */
    public function unauthenticated_users_cannot_see_location_pages()
    {
        $this->get(route('locations.index'))
            ->assertRedirect('/login');

        $this->get(route('locations.show', $this->location->slug))
            ->assertRedirect('/login');

        $this->get(route('locations.edit', $this->location->slug))
            ->assertRedirect('/login');
    }

    /** @test */
    public function user_can_see_own_locations()
    {
        // We're making 4 more locations, for a total of 5 (counting the one created in setUp)
        $this->user->campaign->locations()->saveMany(
            factory('App\Location', 4)->make()
        );

        $this->actingAs($this->user)
            ->get(route('locations.index'))
            ->assertStatus(200)
            ->assertHasProp('pager.data')
            ->assertPropCount('pager.data', 5);
    }

    /** @test */
    public function user_can_see_single_location()
    {
        $this->actingAs($this->user)
            ->get(route('locations.show', $this->location->slug))
            ->assertStatus(200)
            ->assertHasProp('location');
    }

    /** @test */
    public function user_can_create_location()
    {
        $location = factory('App\Location')->make();

        $this->actingAs($this->user)
            ->get(route('locations.index'))
            ->assertPropCount('pager.data', 1);

        $this->actingAs($this->user)->get(route('locations.create'), $location->toArray())
            ->assertStatus(200);

        $request = $this->actingAs($this->user)
            ->post(route('locations.store'), $location->toArray());

        $request = $this->actingAs($this->user)
            ->get(route('locations.index'))
            ->assertPropCount('pager.data', 2);

        $this->actingAs($this->user)
            ->get(route('locations.index'))
            ->assertPropCount('pager.data', 2);
    }

    /** @test */
    public function user_can_edit_location()
    {
        $request = $this->actingAs($this->user)
            ->put(route('locations.update', $this->location->slug), $this->location->toArray())
            ->assertRedirect(route('locations.show', [$this->location->slug]));
    }

    /** @test */
    public function user_can_delete_location()
    {
        $location = factory('App\Location')->create();
        $this->actingAs($this->user)
            ->delete(route('locations.destroy', $location->slug))
            ->assertRedirect(route('locations.index'));
    }
}
