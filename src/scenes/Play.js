import config from "../config"

export class Play extends Phaser.Scene {
  constructor () {
    super('Play')
  }

  create () {
    this.ball = this.physics.add.image(config.scale.width / 2, config.scale.height / 2, 'ball')
    this.ball.setCollideWorldBounds(true)
    this.ball.setBounce(0.9)
    this.ball.setScale(3)
  }
}