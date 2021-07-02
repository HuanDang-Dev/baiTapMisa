$(document).ready(function() {
    new EmployeeJS();
})

/**
 * Class quản lý sự kiện cho trang Employee
 * CreatedBy: DVHUAN(1/7/2021)
 */
class EmployeeJS extends BaseJS {
    constructor() {
        super();
        this.initEventsEmployee();
    }

    initEventsEmployee() {

        // Hộp lựa chọn nhà hàng
        showSelect('#selectedRestaurant', '#optionRestaurant');
        hideSelect('#optionRestaurant', '#selectedRestaurant');

        // Hộp lựa chọn phòng ban
        showSelect('#selectedDepartment', '#optionDepartment');
        hideSelect('#optionDepartment', '#selectedDepartment');

        // Hộp lựa chọn vị trí
        showSelect('#selectedPosition', '#optionPosition');
        hideSelect('#optionPosition', '#selectedPosition');

        // Hộp lựa chọn giới tính
        showSelect('#selectedGender', '#optionGender');
        hideSelect('#optionGender', '#selectedGender');

        // Hộp lựa chọn vị trí trong dialog
        showSelect('#selectedPositionDialog', '#optionPositionDialog');
        hideSelect('#optionPositionDialog', '#selectedPositionDialog');

        // Hộp lựa chọn phòng ban trong dialog
        showSelect('#selectedDepartmentDialog', '#optionDepartmentDialog');
        hideSelect('#optionDepartmentDialog', '#selectedDepartmentDialog');

        // Hộp lựa chọn tình trạng công việc trong dialog
        showSelect('#selectedStatusWork', '#optionStatusWork');
        hideSelect('#optionStatusWork', '#selectedStatusWork');

        $('#pageSlide .page-item').click(function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
        })

    }

}

/***
 * Hàm viết hiển thị hộp option trong select
 * Created: DVHUAN 2/7/2021
 */
function showSelect(select, option) {
    $(select).click(function() {
        $(select + " i").removeClass('fa-chevron-down');
        $(select + " i").addClass('fa-chevron-up');
        $(option).show();
    });
};

/***
 * Hàm viết truyền dữ liệu lên select và ẩn hôp option
 * Created: DVHUAN 2/7/2021
 */
function hideSelect(option, select) {
    $(option + " li").click(function() {
        var value = $(this).text();
        $(select).text(value);
        $(select).append('<i class="fas fa-chevron-down"></i>');
        $(option).hide();
    });
};