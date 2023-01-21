import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(10,15,5);
let myRectangle = new Rectangle(10,15,5,10);

let shapes: Shape[] = [];
shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}