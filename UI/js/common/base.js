class BaseJS {
    /**
     * Hàm khởi tạo class BaseJS
     * CreatedBy: DVHUAN(1/7/2021)
     */
    constructor() {
        // Các hàm sẽ chạy sau khi khởi tạo class BaseJS
        this.getDateUrl = null;
        this.setDataUrl();
        this.initEvents();
        this.loadData();
    }

    /**
     * Hàm gán địa chỉ API, dùng biến getDateUrl mặc định là null
     * CreatedBy: DVHUAN(1/7/2021)
     */
    setDataUrl() {}

    /**
     * Hàm load dữ liệu từ Database
     * CreatedBy: DVHUAN(1/7/2021)
     */
    loadData() {
        try {
            // Lấy thông tin các cột dữ liệu
            var columns = $("table thead th");
            var getDateUrl = this.getDateUrl;

            //Lấy dữ liệu
            $("table tbody").empty();
            $.ajax({
                    url: getDateUrl,
                    method: "GET",
                    // data:"",    // tham số cần thiết cho API
                })
                .done(function(res) {
                    $.each(res, function(index, obj) {
                        var tr = $(`<tr></tr>`);

                        // Lấy thông tin dữ liệu sẽ map tương ứng với các cột trong bảng
                        $.each(columns, function(index, th) {
                            // Dựng các ô trong cột
                            var td = $(`<td><div><span></span></div></td>`);
                            // Gán tương ứng từ DB tới các cột tương ứng fieldName
                            var fieldName = $(th).attr("fieldName");
                            // Gán giá trị vào ô tương ứng
                            var value = obj[fieldName];
                            // Format dữ liệu để hiển thị cho đúng
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
                            // Thêm giá trị vào các ô vừa dựng lên
                            if (value) {
                                td.append(value);
                            } else {
                                td.append("Không xác định");
                            }
                            // Thêm các ô vừa dựng được vào hàng
                            $(tr).append(td);
                        });
                        $("table tbody").append(tr);
                    });
                })
                .fail(function(res) {
                    // Ghi res trả về
                    console.log(res);
                });

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
        dialogShow("#btnAdd");

        // Sự kiện click khi muốn đóng dialog
        dialogHide("#btnClose");

        // Ẩn form khi muốn hủy
        dialogHide("#btnCancel");

        // Hiển thị thanh navbar
        btnShowNavbar("#navbarShow");

        // Hiện thị navbar với icon chevron-right
        btnShowNavbar("#navbarHide .fa-chevron-right");

        // Ẩn thanh narbar
        btnHideNavbar("#navbarHide .fa-chevron-left");

        /**
         * Load lại dữ liệu khi ấn button refresh
         * CreatedBy: DVHUAN(5/7/2021)
         */
        $("#btnRefresh").click(function() {
            me.loadData();
        });

        /**
         * Hiển thị thông tin chi tiết người dùng khi ấn đúp chuột vào hàng của bảng
         * CreatedBy: DVHUAN(5/7/2021)
         */
        $("tbody").on("dblclick", "tr", function() {
            // Xóa background color của các hàng khác
            $("tbody tr").css("background-color", "");
            // Thêm màu cho hàng được chọn
            $(this).css("background-color", "#019160");
            // Hiển thị dialog
            $(".dialog-detail").show();
            $("#txtEmployeeCode").focus();
        });

        /**
         * Thực hiện lưu trữ dữ liệu khi ấn "Lưu" trên form dialog
         * CreatedBy: DVHUAN(5/7/2021)
         */
        $("#btnSave").click(function() {
            // Validate dữ liệu
            // Báo đỏ ở các trường để trống và nhập sai định dạng
            var inputValidates = $('input[required], input[type="email"]');
            $.each(inputValidates, function(index, input) {
                $(input).trigger("blur");
            });

            var inputNotValids = $('input[validate="false"]');
            if (inputNotValids && inputNotValids.length > 0) {
                alert("Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.");
                // Focus lại vào trường đầu tiên cần nhập để người dùng dễ nhận biết
                inputNotValids[0].focus();
                return;
            }

            // Thu thập thông tin dữ liệu nhâp. Sau đó build thành object
            var employee = {
                EmployeeCode: $("#txtEmployeeCode").val(),
                FullName: $("#txtFullName").val(),
                Gender: 0,
                Email: $("#txtEmail").val(),
                DateOfBirth: $("#dtDateOfBirth").val(),
                PhoneNumber: $("#txtPhoneNumber").val(),
                IdentityNumber: $("#txtIdentityNumber").val(),
                IdentityDate: $("#txtIdentityDate").val(),
                IdentityPlace: $("#txtIdentityPlace").val(),
                PersonalTaxCode: $("#txtPersonalTaxCode").val(),
                Salary: $("#txtSalary").val(),
                JoinDate: $("#txtJoinDate").val(),
                PositionName: 0,
                DepartmentName: 0,
                WorkStatus: 2,
            };
            console.log(employee);

            // Gọi Service tương ứng thực hiện lưu trữ dữ liệu
            $.ajax({
                    url: "http://api",
                    method: "POST",
                    data: JSON.stringify(employee),
                    contentType: "application/json",
                })
                .done(function(res) {
                    // thông báo thành công hay thất bại cho người dùng. Và ẩn form, load lại dữ liệu
                    alert("Thêm dữ liệu thành công");
                    // Ẩn dialog
                    $(".dialog-detail").hide();
                    // Sau đó load lại data
                    me.loadData();
                })
                .fail(function(res) {});
        });

        /**
         * Validate bắt buộc nhập
         * CreatedBy: DVHUAN(6/7/2021)
         */
        $("input[required]").blur(function() {
            // Kiểm tra dữ liệu đã nhập, nếu để trống thì cảnh báo
            var value = $(this).val();
            if (!value) {
                $(this).addClass("input-required");
                $(this).attr("title", "Trường này không được phép để trống");
                $(this).attr("validate", false);
            } else {
                $(this).removeClass("input-required");
                $(this).attr("validate", true);
            }
        });

        /**
         * Kiểm tra email đúng định dạng
         * CreatedBy: DVHUAN(6/7/2021)
         */
        $('input[type="email"]').blur(function() {
            var value = $(this).val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (!testEmail.test(value)) {
                $(this).addClass("input-required");
                $(this).attr("title", "Email không đúng định dạng");
                $(this).attr("validate", false);
            } else {
                $(this).attr("validate", true);
            }
        });

        /**
         * Format tiền lương đúng định dạng
         * CreatedBy: DVHUAN(6/7/2021)
         */
        $("#txtSalary").blur(function() {
            var salary = $(this).val();
            var valueSalary = formatMoney(salary);
            $(this).val(valueSalary);
        });

        /**
         * Tra thông tin trong bảng dữ liệu
         * CreatedBy: DVHUAN(6/7/2021)
         */
        $("#searchDataTable").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("tbody tr").filter(function() {
                $(this).toggle(
                    $(this).children(":first").text().toLowerCase().indexOf(value) > -1 ||
                    $(this)
                    .children(":first")
                    .next()
                    .text()
                    .toLowerCase()
                    .indexOf(value) > -1
                );
            });
        });
    }

    /**
     * Thêm mới dữ liệu
     * CreatedBy: DVHUAN(1/7/2021)
     */
    add() {}

    /**
     * Sửa dữ liệu
     * CreatedBy: DVHUAN(1/7/2021)
     */
    edit() {}

    /**
     * Xóa dữ liệu
     * CreatedBy: DVHUAN(1/7/2021)
     */
    delete() {}
}

/**
 * Hiển thị dialog
 * CreatedBy: DVHUAN(1/7/2021)
 */
function dialogShow(id) {
    $(id).click(function() {
        $(".dialog-detail").show();
        $("#txtEmployeeCode").focus();
    });
}

/**
 * Ẩn dialog
 * CreatedBy: DVHUAN(1/7/2021)
 */
function dialogHide(id) {
    $(id).click(function() {
        $(".dialog-detail").hide();
    });
}

/**
 * Hiển thị navbar
 * CreatedBy: DVHUAN(1/7/2021)
 */
function btnShowNavbar(id) {
    $(id).click(function() {
        $(".navbar").removeClass("navbar-min-width");
        $("#content").addClass("content-flex");
        $(".navbar").addClass("navbar-width");
        $("#navbarHide .fa-chevron-right").addClass("btn-icon-hide");
        $("#navbarHide .fa-chevron-left").removeClass("btn-icon-hide");
    });
}

/**
 * Ẩns navbar
 * CreatedBy: DVHUAN(1/7/2021)
 */
function btnHideNavbar(id) {
    $(id).click(function() {
        $(".navbar").removeClass("navbar-width");
        $(".navbar").addClass("navbar-min-width");
        $("#content").removeClass("content-flex");
        $("#navbarHide .fa-chevron-right").removeClass("btn-icon-hide");
        $("#navbarHide .fa-chevron-left").addClass("btn-icon-hide");
    });
}

/***
 * Hàm viết hiển thị hộp option trong select
 * Created: DVHUAN 2/7/2021
 */
function showSelect(select, option) {
    $(select).click(function() {
        $(select + " i").removeClass("fa-chevron-down");
        $(select + " i").addClass("fa-chevron-up");
        $(select).addClass("selected-focus");
        $(option).show();
    });
}

/***
 * Hàm viết truyền dữ liệu lên select và ẩn hôp option
 * Created: DVHUAN 2/7/2021
 */
function hideSelect(option, select) {
    $(option + " li").click(function() {
        var value = $(this).text();
        $(select).text(value);
        $(select).append('<i class="fas fa-chevron-down"></i>');
        $(select).removeClass("selected-focus");
        $(option).hide();
    });
}