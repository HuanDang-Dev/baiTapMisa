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
      reg: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
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
      if (this.isValid && this.req) {
        this.title = "Trường này không được để trống";
      }
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
    validBlur() {
      if (this.typeName == "email") {
        this.isEmailValid();
      }
      if (this.typeName == "money") {
        this.formatMoney();
      }

      // gửi lên để xem trường required đã được điền chưa
      this.$emit("validRequired", this.isValid);
    },
    isEmailValid() {
      if (this.reg.test(this.value)) {
        this.isValid = false;
      } else {
        this.isValid = true;
        this.title = "Email không đúng định dạng";
      }
    },
    formatMoney() {
      let stringValue = Number(this.value.toString().replaceAll(".", ""));
      let formatValue = stringValue
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+\b)/g, "$1.");
      this.$emit("formatMoney", formatValue);
    },
  },
};
</script>