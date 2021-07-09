<template>
  <div class="dialog-detail">
    <div class="dialog-model"></div>
    <div class="dialog-content">
      <div class="dialog-header">
        <div class="dialog-header-title">Thông tin nhân viên</div>
        <div class="dialog-header-close">
          <base-button
            @click="cancelDialog()"
            buttonClass="icon-close"
          >
          </base-button>
        </div>
      </div>
      <div class="dialog-body">
        <form
          class="dialog-info"
          action="/action_page.php"
        >
          <div class="dialog-avatar">
            <div class="box-icon-avatar">
              <button
                class="icon-avatar"
                type="button"
              ></button>
            </div>
            <label for="fileInput">( Vui lòng chọn ảnh có định <br />
              dạng <br />.jpg, .jpeg, .png, .gif )
            </label>
            <div class="input-file">
              <input
                type="file"
                id="fileInput"
                name="fileInput"
              />
            </div>
          </div>
          <div class="info-text">
            <div class="info-detail">
              <h3>A.Thông tin chung</h3>
              <div class="info-process">
                <div class="process-color"></div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Mã nhân viên"
                  type="text"
                  placeholder="Mã nhân viên"
                  :value="dataEmployee.EmployeeCode"
                  @input="dataEmployee.EmployeeCode = $event"
                  req
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  label="Họ và tên"
                  type="text"
                  placeholder="Họ và tên"
                  :value="dataEmployee.FullName"
                  @input="dataEmployee.FullName = $event"
                  req
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Ngày sinh"
                  type="date"
                  :value="dataEmployee.DateOfBirth"
                  @input="dataEmployee.DateOfBirth = $event"
                ></base-input>
              </div>
              <div class="m-column">
                <div class="m-label">Giới tính</div>
                <div class="dialog-selected">
                  <base-select
                    :options="gender"
                    :title="dataEmployee.GenderName"
                    :isShow="isShowOptionGender"
                    selectClass="dialog-style-selected"
                    @click="showOptionGender()"
                    @isShowOption="isShowOptionGender = !isShowOptionGender"
                    @isTitleOption="dataEmployee.GenderName = $event"
                  ></base-select>
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Số CMTND/Căn cước"
                  type="text"
                  placeholder="Mã"
                  :value="dataEmployee.IdentityNumber"
                  @input="dataEmployee.IdentityNumber = $event"
                  req
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  label="Ngày cấp"
                  type="date"
                  :value="dataEmployee.IdentityDate"
                  @input="dataEmployee.IdentityDate = $event"
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Nơi cấp"
                  type="text"
                  placeholder="Nơi cấp"
                  :value="dataEmployee.IdentityPlace"
                  @input="dataEmployee.IdentityPlace = $event"
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  :inputClass="isEmailValid()"
                  label="Email"
                  type="text"
                  placeholder="dvh@gmail.com"
                  :value="dataEmployee.Email"
                  @input="dataEmployee.Email = $event"
                  req
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  label="Số điện thoại"
                  type="text"
                  placeholder="0123456789"
                  :value="dataEmployee.PhoneNumber"
                  @input="dataEmployee.PhoneNumber = $event"
                  req
                ></base-input>
              </div>
            </div>
            <div class="info-detail detail-work">
              <h3>B.Thông tin công việc</h3>
              <div class="info-process">
                <div class="process-color"></div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Vị trí</div>
                <div class="dialog-selected">
                  <base-select
                    :options="positions"
                    :title="dataEmployee.PositionName"
                    :isShow="isShowOptionPosition"
                    selectClass="dialog-style-selected"
                    @click="showOptionPosition()"
                    @isTitleOption="dataEmployee.PositionName = $event"
                    @isShowOption="isShowOptionPosition = !isShowOptionPosition"
                  ></base-select>
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Phòng ban</div>
                <div class="dialog-selected">
                  <base-select
                    :options="departments"
                    :isShow="isShowOptionDepartment"
                    :title="dataEmployee.DepartmentName"
                    selectClass="dialog-style-selected"
                    @click="showOptionDepartment()"
                    @isTitleOption="dataEmployee.DepartmentName = $event"
                    @isShowOption="
                      isShowOptionDepartment = !isShowOptionDepartment
                    "
                  ></base-select>
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Mã số thuế cá nhân"
                  type="text"
                  placeholder="Mã"
                  :value="dataEmployee.PersonalTaxCode"
                  @input="dataEmployee.PersonalTaxCode = $event"
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  label="Mức lương cơ bản"
                  type="text"
                  inputClass="text-align-right"
                  :value="dataEmployee.Salary"
                  @blur="formatMoney()"
                  @input="dataEmployee.Salary = $event"
                  placeholder="VND"
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Ngày gia nhập công ty</div>
                <div>
                  <input
                    id="txtJoinDate"
                    fieldName="JoinDate"
                    type="date"
                  />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Tình trạng công việc</div>
                <div class="dialog-selected">
                  <base-select
                    :options="statusWorks"
                    :title="dataEmployee.WorkStatus ? this.statusWorks[dataEmployee.WorkStatus].name : this.statusWorks[0].name"
                    :isShow="isShowOptionStatusWork"
                    selectClass="dialog-style-selected"
                    @click="showOptionStatusWork()"
                    @isTitleOption="dataEmployee.WorkStatus = $event"
                    @isShowOption="
                      isShowOptionStatusWork = !isShowOptionStatusWork
                    "
                  ></base-select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="dialog-footer">
        <div>
          <base-button
            buttonClass="btn btn-cancel"
            @click="cancelDialog()"
          >Hủy</base-button>
        </div>
        <div>
          <base-button
            type="submit"
            value="Submit"
            buttonClass="m-btn btn"
            @click="cancelDialog()"
          >
            <i class="fas fa-save"></i>Lưu
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import BaseSelect from "../base/BaseSelect.vue";
import BaseInput from "../base/BaseInput.vue";
export default {
  name: "DialogEmployee",
  props: {
    dataEmployee: [Object],
  },
  components: {
    BaseButton,
    BaseSelect,
    BaseInput,
  },
  created() {},
  data() {
    return {
      isShowOptionGender: false,
      isShowOptionPosition: false,
      isShowOptionDepartment: false,
      isShowOptionStatusWork: false,
      gender: [{ name: "Nam" }, { name: "Nữ" }],
      positions: [
        { name: "Tất cả vị trí" },
        { name: "Giám đốc" },
        { name: "Nhân viên" },
      ],
      departments: [
        { name: "Tất cả phòng ban" },
        { name: "Phòng đào tạo" },
        { name: "Phòng Nhân sự" },
      ],
      statusWorks: [
        { name: "Đang làm việc" },
        { name: "Đã nghỉ việc" },
        { name: "Đang thử việc" },
        { name: "Đang học tập" },
      ],
      reg: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    };
  },
  methods: {
    cancelDialog() {
      this.$emit("cancelDialog");
    },
    showOptionGender() {
      this.isShowOptionGender = !this.isShowOptionGender;
    },
    showOptionPosition() {
      this.isShowOptionPosition = !this.isShowOptionPosition;
    },
    showOptionDepartment() {
      this.isShowOptionDepartment = !this.isShowOptionDepartment;
    },
    showOptionStatusWork() {
      this.isShowOptionStatusWork = !this.isShowOptionStatusWork;
    },
    isEmailValid() {
      return this.dataEmployee.Email == ""
        ? ""
        : this.reg.test(this.dataEmployee.Email)
        ? ""
        : "input-required";
    },
    formatMoney() {
      this.dataEmployee.Salary =
        parseFloat(this.dataEmployee.Salary)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+\b)/g, "$1.") + " VND";
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/dialog.css";
</style>
