Package.describe({
  name: 'blindinglight:disconnected',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Runs a specified callback with custom data when a client disconnects.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('disconnected-server.js', 'server');
  api.addFiles('disconnected-client.js', 'client');
  api.export('Disconnected', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('blindinglight:disconnected');
  api.addFiles('disconnected-tests.js');
});
