export const formatString = {
  methods: {
    formatDate(date) {
      if (!date) {
        return "";
      }
      var dateTime = new Date(date);
      if (Number.isNaN(dateTime.getTime())) {
        return "";
      } else {
        var day = dateTime.getDate(),
          month = dateTime.getMonth() + 1,
          year = dateTime.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;

        return year + "-" + month + "-" + day;
      }
    },
    formatMoney(money) {
      if (money) {
        return parseFloat(money)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+\b)/g, "$1.");
      }
      return "";
    },
  },
};
