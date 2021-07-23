
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
          <router-link :to="item.src">
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
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { itemActive } from "../mixins/itemActive";
export default {
  mixins: [itemActive],
  name: "Navbar",
  props: ["hide"],
  data() {
    return {
      isActive: 3,
      listsItem: [
        {
          icon: "fa-chart-pie",
          name: "Tổng quan",
          src: "/",
        },
        {
          icon: "fa-chart-bar",
          name: "Báo cáo",
          src: "/",
        },
        {
          icon: "fa-chart-pie",
          name: "Mua hàng",
          src: "/",
        },
        {
          icon: "fa-users",
          name: "Danh mục nhân viên",
          src: "/employee",
        },
        {
          icon: "fa-users",
          name: "Danh mục khách hàng",
          src: "/",
        },
        {
          icon: "fa-cog",
          name: "Thiết lập hệ thống",
          src: "/",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

li:last-child svg {
  margin-left: 4px !important;
}
</style>
