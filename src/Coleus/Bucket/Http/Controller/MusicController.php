<?php

namespace Coleus\Bucket\Http\Controller;

use Illuminate\Routing\Controller;

class BucketController extends Controller
{
    public function index()
    {
        return view('bucket::desktop');
    }
}
