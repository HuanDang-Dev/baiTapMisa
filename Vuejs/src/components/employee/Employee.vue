<template>
  <div class="employee">
    <div id="content" class="content content-flex">
      <div class="page-title">
        <div>
          <h2>Danh sách nhân viên</h2>
        </div>

        <!-- Thêm nhân viên mới -->
        <button id="btnAdd" class="m-btn btn">
          <div class="m-btn-icon icon-add"></div>
          <div class="btn-text">Thêm nhân viên</div>
        </button>
      </div>

      <!-- Tìm kiếm, làm mới và lựa chọn danh sách hiển thị -->
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
              <div id="selectedDepartment" class="styled-select">
                Tất cả phòng ban
                <i class="fas fa-chevron-down"></i>
              </div>
              <ul id="optionDepartment" class="box-option">
                <li class="option">
                  <i class="fas fa-check"></i>Tất cả phòng ban
                </li>
                <li class="option">
                  <i class="fas fa-check"></i>Phòng đào tạo
                </li>
                <li class="option">
                  <i class="fas fa-check"></i>Phòng nhân sự
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="filter-position">
          <div class="box-selected">
            <div id="selectedPosition" class="styled-select">
              Tất cả vị trí
              <i class="fas fa-chevron-down"></i>
            </div>
            <ul id="optionPosition" class="box-option">
              <li class="option"><i class="fas fa-check"></i>Giám đốc</li>
              <li class="option"><i class="fas fa-check"></i>Kế toán</li>
              <li class="option"><i class="fas fa-check"></i>Nhân viên</li>
            </ul>
          </div>
        </div>
        <div class="filter-right">
          <button
            id="btnRefresh"
            class="m-btn-refresh icon-refresh m-second-button"
          ></button>
        </div>
      </div>

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
                    {{ post.DateOfBirth }}
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
                    {{ post.Salary }}
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
      <div class="paging-bar">
        <div class="hint-text">Hiển thị <b>1-10/1000</b> nhân viên</div>
        <ul id="pageSlide" class="pagination">
          <li class="page-item-icon">
            <a href="#">
              <img
                src="../../assets/icon/btn-firstpage.svg"
                alt="Trang đầu tiên"
              />
            </a>
          </li>
          <li class="page-item-icon">
            <a href="#">
              <img
                src="../../assets/icon/btn-prev-page.svg"
                alt="Trang trước"
              />
            </a>
          </li>
          <li class="page-item"><a href="#" class="page-link">1</a></li>
          <li class="page-item"><a href="#" class="page-link">2</a></li>
          <li class="page-item active"><a href="#" class="page-link">3</a></li>
          <li class="page-item"><a href="#" class="page-link">4</a></li>
          <li class="page-item-icon">
            <a href="#">
              <img src="../../assets/icon/btn-next-page.svg" alt="Trang sau" />
            </a>
          </li>
          <li class="page-item-icon">
            <a href="#">
              <img
                src="../../assets/icon/btn-lastpage.svg"
                alt="Trang cuối cùng"
              />
            </a>
          </li>
        </ul>
        <div class="hint-text"><b>20</b> nhân viên/trang</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Employee",
  data() {
    return {
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

  methods() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/common.css";
@import "../../assets/css/common/grid.css";
@import "../../assets/css/common/icon.css";
@import "../../assets/css/common/toolbar.css";
@import "../../assets/css/common/content.css";
@import "../../assets/css/common/button.css";
@import "../../assets/css/common/input.css";
@import "../../assets/css/page/employee.css";

.employee {
  flex: calc(100% - 221px);
}
</style>
