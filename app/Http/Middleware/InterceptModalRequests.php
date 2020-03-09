<?php

namespace App\Http\Middleware;

use Closure;

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

        if ($request->header('X-Modal-Request')) {
            $request->session()->put('takeover', json_encode($response));
        }

        return $response;
    }
}
