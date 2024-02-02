import Phaser from "phaser";
export default class AmongUsScenes extends Phaser.Scene{
    constructor(){
        super('among-us-scenes')
    }


    preload(){ //untuk mengupload asset
        //this.loadimage9('keyword',"jalur/path ke file")
        this.load.image('maps','images/Maps.png')
        this.load.image('playerRed', 'images/Red.png')
        this.load.image('playerGreen', 'images/Green.png')
        this.load.image('playerPink', 'images/Pink.png')
        this.load.image('playerOrange', 'images/Orange.png')
        this.load.image('playerCyan', 'images/Cyan.png')
    }

    create(){//menampilkan asset yang dipakai
        //(x,y,'keyword')
        this.add.image(960, 540, 'maps')
        this.add.image(1000, 320, 'playerRed')
        this.add.image(1720, 500, 'playerGreen').setScale(0.3)
        this.add.image(360, 320, 'playerPink').setScale(0.4)
        this.add.image(360, 820, 'playerOrange').setScale(0.4)
        this.add.image(1000, 880, 'playerCyan').setScale(0.3)
    }
}