Package.describe({
  summary: "Atmosphere package for Geo: Geo is a very basic, but simple and extendable, geocode library for Node.js. Currently it only supports Google's Geocode API (v3) - Geo Spatial features are coming out soon"
});

Npm.depends({geohash: "0.0.1", shred: "0.8.9"});

Package.on_use(function (api, where) {
  where = where || ['server'];
  api.add_files('lib/geo.js', where);
});