<?php

namespace Tests\Feature;

use App\Faction;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class FactionTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $test_campaign;
    protected $test_faction;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory('App\User')->create();
        $this->test_campaign = factory('App\Campaign')->create();
        $this->test_faction = factory('App\Faction')->create();

        $this->test_campaign->factions()->save($this->test_faction);
        $this->user->campaigns()->save($this->test_campaign);
    }

    /** @test */
    public function unauthenticated_users_cannot_see_factions_pages()
    {
        $factions = factory('App\Faction')->create();

        $this->get(route('factions.index'))
            ->assertRedirect('/login');

        $this->get(route('factions.show', $factions->slug))
            ->assertRedirect('/login');

        $this->get(route('factions.edit', $factions->slug))
            ->assertRedirect('/login');
    }

    /** @test */
    public function user_can_see_own_factions()
    {
        $campaign = $this->user->campaigns()->first();
        // We're making 4 more factions, for a total of 5 (counting the one created in setUp)
        $campaign->factions()->saveMany(
            factory('App\Faction', 4)->make()
        );

        $this->actingAs($this->user)
            ->get(route('factions.index'))
            ->assertStatus(200)
            ->assertHasProp('pager.data')
            ->assertPropCount('pager.data', 5);
    }

    /** @test */
    public function user_can_see_single_factions()
    {
        $this->actingAs($this->user)
            ->get(route('factions.show', $this->test_faction->slug))
            ->assertStatus(200)
            ->assertHasProp('faction');
    }

    /** @test */
    public function user_can_create_factions()
    {
        $factions = factory('App\Faction')->make();

        $this->actingAs($this->user)
            ->get(route('factions.index'))
            ->assertPropCount('pager.data', 1);

        $this->actingAs($this->user)->get(route('factions.create'), $factions->toArray())
            ->assertStatus(200);

        $request = $this->actingAs($this->user)
            ->post(route('factions.store'), $factions->toArray());

        $request = $this->actingAs($this->user)
            ->get(route('factions.index'))
            ->assertPropCount('pager.data', 2);

        $this->actingAs($this->user)
            ->get(route('factions.index'))
            ->assertPropCount('pager.data', 2);
    }

    /** @test */
    public function user_can_edit_factions()
    {
        $request = $this->actingAs($this->user)
            ->put(route('factions.update', $this->test_faction->slug), $this->test_faction->toArray())
            ->assertRedirect(route('factions.show', [$this->test_faction->slug]));
    }

    /** @test */
    public function user_can_delete_factions()
    {
        $factions = factory('App\Faction')->create();
        $this->actingAs($this->user)
            ->delete(route('factions.destroy', $factions->slug))
            ->assertRedirect(route('factions.index'));
    }
}
