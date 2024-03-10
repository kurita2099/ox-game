<template>
  <div>
    <div>ABOUT</div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      roomIds: [],
    };
  },
  props: ["message"],
  created: async function () {
    //DB参照

    console.log(this.global.userId);
    var name = prompt("名前を入力してください");
    // ルームのデータベース参照を取得する
    //var database = firebase.database(); // データベースのインスタンスを取得する
    var roomId = "room1"; // ルームのIDを指定する
    var roomRef = db.ref("ox/" + this.global.roomId); // ルームのデータベース参照を取得する

    // ルームの参加者であるmembersのデータベース参照を取得する
    var membersRef = roomRef.child("members"); // membersのデータベース参照を取得する

    // ルームの参加者であるmembersに新しいユーザーのIDと名前を追加する
    var userId = this.global.userId; // 新しいユーザーのIDを指定する
    var userName = name; // 新しいユーザーの名前を指定する
    membersRef.child(userId).set(userName); // membersに新しいユーザーのIDと名前を追加する
    /* 

			db.ref("/ox/"+this.global.roomIdId) 
                .on("value", (data)=> {
                    if (data) {
                        //const rootList = data.val();
                        
                        //this.roomIds = rootList;
                        console.log(this.roomIds)
                    }
                })
  */
  },
};
</script>
