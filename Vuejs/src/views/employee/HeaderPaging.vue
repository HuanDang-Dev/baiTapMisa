<template>
  <div class="page-title">
    <div>
      <h2>Danh sách nhân viên</h2>
    </div>

    <!-- Thêm nhân viên mới -->
    <base-button
      buttonClass="btn m-btn"
      @click="addEmployee"
    >
      <div class="m-btn-icon icon-add"></div>
      <div class="btn-text">Thêm nhân viên</div>
    </base-button>
  </div>
</template>

<script>
export default {
  name: "HeaderPaging",
  methods: {
    addEmployee() {
      this.$emit("addEmployeeNew");
    },
  },
};
</script>
