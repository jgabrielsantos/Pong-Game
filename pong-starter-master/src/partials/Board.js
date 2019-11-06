import { SVG_NS, B_PROPERTIES, L_PROPERTIES } from "../settings";
export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render(svg) {
        let board = document.createElementNS(SVG_NS, "rect");
        board.setAttributeNS(null, "x", 0);
        board.setAttributeNS(null, "y", 0);
        board.setAttributeNS(null, "width", this.width);
        board.setAttributeNS(null, "height", this.height);
        board.setAttributeNS(null, "fill", B_PROPERTIES.color);

        let line = document.createElementNS(SVG_NS, "line");
        line.setAttributeNS(null, "x1", this.width / 2);
        line.setAttributeNS(null, "x2", this.width / 2);
        line.setAttributeNS(null, "y1", 0);
        line.setAttributeNS(null, "y2", this.height);
        line.setAttributeNS(null, "stroke", L_PROPERTIES.color);
        line.setAttributeNS(null, "stroke-dasharray", L_PROPERTIES.dasharray);
        line.setAttributeNS(null, "stroke-width", L_PROPERTIES.stroke_width);

        svg.appendChild(board);
        svg.appendChild(line);
    }
}