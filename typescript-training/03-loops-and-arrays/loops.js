for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("----------------------------------");
console.log("----------------------------------");
var reviews = [4, 2, 1.3, 3.4, 5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Rev avg: " + average);
console.log("----------------------------------");
console.log("----------------------------------");
var sports = ["Football", "Swimming", "Sleeping"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
