import Ball from '../assets/ball.png'

export class Preload extends Phaser.Scene {
  constructor () {
    super('Preload')
  }

  preload () {
    this.load.image('ball', Ball)
  }

  create () {
    this.scene.start('Play')
  }
}