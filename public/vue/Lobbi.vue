<template>
  <div>
    <div>ABOUT</div>
   
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      roomIds:[]
    }
  },
  created: async function() {
   //DB参照
   console.log(this.$route.query.roomId)
   /*

			db.ref("/ox/") 
                .on("value", (data)=> {
                    if (data) {
                        //const rootList = data.val();
                        
                        //this.roomIds = rootList;
                        console.log(this.roomIds)
                    }
                })
    */
  },
}
</script>