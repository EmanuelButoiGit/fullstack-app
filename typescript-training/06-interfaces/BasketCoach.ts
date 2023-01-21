import { Coach } from "./Coach";

export class BasketCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice free throws";
    }

}