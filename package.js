Package.describe({
  name: 'igoandtell:tell-events-methods',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('tell-events-collection');
  api.mainModule('tell-events-methods.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('igoandtell:tell-events-methods');
  api.mainModule('tell-events-methods-tests.js');
});
