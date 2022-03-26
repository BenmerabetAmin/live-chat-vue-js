<template>
  <form @submit.prevent="handlesubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Log to the Chatroom</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { error, login } from '../composables/useLogin'

export default {
    setup(props, context) {
        const email = ref('')
        const password = ref('')
         const handlesubmit = async () => {
                await login(email.value, password.value)
                if(!error.value){
                  context.emit('login')
                }
          }

        return { email, password, handlesubmit, error }
    }
}
</script>

<style>

</style>