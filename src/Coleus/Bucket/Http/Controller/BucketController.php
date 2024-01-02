<?php

namespace Coleus\Bucket\Http\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;

class BucketController extends Controller
{
    public function index()
    {
        if (request()->has('file')) {
            $file = request()->input('file');

            abort_if(Storage::disk('s3')->missing($file), 404);

            return Storage::disk('s3')->response($file);
        }
        $files = Storage::disk('s3')->allFiles();
        return view('bucket::files', [
            'files' => $files,
        ]);
    }
}
