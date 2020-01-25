<?php

namespace App\Http\Controllers;

use App\Character;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CharacterController extends Controller
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
        return Inertia::render('Character/Browse', [
            'pager' => Character::paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Character/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        $character = Character::create(
            $request->validate([
                'name' => ['required'],
                'alias' => ['nullable'],
                'high_concept' => ['nullable'],
                'bio' => ['nullable', 'max:1500'],
                'active' => ['nullable'],
            ])
        );
        Auth::user()->characters()->save($character);

        return Redirect::route('characters.show', [$character])->with('success', 'Character created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Character $character
     * @return \Inertia\Response
     */
    public function show(Character $character)
    {
        return Inertia::render('Character/Read', [
            'character' => $character
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Character  $character
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Character $character)
    {
        $character->update(
            $request->validate([
                'name' => ['required'],
                'alias' => ['nullable'],
                'high_concept' => ['nullable'],
                'bio' => ['nullable', 'max:1500'],
                'active' => ['nullable'],
            ])
        );
        return Redirect::route('characters.show', [$character])->with('success', 'Character updated.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Character $character
     * @return \Inertia\Response
     */
    public function edit(Character $character)
    {
        return Inertia::render('Character/Edit', [
            'character' => $character
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Character  $character
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Character $character)
    {
        $character->users()->detach();
        $character->delete();
        return Redirect::route('characters.index')->with('success', 'Character deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Character  $character
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Character $character)
    {
        $character->restore();
        return Redirect::back()->with('success', 'Character restored.');
    }
}
