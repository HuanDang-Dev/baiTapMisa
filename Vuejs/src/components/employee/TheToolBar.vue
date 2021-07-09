<template>
  <div class="filter-bar">
    <div
      class="filter-left"
      v-on:keyup.enter="searchFocus"
    >
      <base-input
        type="text"
        placeholder="Tìm kiếm theo Mã hoặc Tên"
        inputClass="icon-search input-search"
        :value="searchValue"
        @input="searchValue = $event"
      ></base-input>
    </div>
    <div class="filter-department">
      <div class="selected">
        <base-select
          :options="departments"
          :isShow="isShowOptionDepartment"
          selectClass="styled-select"
          @click="showOptionDepartment()"
          @isShowOption="isShowOptionDepartment = !isShowOptionDepartment"
        ></base-select>
      </div>
    </div>
    <div class="filter-position">
      <div class="selected">
        <base-select
          :options="positions"
          :isShow="isShowOptionPosition"
          selectClass="styled-select"
          @click="showOptionPosition()"
          @isShowOption="isShowOptionPosition = !isShowOptionPosition"
        ></base-select>
      </div>
    </div>
    <div class="filter-right">
      <base-button
        @click="btnRefresh()"
        buttonClass="m-btn-refresh icon-refresh m-second-button"
      >
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseSelect from "../base/BaseSelect.vue";
export default {
  name: "ToolBar",
  components: {
    BaseButton,
    BaseSelect,
    BaseInput,
  },
  data() {
    return {
      searchValue: "",
      isShowOptionDepartment: false,
      departments: [
        { name: "Tất cả phòng ban" },
        { name: "Phòng đào tạo" },
        { name: "Phòng nhân sự" },
      ],
      isShowOptionPosition: false,
      positions: [
        { name: "Tất cả vị trí" },
        { name: "Giám đốc" },
        { name: "Nhân viên" },
      ],
    };
  },
  watch: {
    // whenever question changes, this function will run
  },
  methods: {
    showOptionDepartment() {
      this.isShowOptionDepartment = !this.isShowOptionDepartment;
    },
    showOptionPosition() {
      this.isShowOptionPosition = !this.isShowOptionPosition;
    },
    btnRefresh() {
      this.$emit("refreshDB");
    },
    searchFocus() {
      this.$emit("searchData", this.searchValue);
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/icon.css";
@import "../../assets/css/common/button.css";
@import "../../assets/css/common/toolbar.css";
@import "../../assets/css/common/input.css";
</style>
