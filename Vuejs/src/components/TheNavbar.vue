
<template>
  <div
    class="navbar"
    :class="{
      'navbar-min-width': isHideNavbar || show,
      'navbar-width': !isHideNavbar || show,
    }"
  >
    <nav class="navbar-content">
      <ul>
        <li>
          <a class="nav-item" href="#">
            <i class="fas fa-chart-pie" style="margin-left: 2px"></i> Tổng quan
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Báo cáo">
            <i class="fas fa-chart-bar" style="margin-left: 3px"></i> Báo cáo
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Mua hàng">
            <i class="fas fa-chart-pie" style="margin-left: 2px"></i> Mua hàng
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Danh mục nhân viên">
            <i class="fas fa-users"></i> Danh mục nhân viên
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Danh mục khách hàng">
            <i class="fas fa-users"></i> Danh mục khách hàng
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Thiết lập hệ thống">
            <i class="fas fa-cog" style="margin-left: 3px"></i> Thiết lập hệ
            thống
          </a>
        </li>
      </ul>
      <button class="btn btn-icon-left" @click="toggleShow()">
        <span
          :class="{
            'mdi-chevron-right': isHideNavbar,
            'mdi-chevron-left': !isHideNavbar,
          }"
          class="mdi"
        ></span>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["show"],
  data() {
    return {
      posts: [],
      isHideNavbar: false,
    };
  },
  watch: {
    // whenever question changes, this function will run
  },
  methods: {
    toggleShow() {
      this.isHideNavbar = !this.isHideNavbar;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/common/navbar.css";
@import "../assets/css/common/main.css";
@import "../assets/css/common/icon.css";

.navbar-width {
  width: 220px;
}

.navbar-min-width {
  width: 52px;
}

span {
  font-size: 20px;
  position: absolute;
  top: 1px;
  left: 3px;
}
</style>
