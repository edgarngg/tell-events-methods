// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tell-events-methods.js.
import { name as packageName } from "meteor/igoandtell:tell-events-methods";

// Write your tests here!
// Here is an example.
Tinytest.add('tell-events-methods - example', function (test) {
  test.equal(packageName, "tell-events-methods");
});
