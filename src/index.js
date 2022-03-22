import Phaser from 'phaser';
import config from './config/config';
import Lobby from './scenes/Lobby'
let cursors;
let grace;

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Lobby", Lobby);
    this.scene.start("Lobby")
    // this.scene.physics.world.enable(this);
    // this.scene.add.existing(this);
  }

  
}

// 29 map.createLayer('Layer name in Tiled', variable name)
// 27 variable name = map.addTilesetImage('Tileset name in Tiled', tileset .png file)



const game = new Game(config);
