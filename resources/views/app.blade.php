<!DOCTYPE html>
<html class="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Spectral:400,400i&display=swap" rel="stylesheet">

        <link href="{{ mix('css/app.css') }}" rel="stylesheet" />

        <script src="{{ mix('js/app.js') }}" defer></script>

        @preload
        @routes
    </head>
        <body class="h-screen antialiased leading-none bg-gray-100">
    @inertia
    </body>
</html>
