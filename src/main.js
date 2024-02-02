import Phaser from 'phaser'

//untuk impor skema
import AmongUsScenes from './scenes/AmongUsScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1920,
	height: 1080,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [AmongUsScenes], //untuk skema
}

export default new Phaser.Game(config)
