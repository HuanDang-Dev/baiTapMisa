<template>
  <div
    class="box-selected"
    ref="dropdownMenu"
  >
    <div>
      <input
        ref="combobox"
        :value="value"
        :class="inputRequired ? comboboxClass + ' input-required': comboboxClass"
        @input="updateValue"
        @mousedown="eventFocus()"
        @keydown="isShowOptions = true"
        @keydown.enter="keyenterEvent"
        @keydown.down="keydownEvent"
        @keydown.up="keyupEvent"
        v-bind="$attrs"
      />
      <div
        class="box-icon"
        @click="showListItem"
      >
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <ul
      class="box-option"
      v-show="isShowOptions === true"
    >
      <li
        class="option"
        v-for="(option, index) in autoCompelete"
        :key="index"
        :value="option"
        v-bind:class="{active : isActive == index, 'item-hover': current == index}"
        @click="optionValue(index), eventFocus()"
      >
        <i class="fas fa-check"></i>{{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import { clickOutside } from "../../mixins/clickOutside";
export default {
  mixins: [clickOutside],
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    comboboxClass: {
      type: String,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,
      inputRequired: false,
      isShowOptions: false,
      listsAutoCompelete: [],
      current: -1,
      isActive: -1,
    };
  },
  watch: {
    isShow() {
      this.isShowOptions = this.isShow;
      if (this.inputRequired == true) {
        this.isShowOptions = false;
      }
    },
    value() {
      this.inputValue = this.value;
    },
    listsAutoCompelete() {
      if (!this.inputValue) {
        this.isActive = -1;
      }
      for (let i = 0; i < this.options.length; i++) {
        if (this.inputValue == this.options[i]) {
          this.isActive = i;
        }
      }
    },
    inputValue() {
      this.isActive = -1;
    },
  },
  computed: {
    autoCompelete() {
      var me = this;
      for (let i = 0; i < this.options.length; i++) {
        if (this.inputValue == this.options[i]) {
          me.isActive = i;
          me.listsAutoCompelete = [...this.options];
          return me.listsAutoCompelete;
        }
      }

      me.listsAutoCompelete = me.options.filter(function (db) {
        return me
          .toSlug(db)
          ?.toLowerCase()
          .includes(me.toSlug(me.value)?.toLowerCase());
      });

      if (me.listsAutoCompelete.length > 0) {
        me.inputRequired = false;
        return me.listsAutoCompelete;
      } else {
        me.isShowOptions = false;
        me.inputRequired = true;
      }
      return me.listsAutoCompelete;
    },
  },
  methods: {
    keydownEvent() {
      this.current++;
      if (this.current == this.listsAutoCompelete.length) {
        this.current = 0;
      }
    },
    keyupEvent() {
      this.current--;
      if (this.current <= -1) {
        this.current = this.listsAutoCompelete.length - 1;
      }
    },
    keyenterEvent() {
      if (this.listsAutoCompelete[this.current]) {
        this.isShowOptions = !this.isShowOptions;
        this.inputValue = this.listsAutoCompelete[this.current];
        this.$emit("updateValueOption", this.inputValue);
        this.current = -1;
      } else {
        this.listsAutoCompelete[this.current] = "";
      }
    },
    showOption() {
      this.isShowOptions = !this.isShowOptions;
      this.$emit("isShowOption", this.isShowOptions);
    },
    eventFocus() {
      this.isShowOptions = !this.isShowOptions;
      this.$emit("isShowOption", this.isShowOptions);
    },
    optionValue(index) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.inputValue == this.options[i]) {
          this.current = i;
        }
      }
      this.inputValue = this.listsAutoCompelete[index];
      this.$emit("updateValueOption", this.inputValue);
    },
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
    eventClick() {
      this.$emit("eventClick");
    },
    showListItem() {
      this.$refs.combobox.focus();
      this.isShowOptions = true;
    },
    // Hàm chuyển tiếng việt sang tiếng anh
    toSlug(str) {
      if (!str) {
        return "";
      }

      // Chuyển hết sang chữ thường
      str = str.toLowerCase();

      // xóa dấu
      str = str
        .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
        .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

      // Thay ký tự đĐ
      str = str.replace(/[đĐ]/g, "d");

      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, "");

      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, "-");

      // Xóa ký tự - liên tiếp
      str = str.replace(/-+/g, "-");

      // xóa phần dư - ở đầu & cuối
      str = str.replace(/^-+|-+$/g, "");

      // return
      return str;
    },
  },
};
</script>

<style scoped>
input {
  margin: 0;
}
.box-icon {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 13px;
  height: 40px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #bbb;
  border-radius: 0 4px 4px 0;
}

.box-icon:hover {
  background-color: #bbb;
}
</style>