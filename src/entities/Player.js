import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, spriteKey) {
        super(scene, x, y, spriteKey)
        this.scene = scene;
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
