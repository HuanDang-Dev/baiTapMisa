class BaseJS {
    constructor() {
        this.getDateUrl = null;
        this.setDataUrl();
        this.initEvents();
        this.loadData();
    }

    setDataUrl(){
    }

    loadData() {
        try {
            // Lấy thông tin các cột dữ liệu
            var columns = $('table thead th');
            var getDateUrl = this.getDateUrl;

            //Lấy dữ liệu
            $('table tbody').empty();
            $.ajax({
                url: getDateUrl,
                method: "GET",
            }).done(function(res) {
                $.each(res, function(index, obj) {
                    var tr = $(`<tr></tr>`);

                    // Lấy thông tin dữ liệu sẽ map tương ứng với các cột trong bảng
                    $.each(columns, function(index, th) {
                        var td = $(`<td><div><span></span></div></td>`);
                        var fieldName = $(th).attr("fieldName");
                        var value = obj[fieldName];
                        var formatType = $(th).attr("formatType");

                        switch (formatType) {
                            case "ddmmyyyy":
                                td.addClass("text-align-center");
                                value = formatDate(value);
                                break;
                            case "moneyVND":
                                td.addClass("text-align-right");
                                value = formatMoney(value);
                                break;
                            default:
                        }

                        td.append(value);
                        $(tr).append(td);
                    })
                    $('table tbody').append(tr);
                })
            }).fail(function(res) {

            })

            // Binding dữ liệu
        } catch (error) {
            // Ghi lỗi
            console.log(error);
        }
    }

    
    /**
     * Các hàm sự kiện khi click chuột
     * CreatedBy: DVHUAN(1/7/2021)
     */
    initEvents() {
        // Khởi tạo và gán biến me cho đối tượng BaseJS
        var me = this;

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
        btnShowNavbar('#navbarShow');

        // Hiện thị navbar với icon chevron-right
        btnShowNavbar('#navbarHide .fa-chevron-right');

        // Ẩn thanh narbar
        btnHideNavbar('#navbarHide .fa-chevron-left');

        // Load lại dữ liệu khi ấn button refresh
        $('#btnRefresh').click(function() {
            me.loadData();
        });

        // Hiển thị thông tin chi tiết khi nhấn đúp chuột chọn 1 bản ghi trong danh sách

    }

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


function btnShowNavbar(id) {
    $(id).click(function() {
        $('.navbar').removeClass('navbar-min-width');
        $('#content').addClass('content-flex');
        $('.navbar').addClass('navbar-width');
        $('#navbarHide .fa-chevron-right').addClass('btn-icon-hide');
        $('#navbarHide .fa-chevron-left').removeClass('btn-icon-hide');
    });
}

function btnHideNavbar(id) {
    $(id).click(function() {
        $('.navbar').removeClass('navbar-width');
        $('.navbar').addClass('navbar-min-width');
        $('#content').removeClass('content-flex');
        $('#navbarHide .fa-chevron-right').removeClass('btn-icon-hide');
        $('#navbarHide .fa-chevron-left').addClass('btn-icon-hide');
    });
}