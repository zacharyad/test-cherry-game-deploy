import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, spriteKey) {
        super(scene, x, y, spriteKey)
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
    }
    updateMovement (cursors) {
        if (cursors.right.isDown) {
            console.log('walk right');
            this.anims.play('walk right', true);
            this.setVelocityX(360)
        }
        else if (cursors.left.isDown) {
            console.log('walk left');
            this.anims.play('walk left', true);
            this.setVelocityX(-360)
        }
        else {
            this.setVelocityX(0)
        }
    }

    update(cursors) {
        this.updateMovement(cursors)
    }

}