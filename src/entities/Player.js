import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, spriteKey) { 
        super(scene, x, y, spriteKey)
        this.scene = scene;
        this.spriteKey = spriteKey //Joe sggestion for further modularizing 
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
        }
    
    updateMovement (cursors) {
        if (cursors.right.isDown && !cursors.down.isDown && !cursors.up.isDown) {
            this.anims.play('walk right', true);
            this.setVelocityX(180);
        }
        else if (cursors.left.isDown && !cursors.down.isDown && !cursors.up.isDown) {
            this.anims.play('walk left', true);
            this.setVelocityX(-180);
        }
        else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
            this.anims.play('walk down', true);
            this.setVelocityY(180);
        }
        else if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
            this.anims.play('walk up', true);
            this.setVelocityY(-180);
        }
        else {
            this.anims.play('idle', true);
            this.setVelocityX(0);
            this.setVelocityY(0);
        }
    }

    update(cursors) {
        this.updateMovement(cursors);
    }

}


//   grace: {
//     walkRight: {start: 11, end: 18}
//    },
//    mary: {
//     walkRight: {start: 8, end: 16}
//    }
//  }

//have 4-5 "modes" of a player - could also do this in scene
//this is where interaction comes in 
//collision will trigger in proximity - lets discuss as group 
//if proximity trigger then thefunction you would call that tracks obstance distance is in playerclass, a method on the playerclass, this.player.checkdistance to see how close each object is on a new frame, and if they get near enough to one, you can have a function get called which shows dio box or put it in a list etc
//you want this functionality in every scene
//DO NOT write code where u have to repeat it every scene 
//the OBJECTS are on the scene, but the player is what keeps track of the distance/ proximity 
//if one person can build that "is close enough" method - then everyone can use it
//should they sparkle? e key? just close? 
//... so that is essentially.... game design - Joe 
//where do we put htmlelements? 