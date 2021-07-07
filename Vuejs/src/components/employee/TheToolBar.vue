<template>
  <div class="filter-bar">
    <div class="filter-left">
      <input
        id="searchDataTable"
        class="icon-search input-search"
        type="text"
        placeholder="Tìm kiếm theo Mã hoặc Tên"
      />
    </div>
    <div class="filter-department">
      <div class="selected">
        <div class="box-selected">
          <div @click="showOptionDepartment()" class="styled-select">
            {{ valueDepartment }}
            <i class="fas fa-chevron-down"></i>
          </div>
          <ul class="box-option" v-show="isShowOptionDepartment === true">
            <li
              class="option"
              @click="updateValueDepartmnet(index)"
              v-for="(department, index) in departments"
              :key="index"
            >
              <i class="fas fa-check"></i>{{ department.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="filter-position">
      <div class="selected">
        <div class="box-selected">
          <div @click="showOptionPosition()" class="styled-select">
            {{ valuePosition }}
            <i class="fas fa-chevron-down"></i>
          </div>
          <ul v-show="isShowOptionPosition === true" class="box-option">
            <li
              class="option"
              @click="updateValuePosition(index)"
              v-for="(position, index) in positions"
              :key="index"
            >
              <i class="fas fa-check"></i>{{ position.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="filter-right">
      <button
        id="btnRefresh"
        class="m-btn-refresh icon-refresh m-second-button"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      isShowOptionDepartment: false,
      valueDepartment: "Tất cả phòng ban",
      valuePosition: "Tất cả vị trí",
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
    updateValueDepartmnet(index) {
      this.valueDepartment = this.departments[index].name;
      this.isShowOptionDepartment = !this.isShowOptionDepartment;
    },
    updateValuePosition(index) {
      this.valuePosition = this.positions[index].name;
      this.isShowOptionPosition = !this.isShowOptionPosition;
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
