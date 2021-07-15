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
      <div
        class="selected"
        v-on:keyup.enter="searchDepartment"
      >
        <base-combobox
          type="text"
          placeholder="Phòng ban"
          :value="inputOptionDepartment"
          @input="inputOptionDepartment = $event"
          :options="optionsDeparment"
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
      <div
        class="selected"
        v-on:keyup.enter="searchPosition"
      >
        <base-combobox
          type="text"
          placeholder="Vị trí"
          :value="inputOptionPosition"
          @input="inputOptionPosition = $event"
          :options="optionsPosition"
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
import { api } from "../../mixins/api";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseCombobox from "../base/BaseCombobox.vue";
export default {
  mixins: [api],
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
      isShowOptionPosition: false,
      // Toàn bộ dữ liệu của phòng ban
      dataDepartment: [],
      // Lấy dữ liệu tên phòng ban để hiển thị
      optionsDeparment: [],
      // Toàn bộ dữ liệu của Vị trí
      dataPosition: [],
      // Lấy dữ liệu tên vị trí để hiển thị
      optionsPosition: [],
    };
  },
  watch: {
    // whenever question changes, this function will run
    dataDepartment() {
      let tmp = [];
      for (let i = 0; i < this.dataDepartment.length; i++) {
        tmp.push({
          name: this.dataDepartment[i].DepartmentName,
        });
      }
      this.optionsDeparment = [...tmp];
    },
    dataPosition() {
      let tmp = [];
      for (let i = 0; i < this.dataPosition.length; i++) {
        tmp.push({
          name: this.dataPosition[i].PositionName,
        });
      }
      this.optionsPosition = [...tmp];
    },
  },
  created() {
    this.getDepartment();
    this.getPosition();
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
    searchDepartment() {
      this.$emit("searchDataDepartment", this.inputOptionDepartment);
    },
    searchPosition() {
      this.$emit("searchDataPosition", this.inputOptionPosition);
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
