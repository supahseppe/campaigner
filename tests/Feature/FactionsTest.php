<?php

namespace Tests\Feature;

use App\Faction;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class FactionsTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $test_factions;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory('App\User')->create();
        $this->test_factions = factory('App\Faction')->create();
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
        // We're making 4 more factions, for a total of 5 (counting the one created in setUp)
        $this->user->factions()->saveMany(
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
            ->get(route('factions.show', $this->test_factions->slug))
            ->assertStatus(200)
            ->assertHasProp('factions');
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
            ->put(route('factions.update', $this->test_factions->slug), $this->test_factions->toArray())
            ->assertRedirect(route('factions.show', [$this->test_factions->slug]));
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
