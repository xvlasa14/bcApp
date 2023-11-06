<template id="app">
    <h1>ROUTING temp</h1>
    <p>
        <router-link to="/">HOME</router-link> //
        <router-link to="/login">LOGIN</router-link> //
        <router-link to="/user">USER profile</router-link> //
        <router-link to="/patient">PATIENT profile</router-link> //
        <router-link to="/tests">TESTs overview</router-link>
    </p>
    <p>=======================================================</p>
  <router-view></router-view>
</template>