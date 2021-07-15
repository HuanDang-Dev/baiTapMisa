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
          @refreshDB="getEmployee"
          @searchDataDepartment="searchValueDepartment = $event"
          @searchDataPosition="searchValuePosition = $event"
        ></the-tool-bar>

        <!-- Hiển thị bảng danh sách sinh viên -->
        <div class="grid-employee">
          <div class="table-scroll">
            <table
              id="dataTable"
              cellspacing="0"
              width="100%"
            >
              <thead class="fixedHeader">
                <tr>
                  <th>Mã nhân viên</th>
                  <th>Họ và tên</th>
                  <th>Giới tính</th>
                  <th>Ngày Sinh</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Chức vụ</th>
                  <th>Phòng ban</th>
                  <th>Mức lương hiện tại</th>
                  <th>Địa chỉ</th>
                  <th>Tình trạng công việc</th>
                </tr>
              </thead>
              <tbody class="fixedContent">
                <tr
                  v-for="(post, index) of dataset"
                  :key="index"
                  @dblclick="getDataEmployee(index)"
                >
                  <td>
                    <div>{{ post.EmployeeCode }}</div>
                  </td>
                  <td>
                    <div>{{ post.FullName }}</div>
                  </td>
                  <td>
                    <div>{{ post.GenderName }}</div>
                  </td>
                  <td>
                    <div class="text-align-center">
                      <!-- Format dữ liệu ngày tháng nămm -->
                      {{ formatDate(post.DateOfBirth) }}
                    </div>
                  </td>
                  <td>
                    <div>{{ post.PhoneNumber }}</div>
                  </td>
                  <td>
                    <div>{{ post.Email }}</div>
                  </td>
                  <td>
                    <div>{{ post.PositionName }}</div>
                  </td>
                  <td>
                    <div>{{ post.DepartmentName }}</div>
                  </td>
                  <td>
                    <div class="text-align-right">
                      <!-- Format dữ liệu tiền lương -->
                      {{ formatMoney(post.Salary) }}
                    </div>
                  </td>
                  <td>
                    <div>{{ post.Address }}</div>
                  </td>
                  <td>
                    <div>{{ post.WorkStatusName }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Hiển thị trang danh sách nhân viên -->
        <footer-paging></footer-paging>
      </div>
    </div>

    <the-dialog
      class="dialog-employee"
      :dataEmployee="dataEmployee"
      @cancelDialog="showDialogEmployee = false, dataEmployee = {}"
      :class="{ 'm-dialog': !showDialogEmployee }"
    ></the-dialog>

  </div>
</template>

<script>
import { api } from "../mixins/api";
import { formatString } from "../mixins/formatString";
import TheToolBar from "../components/employee/TheToolBar.vue";
import FooterPaging from "../components/employee/FooterPaging.vue";
import HeaderPaging from "../components/employee/HeaderPaging.vue";
import TheDialog from "../components/employee/TheDialog.vue";

export default {
  mixins: [formatString, api],
  name: "Employee",
  components: {
    TheToolBar,
    FooterPaging,
    HeaderPaging,
    TheDialog,
  },
  data() {
    return {
      // Giá trị value tại input search
      search: "",
      searchValueDepartment: "",
      searchValuePosition: "",
      // Giá trị hiển thị dialog
      showDialogEmployee: false,
      // Dữ liệu lấy về từ API
      databases: [],
      // Dữ liệu lỗi khi gọi API
      errors: [],
      // Dữ liệu muốn truyển lên dialog khi ấn đúp chuột vào tr nhân viên trong bảng
      dataEmployee: {},
    };
  },
  computed: {
    /**
      Hiển thị dữ liệu ra bảng
      CreatedBy: DVHUAN(14/07/2021)
     */
    dataset() {
      var me = this;
      return this.databases.filter(function (db) {
        return (
          db.EmployeeCode?.toLowerCase().indexOf(me.search?.toLowerCase()) >=
            0 &&
          db.DepartmentName?.toLowerCase().indexOf(
            me.searchValueDepartment?.toLowerCase()
          ) >= 0 &&
          db.PositionName?.toLowerCase().indexOf(
            me.searchValuePosition?.toLowerCase()
          ) >= 0
          //   ||
          // db.FullName.toLowerCase().indexOf(me.search?.toLowerCase()) >= 0
        );
      });
    },
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    this.getEmployee();
  },
  watch: {},
  methods: {
    /**
      Truyền dữ liệu lên dialog khi ấn đúp chuột vào tr trong bảng
      CreatedBy: DVHUAN(14/07/2021)
     */
    getDataEmployee(index) {
      this.getDialogEmployee = true;
      this.showDialogEmployee = true;
      this.dataEmployee = this.dataset[index];
      this.dataEmployee.DateOfBirth = this.formatDate(
        this.dataEmployee.DateOfBirth
      );
      this.dataEmployee.IdentityDate = this.formatDate(
        this.dataEmployee.IdentityDate
      );
      /**
       Ngày gia nhập công ty
       */
      // this.dataEmployee.IdentityDate = this.formatDate(
      //   this.dataEmployee.IdentityDate
      // );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/common/common.css";
@import "../assets/css/common/grid.css";
@import "../assets/css/common/icon.css";
@import "../assets/css/common/content.css";
@import "../assets/css/common/button.css";
@import "../assets/css/page/employee.css";

.employee-page {
  position: relative;
  flex: calc(100% - 221px);
}

.m-dialog {
  display: none;
}

.dialog-employee {
  position: absolute;
  top: calc(50% - 410px);
  left: calc(50% - 500px);
  z-index: 9999;
}
</style>
