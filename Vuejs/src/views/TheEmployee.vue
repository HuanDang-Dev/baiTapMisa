<template>
  <div class="employee-page">
    <div class="employee">
      <div
        id="content"
        class="content content-flex"
      >
        <header-paging @addEmployeeNew="showDialogEmployee = true"></header-paging>

        <!-- Tìm kiếm, làm mới và lựa chọn danh sách hiển thị -->
        <the-tool-bar
          @searchData="search = $event"
          @refreshDB="getEmployee"
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
      search: "",
      showDialogEmployee: false,
      databases: [],
      errors: [],
      dataEmployee: {},
    };
  },
  computed: {
    dataset() {
      var me = this;
      return this.databases.filter(function (db) {
        return (
          db.EmployeeCode.toLowerCase().indexOf(me.search.toLowerCase()) >= 0 ||
          db.FullName.toLowerCase().indexOf(me.search.toLowerCase()) >= 0
        );
      });
    },
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    this.getEmployee();
  },
  watch: {
    // whenever question changes, this function will run
  },
  methods: {
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
