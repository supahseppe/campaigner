<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Campaign;
use App\User;

class CampaignTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $test_campaign;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory('App\User')->create();
        $this->test_campaign = factory('App\Campaign')->create();

        $this->user->campaigns()->save($this->test_campaign);
    }

    /** @test */
    public function unauthenticated_users_cannot_see_campaign_pages()
    {
        $campaign = factory('App\Campaign')->create();

        $this->get(route('campaigns.index'))
            ->assertRedirect('/login');

        $this->get(route('campaigns.show', $campaign->slug))
            ->assertRedirect('/login');

        $this->get(route('campaigns.edit', $campaign->slug))
            ->assertRedirect('/login');
    }

    /** @test */
    public function user_can_see_own_campaigns()
    {
        // We're making 4 more campaigns, for a total of 5 (counting the one created in setUp)
        $this->user->campaigns()->saveMany(
            factory('App\Campaign', 4)->make()
        );

        $this->actingAs($this->user)
            ->get(route('campaigns.index'))
            ->assertStatus(200)
            ->assertHasProp('pager.data')
            ->assertPropCount('pager.data', 5);
    }

    /** @test */
    public function user_can_see_single_campaign()
    {
        $this->actingAs($this->user)
            ->get(route('campaigns.show', $this->test_campaign->slug))
            ->assertStatus(200)
            ->assertHasProp('campaign');
    }

    /** @test */
    public function user_can_create_campaign()
    {
        $campaign = factory('App\Campaign')->make();

        $this->actingAs($this->user)
            ->get(route('campaigns.index'))
            ->assertPropCount('pager.data', 1);

        $this->actingAs($this->user)->get(route('campaigns.create'), $campaign->toArray())
            ->assertStatus(200);

        $request = $this->actingAs($this->user)
            ->post(route('campaigns.store'), $campaign->toArray());

        $request = $this->actingAs($this->user)
            ->get(route('campaigns.index'))
            ->assertPropCount('pager.data', 2);

        $this->actingAs($this->user)
            ->get(route('campaigns.index'))
            ->assertPropCount('pager.data', 2);
    }

    /** @test */
    public function user_can_edit_campaign()
    {
        $request = $this->actingAs($this->user)
            ->put(route('campaigns.update', $this->test_campaign->slug), $this->test_campaign->toArray())
            ->assertRedirect(route('campaigns.show', [$this->test_campaign->slug]));
    }

    /** @test */
    public function user_can_delete_campaign()
    {
        $campaign = factory('App\Campaign')->create();
        $this->actingAs($this->user)
            ->delete(route('campaigns.destroy', $campaign->slug))
            ->assertRedirect(route('campaigns.index'));
    }
}
