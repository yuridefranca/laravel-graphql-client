<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/stores');
});

Route::get('/stores', function () {
    return Inertia::render('store/list-store');
});
