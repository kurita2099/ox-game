// parent_vue.js
Vue.component('parent-component', {
    template: `
    <div :class="{dispoff: view != 'lobby'}">
    <strong>OX GAME</strong><br>
    <br>
    <button @click="createRoom">Create Room!</button><br>
    <br>
    <input type="text" maxlength="4" v-model="roomId" placeholder="Room ID"><button @click="goRoom">Go!</button>
</div>

<div :class="{dispoff: view != 'game'}">
    <div>
        <div>
            <div v-for="i in 3" class="row">
                <div v-for="j in 3" class="col" @click="put(i, j)">{{parseOX(sync.board[i][j])}}</div>
            </div>
        </div>
    </div>
    
    <div>
        <p>
            Room ID: {{roomId}}<br>
            Your Mark: {{parseOX(mark)}}<br>
            Turn: {{parseOX(sync.turn)}}<br>
        </p>
    </div>
</div>
    `,
    data() {
      return {
        message: "Hello, World!",
        myStyle: {
          color: "red",
          fontSize: "18px",
          "background-color": "#ebb",
          border: "solid 2px",
        },
      };
    },
    methods: {
      changeColor() {
        console.log("checked.");
        this.message = "confirmed";
        this.$set(this.myStyle, "color", "green");
        this.$set(this.myStyle, "background-color", "#beb");
      },
    },
  });
  