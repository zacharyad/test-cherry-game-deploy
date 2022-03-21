import Phaser from 'phaser';


class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
       // this.load.image('base_tiles', './src/assets/tilemaps/bug.png')      
        this.load.tilemapTiledJSON('map', './src/assets/tilemaps/GHLobby1.json');
        this.load.image('lobbyTiles', './src/assets/tilesets/LobbyTiles.png');
        this.load.image('text', './src/assets/tilesets/Text.png');
  
    }

    create ()
    {
        console.log(this.cache.tilemap.get('map').data);
        //this.add.image(0, 0, 'base_tiles')

        const map = this.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32});
       
        const tileset = map.addTilesetImage('Walls and Floor', 'lobbyTiles');
        const tileset2 = map.addTilesetImage('Text', 'text');
        map.createLayer('Floor and Wall', tileset);
        map.createLayer('Furniture', tileset);
        map.createLayer('Objects', tileset);
        map.createLayer('Letters', tileset2);
        map.createLayer('Curtains', tileset);
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
