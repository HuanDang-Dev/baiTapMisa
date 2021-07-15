<template>
  <div id="app">
    <the-header @showNavBarHeader="hide = !hide"></the-header>
    <div class="content-body">
      <TheNavbar
        :hide="hide"
        @navbarEvent="hide = $event"
      ></TheNavbar>
      <TheEmployee />
    </div>
  </div>
</template>

<script>
import TheHeader from "./views/TheHeader.vue";
import TheNavbar from "./views/TheNavbar.vue";
import TheEmployee from "./views/TheEmployee.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavbar,
    TheEmployee,
  },
  data() {
    return {
      // Giá trị thể hiện ẩn hiện của navbar
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
