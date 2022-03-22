import Phaser from 'phaser';
let cursors;
let grace;

class MyGame extends Phaser.Scene {
  constructor() {
    super(config);
    // this.scene.physics.world.enable(this);
    // this.scene.add.existing(this);
  }

  preload() {
    // this.load.image('base_tiles', './src/assets/tilemaps/bug.png')
    this.load.tilemapTiledJSON('map', './src/assets/tilemaps/GHLobby.json');
    this.load.image('lobby', './src/assets/tilesets/LobbyTiles.png');
    this.load.image('text', './src/assets/tilesets/Text.png');

    this.load.spritesheet('grace', './src/assets/sprites/gh-spritesheet.png', {
      frameWidth: 16,
      frameHeight: 34,
    });
    // this.load.spritesheet('run', './src/assets/sprites/run.png', {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
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
      key: 'walk right',
      frames: this.anims.generateFrameNumbers('grace', { start: 11, end: 14 }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
        key: 'walk left',
        frames: this.anims.generateFrameNumbers('grace', { start: 15, end: 18 }),
        frameRate: 5,
        repeat: -1,
      });

    grace = this.add.sprite(470, 610, 'grace').setScale(1.75);
    grace.anims.load('walk right');
    grace.anims.load('walk left');

    cursors = this.input.keyboard.createCursorKeys();
    // console.log(cursors);
  }

  update() {
    if (cursors.right.isDown) {
        console.log('walk right');
        grace.anims.play('walk right', true);
    }
    if (cursors.left.isDown) {
        console.log('walk left');
        grace.anims.play('walk left', true);
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
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: MyGame,
};

const game = new Phaser.Game(config);
