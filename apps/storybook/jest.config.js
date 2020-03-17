module.exports = {
  name: 'storybook',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/storybook',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
