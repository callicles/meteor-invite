Package.describe({
  name: 'callicles:invite',
  summary: 'This package helps you to easily handle invites. ',
  version: '1.0.0',
  git: 'https://github.com/callicles/meteor-invite.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('callicles:invite.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('callicles:invite');
  api.addFiles('callicles:invite-tests.js');
});
