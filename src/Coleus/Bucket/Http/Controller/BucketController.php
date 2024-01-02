<?php

namespace Coleus\Bucket\Http\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;

class BucketController extends Controller
{
    public function index()
    {
        return Storage::disk('s3')->allFiles();
        return view('bucket::desktop');
    }
}
