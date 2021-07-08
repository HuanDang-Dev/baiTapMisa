<template>
  <div id="app">
    <the-header @showNavBarHeader="hide = !hide"></the-header>
    <div class="content-body">
      <the-navbar :hide="hide" @navbarEvent="hide = $event"></the-navbar>
      <the-employee></the-employee>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheEmployee from "./components/employee/TheEmployee.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavbar,
    TheEmployee,
  },
  data() {
    return {
      hide: false,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}

.content-body {
  display: flex;
}
</style>
