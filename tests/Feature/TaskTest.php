<?php

namespace Tests\Feature;

use App\Task;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $campaign;
    protected $task;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory('App\User')->create();
        $this->campaign = factory('App\Campaign')->create();
        $this->task = factory('App\Task')->create();

        $this->campaign->tasks()->save($this->campaign);
        $this->user->campaign = $this->campaign;

        $this->user->campaigns()->save($this->campaign);
    }

    /** @test */
    public function unauthenticated_users_cannot_see_task_pages()
    {
        $this->get(route('tasks.index'))
            ->assertRedirect('/login');

        $this->get(route('tasks.show', $this->task->slug))
            ->assertRedirect('/login');

        $this->get(route('tasks.edit', $this->task->slug))
            ->assertRedirect('/login');
    }

    /** @test */
    public function user_can_see_own_tasks()
    {
        // We're making 4 more tasks, for a total of 5 (counting the one created in setUp)
        $this->user->campaign->tasks()->saveMany(
            factory('App\Task', 4)->make()
        );

        $this->actingAs($this->user)
            ->get(route('tasks.index'))
            ->assertStatus(200)
            ->assertHasProp('pager.data')
            ->assertPropCount('pager.data', 5);
    }

    /** @test */
    public function user_can_see_single_task()
    {
        $this->actingAs($this->user)
            ->get(route('tasks.show', $this->task->slug))
            ->assertStatus(200)
            ->assertHasProp('task');
    }

    /** @test */
    public function user_can_create_task()
    {
        $task = factory('App\Task')->make();

        $this->actingAs($this->user)
            ->get(route('tasks.index'))
            ->assertPropCount('pager.data', 1);

        $this->actingAs($this->user)->get(route('tasks.create'), $task->toArray())
            ->assertStatus(200);

        $request = $this->actingAs($this->user)
            ->post(route('tasks.store'), $task->toArray());

        $request = $this->actingAs($this->user)
            ->get(route('tasks.index'))
            ->assertPropCount('pager.data', 2);

        $this->actingAs($this->user)
            ->get(route('tasks.index'))
            ->assertPropCount('pager.data', 2);
    }

    /** @test */
    public function user_can_edit_task()
    {
        $request = $this->actingAs($this->user)
            ->put(route('tasks.update', $this->task->slug), $this->task->toArray())
            ->assertRedirect(route('tasks.show', [$this->task->slug]));
    }

    /** @test */
    public function user_can_delete_task()
    {
        $task = factory('App\Task')->create();
        $this->actingAs($this->user)
            ->delete(route('tasks.destroy', $task->slug))
            ->assertRedirect(route('tasks.index'));
    }
}
