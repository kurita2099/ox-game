<template>
<div id="game"></div>
</template>

<script>
//import Phaser from 'phaser'

module.exports ={
name: 'Game',
data() {
return {
game: null // Phaser3のインスタンスを保持する
}
},
mounted() {
    
// Phaser3の設定を作成する
const config = {
type: Phaser.AUTO,
width: 800,
height: 600,
parent: 'game', // Vueのテンプレートにあるdiv要素のidを指定する
scene: {
preload: this.preload, // シーンのメソッドをVueのメソッドにバインドする
create: this.create,
update: this.update
}
}

// Phaser3のインスタンスを作成する
this.game = new Phaser.Game(config)
},
beforeDestroy() {
// Vueのコンポーネントが破棄される前に、Phaser3のインスタンスを破棄する
this.game.destroy(true)
},
methods: {
// Phaser3のシーンのメソッドを定義する
preload() {
    console.log(this)
// 画像や音声などのアセットをロードする
},
create() {
// ゲームのオブジェクトやロジックを作成する
  console.log(this)
//this.load.image('logo', '../assets/logo.png')
//this.add.image(400, 300, 'logo')
},
update() {
// ゲームの状態を更新する
  console.log(this);
}
}
}
</script>