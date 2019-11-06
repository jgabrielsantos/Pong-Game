import { SVG_NS, P_PROPERTIES } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";

export default class Game {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.gameElement = document.getElementById(this.element);

        this.board = new Board(this.width, this.height);
        this.paddle1 = new Paddle(P_PROPERTIES.width, P_PROPERTIES.height, this.height, P_PROPERTIES.paddle1.gap, (this.height / 2) - (P_PROPERTIES.height / 2));
        this.paddle2 = new Paddle(P_PROPERTIES.width, P_PROPERTIES.height, this.height, (this.width - P_PROPERTIES.paddle2.gap), (this.height / 2) - (P_PROPERTIES.height / 2));
        // Other code goes here...
    }

    render() {
        this.gameElement.innerHTML = "";
        let svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttributeNS(null, "width", this.width);
        svg.setAttributeNS(null, "height", this.height);
        svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
        this.gameElement.appendChild(svg);

        this.board.render(svg);
        this.paddle1.render(svg);
        this.paddle2.render(svg);
        // More code goes here....
    }
}