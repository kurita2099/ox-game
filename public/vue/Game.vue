<template>
<div id="game"></div>
</template>

<script>
//import Phaser from 'phaser'
class MyScene1 extends Phaser.Scene {
    constructor() {
        //Sceneを拡張してクラスを作る際にコンストラクタでSceneの設定を渡します
　　//keyでシーンのキー、activeでシーンの自動実行を設定できます
        super({ key: 'MyScene1', active: true });
    }
    preload(){
         console.log("jjj")
        this.load.image('logo', 'assets/logo.png')
       
    }
    create() {
     console.log("jjj")
        this.add.image(400, 300, 'logo')
        //let text = this.add.text(100, 100, 'Phaser 3').setFontSize(64).setColor('#ff0');
    }
}

let vm; //Phaser でアクセスできるようにする

module.exports ={
name: 'Game',
data() {
return {
game: null // Phaser3のインスタンスを保持する
}
},
mounted() {
console.log("game mount")
vm=this;   //Phaser でアクセスできるようにする 
// Phaser3の設定を作成する
const config = {
type: Phaser.AUTO,
width: 800,
height: 600,
parent: 'game', // Vueのテンプレートにあるdiv要素のidを指定する
scene: [MyScene1]
}

// Phaser3のインスタンスを作成する
this.game = new Phaser.Game(config)
},
beforeDestroy() {
// Vueのコンポーネントが破棄される前に、Phaser3のインスタンスを破棄する
this.game.destroy(true)
},
methods: {

}
}
</script>