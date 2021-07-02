/**
 * Format dữ liệu ngày tháng sang ngày/tháng/năm
 * tham số có kiểu dữ liệu bất kỳ
 * CreatedBy: DVHUAN(1/7/2021)
 */

function formatDate(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return "";
    } else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        return day + '/' + month + '/' + year;
    }
}

/**
 * Format dữ liệu tiền tệ
 * tham số có kiểu dữ liệu bất kỳ
 * CreatedBy: DVHUAN(1/7/2021)
 */
function formatMoney(money) {
    if (money) {
        return money.toFixed(0).replace(/(\d)(?=(\d{3})+\b)/g, '$1.');
    }
    return "";
}