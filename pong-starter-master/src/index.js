import './styles/game.css';
import Game from './partials/Game';
import { B_PROPERTIES } from "./settings"

// create a game instance
const game = new Game('game', B_PROPERTIES.width, B_PROPERTIES.height);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();