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
        $campaign = Campaign::find(session('campaign.id'));
        return Inertia::render('Faction/Browse', [
            'pager' => $campaign->factions()->paginate(15)
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
                'title' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        Auth::user()->factions()->save($factions);

        return Redirect::route('factions.show', [$factions])->with('success', 'Faction created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Faction $factions
     * @return \Inertia\Response
     */
    public function show(Faction $factions)
    {
        return Inertia::render('Faction/Read', [
            'factions' => $factions
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Faction $factions
     * @return \Inertia\Response
     */
    public function edit(Faction $factions)
    {
        return Inertia::render('Faction/Edit', [
            'factions' => $factions
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Faction $factions
     * @return \Inertia\Response
     */
    public function update(Request $request, Faction $factions)
    {
        $factions->update(
            $request->validate([
                'title' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        return Redirect::route('factions.show', [$factions])->with('success', 'Faction updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Faction  $factions
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Faction $factions)
    {
        $factions->users()->detach();
        $factions->delete();
        return Redirect::route('factions.index')->with('success', 'Faction deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Faction  $factions
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Faction $factions)
    {
        $factions->restore();
        return Redirect::back()->with('success', 'Faction restored.');
    }
}
