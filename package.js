Package.describe({
  name: 'blindinglight:disconnected',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Runs a specified callback with custom data when a client disconnects.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/BlindingLight/meteor-disconnected',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('disconnected-server.js', 'server');
  api.addFiles('disconnected-client.js', 'client');
  api.export('Disconnected', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('blindinglight:disconnected');
});
