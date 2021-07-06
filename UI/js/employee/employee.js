$(document).ready(function() {
    // Khởi tạo một đối tượng Employee ngay sau khi DOM tải xong
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

    setDataUrl() {
        this.getDateUrl = "http://cukcuk.manhnv.net/v1/Employees";
    };

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

        /**
         * Khi nhấn chuyển trang thì trang được chọn sẽ có class "active"
         * CreateBy: DVHUAN(3/7/2021)
         */
        $('#pageSlide .page-item').click(function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
        })

        /**
         * Trong dialog, khi nhấn vào avatar default thì sẽ gọi đến input file để tải file lên
         * CreateBy: DVHUAN(5/7/2021)
         */
        $('#btnAvatar').click(function() {
            $("#fileInput").click();
        })

    }

}