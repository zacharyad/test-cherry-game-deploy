import Phaser from "phaser";


export default class Engineering extends Phaser.Scene {
    constructor () {
        super("Engineering")
    }
    preload(){
        this.load.tilemapTiledJSON('map', '../public/assets/tilemaps/engineering.json');
        this.load.image('engineeringFloor', '../public/assets/tilesets/LobbyTiles.png');
    }
    
    create () {
        this.add.image(0,0, 'engineeringFloor')

        // console.log(this.cache.tilemap.get('map').data);
        
        const map = this.make.tilemap({
            key: 'map',
            tileWidth: 32,
            tileHeight: 32,
          });

        const engineeringTiles = map.addTilesetImage('LobbyTiles', 'engineeringFloor');
        let floorLayer = map.createLayer('Floor', engineeringTiles);

    }

    update () {

    }
}