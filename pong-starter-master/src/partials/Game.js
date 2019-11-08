import { SVG_NS, P_PROPERTIES, KEYS, BALL } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";


export default class Game {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.gameElement = document.getElementById(this.element);

        const paddle1Gap = 10
        const paddle2Gap = (this.width - P_PROPERTIES.width - paddle1Gap)

        this.board = new Board(this.width, this.height);
        this.paddle1 = new Paddle(P_PROPERTIES.width, P_PROPERTIES.height, this.height, paddle1Gap, (this.height / 2) - (P_PROPERTIES.height / 2), KEYS.paddle1Up, KEYS.paddle1Down);
        this.paddle2 = new Paddle(P_PROPERTIES.width, P_PROPERTIES.height, this.height, paddle2Gap, (this.height / 2) - (P_PROPERTIES.height / 2), KEYS.paddle2Up, KEYS.paddle2Down);
        this.ball = new Ball(BALL.radius, this.width, this.height);
        this.pause = false;
        document.addEventListener("keydown", event => {
            if (event.key === KEYS.pause) {
                this.paddle1.setSpeed(P_PROPERTIES.speed);
                this.paddle2.setSpeed(P_PROPERTIES.speed);
                this.pause = !this.pause
            }
        });
        // Other code goes here...
    }

    render() {
        if (this.pause) {
            this.paddle1.setSpeed(0);
            this.paddle2.setSpeed(0);
            return;
        }
        this.gameElement.innerHTML = "";
        let svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttributeNS(null, "width", this.width);
        svg.setAttributeNS(null, "height", this.height);
        svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
        this.gameElement.appendChild(svg);
        this.board.render(svg);
        this.paddle1.render(svg);
        this.paddle2.render(svg);
        this.ball.render(svg, this.paddle1, this.paddle2);


        // More code goes here....
    }
}