import { SVG_NS, B_PROPERTIES, L_PROPERTIES } from "../settings";
export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render() {
        let board = document.createElementNS(SVG_NS, "rect");
        board.setAttribute(null, "x", 0);
        board.setAttribute(null, "y", 0);
        board.setAttribute(null, "width", this.width);
        board.setAttribute(null, "height", this.height);
        board.setAttribute(null, "fill", B_PROPERTIES.color);

        let line = document.createElementNS(SVG_NS, "line");
        line.setAttribute(null, "x1", this.width / 2);
        line.setAttribute(null, "x2", this.width / 2);
        line.setAttribute(null, "y1", 0);
        line.setAttribute(null, "y2", this.height);
        line.setAttribute(null, "stroke", L_PROPERTIES.color);
        line.setAttribute(null, "stroke-dasharray", L_PROPERTIES.dasharray);
        line.setAttribute(null, "stroke-width", L_PROPERTIES.stroke_width);

        svg.appendChild(board);
        svg.appendChild(line);
    }
}