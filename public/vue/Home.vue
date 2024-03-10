<template>
  <div>
    <div>Home</div>

<ul>
<!-- items 配列の要素を item として繰り返しレンダリングする -->
<li v-for="(item, index) in roomIds" :key="item.id"　@click="liEvent(item.roomId)">
<!-- item がオブジェクトであると仮定し、そのプロパティを表示する -->
{{ item.timestamp }}: {{ item.roomId }}
</li>
</ul>
<button @click="createRoom">Create Room!</button><br>
<br>
<input type="text" maxlength="4" v-model="roomId" placeholder="Room ID">

  </div>
</template>

<script>
module.exports = {
  data() {
    return {
        ref: {},
		//items: [{name:"2222",price:10000}],
        roomIds: [],
        roomId:0,
        id:0,
        ref:{},
        sync:{},
    }
  },
  created: async function() {
   //DB参照
   setTimeout(()=>
			db.ref("/ox/") 
                .on("value", (data)=> {
                    if (data) {
                        const rootList = data.val();
                        
                        this.roomIds = rootList;
                        console.log(this.roomIds)
                    }
                }),1000);
  },
  methods:{
    liEvent:function(index){
        console.log(index)
        this.global.userId=this.createId();
        this.global.roomId=index; 
        this.$router.push({path: 'Lobbie'})
    },
    createRoom: async function(){
//Guestが来るまで操作出来ないようにturnを-1に
			this.sync.turn = -1
			if (!this.roomId) {alert("ルームIDが空です");return;}
			//id生成
			this.id = this.createId()
			this.sync.host = this.id
            this.sync.roomId = this.roomId
			//this.roomId = this.id.substr(4)
			
			//DB参照
			this.ref = db.ref("/ox/" + this.roomId)
			//対象room情報取得
			const snapshot = await this.ref.once("value")
			//既に部屋があったらリトライ
			if (snapshot.val()) {alert("すでに使われています");return}
			
			//timestamp
			this.sync.timestamp = moment(new Date).format("YYYY/MM/DD HH:mm:ss")
			//DB更新
			this.ref.set(this.sync)
			//DBイベント定義
			this.setPush()
    },
    setPush:function(){
	    this.ref.on("value", (snapshot) => {
				//DBデータをローカルへ反映
				//vm.sync = snapshot.val()
				//終了判定
				//vm.gemaSet()
                console.log("kkk")
                this.$router.push({path: 'Lobbie' })
			})
    },
    createId: () => String(Math.random()).substr(2,8),
		
  }
  
}
</script>