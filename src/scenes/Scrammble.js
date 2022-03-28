import Phaser from "phaser";

export default class Scrammble extends Phaser.Scene {

    constructor() {
        super("Scrammble")
    }

    preload() {
        this.cameras.main.setBackgroundColor('#000000')
        // this.cameras.main.backgroundColor.setTo(255,255,255);
    }
}