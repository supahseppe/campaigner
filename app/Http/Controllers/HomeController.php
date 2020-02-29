<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Home', [
            'campaigns' => Auth::user()->campaigns()
                ->paginate(5)
                ->only('title'),
            'characters' => Auth::user()->characters()
                ->paginate(5)
                ->only('name'),
        ]);
    }
}
