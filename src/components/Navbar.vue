<template>
  <nav v-if="user">
      <div>
          <p>Hello {{user.displayName}}</p>
          <p class="email">Currently logged in as {{user.email}}</p>
      </div>
      <button @click="handleclick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
  setup (){
    const {logout, error} = useLogout()
    const {user} = getUser()
    const handleclick = async () =>{
      await logout()
      if (!error.value){
        console.log('User Logged out')
      }

    }
    return {logout, error, handleclick, user}
  }

}
</script>

<style>

</style>