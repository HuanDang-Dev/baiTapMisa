<template>
  <div class="paging-bar">
        <div class="hint-text">Hiển thị <b>1-10/1000</b> nhân viên</div>
        <ul id="pageSlide" class="pagination">
          <li class="page-item-icon" @click="pageActive(0)">
            <a href="#">
              <img
                src="../../assets/icon/btn-firstpage.svg"
                alt="Trang đầu tiên"
              />
            </a>
          </li>
          <li class="page-item-icon" @click="pageActive(isActive-1 > -1 ? isActive-1 : isActive )">
            <a href="#">
              <img
                src="../../assets/icon/btn-prev-page.svg"
                alt="Trang trước"
              />
            </a>
          </li>
          <li class="page-item" v-for="(value, index) in values" :key="index" 
            @click="pageActive(index)" :class="{ active : isActive == index }">
            <a href="#" class="page-link">
            {{value.id}}</a>
          </li>
          <li class="page-item-icon" @click="pageActive(isActive+1 < 4 ? isActive+1 : isActive )">
            <a href="#">
              <img src="../../assets/icon/btn-next-page.svg" alt="Trang sau" />
            </a>
          </li>
          <li class="page-item-icon" @click="pageActive(3)">
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
</template>

<script>
export default {
  name: "FooterPaging",
  data() {
    return {
      isActive: 1,
      values: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]
    }
  },
  methods: {
    pageActive(id) {
      this.isActive = id;
    }
  }
};
</script>

<style scoped>
</style>
