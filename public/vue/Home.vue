<template>
  <div>
    <div>Home</div>

<ul>
<!-- items 配列の要素を item として繰り返しレンダリングする -->
<li v-for="(item, index) in roomIds" :key="item.id"　@click="liEvent(index)">
<!-- item がオブジェクトであると仮定し、そのプロパティを表示する -->
{{ item.timestamp }}: {{ item.host }}
</li>
</ul>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
        ref: {},
		//items: [{name:"2222",price:10000}],
        roomIds: [],
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
    }
  }
  
}
</script>