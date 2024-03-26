<script setup lang="ts"></script>

<template>
  <div class="form">
    <form @submit.prevent="" class="login-form">
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: auto;
}
</style>
