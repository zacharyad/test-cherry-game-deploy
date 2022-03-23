import Phaser from "phaser";
import Player from '../entities/Player';

let Interactables;
let skull;
let text;

export default class Lobby extends Phaser.Scene {
    constructor () {
        super("Lobby")
    }

    preload() {
        // this.load.image('base_tiles', './src/assets/tilemaps/bug.png')
        this.load.tilemapTiledJSON('map', '../public/assets/tilemaps/GHLobby.json');
        this.load.image('lobby', '../public/assets/tilesets/LobbyTiles.png');
        this.load.image('text', '../public/assets/tilesets/Text.png');
        this.load.image('skull', '../public/assets/images/Skull.png');
        this.load.spritesheet('grace', '../public/assets/sprites/gh-spritesheet.png', {
          frameWidth: 17,
          frameHeight: 34,
        });

    }

      create() {
        //to change color of h1 - this is when the lobbby scene is being made 
        const objectlist = document.querySelector("#objectslist h1")
        // Joe likes query selector because we cna write a css string to write things
        objectlist.style.color = "blue"
        //can create element + set up container + etc 
        //dom manip stuff is like console log - if you can consle log you can manipulate the dom! 
        //disable cache? yes
        console.log(this.cache.tilemap.get('map').data);
    
      const map = this.make.tilemap({
        key: 'map',
        tileWidth: 32,
        tileHeight: 32,
      });
    
      const lobbyTiles = map.addTilesetImage('Walls and Floor', 'lobby');
      const textTiles = map.addTilesetImage('Text', 'text');
      let floorLayer = map.createLayer('Floor and Wall', lobbyTiles);
      let furnitureLayer = map.createLayer('Furniture', lobbyTiles);
      let objectLayer = map.createLayer('Objects', lobbyTiles);
      let letterLayer = map.createLayer('Letters', textTiles);
      let curtainsLayer = map.createLayer('Curtains', lobbyTiles);

    
        this.player = new Player(this, 470, 610, 'grace').setScale(1.75); //Joe is pleased 

        //Player class might have five different modes - grace, mary, etc... 
        
        this.createAnimations() //maybe also move this to player class? 
    
        this.cursors = this.input.keyboard.createCursorKeys(); // move this to PLayer class

       // this.createCollisions();


       Interactables = map.getObjectLayer('Interactables')['objects'];
      //coins
        skull = this.physics.add.staticGroup();
        //this is how we actually render our coin object with coin asset we loaded into our game in the preload function
        Interactables.forEach(object => {
        let obj = skull.create(object.x, object.y, "skull"); 
          obj.setScale(object.width/32, object.height/32); 
          obj.setOrigin(0); 
          obj.body.width = object.width; 
          obj.body.height = object.height; 
        });
        this.physics.add.overlap(this.player, skull, this.collectSkull, null, this);

        text = this.add.text(570, 70, `Clues: x`, {
          fontSize: '20px',
          fill: '#ffffff'
        });
        text.setScrollFactor(0);

      furnitureLayer.setCollisionByExclusion([-1]);
      objectLayer.setCollisionByExclusion([-1]);
      this.physics.add.collider(this.player, furnitureLayer);
      this.physics.add.collider(this.player, objectLayer);
    }

      update() {
          this.player.update(this.cursors)
      }

      collectSkull(player, skull) {
        skull.destroy(skull.x, skull.y);
        text.setText(`Clues: x`); // set the text to show the current score
        return false;
      }
    
      createAnimations() { // Joe says this belongs in the player class, even if it changes by scene - it's attached to each specific sprite 
        this.anims.create({
            key: 'walk right',
            frames: this.anims.generateFrameNumbers('grace', { start: 11, end: 14 }),
            //something to keep in mind about line 62 - it is a decidion that youre making and it can be a return from afunction i.e. getWalkRight and you can pass in string, if character === grace return start (numbers) else if character === mary start(marynumbers)
            //each mechanism is like its own system

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

      // createCollisions() {
      //   this.furnitureLayer.setCollisionByExclusion([-1]);
      //   this.physics.add.collider(this.player, this.furnitureLayer);
      // }
      

}