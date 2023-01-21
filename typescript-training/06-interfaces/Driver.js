"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasketCoach_1 = require("./BasketCoach");
const FootballCoach_1 = require("./FootballCoach");
let basketCoach = new BasketCoach_1.BasketCoach();
let footballCoach = new FootballCoach_1.FootballCoach();
let coaches = [];
coaches.push(basketCoach);
coaches.push(footballCoach);
coaches.forEach(element => {
    console.log(element.getDailyWorkout());
});
