<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TaskController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Task/Browse', [
            'pager' => Task::paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Task/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        $task = Task::create(
            $request->validate([
                'name' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        Auth::user()->tasks()->save($task);

        return Redirect::route('tasks.show', [$task])->with('success', 'Task created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task $task
     * @return \Inertia\Response
     */
    public function show(Task $task)
    {
        return Inertia::render('Task/Read', [
            'task' => $task
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task $task
     * @return \Inertia\Response
     */
    public function edit(Task $task)
    {
        return Inertia::render('Task/Edit', [
            'task' => $task
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task $task
     * @return \Inertia\Response
     */
    public function update(Request $request, Task $task)
    {
        $task->update(
            $request->validate([
                'name' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        return Redirect::route('tasks.show', [$task])->with('success', 'Task updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Task  $task
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Task $task)
    {
        $task->campaigns()->detach();
        $task->delete();
        return Redirect::route('tasks.index')->with('success', 'Task deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Task $task)
    {
        $task->restore();
        return Redirect::back()->with('success', 'Task restored.');
    }
}
