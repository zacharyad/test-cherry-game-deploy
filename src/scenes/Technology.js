import Phaser from "phaser";
import Player from "../entities/Player";

export default class Technology extends Phaser.Scene {
  constructor() {
    super({ key: "Technology" });
  }
  preload() {
    this.load.tilemapTiledJSON(
      "techMap",
      "../public/assets/tilemaps/TechRoomL.json"
    );
    this.load.image(
      "VaporwaveFurniture",
      "../public/assets/tilesets/VaporwaveFurniture.png"
    );
    this.load.image("walls", "../public/assets/tilesets/Walls.png");
    this.load.image("schoolmap", "../public/assets/tilesets/schoolmap.png");
    this.load.image(
      "Floor",
      "../public/assets/tilesets/RepeatableStoneWall.png"
    );
    this.load.image("Pride", "../public/assets/tilesets/pride.png");
    this.load.spritesheet(
      "grace",
      "../public/assets/sprites/gh-spritesheet.png",
      {
        frameWidth: 17,
        frameHeight: 34,
      }
    );
  }
  create() {
    console.log("hi", this.cache.tilemap.get("techMap").data);
    //this.add.image(275, 275, "Floor");

    const map = this.make.tilemap({
      key: "techMap",
      tileWidth: 32,
      tileHeight: 32,
    });
    const schoolTiles = map.addTilesetImage("SCHOOL", "schoolmap");
    const wallTiles = map.addTilesetImage("MODERNSTUDY-WALLS", "walls");
    const prideTiles = map.addTilesetImage("PRIDEFLAG", "Pride");
    const floorTiles = map.addTilesetImage("FLOOR", "Floor");
    const vaporTiles = map.addTilesetImage(
      "VAPORWAVE",
      "VaporwaveFurniture",
      32,
      32
    );

    let floorLayer = map.createLayer("floorsnwallsnsuch", [
      wallTiles,
      floorTiles,
      vaporTiles,
      schoolTiles,
    ]);
    let accentLayer = map.createLayer("ACCENTS", [
      wallTiles,
      vaporTiles,
      schoolTiles,
      prideTiles,
    ]);

    let bumpLayer = map.createLayer("thingstoruninto", [
      wallTiles,
      vaporTiles,
      schoolTiles,
    ]);

    this.player = new Player(this, 470, 610, "grace").setScale(1.75); //Joe is pleased
    this.createAnimations(); //maybe also move this to player class?

    this.cursors = this.input.keyboard.createCursorKeys();
    bumpLayer.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player, bumpLayer); // move this to PLayer class
  }
  update() {
    this.player.update(this.cursors);
  }
  createAnimations() {
    // Joe says this belongs in the player class, even if it changes by scene - it's attached to each specific sprite
    this.anims.create({
      key: "walk right",
      frames: this.anims.generateFrameNumbers("grace", { start: 11, end: 14 }),
      //something to keep in mind about line 62 - it is a decision that youre making and it can be a return from a function i.e. getWalkRight and you can pass in string, if character === grace return start (numbers) else if character === mary start(marynumbers)
      //each mechanism is like its own system

      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "walk left",
      frames: this.anims.generateFrameNumbers("grace", { start: 15, end: 18 }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "walk up",
      frames: this.anims.generateFrameNumbers("grace", { start: 23, end: 30 }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "walk down",
      frames: this.anims.generateFrameNumbers("grace", { start: 0, end: 6 }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("grace", { start: 0, end: 0 }),
      frameRate: 6,
      repeat: -1,
    });
  }
}
