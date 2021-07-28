<template>
  <div>
    <table
      cellspacing="0"
      width="100%"
    >
      <thead class="fixedHeader">
        <tr>
          <th
            v-for="(columnName, index) in columnNames"
            :key="index"
            :class="columnName.class"
          >{{columnName.text}}</th>
        </tr>
      </thead>
      <tbody
        class="fixedContent"
        v-if="isShowLoader == false"
      >
        <tr
          v-for="(item, index) in dataset"
          :key="index"
          :class="{ active : isActive == index }"
          @dblclick="setIndexTable(index), getDataEmployee()"
          @contextmenu="setPositionMouse($event), setIndexTable(index)"
        >
          <td
            v-for="(value, key) in mapData(item)"
            :key="key"
            :class="setClass(key)"
          >{{value}}</td>
        </tr>
      </tbody>
    </table>
    <base-modified
      v-show="isModified"
      :style="{top: positionY, left: positionX}"
      @delete="deleteEmployee(deleteID), isModified= false"
    ></base-modified>

    <base-loader v-if="isShowLoader == true"></base-loader>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { clickOutside } from "../../mixins/clickOutside";
import { formatString } from "../../mixins/formatString";
import { itemActive } from "../../mixins/itemActive";
export default {
  mixins: [formatString, clickOutside, itemActive],
  inheritAttrs: false,
  props: {
    // Các trường có trong bảng được truyền xuống từ cha
    columnNames: {
      type: Array,
      required: true,
    },
    // Giá trị value tại input search
    search: {
      type: String,
      default: "",
    },
    // Giá trị value tại input search
    searchValueDepartment: {
      type: String,
      default: "",
    },
    // Giá trị value tại input search
    searchValuePosition: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // Hiển thị modified để xem thông tin chi tiết hoặc xóa nhân viên
      isModified: false,
      positionX: "",
      positionY: "",
      deleteID: "",
      alignColumns: this.columnNames.filter((item) => item.class),
    };
  },
  // lấy dữ liệu khi component được tạo thành công
  mounted() {
    this.$store.dispatch("getEmployee");
  },
  computed: {
    dbEmployee() {
      return this.$store.state.dbEmployee;
    },
    isShowLoader() {
      return this.$store.state.isShowLoader;
    },
    /**
      Hiển thị dữ liệu ra bảng
      CreatedBy: DVHUAN(14/07/2021)
     */
    dataset() {
      var me = this;
      return this.dbEmployee.filter(function (db) {
        return (
          (db.EmployeeCode?.toLowerCase().indexOf(me.search?.toLowerCase()) >=
            0 &&
            db.DepartmentName?.toLowerCase().indexOf(
              me.searchValueDepartment?.toLowerCase()
            ) >= 0 &&
            db.PositionName?.toLowerCase().indexOf(
              me.searchValuePosition?.toLowerCase()
            ) >= 0) ||
          (db.FullName?.toLowerCase().indexOf(me.search?.toLowerCase()) >= 0 &&
            db.DepartmentName?.toLowerCase().indexOf(
              me.searchValueDepartment?.toLowerCase()
            ) >= 0 &&
            db.PositionName?.toLowerCase().indexOf(
              me.searchValuePosition?.toLowerCase()
            ) >= 0)
          // db.FullName.toLowerCase().indexOf(me.search?.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    ...mapActions(["deleteEmployee"]),
    setPositionMouse(e) {
      e.preventDefault();
      this.positionX = e.pageX - 230 + "px";
      this.positionY = e.pageY - 170 + "px";
      this.isModified = true;
    },
    setIndexTable(index) {
      this.isActive = index;
      this.deleteID = this.dataset[index];
    },
    mapData(item) {
      let newItem = {};
      this.columnNames.forEach((c) => {
        switch (c.format) {
          case "date":
            newItem = {
              ...newItem,
              [c.key]: this.formatDate(item[c.key], true),
            };
            return;
          case "money":
            newItem = { ...newItem, [c.key]: this.formatMoney(item[c.key]) };
            return;
          case "statusWork":
            newItem = {
              ...newItem,
              [c.key]: this.formatStatusWork(item[c.key]),
            };
            return;
        }
        newItem = { ...newItem, [c.key]: item[c.key] };
      });
      return newItem;
    },
    /**
     * Hàm trả về tên class trong columnNames
     * CreatedBy: DVHUAN 13/07/2021
     */
    setClass(key) {
      const positionAlign = this.alignColumns.findIndex(
        (item) => item.key == key
      );
      if (positionAlign > -1) {
        return this.alignColumns[positionAlign].class;
      }
      return "";
    },
    /**
      Truyền dữ liệu lên dialog khi ấn đúp chuột vào tr trong bảng
      CreatedBy: DVHUAN(14/07/2021)
     */
    getDataEmployee() {
      let dataEmployee = {};
      dataEmployee = { ...dataEmployee, ...this.dataset[this.isActive] };
      dataEmployee.DateOfBirth = this.formatDate(dataEmployee.DateOfBirth);
      dataEmployee.IdentityDate = this.formatDate(dataEmployee.IdentityDate);
      /**
       Ngày gia nhập công ty
       */
      // dataEmployee.IdentityDate = this.formatDate(
      //   dataEmployee.IdentityDate
      // );
      this.$emit("showEmployee", dataEmployee);
    },
  },
};
</script>
