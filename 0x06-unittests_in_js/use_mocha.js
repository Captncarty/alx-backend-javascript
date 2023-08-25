#!/usr/bin/env node
/*
 * mocha - testfiles
 * using nodejs to run mocha test on js-test files
 */

const Mocha = require('mocha');
const path = require('path');

// Create a new Mocha instance
const mocha = new Mocha();

// Add test files to the Mocha suite
mocha.addFile(path.resolve(__dirname, 'test/test.js'));

// Run the tests
mocha.run((failures) => {
  // Exit with the number of failures (0 if all tests passed)
  process.exitCode = failures ? 1 : 0;
});

