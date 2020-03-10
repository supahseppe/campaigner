<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class InterceptModalRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
//        $request->session()->forget('takeover');
        if ($request->header('X-Modal-Request') === 'true') {
            $obj =  json_decode($response->content(), true);
            $props = $obj['props'];
            $modal_key = $request->header('X-Modal-Key');

            $data = [];
            $data['view'] = str_replace('/', '.', Str::lower($obj['component']));

            $keys_to_remove = [
                "auth",
                "flash",
                "errors",
                "route",
                "takeover",
            ];

            foreach ($keys_to_remove as $key) {
                unset($props[$key]);
            }

            $data['props'] = $props;

            if ($request->session()->has('takeover')) {
                $existing = $request->session()->pull('takeover');
                $existing[$modal_key] = $data;
                $request->session()->put('takeover', $existing);
            } else {
                $request->session()->put('takeover', [$modal_key => $data]);
            }

            return redirect()->back();
        }

        return $response;
    }
}
