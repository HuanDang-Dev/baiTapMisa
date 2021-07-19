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
@import "../src/assets/css/common/main.css";
@import "../src/assets/css/common/header.css";
@import "../src/assets/css/common/navbar.css";
@import "../src/assets/css/common/content.css";
@import "../src/assets/css/common/grid.css";
@import "../src/assets/css/common/icon.css";
@import "../src/assets/css/common/button.css";
@import "../src/assets/css/common/dialog.css";
@import "../src/assets/css/common/toolbar.css";
@import "../src/assets/css/common/input.css";
@import "../src/assets/css/page/employee.css";
body {
  margin: 0;
}

.content-body {
  display: flex;
}

-moz-user-select: none; /* Firefox /
    -ms-user-select: none; / Internet Explorer /
    -khtml-user-select: none; / KHTML browsers (e.g. Konqueror) /
    -webkit-user-select: none; / Chrome, Safari, and Opera /
    -webkit-touch-callout: none; / Disable Android and iOS callouts*/
</style>
