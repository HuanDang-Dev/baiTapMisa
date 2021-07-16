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

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
