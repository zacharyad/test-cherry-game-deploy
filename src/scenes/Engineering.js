import Phaser from "phaser";
import Player from '../entities/Player'

let Interactables;
let item;
let text;
let object;

export default class Engineering extends Phaser.Scene {
    constructor () {
        super("Engineering")
    }
    preload(){
        this.load.tilemapTiledJSON('map', '../public/assets/tilemaps/engineering.json');
        this.load.image('engineeringFloor', '../public/assets/tilesets/LobbyTiles.png');
        this.load.image('spaceStationpng', '../public/assets/tilesets/neotiles.png');
        this.load.image('furniturepng', '../public/assets/tilesets/shop-and-hospital.png');
        this.load.image('chalkboardpng', '../public/assets/tilesets/chalkboards.png');
        this.load.image('plantsAndDecorPng','../public/assets/tilesets/studyTimeTiles.png' );
        this.load.image('planet','../public/assets/images/purplePlanet.png' )
        this.load.image('planet','../public/assets/images/coin.png')
        this.load.image('planet','../public/assets/images/skunk.png' )
        this.load.image('planet','../public/assets/images/cherokeeFlag.png' )
        this.load.spritesheet('mary', '../public/assets/sprites/marySprite.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

    }
    
    create () {
        this.add.image(0,0, 'engineeringFloor')

        // console.log(this.cache.tilemap.get('map').data);
        
        const map = this.make.tilemap({
            key: 'map',
            tileWidth: 32,
            tileHeight: 32,
          });
        
          // add tileset image to tilemap p1= name of tileset in Tiled, p2= is key in png in preload
        const engineeringTiles = map.addTilesetImage('LobbyTiles', 'engineeringFloor');
        const spaceStationTiles = map.addTilesetImage('spacestation', 'spaceStationpng');
        const furnitureTiles = map.addTilesetImage('shop-and-hospital', 'furniturepng');
        const chalkboardTiles = map.addTilesetImage('building_inner-tileg','chalkboardpng');
        const plantsAndDecorTiles = map.addTilesetImage('furniture', 'plantsAndDecorPng')

        // create layer in order, p1=name of layer in Tiled, p2= tileset image constant it's referring to
        let floorLayer = map.createLayer('Floor', engineeringTiles);
        let wallLayer = map.createLayer('Wall', engineeringTiles);
        let spaceStation = map.createLayer('spaceStation', spaceStationTiles);
        let furnitureLayer = map.createLayer('Furniture', furnitureTiles);
        let chalkboardLayer = map.createLayer('ChalkBoards', chalkboardTiles);
        let plantsAndDecorLayer = map.createLayer('Objects', plantsAndDecorTiles)

        this.player = new Player(this, 470, 610, 'mary').setScale(1.75)

    //     console.log(Interactables);
    //    console.log(Interactables[0].name) 

    //    item = this.physics.add.staticGroup();
    //    console.log(item)

    //     Interactables.forEach(object => {
    //     let obj = item.create(object.x, object.y, object.name);
    //       obj.setScale(object.width/object.width, object.height/object.height);
    //       obj.setOrigin(0);
    //       obj.body.width = object.width;
    //       obj.body.height = object.height;
    //       console.log(object)
    //      console.log(item)
    //     });
    //     this.physics.add.overlap(this.player, item, this.collect, null, this);


    //     text = this.add.text(570, 70, `Clues: x`, {
    //       fontSize: '20px',
    //       fill: '#ffffff'
    //     });
    //     text.setScrollFactor(0);

    
    }

    update () {

    }
}