
function lamport() {

    var time = 0, events = [];

    return {
        time: function() { return time; },
        events: function() { return events; },
        observe: function(event) {
            if (!event.time) event.time = time;
            events.push(event);
            time = event.time + 1;
        }
    }

}

module.exports = lamport;