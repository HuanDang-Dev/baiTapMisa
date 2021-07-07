<template>
  <div class="employee-page">
    <div class="employee">
      <div id="content" class="content content-flex">
        <header-paging
          @addEmployeeNew="showDialogEmployee = true"
        ></header-paging>

        <!-- Tìm kiếm, làm mới và lựa chọn danh sách hiển thị -->
        <the-tool-bar></the-tool-bar>

        <!-- Hiển thị bảng danh sách sinh viên -->
        <div class="grid-employee">
          <div class="table-scroll">
            <table id="dataTable" cellspacing="0" width="100%">
              <thead class="fixedHeader">
                <tr>
                  <th fieldName="EmployeeCode">Mã nhân viên</th>
                  <th fieldName="FullName">Họ và tên</th>
                  <th fieldName="GenderName">Giới tính</th>
                  <th fieldName="DateOfBirth">Ngày Sinh</th>
                  <th fieldName="PhoneNumber">Số điện thoại</th>
                  <th fieldName="Email">Email</th>
                  <th fieldName="PositionName">Chức vụ</th>
                  <th fieldName="DepartmentName">Phòng ban</th>
                  <th fieldName="Salary">Mức lương hiện tại</th>
                  <th fieldName="Address">Địa chỉ</th>
                  <th fieldName="WorkStatusName">Tình trạng công việc</th>
                </tr>
              </thead>
              <tbody class="fixedContent">
                <tr v-for="(post, index) of posts" :key="index">
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
                    <div class="text-align-right" formatType="moneyVND">
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
      @cancelDialog="showDialogEmployee = false"
      :class="{ 'm-dialog': !showDialogEmployee }"
    ></the-dialog>
  </div>
</template>

<script>
import axios from "axios";
import TheToolBar from "./TheToolBar.vue";
import FooterPaging from "./FooterPaging.vue";
import HeaderPaging from "./HeaderPaging.vue";
import TheDialog from "./TheDialog.vue";

export default {
  name: "Employee",
  components: {
    TheToolBar,
    FooterPaging,
    HeaderPaging,
    TheDialog,
  },
  data() {
    return {
      showDialogEmployee: false,
      posts: [],
      errors: [],
    };
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    axios
      .get("http://cukcuk.manhnv.net/v1/Employees")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  watch: {
    // whenever question changes, this function will run
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return "";
      }
      var dateTime = new Date(date);
      if (Number.isNaN(dateTime.getTime())) {
        return "";
      } else {
        var day = dateTime.getDate(),
          month = dateTime.getMonth() + 1,
          year = dateTime.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;

        return day + "/" + month + "/" + year;
      }
    },
    formatMoney(money) {
      if (money) {
        return parseFloat(money)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+\b)/g, "$1.");
      }
      return "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/common.css";
@import "../../assets/css/common/grid.css";
@import "../../assets/css/common/icon.css";
@import "../../assets/css/common/content.css";
@import "../../assets/css/common/button.css";
@import "../../assets/css/page/employee.css";

.employee {
}

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
