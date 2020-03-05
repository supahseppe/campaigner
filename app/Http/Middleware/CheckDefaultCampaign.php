<?php

namespace App\Http\Middleware;

use Closure;

class CheckDefaultCampaign
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
        $user = $request->user();

        if (!$user || $request->routeIs('logout')) {
            return $next($request);
        }

        if ($user->campaigns()->count() === 0) {
            if ($request->routeIs(['campaigns.initial', 'campaigns.store'])) {
                return $next($request);
            }
            return redirect(route('campaigns.initial'));
        }

        if (!$user->campaign) {
            $campaign = $user->campaigns()->first();
            $user->campaign = $campaign;
        }

        return $next($request);
    }
}
