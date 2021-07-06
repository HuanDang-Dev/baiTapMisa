<template>
  <div class="header">
    <div class="logo-site">
        <img id="navbarShow" class="toggle-icon" src="../assets/img/toggle.png" alt="#">
        <img class="amil-icon" src="../assets/img/cukcuk-logo.png" alt="cukcuk.vn">
    </div>
    <div class="header-body">
        <div class="header-content">
            <div class="header-selected">
                <div class="box-selected">
                    <div id="selectedRestaurant" class="header-style-selected">
                        Nhà hàng Biển Đông
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul id="optionRestaurant" class="box-option">
                        <li class="option">
                            <i class="fas fa-check"></i>Nhà hàng Biển Đông
                        </li>
                        <li class="option">
                            <i class="fas fa-check"></i>Nhà hàng Biển Tây
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="profile">
            <img src="../assets/icon/avatar-default.png" alt="nvManh">
            <h5>Nguyễn Văn Mạnh</h5>
            <div class="icon-option-default-16"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/common/header.css';
@import '../assets/css/common/icon.css';
</style>
