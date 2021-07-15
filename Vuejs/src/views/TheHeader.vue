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
          <base-select
            :options="restaurants"
            :isShow="isShowOptions"
            selectClass="header-style-selected"
            @click="showOption()"
            @isShowOption="isShowOptions = !isShowOptions"
          ></base-select>
        </div>
      </div>
      <div class="profile">
        <img
          src="../assets/icon/avatar-default.png"
          alt="nvManh"
        />
        <h5>Nguyễn Văn Mạnh</h5>
        <div class="icon-option-default-16"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSelect from "../components/base/BaseSelect.vue";
export default {
  name: "Header",
  components: {
    BaseSelect,
  },
  data() {
    return {
      // Giá trị hiển thị select option
      isShowOptions: false,
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
    /**
      Hàm thực hiện thay đổi giá trị ẩn hiện select option
      CreatedBy: DVHUAN(14/07/2021)
     */
    showOption() {
      this.isShowOptions = !this.isShowOptions;
    },
    /**
      Hàm truyển sự kiện lên cha để yêu cầu ẩn hiện navbar
      CreatedBy: DVHUAN(14/07/2021)
     */
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
h5 {
  font-size: 13px;
}
</style>
