<template>
  <div class="navbar navbar-width">
    <nav class="navbar-content">
      <ul>
        <li>
          <a class="nav-item" href="#">
            <i class="fas fa-chart-pie" style="margin-left: 2px"></i> Tổng quan
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Báo cáo">
            <i class="fas fa-chart-bar" style="margin-left: 3px"></i> Báo cáo
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Mua hàng">
            <i class="fas fa-chart-pie" style="margin-left: 2px"></i> Mua hàng
          </a>
        </li>
        <li>
          <a class="nav-item" href="employee.html" alt="Danh mục nhân viên">
            <i class="fas fa-users"></i> Danh mục nhân viên
          </a>
        </li>
        <li>
          <a class="nav-item" href="customer.html" alt="Danh mục khách hàng">
            <i class="fas fa-users"></i> Danh mục khách hàng
          </a>
        </li>
        <li>
          <a class="nav-item" href="#" alt="Thiết lập hệ thống">
            <i class="fas fa-cog" style="margin-left: 3px"></i> Thiết lập hệ
            thống
          </a>
        </li>
      </ul>
      <button id="navbarHide" class="btn btn-icon-left">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right btn-icon-hide"></i>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/common/common.css";
@import "../assets/css/common/navbar.css";
@import "../assets/css/common/main.css";
@import "../assets/css/common/icon.css";
</style>
