import Phaser from 'phaser';


export default class SpaceInvaders extends Phaser.Scene {
    constructor() {
      super('SpaceInvaders');
    }

    preload() {
      this.load.image('bg', '../public/assets/images/spaceBG.jpg');
    }

    create() {
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
    }
}