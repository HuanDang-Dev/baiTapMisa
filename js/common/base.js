class BaseJS {
    constructor() {
        this.getDateUrl = null;
        this.setDataUrl();
        this.initEvents();
        // this.loadData();
    }

    initEvents() {
        //Sự kiện click khi thêm mới
        $('#btnAdd').click(function() {
            // Hiển thị dialog
            $('.dialog-detail').show();
        });

        // Sự kiện click khi muốn đóng dialog
        $('#btnClose').click(function() {
            // Đóng dialog
            $('.dialog-detail').hide();
        });

        // Ẩn form khi muốn hủy
        $('#btnCancel').click(function() {
            // Đóng dialog
            $('.dialog-detail').hide();
        });

        // Hiển thị thanh navbar
        $('#navbarShow').click(function() {
            $('.navbar').show('slow');
        });

        // Ẩn thanh narbar
        $('#navbarHide').click(function() {
            $('.navbar').hide('slow');
        });

        // Load lại dữ liệu khi ấn button nạp
        $('#btnRefresh').click(function() {

        })

    }

    setDataUrl() {}

    // loadData() {
    //     try {
    //         // Lấy thông tin các cột dữ liệu
    //         var columns = $("table thead th");
    //         var getDateUrl = this.getDateUrl;

    //         //Lấy dữ liệu
    //         $.ajax({
    //             url: getDateUrl,
    //             method: "GET",
    //         }).done(function(res) {
    //             $.each(res, function(index, obj) {
    //                 var tr = $(`<tr></tr>`);

    //                 // Lấy thông tin dữ liệu sẽ map tương ứng với các cột trong bảng
    //                 $.each(columns, function(index, th) {
    //                     var td = $(`<td><div><span></span></div></td>`);
    //                     var fieldName = $(th).attr("fieldName");
    //                     var value = obj[fieldName];
    //                     var formatType = $(th).attr("formatType");

    //                     switch (formatType) {
    //                         case "ddmmyyyy":
    //                             td.addClass("text-align-center");
    //                             value = formatDate(value);
    //                             break;
    //                         case "moneyVND":
    //                             td.addClass("text-align-right");
    //                             value = formatMoney(value);
    //                             break;
    //                         default:
    //                     }

    //                     td.append(value);
    //                     $(tr).append(td);
    //                 })
    //                 $('table tbody').append(tr);
    //             })
    //         }).fail(function(res) {

    //         })

    //         // Binding dữ liệu
    //     } catch (error) {
    //         // Ghi lỗi
    //         console.log(error);
    //     }
    // }

    /**
     * Thêm mới dữ liệu
     * CreatedBy: DVHUAN(1/7/2021)
     */
    add() {

    }

    /**
     * Sửa dữ liệu
     * CreatedBy: DVHUAN(1/7/2021)
     */
    edit() {

    }

    /**
     * Xóa dữ liệu
     * CreatedBy: DVHUAN(1/7/2021)
     */
    delete() {

    }
}