<?php

namespace App\Http\Controllers;

use App\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class LocationController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except('autocomplete');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $locations = Auth::user()->campaign->locations();
        return Inertia::render('Location/Browse', [
            'pager' => $locations->paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Location/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        $location = Location::create(
            $request->validate([
                'name' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        Auth::user()->campaign->locations()->save($location);

        return Redirect::route('locations.show', [$location])->with('success', 'Location created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Location $location
     * @return \Inertia\Response
     */
    public function show(Location $location)
    {
        return Inertia::render('Location/Read', [
            'location' => $location
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Location $location
     * @return \Inertia\Response
     */
    public function edit(Location $location)
    {
        return Inertia::render('Location/Edit', [
            'location' => $location
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Location $location
     * @return \Inertia\Response
     */
    public function update(Request $request, Location $location)
    {
        $location->update(
            $request->validate([
                'name' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        return Redirect::route('locations.show', [$location])->with('success', 'Location updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Location  $location
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Location $location)
    {
        $location->campaigns()->detach();
        $location->delete();
        return Redirect::route('locations.index')->with('success', 'Location deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Location $location)
    {
        $location->restore();
        return Redirect::back()->with('success', 'Location restored.');
    }

    public function autocomplete(Request $request)
    {
        $input = $request->get('q');
        $field = $request->get('field');
        $result = Location::where($field, 'LIKE', '%' . $input . '%')->get();

        return response()->json($result);
    }
}
