

import Phaser from "phaser";

export default class Start extends Phaser.Scene {

    constructor() {
        super ("Start");
    }

    preload(){
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#000000");
        // this.load.image("keyboard", "public/assets/images/keyboad-directions.png")
    }

    create () {

        const rules = document.getElementById("rules")
        rules.classList.remove("hidden")
    }
}