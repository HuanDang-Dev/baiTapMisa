export const clickOutside = {
  created() {
    document.addEventListener("click", this.documentClick);
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.dropdownMenu;
      let elSelect = this.$refs.selectOptions;
      let target = e.target;
      if (el !== target && !el?.contains(target)) {
        this.isShowOptions = false;
        this.isModified = false;
        this.isActive = -1;
      }
      if (elSelect !== target && !elSelect?.contains(target)) {
        this.isShowSelectOptions = false;
        this.$emit("isShowSelectOption", false);
      }
    },
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  },
};
