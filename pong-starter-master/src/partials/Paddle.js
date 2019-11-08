import { SVG_NS, P_PROPERTIES, } from "../settings";

export default class Paddle {
    constructor(width, height, boardHeight, x, y, up, down) {
        this.width = width;
        this.height = height;
        this.boardHeight = boardHeight;
        this.x = x;
        this.y = y;
        this.score = 0;
        this.speed = P_PROPERTIES.speed;
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:
                    this.moveUp();
                    break;
                case down:
                    this.moveDown();
                    break;
            }
        });
    }

    moveUp() {
        this.y = Math.max(this.y - this.speed, 0);
    }

    moveDown() {
        this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    }

    getCoordinates() {
        return {
            left: this.x,
            top: this.y,
            right: this.x + this.width,
            bottom: this.y + this.height,
        };
    }

    render(svg) {
        let paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, "x", this.x);
        paddle.setAttributeNS(null, "y", this.y);
        paddle.setAttributeNS(null, "width", this.width);
        paddle.setAttributeNS(null, "height", this.height);
        paddle.setAttributeNS(null, "fill", P_PROPERTIES.color);

        svg.appendChild(paddle);
    }
}