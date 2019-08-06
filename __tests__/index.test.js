/**
 * @since 20180911 17:16
 * @author vivaxy
 */
test('run', function() {
  expect(async function() {
    require('../index.js');
  }).not.toThrow();
});
