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
        <base-combobox
          type="text"
          placeholder="Phòng ban"
          :value="inputOptionDepartment"
          @input="inputOptionDepartment = $event"
          :options="departments"
          :isShow="isShowOptionDepartment"
          comboboxClass="styled-select"
          @click="showOptionDepartment()"
          @updateValueOption="inputOptionDepartment = $event"
          @isShowOption="isShowOptionDepartment = !isShowOptionDepartment"
        >
        </base-combobox>
      </div>
    </div>
    <div class="filter-position">
      <div class="selected">
        <base-combobox
          type="text"
          placeholder="Vị trí"
          :value="inputOptionPosition"
          @input="inputOptionPosition = $event"
          :options="positions"
          :isShow="isShowOptionPosition"
          comboboxClass="styled-select"
          @click="showOptionPosition()"
          @updateValueOption="inputOptionPosition = $event"
          @isShowOption="isShowOptionPosition = !isShowOptionPosition"
        >
        </base-combobox>
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
import BaseCombobox from "../base/BaseCombobox.vue";
export default {
  name: "ToolBar",
  components: {
    BaseButton,
    BaseInput,
    BaseCombobox,
  },
  data() {
    return {
      searchValue: "",
      inputOptionDepartment: "",
      inputOptionPosition: "",
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
