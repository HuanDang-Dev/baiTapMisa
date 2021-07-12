<template>
  <div class="box-selected">
    <div>
      <input
        :value="value"
        :class="comboboxClass"
        @input="updateValue"
        @change="updateValue"
        @mousedown="eventFocus()"
        @keydown="isShowOptions = true"
        v-bind="$attrs"
      />
      <div
        class="box-icon"
        v-on="$listeners"
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
        :selected="option === inputValue"
        @click="optionValue(index), eventFocus()"
      >
        <i class="fas fa-check"></i>{{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    comboboxClass: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    value: [String, Number],
    isShow: [Boolean],
  },
  data() {
    return {
      inputValue: this.value,
      isShowOptions: this.isShow,
    };
  },
  watch: {
    isShow() {
      this.isShowOptions = this.isShow;
    },
    value() {
      this.inputValue = this.value;
    },
  },
  computed: {
    autoCompelete() {
      var me = this;
      var listsOption = me.options.filter(function (db) {
        return db.name.toLowerCase().indexOf(me.value.toLowerCase()) >= 0;
      });
      if (listsOption.length > 0) {
        // me.isShowOptions = true;
        return listsOption;
      } else {
        me.isShowOptions = false;
      }
      return false;
    },
  },
  methods: {
    showOption() {
      this.isShowOptions = !this.isShowOptions;
      this.$emit("isShowOption", this.isShowOptions);
    },
    eventFocus() {
      this.isShowOptions = !this.isShowOptions;
      this.$emit("isShowOption", this.isShowOptions);
    },
    optionValue(index) {
      this.inputValue = this.options[index].name;
      this.$emit("isTitleOption", this.inputValue);
    },
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
    eventClick() {
      this.$emit("eventClick");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/icon.css";
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