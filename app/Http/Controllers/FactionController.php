<?php

namespace App\Http\Controllers;

use App\Campaign;
use App\Faction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FactionController extends Controller
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
        $factions = Auth::user()->campaign->factions();
        return Inertia::render('Faction/Browse', [
            'pager' => $factions->paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Faction/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        $factions = Faction::create(
            $request->validate([
                'name' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        Auth::user()->campaign->factions()->save($factions);

        return Redirect::route('factions.show', [$factions])->with('success', 'Faction created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Faction $faction
     * @return \Inertia\Response
     */
    public function show(Faction $faction)
    {
        return Inertia::render('Faction/Read', [
            'faction' => $faction
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Faction $faction
     * @return \Inertia\Response
     */
    public function edit(Faction $faction)
    {
        return Inertia::render('Faction/Edit', [
            'faction' => $faction
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Faction $factions
     * @return \Inertia\Response
     */
    public function update(Request $request, Faction $faction)
    {
        $faction->update(
            $request->validate([
                'name' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        return Redirect::route('factions.show', [$faction])->with('success', 'Faction updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Faction  $faction
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Faction $faction)
    {
        $faction->campaigns()->detach();
        $faction->delete();
        return Redirect::route('factions.index')->with('success', 'Faction deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Faction  $faction
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Faction $faction)
    {
        $faction->restore();
        return Redirect::back()->with('success', 'Faction restored.');
    }
}
