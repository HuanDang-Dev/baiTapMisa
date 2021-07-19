export const showPopup = {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    cancelDialog() {
      this.showPopup = true;
    },
    continueCancelDialog() {
      this.showPopup = false;
      this.$emit("cancelDialog");
    },
  },
};
