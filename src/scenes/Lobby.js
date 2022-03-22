import Phaser from "phaser";
import Player from '../entities/Player'

export default class Lobby extends Phaser.Scene {
    constructor (){
        super("Lobby")
    }

    preload() {
        // this.load.image('base_tiles', './src/assets/tilemaps/bug.png')
        this.load.tilemapTiledJSON('map', '../public/assets/tilemaps/GHLobby.json');
        this.load.image('lobby', '../public/assets/tilesets/LobbyTiles.png');
        this.load.image('text', '../public/assets/tilesets/Text.png');
    
        this.load.spritesheet('grace', '../public/assets/sprites/gh-spritesheet.png', {
          frameWidth: 17,
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
    
        this.player = new Player(this, 470, 610, 'grace').setScale(1.75);
        
        this.createAnimations()
    
        this.cursors = this.input.keyboard.createCursorKeys();
      }

      update() {
          this.player.update(this.cursors)
      }
    
      createAnimations() {
        this.anims.create({
            key: 'walk right',
            frames: this.anims.generateFrameNumbers('grace', { start: 11, end: 14 }),
            frameRate: 6,
            repeat: -1,
          });
          this.anims.create({
              key: 'walk left',
              frames: this.anims.generateFrameNumbers('grace', { start: 15, end: 18 }),
              frameRate: 6,
              repeat: -1,
          }); 
          this.anims.create({
            key: 'walk up',
            frames: this.anims.generateFrameNumbers('grace', { start: 23, end: 30 }),
            frameRate: 6,
            repeat: -1,
          });
          this.anims.create({
            key: 'walk down',
            frames: this.anims.generateFrameNumbers('grace', { start: 0, end: 6 }),
            frameRate: 6,
            repeat: -1,
          }); 
          this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('grace', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1,
          }); 

      }
      

}