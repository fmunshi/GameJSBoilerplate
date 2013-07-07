define(['underscore', 'gamejs'], function(_, gamejs) {
    return function() {
        var display = gamejs.display.setMode([50,50]);

        var tick = function(msDuration) {
            console.warn(msDuration);
            _.each(gamejs.event.get(), function(event) {
                console.warn(event);
            });
        };

        gamejs.time.fpsCallback(tick, this, 32);
    };
});