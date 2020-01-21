<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PageController extends Controller
{
    public function serve(Request $request)
    {
        $str = substr($request->getRequestUri(), 1);
        $path = Str::studly($str);

        return Inertia::render($path);
    }
}
