export const SVG_NS = "http://www.w3.org/2000/svg";

// variables for board
export const B_PROPERTIES = {
    color: "#353535",
    width: "512",
    height: "256"
}

//variables for line
export const L_PROPERTIES = {
    color: "white",
    dasharray: "20, 25",
    stroke_width: 4
}

// variables for paddles
export const P_PROPERTIES = {
    color: "white",
    speed: 10,
    width: 8,
    height: 56,

    paddle1 = {
        gap: 10
    },

    paddle2 = {
        gap: P_PROPERTIES.width - P_PROPERTIES.paddle1.gap
    }
}