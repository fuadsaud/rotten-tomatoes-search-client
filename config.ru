use Rack::Static,
  :urls => ["/bower_components/", "/js", "/css"],
  :root => "client/rt/",
  :index => "index.html"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('client/rt/index.html', File::RDONLY)
  ]
}
