<template>
<div class="container">
  <navbar />
  <windowChat />
  <newChatRoom />
</div>
</template>
<script>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import {watch} from 'vue'
import NewChatRoom from '../components/NewChatRoom.vue'
import WindowChat from '../components/WindowChat.vue'

export default {
components : {Navbar, NewChatRoom, WindowChat},
setup(){
  const {user} = getUser()
  const router = useRouter()
  watch(user, () =>{
    if(!user.value){
      router.push({name : 'Welcome'})
    }
  })

}
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>