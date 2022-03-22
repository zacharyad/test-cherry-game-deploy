import Phaser from 'phaser';
let cursors;
let pinkMan;

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }


  preload() {
    // this.load.image('base_tiles', './src/assets/tilemaps/bug.png')
    this.load.tilemapTiledJSON('map', './src/assets/tilemaps/GHLobby.json');
    this.load.image('lobby', './src/assets/tilesets/LobbyTiles.png');
    this.load.image('text', './src/assets/tilesets/Text.png');

    this.load.spritesheet('pinkMan', './src/assets/sprites/idle.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('run', './src/assets/sprites/run.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    console.log(this.cache.tilemap.get('map').data);
    //this.add.image(0, 0, 'base_tiles')

    const map = this.make.tilemap({
      key: 'map',
      tileWidth: 32,
      tileHeight: 32,
    });

    const lobbyTiles = map.addTilesetImage('Walls and Floor', 'lobby');
    const textTiles = map.addTilesetImage('Text', 'text');
    map.createLayer('Floor and Wall', lobbyTiles);
    map.createLayer('Furniture', lobbyTiles);
    map.createLayer('Objects', lobbyTiles);
    map.createLayer('Letters', textTiles);
    map.createLayer('Curtains', lobbyTiles);

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('run', { start: 0, end: 10 }),
      frameRate: 10,
      repeat: -1,
    });

    pinkMan = this.add.sprite(470, 610, 'pinkMan').setScale(1.5);
    // pinkMan.anims.load('run');
    pinkMan.anims.load('walk');
    pinkMan.anims.play('walk');
    
    cursors = this.input.keyboard.createCursorKeys();
    console.log(cursors);
  }

  update() {
    if (cursors.right.isDown) {
        console.log('running');
        pinkMan.anims.play('walk');
    }
  }
}

// 29 map.createLayer('Layer name in Tiled', variable name)
// 27 variable name = map.addTilesetImage('Tileset name in Tiled', tileset .png file)

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 640,
  scene: MyGame,
};

const game = new Phaser.Game(config);
