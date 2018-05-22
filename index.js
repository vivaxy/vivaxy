#!/usr/bin/env node

/**
 * @since 20180510 13:51
 * @author vivaxy
 */

const figlet = require('figlet');

figlet.text('vivaxy', {
  font: 'Star Wars',
}, (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});
