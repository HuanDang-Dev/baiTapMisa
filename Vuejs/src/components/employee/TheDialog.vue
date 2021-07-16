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
                  <base-combobox
                    type="text"
                    placeholder="Giới tính"
                    :value="dialogNew.valueGender"
                    @input="dialogNew.valueGender = $event"
                    :options="gender"
                    :isShow="isShowOptionGender"
                    comboboxClass="dialog-style-selected"
                    @click="showOptionGender()"
                    @updateValueOption="dialogNew.valueGender = $event"
                    @isShowOption="isShowOptionGender = !isShowOptionGender"
                  >
                  </base-combobox>
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
                  <base-combobox
                    type="text"
                    placeholder="Vị trí"
                    :value="dialogNew.valuePosition"
                    @input="dialogNew.valuePosition = $event"
                    :options="optionsPosition"
                    :isShow="isShowOptionPosition"
                    comboboxClass="dialog-style-selected"
                    @click="showOptionPosition()"
                    @updateValueOption="dialogNew.valuePosition = $event"
                    @isShowOption="isShowOptionPosition = !isShowOptionPosition"
                  >
                  </base-combobox>
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Phòng ban</div>
                <div class="dialog-selected">
                  <base-combobox
                    type="text"
                    placeholder="Phòng ban"
                    :value="dialogNew.valueDepartment"
                    @input="dialogNew.valueDepartment = $event"
                    :options="optionsDeparment"
                    :isShow="isShowOptionDepartment"
                    comboboxClass="dialog-style-selected"
                    @click="showOptionDepartment()"
                    @updateValueOption="dialogNew.valueDepartment = $event"
                    @isShowOption="isShowOptionDepartment = !isShowOptionDepartment"
                  >
                  </base-combobox>
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
                  <!-- <base-combobox
                    type="text"
                    placeholder="Tình trạng công việc"
                    :value="dialogNew.valueStatusWork ? this.statusWorks[dialogNew.valueStatusWork].name : this.statusWorks[0].name"
                    @input="dialogNew.valueStatusWork = $event"
                    :options="statusWorks"
                    :isShow="isShowOptionStatusWork"
                    comboboxClass="dialog-style-selected"
                    @click="showOptionStatusWork()"
                    @updateValueOption="dialogNew.valueStatusWork = $event"
                    @isShowOption="isShowOptionStatusWork = !isShowOptionStatusWork"
                  >
                  </base-combobox> -->
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
            @click="saveDialog()"
          >
            <i class="fas fa-save"></i>Lưu
          </base-button>
        </div>
      </div>
    </div>
    <base-popup
      @continuePopupEvent="continueCancelDialog"
      @cancelPopupEvent="showPopup = false"
      :class="{ 'm-popup': !showPopup }"
      status="warning"
    ></base-popup>
    <!-- <base-toast></base-toast> -->
  </div>
</template>

<script>
import { api } from "../../mixins/api";
import BaseButton from "../base/BaseButton.vue";
import BaseSelect from "../base/BaseSelect.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseCombobox from "../base/BaseCombobox.vue";
import BasePopup from "../popup/BasePopup.vue";
// import BaseToast from "../toast/BaseToast.vue";
export default {
  mixins: [api],
  name: "DialogEmployee",
  props: {
    dataEmployee: [Object],
  },
  components: {
    BaseButton,
    BaseSelect,
    BaseInput,
    BaseCombobox,
    BasePopup,
    // BaseToast,
  },
  created() {
    this.getDepartment();
    this.getPosition();
  },
  data() {
    return {
      resPostApi: "",
      showPopup: false,
      isShowOptionGender: false,
      isShowOptionPosition: false,
      isShowOptionDepartment: false,
      isShowOptionStatusWork: false,
      dialogNew: {
        valueGender: "",
        valuePosition: "",
        valueDepartment: "",
        valueWorkStatus: "",
      },
      gender: [{ name: "Nữ" }, { name: "Nam" }, { name: "Không xác định" }],

      // Toàn bộ dữ liệu của phòng ban
      dataDepartment: [],
      // Lấy dữ liệu tên phòng ban để hiển thị
      optionsDeparment: [],
      // Toàn bộ dữ liệu của Vị trí
      dataPosition: [],
      // Lấy dữ liệu tên vị trí để hiển thị
      optionsPosition: [],

      statusWorks: [
        { name: "Đang làm việc" },
        { name: "Đã nghỉ việc" },
        { name: "Đang thử việc" },
        { name: "Đang học tập" },
      ],
      reg: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    };
  },
  watch: {
    dataEmployee() {
      this.dialogNew.valueGender = this.dataEmployee.GenderName;
      this.dialogNew.valuePosition = this.dataEmployee.PositionName;
      this.dialogNew.valueDepartment = this.dataEmployee.DepartmentName;
      this.dialogNew.valueWorkStatus = this.dataEmployee.WorkStatus;
    },
    dataDepartment() {
      let tmp = [];
      for (let i = 0; i < this.dataDepartment.length; i++) {
        tmp.push({
          name: this.dataDepartment[i].DepartmentName,
        });
      }
      this.optionsDeparment = [...tmp];
    },
    dataPosition() {
      let tmp = [];
      for (let i = 0; i < this.dataPosition.length; i++) {
        tmp.push({
          name: this.dataPosition[i].PositionName,
        });
      }
      this.optionsPosition = [...tmp];
    },
  },
  methods: {
    cancelDialog() {
      this.showPopup = true;
    },
    continueCancelDialog() {
      this.showPopup = false;
      this.$emit("cancelDialog");
    },
    saveDialog() {
      for (let i = 0; i < this.gender.length; i++) {
        if (this.dialogNew.valueGender == this.gender[i].name)
          this.dataEmployee.Gender = i;
      }
      this.dataEmployee.PositionName = this.dialogNew.valuePosition;
      this.dataEmployee.DepartmentName = this.dialogNew.valueDepartment;
      for (let i = 0; i < this.statusWorks.length; i++) {
        if (this.dialogNew.valueWorkStatus == this.statusWorks[i].name)
          this.dataEmployee.workStatus = i;
      }
      this.dataEmployee.Salary = Number(this.dataEmployee.Salary);
      this.postData();
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
.m-popup {
  display: none;
}
</style>
