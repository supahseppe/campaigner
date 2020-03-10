<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ModalController extends Controller
{
    public function handle(Request $request)
    {
        $action = $request->get('action');
        if ($action == 'open') {
            $model_name = $request->get('model');

            $request->headers->set('X-Modal-Request', 'true');
            $request->headers->set('X-Modal-Key', $request->get('slug'));
            $request->headers->set('X-Modal-Model', $model_name);

            $model_stud =  Str::studly($model_name);
            $qualified = "\\App\\$model_stud";
            $model = $qualified::findBySlug($request->get('slug'));

            $controller = app('App\Http\Controllers\\' . $model_stud . 'Controller');
            $method = $request->get('method');

            $model_data = $controller->$method($request, $model);
            return $model_data;
        }

        if ($action == 'close') {
            Session::forget('takeover');
        }

        return back();
    }
}
