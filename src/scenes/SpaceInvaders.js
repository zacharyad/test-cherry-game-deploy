import Phaser from 'phaser';

let score = 0;
let lives = 3;
let isStarted = false;
let ufoCount = 0;
let barriers = [];


export default class SpaceInvaders extends Phaser.Scene {
    constructor() {
      super('SpaceInvaders');
      console.log("this in constructor", this)
    }

    preload() {
      this.load.image('bg', '../public/assets/images/spaceBG.jpg');
      this.load.image('invader', '../public/assets/images/UfoGrey.png');
      this.load.image('bigInvader', '../public/assets/images/UfoBlue.png');
      this.load.image('player', '../public/assets/images/RocketGrey.png');
      this.load.image('redLaser', '../public/assets/images/redLaser.png');
      this.load.image('greenLaser', '../public/assets/images/greenLaser.png');
    }

    create() {
        console.log("this in create", this)
      this.add.image(0, 0, 'bg').setOrigin(0, 0);

      let textie = `Wait...\n
      What's going on?\n
      `

      let arrayText = textie.split('\n')
      let text = this.add.text(0, 0, '', {
        fontSize: '40px',
        fontFamily: 'Roboto Mono',
        color: '#47BF31',
        align: 'center',
        padding: 10,
        lineSpacing: 20
      })

      for (let i = 0; i < arrayText.length - 1; i++) {
        this.time.addEvent({
          delay: 1000 * i,
          callback: () => {
            text
              .setX(320)
              .setY(300)
              .setText(arrayText[i].trim())
          }
        })
      }

      let cursors = this.input.keyboard.createCursorKeys();
      let isShooting = false;
      this.input.keyboard.addCapture('SPACE');
      let enemies = this.physics.add.staticGroup();
      let playerLava = this.scene.scene.add.rectangle(0, 0, 800, 10, 0x000).setOrigin(0)
      let enemyLava = this.scene.scene.add.rectangle(0, 590, 800, 10, 0x000).setOrigin(0)
      let saucerLava = this.scene.scene.add.rectangle(790, 0, 10, 600, 0x000).setOrigin(0)
      this.scene.scene.physics.add.existing(playerLava)
      this.scene.scene.physics.add.existing(enemyLava)
      this.scene.scene.physics.add.existing(saucerLava)

      shooter = this.scene.physics.add.sprite(400, 560, 'player');
      shooter.setCollideWorldBounds(true)

      scoreText = this.scene.add.text(16, 16, "Score: " + score, { fontSize: '18px', fill: '#FFF' })
      livesText = this.scene.add.text(696, 16, "Lives: " + lives, { fontSize: '18px', fill: '#FFF' })
      startText = this.scene.add.text(400, 300, "Click to Play", { fontSize: '18px', fill: '#FFF' }).setOrigin(0.5)

      this.input.keyboard.on('keydown-SPACE', shoot);

      barriers.push(new Barrier(scene, 50, 450))
      barriers.push(new Barrier(scene, 370, 450))
      barriers.push(new Barrier(scene, 690, 450))

      this.input.on('pointerdown', function () {
        if (isStarted == false) {
            isStarted = true;
            startText.destroy()
            setInterval(makeUfo, 15000)

        } else {
            shoot()
        }
      });
      initEnemys()
    }

    update() {
        if (isStarted == true) {
            if (cursors.left.isDown) {
                player.setVelocityX(-160);
    
            }
            else if (cursors.right.isDown) {
                player.setVelocityX(160);
    
            }
            else {
                player.setVelocityX(0);
            }
        }
    }
}