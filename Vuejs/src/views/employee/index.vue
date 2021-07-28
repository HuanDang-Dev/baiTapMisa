<template>
  <div class="employee-page">
    <div class="employee">
      <div
        id="content"
        class="content content-flex"
      >
        <!-- @addEmployeeNew xử lý sự kiện khi button trong component header-paging được nhấn -->
        <header-paging @addEmployeeNew="showDialogEmployee = true"></header-paging>

        <!-- Tìm kiếm, làm mới và lựa chọn danh sách hiển thị -->
        <the-tool-bar
          @searchData="search = $event"
          @searchDataDepartment="searchValueDepartment = $event"
          @searchDataPosition="searchValuePosition = $event"
        ></the-tool-bar>

        <!-- Hiển thị bảng danh sách sinh viên -->
        <div class="grid-employee">
          <div class="table-scroll">
            <base-table
              :columnNames="columnNames"
              :search="search"
              :searchValueDepartment="searchValueDepartment"
              :searchValuePosition="searchValuePosition"
              @showEmployee="dataEmployee = $event, showDialogEmployee = true"
            ></base-table>
          </div>
        </div>

        <!-- Hiển thị trang danh sách nhân viên -->
        <footer-paging></footer-paging>
      </div>
    </div>

    <the-dialog
      class="dialog-employee"
      :dataEmployee="dataEmployee"
      @cancelDialog="showDialogEmployee = false, isModified= false, dataEmployee = {}"
      v-if="showDialogEmployee"
      isLoader
    ></the-dialog>

  </div>
</template>

<script>
import { api } from "../../mixins/api";

// Các trường trong bảng
const columnNames = [
  { key: "EmployeeCode", text: "Mã nhân viên" },
  { key: "FullName", text: "Họ và tên" },
  { key: "GenderName", text: "Giới tính" },
  {
    key: "DateOfBirth",
    text: "Ngày sinh",
    class: "text-align-center",
    format: "date",
  },
  { key: "PhoneNumber", text: "Điện thoại" },
  { key: "Email", text: "Email" },
  { key: "PositionName", text: "Chức vụ" },
  { key: "DepartmentName", text: "Phòng ban" },
  {
    key: "Salary",
    text: "Mức lương cơ bản",
    class: "text-align-right",
    format: "money",
  },
  { key: "WorkStatus", text: "Tình trạng công việc", format: "statusWork" },
  { key: "PersonalTaxCode", text: "Mã số thuế" },
  { key: "Address", text: "Địa chỉ" },
];

export default {
  mixins: [api],
  name: "Employee",
  data() {
    return {
      columnNames: columnNames,
      // Giá trị value tại input search
      search: "",
      searchValueDepartment: "",
      searchValuePosition: "",
      // Giá trị hiển thị dialog
      showDialogEmployee: false,
      // Dữ liệu muốn truyển lên dialog khi ấn đúp chuột vào tr nhân viên trong bảng
      dataEmployee: {},
      dataTable: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.employee-page {
  position: relative;
  flex: calc(100% - 221px);
}

.dialog-employee {
  position: absolute;
  top: calc(50% - 410px);
  left: calc(50% - 500px);
  z-index: 9999;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-top: 38px;
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
