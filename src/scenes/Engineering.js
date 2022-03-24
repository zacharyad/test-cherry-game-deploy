import Phaser from "phaser";


export default class Engineering extends Phaser.Scene {
    constructor () {
        super("Engineering")
    }
    preload(){
        this.load.tilemapTiledJSON('map', '../public/assets/tilemaps/engineering.json');
        this.load.image('engineeringFloor', '../public/assets/tilesets/LobbyTiles.png');
        this.load.image('spaceStationpng', '../public/assets/tilesets/neotiles.png');
        this.load.image('furniturepng', '../public/assets/tilesets/shop-and-hospital.png')

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

        // create layer in order, p1=name of layer in Tiled, p2= tileset image constant it's referring to
        let floorLayer = map.createLayer('Floor', engineeringTiles);
        let wallLayer = map.createLayer('Wall', engineeringTiles);
        let spaceStation = map.createLayer('spaceStation', spaceStationTiles);
        let furnitureLayer = map.createLayer('Furniture', furnitureTiles);

        

    }

    update () {

    }
}