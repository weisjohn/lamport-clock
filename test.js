
var assert = require('assert')
  , lamport_clock = require('./')
  , clock = lamport_clock()
  ;

// in the beginning
assert.equal(clock.time(), 0);

// event
clock.observe({ "e": 1 });
assert.equal(clock.time(), 1);

// another event
clock.observe({ "e": 2 });
assert.equal(clock.time(), 2);

// event with specified time
clock.observe({ "e": 3, time : 5 });
assert.equal(clock.time(), 6);

// another event
clock.observe({ "e": 4, });
assert.equal(clock.time(), 7);

// check events
var events = clock.events();
assert.equal(events.length, 4);

// before the worlds began
var previous = -1;
events.forEach(function(event) {
    assert(previous < event.time);
    previous = event.time;
});