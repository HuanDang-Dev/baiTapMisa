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
          :options="optionsDepartment"
          comboboxClass="styled-select"
          @updateValueOption="inputOptionDepartment = $event"
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
          comboboxClass="styled-select"
          @updateValueOption="inputOptionPosition = $event"
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
import { mapState } from "vuex";
export default {
  name: "ToolBar",
  data() {
    return {
      searchValue: "",
      inputOptionDepartment: "",
      inputOptionPosition: "",
    };
  },
  mounted() {
    this.$store.dispatch("getDepartment");
    this.$store.dispatch("getPosition");
  },
  computed: mapState(["optionsDepartment", "optionsPosition"]),
  methods: {
    btnRefresh() {
      this.$store.dispatch("getEmployee");
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