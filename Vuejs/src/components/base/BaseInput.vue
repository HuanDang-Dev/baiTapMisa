<template>
  <div>
    <label
      class="m-label"
      v-if="label"
    >{{ label }}
      <span v-if="req == true">(<span style="color: red">*</span>)</span>
    </label>
    <input
      ref="input"
      :title="title"
      :value="value"
      :class="isValid && req ? inputClass + ' input-required' : inputClass"
      @input="updateValue"
      @blur="isActiveFocus = true, validBlur()"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    inputClass: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    req: {
      type: Boolean,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    typeName: {
      type: String,
    },
  },
  data() {
    return {
      isActiveFocus: false,
      isValid: false,
      title: "",
    };
  },
  watch: {
    isActiveFocus() {
      if (this.value == "") {
        this.isValid = true;
      }
    },
    value() {
      if (this.value == "") {
        this.isValid = true;
      }
      if (this.value) {
        this.isValid = false;
      }

      // lỗi khi thêm số ở giữa thì con trỏ trở về cuối của chuỗi
      if (this.typeName == "money") {
        this.formatMoney();
      }
    },
    isValid() {
      if (this.isValid && this.req && !this.typeName) {
        this.title = "Trường này không được để trống";
      }
    },
  },
  created() {
    this.$emit("validRequired", this.isValid);
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
    validBlur() {
      switch (this.typeName) {
        case "email":
          this.isEmailValid();
          break;
        case "money":
          this.formatMoney();
          break;
        case "phone":
          this.formatPhone();
          break;
        case "identityNumber":
          this.formatNumber();
          break;
      }

      // gửi lên để xem trường required đã được điền chưa
      this.$emit("validRequired", this.isValid);
    },
    formatMoney() {
      let numberValue = Number(this.value.toString().replaceAll(".", ""));
      let formatValue = numberValue
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+\b)/g, "$1.");
      this.$emit("formatMoney", formatValue);
    },
    isEmailValid() {
      let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      this.formatValid(reg, "Email không đúng định dạng");
    },
    formatPhone() {
      let reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
      this.formatValid(reg, "Số điện thoại không đúng định dạng");
    },
    formatNumber() {
      var reg = /^\d+$/;
      this.formatValid(
        reg,
        "Số CMNT không đúng định dạng. Yêu cầu số CMND phải toàn là số"
      );
    },
    formatValid(reg, smg) {
      if (reg.test(this.value)) {
        this.isValid = false;
      } else {
        this.isValid = true;
        if (this.value == "") {
          this.title = "Trường này không được để trống";
        } else this.title = smg;
      }
    },
  },
};
</script>