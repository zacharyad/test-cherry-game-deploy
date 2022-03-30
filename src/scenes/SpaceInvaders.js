import Phaser from 'phaser';

let score = 0;
let lives = 3;
let isStarted = false;
let ufoCount = 0;
let barriers = [];
let xTimes = 0;
let yTimes = 0;
let dir = "right";


let redLaserVelo = 200;
let bigInvaders = [];

// setInterval(function () {
//   if (isStarted == true) {
//       for (var i = 0; i < bigInvaders.length; i++) {
//           var bigInvader = bigInvaders[i];
//           if (bigInvader.isDestroyed == false) {
//               manageRedLaser(scene.physics.add.sprite(bigInvader.x, bigInvader.y, "redLaser"), bigInvader)
//           } else {
//               bigInvaders.splice(i, 1);
//           }
//       }
//   }

// }, 2000);


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
        \n
        Coming Soon...\n
        SPACE INVADERS\n
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
    }
}

//       let cursors = this.input.keyboard.createCursorKeys();
//       let isShooting = false;
//       this.input.keyboard.addCapture('SPACE');
//       let enemies = this.physics.add.staticGroup();
//       let playerLava = this.scene.scene.add.rectangle(0, 0, 800, 10, 0x000).setOrigin(0)
//       let enemyLava = this.scene.scene.add.rectangle(0, 590, 800, 10, 0x000).setOrigin(0)
//       let bigInvaderLava = this.scene.scene.add.rectangle(790, 0, 10, 600, 0x000).setOrigin(0)
//       this.scene.scene.physics.add.existing(playerLava)
//       this.scene.scene.physics.add.existing(enemyLava)
//       this.scene.scene.physics.add.existing(bigInvaderLava)

//       this.player = this.scene.scene.physics.add.sprite(400, 560, 'player');
//       this.player.setCollideWorldBounds(true)

//       scoreText = this.scene.scene.add.text(16, 16, "Score: " + score, { fontSize: '18px', fill: '#FFF' })
//       livesText = this.scene.scene.add.text(696, 16, "Lives: " + lives, { fontSize: '18px', fill: '#FFF' })
//       startText = this.scene.scene.add.text(400, 300, "Click to Play", { fontSize: '18px', fill: '#FFF' }).setOrigin(0.5)

//       this.input.keyboard.on('keydown-SPACE', shoot);

//       barriers.push(new Barrier(scene, 50, 450))
//       barriers.push(new Barrier(scene, 370, 450))
//       barriers.push(new Barrier(scene, 690, 450))

//       this.input.on('pointerdown', function () {
//         if (isStarted == false) {
//             isStarted = true;
//             startText.destroy()
//             setInterval(makeUfo, 15000)

//         } else {
//             shoot()
//         }
//       });
//       initEnemys()
//     }

//     update() {
//         if (isStarted == true) {
//             if (cursors.left.isDown) {
//                 this.player.setVelocityX(-160);
    
//             }
//             else if (cursors.right.isDown) {
//                 this.player.setVelocityX(160);
    
//             }
//             else {
//                 this.player.setVelocityX(0);
//             }
//         }
//     }

//     shoot() {
//       if (isStarted == true) {
//           if (isShooting === false) {
//               manageGreenLaser(this.scene.scene.physics.add.sprite(player.x, player.y, "greenLaser"))
//               isShooting = true;
//               shootSound.play();
//           }
//       }
//     }

//     initEnemys() {
//       for (i = 0; i < enemyInfo.count.col; i++) {
//           for (j = 0; j < enemyInfo.count.row; j++) {
//               var enemyX = (i * (enemyInfo.width + enemyInfo.padding)) + enemyInfo.offset.left;
//               var enemyY = (j * (enemyInfo.height + enemyInfo.padding)) + enemyInfo.offset.top;
//               enemies.create(enemyX, enemyY, 'invader').setOrigin(0.5);
//           }
//       }
//     }



//     moveEnemies() {
//       setInterval(moveEnemies, 1000);
//         if (isStarted === true) {
//             move.play()
//             if (xTimes === 20) {
//                 if (dir === "right") {
//                     dir = "left"
//                     xTimes = 0
//                 } else {
//                     dir = "right"
//                     xTimes = 0
//                 }
//             }
//             if (dir === "right") {
//                 enemies.children.each(function (enemy) {

//                     enemy.x = enemy.x + 10;
//                     enemy.body.reset(enemy.x, enemy.y);

//                 }, this);
//                 xTimes++;
//             } else {
//                 enemies.children.each(function (enemy) {

//                     enemy.x = enemy.x - 10;
//                     enemy.body.reset(enemy.x, enemy.y);

//                 }, this);
//                 xTimes++;

//             }
//         }
//     }


//     manageGreenLaser(greenLaser) {
//       greenLaser.setVelocityY(-380);


//       var i = setInterval(function () {
//           enemies.children.each(function (enemy) {

//               if (checkOverlap(greenLaser, enemy)) {
//                   greenLaser.destroy();
//                   clearInterval(i)
//                   isShooting = false
//                   enemy.destroy()
//                   score++;
//                   scoreText.setText("Score: " + score);

//                   explosionSound.play()

//                   if ((score - ufoCount) === (enemyInfo.count.col * enemyInfo.count.row)) {
//                       end("Win")
//                   }
//               }

//           }, this);
//           for (var step = 0; step < barriers.length; step++) {
//               if (barriers[step].checkCollision(greenLaser)) {
//                   greenLaser.destroy();
//                   clearInterval(i)
//                   isShooting = false

//                   scoreText.setText("Score: " + score);


//                   explosionSound.play()

//                   if ((score - ufoCount) === (enemyInfo.count.col * enemyInfo.count.row)) {
//                       end("Win")
//                   }


//               }
//           }

//           for (var step = 0; step < bigInvaders.length; step++) {
//               var bigInvader = bigInvaders[step];
//               if (checkOverlap(greenLaser, bigInvader)) {
//                   greenLaser.destroy();
//                   clearInterval(i)
//                   isShooting = false

//                   scoreText.setText("Score: " + score);


//                   explosionSound.play()

//                   if ((score - ufoCount) === (enemyInfo.count.col * enemyInfo.count.row)) {
//                       end("Win")
//                   }

//                   bigInvader.destroy()
//                   bigInvader.isDestroyed = true;
//                   bigInvaderSound.stop();
//                   score++;
//                   ufoCount++;
//               }
//           }
//       }, 10)
//       scene.physics.add.overlap(greenLaser, playerLava, function () {
//           greenLaser.destroy();
//           clearInterval(i);
//           explosionSound.play();
//           isShooting = false
//       })
//     }

//     manageRedLaser(bullet, enemy) {
//       var angle = Phaser.Math.Angle.BetweenPoints(enemy, player);
//       scene.physics.velocityFromRotation(angle, redLaserVelo, bullet.body.velocity);
//       redLaserVelo = redLaserVelo + 2
//       var i = setInterval(function () {

//           if (checkOverlap(bullet, player)) {
//               bullet.destroy();
//               clearInterval(i);
//               lives--;
//               livesText.setText("Lives: " + lives);
//               explosionSound.play()

//               if (lives == 0) {
//                   end("Lose")
//               }
//           }
//           for (var step = 0; step < barriers.length; step++) {
//               if (barriers[step].checkCollision(bullet)) {
//                   bullet.destroy();
//                   clearInterval(i)
//                   isShooting = false

//                   scoreText.setText("Score: " + score);


//                   explosionSound.play()

//                   if (score === (enemyInfo.count.col * enemyInfo.count.row)) {
//                       end("Win")
//                   }
//               }
//           }
//       }, 10)
//       scene.physics.add.overlap(bullet, enemyLava, function () {
//           bullet.destroy();
//           explosionSound.play();
//           clearInterval(i);
//       })
//     }

//     checkOverlap(spriteA, spriteB) {
//       var boundsA = spriteA.getBounds();
//       var boundsB = spriteB.getBounds();
//       return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
//     }

//    //Enemy Fire
  

//     enemyFire() {
//       setInterval(enemyFire, 3000);
//         if (isStarted === true) {
//             var enemy = enemies.children.entries[Phaser.Math.Between(0, enemies.children.entries.length - 1)];
//             manageRedLaser(scene.physics.add.sprite(enemy.x, enemy.y, "redLaser"), enemy)
//         }
//     }   
    
//     //Flying bigInvaders

//     makeBigInvader() {
//         if (isStarted == true) {
//             manageBigInvader(scene.physics.add.sprite(0, 60, "bigInvader"));
//         }
//     }

//     manageBigInvader(bigInvader) {
//         bigInvaders.push(bigInvader);
//         bigInvader.isDestroyed = false;
//         bigInvader.setVelocityX(100);
//         scene.physics.add.overlap(bigInvader, bigInvaderLava, function () {
//             bigInvader.destroy()
//             bigInvader.isDestroyed = true;
//             bigInvaderSound.stop()
//         })
//         bigInvaderSound.play()
//     }

      

//     end(con) {
//       explosionSound.stop();
//       bigInvaderSound.stop();
//       shootSound.stop();
//       move.stop()

//       alert(`You ${con}! Score: ` + score);
//       location.reload()
//     }

// }

// //Barriers
// class Barrier {
//   constructor(scene, gx, y) {
//       var x = gx;
//       var y = y;
//       this.children = [];
//       this.scene = scene;

//       for (var r = 0; r < 3; r++) {
//           for (var c = 0; c < 3; c++) {
//               var child = scene.add.rectangle(x, y, 30, 20, 0x1ff56);
//               scene.physics.add.existing(child);
//               child.health = 2;
//               this.children.push(child)
//               x = x + child.displayWidth;
//           }
//           x = gx;
//           y = y + child.displayHeight;
//       }

//       this.children[this.children.length-2].destroy();
//       this.children.splice(this.children.length-2, 1);        
//   }
//   checkCollision(sprite) {
//       var isTouching = false;
//       for (var i = 0; i < this.children.length; i++) {
//           var child = this.children[i];
//           if (checkOverlap(sprite, child)) {
//               isTouching = true;

//               if (this.children[i].health === 1) {
//                   child.destroy();
//                   this.children.splice(i, 1);

//               } else {
//                   this.children[i].health--;

//               }
//               break;
//           }
//       }
//       return isTouching;
//   }
    // }