<?php

namespace App\Http\Controllers;

use App\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CampaignController extends Controller
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
         return Inertia::render('Campaign/Browse', [
             'pager' => Auth::user()
                 ->campaigns()
                 ->paginate()
                 ->only(
                     'id',
                     'title',
                     'slug',
                     'description',
                     'users'
                 )
         ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Campaign/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $campaign = Campaign::create(
            $request->validate([
                'title' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        Auth::user()->campaigns()->save($campaign);

        return Redirect::route('campaigns.show', [$campaign])->with('success', 'Campaign created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Campaign $campaign
     * @return \Inertia\Response
     */
    public function show(Campaign $campaign)
    {
        return Inertia::render('Campaign/Read', [
            'campaign' => $campaign
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Campaign $campaign)
    {
        $campaign->update(
            $request->validate([
                'title' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        return Redirect::route('campaigns.show', [$campaign])->with('success', 'Campaign updated.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Campaign $campaign
     * @return \Inertia\Response
     */
    public function edit(Campaign $campaign)
    {
        return Inertia::render('Campaign/Edit', [
            'campaign' => $campaign
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Campaign  $campaign
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Campaign $campaign)
    {
        $campaign->users()->detach();
        $campaign->delete();
        return Redirect::route('campaigns.index')->with('success', 'Campaign deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Campaign $campaign)
    {
        $campaign->restore();
        return Redirect::back()->with('success', 'Campaign restored.');
    }
}
