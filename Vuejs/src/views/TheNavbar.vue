
<template>
  <div
    class="navbar"
    :class="{
      'navbar-min-width': hide,
      'navbar-width': !hide,
    }"
  >
    <nav class="navbar-content">
      <ul>
        <li
          v-for="(item, index) in listsItem"
          :key="index"
        >
          <a
            class="nav-item"
            :title="item.name"
            :class="{ active : isActive == index }"
            @click="activeItem(index)"
          >
            <i
              class="fas"
              :class="item.icon"
              style="margin-left: 3px"
            ></i> {{item.name}}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["hide"],
  data() {
    return {
      isActive: -1,
      listsItem: [
        {
          icon: "fa-chart-pie",
          name: "Tổng quan",
        },
        {
          icon: "fa-chart-bar",
          name: "Báo cáo",
        },
        {
          icon: "fa-chart-pie",
          name: "Mua hàng",
        },
        {
          icon: "fa-users",
          name: "Danh mục nhân viên",
        },
        {
          icon: "fa-users",
          name: "Danh mục khách hàng",
        },
        {
          icon: "fa-cog",
          name: "Thiết lập hệ thống",
        },
      ],
    };
  },
  methods: {
    activeItem(index) {
      this.isActive = index;
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

.active {
  background-color: #019160 !important;
  color: #fff !important;
}
.active svg {
  color: #fff !important;
}
</style>
