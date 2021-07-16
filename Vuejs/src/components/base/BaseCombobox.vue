<template>
  <div class="box-selected">
    <div>
      <input
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
        v-bind:class="{'option-visited' : current == index}"
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
    value: {
      type: String,
      default: "",
    },
    isShow: [Boolean],
  },
  data() {
    return {
      inputValue: this.value,
      inputRequired: false,
      isShowOptions: this.isShow,
      listsAutoCompelete: [],
      current: -1,
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
  },
  computed: {
    autoCompelete() {
      var me = this;
      me.listsAutoCompelete = me.options.filter(function (db) {
        return db?.name?.toLowerCase()?.indexOf(me.value?.toLowerCase()) >= 0;
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
        this.inputValue = this.listsAutoCompelete[this.current].name;
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
      this.isShowOptions = !this.isShowOptions;
      this.inputValue = this.listsAutoCompelete[index].name;
      this.$emit("updateValueOption", this.inputValue);
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

.option-visited {
  background-color: #019160;
  color: #fff;
}
</style>