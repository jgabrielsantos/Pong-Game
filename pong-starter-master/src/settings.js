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
    speed: 15,
    width: 8,
    height: 56,
}

// variables for movement
export const KEYS = {
    paddle1Up: "w", // player 1 up key
    paddle1Down: "s", // player 1 down key
    paddle2Up: "ArrowUp", // player 2 up key
    paddle2Down: "ArrowDown", // player 2 down key
    pause: " ", // we'll use this later...

}

export const BALL = {
    radius: 8,
    color: "white"
}