import { BasketCoach } from "./BasketCoach";
import { Coach } from "./Coach";
import { FootballCoach } from "./FootballCoach";

let basketCoach = new BasketCoach();
let footballCoach = new FootballCoach();

let coaches: Coach[] = [];

coaches.push(basketCoach);
coaches.push(footballCoach);

coaches.forEach(element => {
    console.log(element.getDailyWorkout())
});