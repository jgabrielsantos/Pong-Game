import { SVG_NS, BALL } from "../settings";

export default class Ball {
    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    render(svg) {
        let ball = document.createElementNS(SVG_NS, "circle");
        ball.setAttributeNS(null, "r", BALL.radius);
        ball.setAttributeNS(null, "cx", BALL.x);
        ball.setAttributeNS(null, "cy", BALL.y);
        ball.setAttributeNS(null, "fill", BALL.color);

        svg.appendChild(ball);
    }
}