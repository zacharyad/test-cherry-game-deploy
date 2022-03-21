import Phaser from 'phaser';


class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
this.load.image('base_tiles', './src/assets/tilemaps/bug.png')      
this.load.tilemapTiledJSON('map', './src/assets/tilemaps/test_tiled.json');
this.load.image('tiles1', './src/assets/tilesets/Tile001.png');
this.load.image('tiles2', './src/assets/tilesets/Tile002.png');
  
    }
      
    create ()
    {
        console.log(this.cache.tilemap.get('map').data);
        //this.add.image(0, 0, 'base_tiles')

        const map = this.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32});
       
        const tileset = map.addTilesetImage('Tile 1', 'tiles1');
        const tileset2 = map.addTilesetImage('tile 2', 'tiles2');
        map.createLayer('Furniture', tileset);
        map.createLayer('Tile Layer 2', tileset2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
