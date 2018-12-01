<template>
  <div id="app">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <Strong class="logo-yellow">PASS</Strong><Strong class="logo-blue">TRACKER</Strong>
          </a>
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <a class="navbar-item" href="/about">
              <strong>Inicio</strong> 
          </a>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: 'app',
  data: function () {
    return {
      showNav: false
    }
  }
}
</script>

<style>
body {
  margin: 0;
  
}
.logo-yellow{
  color: #efd834;
}
.logo-blue{
  color: #2C4D7A;
}

main {
  text-align: center;
  margin-top: 40px;
} 
html{
  background-color: #2C4D7A;
}
</style>
