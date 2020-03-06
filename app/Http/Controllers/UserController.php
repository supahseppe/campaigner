<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // return Inertia::render('Path/To/View', [...data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        // return Inertia::render('Path/To/View', [...data]);\
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        // return Inertia::render('Path/To/View', [...data]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return \Inertia\Response
     */
    public function show(UserController $user)
    {
        return Inertia::render('User/Read', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User $user
     * @return \Inertia\Response
     */
    public function edit(UserController $user)
    {
        return Inertia::render('User/Edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function update(Request $request, $id)
    {
        // return Inertia::render('Path/To/View', [...data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function destroy($id)
    {
        // return Inertia::render('Path/To/View', [...data]);
    }

    public function autocomplete(Request $request)
    {
        $input = $request->get('q');
        $field = $request->get('field');
        $result = User::where($field, 'LIKE', '%' . $input . '%')->get();

        return response()->json($result);
    }
}
