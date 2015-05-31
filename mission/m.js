var autonomy = require("ardrone-autonomy");
var mission = autonomy.createMission();

mission.takeoff()
    .zero()
    .altitude(1)
    .forward(2)
    .right(2)
    .backward(2)
    .left(2)
    .hover(1000)
    .land();

mission.run(function(err, result) {
    if(err) {
        console.trace("error %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Success");
        process.exit(0);
    }
});
