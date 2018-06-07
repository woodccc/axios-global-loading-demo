<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="handleSendRequestThreeTimes">同时发3次请求</button>
      <button @click="handleSendRequestThreeTimesWithInterval">间隔10ms发3次请求</button>
    </div>
  </div>
</template>

<script>
  import $ from './api/axios.init'

  export default {
    name: 'App',
    methods: {
      handleSendRequestThreeTimesWithInterval() {
        let count = 3
        let timer = setInterval(() => {
          if (count === 0) {
            clearInterval(timer)
            return
          }
          this.sendRequest()
          count--
        }, 10)
      },
      handleSendRequestThreeTimes() {
        this.sendRequest()
        this.sendRequest()
        this.sendRequest()
      },
      sendRequest() {
        $.get('/users')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body {
    margin: 0;
  }
</style>
