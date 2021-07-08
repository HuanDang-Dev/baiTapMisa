<template>
  <div class="header">
    <div class="logo-site">
      <img
        @click="showNavbar"
        class="toggle-icon"
        src="../assets/img/toggle.png"
        alt="#"
      />
      <img
        class="amil-icon"
        src="../assets/img/cukcuk-logo.png"
        alt="cukcuk.vn"
      />
    </div>
    <div class="header-body">
      <div class="header-content">
        <div class="header-selected">
          <div class="box-selected">
            <div class="header-style-selected" @click="showOption()">
              {{ value }}
              <i class="fas fa-chevron-down"></i>
            </div>
            <ul class="box-option" v-show="isShowOptions === true">
              <li
                class="option"
                @click="updateValue(index)"
                v-for="(restaurant, index) in restaurants"
                :key="index"
              >
                <i class="fas fa-check"></i>{{ restaurant.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="profile">
        <img src="../assets/icon/avatar-default.png" alt="nvManh" />
        <h5>Nguyễn Văn Mạnh</h5>
        <div class="icon-option-default-16"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShowOptions: false,
      value: "Nhà hàng Biển Đông",
      restaurants: [
        { name: "Nhà hàng Biển Đông" },
        { name: "Nhà hàng Biển Tây" },
      ],
    };
  },
  watch: {
    // whenever question changes, this function will run
  },
  methods: {
    showOption() {
      this.isShowOptions = !this.isShowOptions;
    },
    updateValue(index) {
      this.value = this.restaurants[index].name;
      this.isShowOptions = !this.isShowOptions;
    },
    showNavbar() {
      this.$emit("showNavBarHeader");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/common/header.css";
@import "../assets/css/common/icon.css";
</style>
