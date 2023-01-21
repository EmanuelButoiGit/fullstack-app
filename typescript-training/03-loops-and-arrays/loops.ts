for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log("----------------------------------");
console.log("----------------------------------");

let reviews: number[] = [4,2,1.3,3.4,5]
let total: number = 0;
for (let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Rev avg: " + average);

console.log("----------------------------------");
console.log("----------------------------------");

let sports: string[] = ["Football", "Swimming", "Sleeping"];
for(let sport of sports){
    console.log(sport);
}

sports.push("Tennis");
for(let sport of sports){
    console.log(sport);
}
