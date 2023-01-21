"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(10, 15, 5);
let myRectangle = new Rectangle_1.Rectangle(10, 15, 5, 10);
let shapes = [];
shapes.push(myCircle);
shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
