<?php

namespace Coleus\Music\Http\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MusicController extends Controller
{
    public function index()
    {
        $songs = collect(Storage::disk('s3')->allFiles())
            ->reject(fn($song) => !Str::of($song)->endsWith('mp3'))
            ->map(fn($song) => [
                'name' => Str::of($song)->replaceFirst('Lana Del Rey/Born To Die/', ''),
                'sources' => [
                    [
                        'src' => Storage::disk('s3')->temporaryUrl($song, now()->addDay()),
                        'type' => 'audio/mp3',
                    ]
                ]
            ])
            ->values();

        return Inertia::render('TheHome', [
            'songs' => $songs,
            'poster' => Storage::disk('s3')->temporaryUrl('Lana Del Rey/Born To Die/cover.jpg', now()->addDay()),
        ]);
    }
}
