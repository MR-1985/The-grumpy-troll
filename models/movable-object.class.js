/**
 * Base class for all movable objects in the game.
 */
class MovableObject {
    x = 500;
    y = 700;
    img;
    height = 100;
    width = 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {

    }

    moveLeft() {

    }
}