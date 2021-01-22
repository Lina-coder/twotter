<template>
<div class="user-profile">
  <div class="user-profile-sidebar">
  <div class="user-profile_user-panel">
    <h1 class="user-profile_username"> @{{state.user.username}}</h1>            <!--显示用户名-->
    <div class="user-profile_admin-badge" v-if="state.user.isAdmin">
      Admin                                                  <!--显示Admin-->
    </div>
    <div class="user-profile_follower-count">
    <strong> Followers: </strong>{{state.followers}}               <!--显示Follower-->
   </div>
  </div>
  <CreateTwootPanel @add-twoot="addTwoot"/>
  </div>
  <div class="user-profile_twoots-wrapper">
   <TwootItem v-for="twoot in state.user.twoots"
              :key="twoot.id"
              :username="state.user.username"
              :twoot="twoot"
   />
  </div>
  </div>
</template>

<script>
import {reactive,computed} from 'vue';
import {useRoute} from 'vue-router';
import {users} from '../assets/users';
import TwootItem from"../components/TwootItem";                 /*右边评论区的内容来自于TwootItem文件*/
import CreateTwootPanel from "../components/CreateTwootPanel";


export default {
  name: "UserProfile",
  components: {CreateTwootPanel, TwootItem},
  setup(){
    const route=useRoute();
    const userId=computed(()=>route.params.userId)

    //if (userId) fetchUserFromApi(userId)

    const state=reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    })

    function addTwoot(twoot){
  state.user.twoots.unshift({id:state.user.twoots.length+1,content:twoot});
    }

    return{
      state,
      addTwoot,
      userId
    }
  }
};

</script>

<style lang="scss" scoped>
.user-profile {                          /*修饰整个格式*/
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap:50px;
  padding: 50px 5%;

  .user-profile_user-panel { /*修饰左半边*/
    display: flex;
    flex-direction: column;
    /*margin-right: 20px;*/
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile_admin-badge { /*修饰Admin*/
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weigth: bold;
    }
  }

    .user-profile_twoots-wrapper { /*修饰右边全部*/
      display: grid;
      grid-gap: 10px;
      margin-bottom: auto;
    }
}

</style>

