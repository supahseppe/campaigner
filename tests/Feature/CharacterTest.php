<?php

namespace Tests\Feature;

use App\Character;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class CharacterTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $test_character;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory('App\User')->create();
        $this->test_character = factory('App\Character')->create();

        $this->user->characters()->save($this->test_character);
    }

    /** @test */
    public function unauthenticated_users_cannot_see_character_pages()
    {
        $character = factory('App\Character')->create();

        $this->get(route('characters.index'))
            ->assertRedirect('/login');

        $this->get(route('characters.show', $character->slug))
            ->assertRedirect('/login');

        $this->get(route('characters.edit', $character->slug))
            ->assertRedirect('/login');
    }

    /** @test */
    public function user_can_see_own_characters()
    {
        // We're making 4 more characters, for a total of 5 (counting the one created in setUp)
        $this->user->characters()->saveMany(
            factory('App\Character', 4)->make()
        );

        $this->actingAs($this->user)
            ->get(route('characters.index'))
            ->assertStatus(200)
            ->assertHasProp('pager.data')
            ->assertPropCount('pager.data', 5);
    }

    /** @test */
    public function user_can_see_single_character()
    {
        $this->actingAs($this->user)
            ->get(route('characters.show', $this->test_character->slug))
            ->assertStatus(200)
            ->assertHasProp('character');
    }

    /** @test */
    public function user_can_create_character()
    {
        $character = factory('App\Character')->make();

        $this->actingAs($this->user)
            ->get(route('characters.index'))
            ->assertPropCount('pager.data', 1);

        $this->actingAs($this->user)->get(route('characters.create'), $character->toArray())
            ->assertStatus(200);

        $request = $this->actingAs($this->user)
            ->post(route('characters.store'), $character->toArray());

        $request = $this->actingAs($this->user)
            ->get(route('characters.index'))
            ->assertPropCount('pager.data', 2);

        $this->actingAs($this->user)
            ->get(route('characters.index'))
            ->assertPropCount('pager.data', 2);
    }

    /** @test */
    public function user_can_edit_character()
    {
        $this->actingAs($this->user)
            ->put(route('characters.update', $this->test_character->slug), $this->test_character->toArray())
            ->assertRedirect(route('characters.show', [$this->test_character->slug]));
    }

    /** @test */
    public function user_can_delete_character()
    {
        $character = factory('App\Character')->create();
        $this->actingAs($this->user)
            ->delete(route('characters.destroy', $character->slug))
            ->assertRedirect(route('characters.index'));
    }
}
