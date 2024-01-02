<h1>Coleus</h1>
<h2>Bucket</h2>
<ul>
    @foreach($files as $file)
        <li>
            <a href="/bucket/?file={{$file}}">{{$file}}</a>
        </li>
    @endforeach
</ul>