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
                  ref="inputEmployeeCode"
                  label="Mã nhân viên"
                  type="text"
                  placeholder="Mã nhân viên"
                  v-model="dialogNew.EmployeeCode"
                  req
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  ref="inputFullName"
                  label="Họ và tên"
                  type="text"
                  placeholder="Họ và tên"
                  v-model="dialogNew.FullName"
                  req
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Ngày sinh"
                  type="date"
                  v-model="dialogNew.DateOfBirth"
                ></base-input>
              </div>
              <div class="m-column">
                <div class="m-label">Giới tính</div>
                <div class="dialog-selected">
                  <base-combobox
                    type="text"
                    placeholder="Giới tính"
                    v-model="dialogNew.valueGender"
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
                  ref="inputIdentityNumber"
                  label="Số CMTND/Căn cước"
                  type="text"
                  placeholder="Mã"
                  v-model="dialogNew.IdentityNumber"
                  typeName="identityNumber"
                  req
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  label="Ngày cấp"
                  type="date"
                  v-model="dialogNew.IdentityDate"
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  label="Nơi cấp"
                  type="text"
                  placeholder="Nơi cấp"
                  v-model="dialogNew.IdentityPlace"
                ></base-input>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <base-input
                  ref="inputEmail"
                  label="Email"
                  type="text"
                  placeholder="dvh@gmail.com"
                  v-model="dialogNew.Email"
                  typeName="email"
                  req
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  ref="inputPhoneNumber"
                  label="Số điện thoại"
                  type="text"
                  typeName="phone"
                  placeholder="0123456789"
                  v-model="dialogNew.PhoneNumber"
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
                    v-model="dialogNew.valuePosition"
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
                    v-model="dialogNew.valueDepartment"
                    :options="optionsDepartment"
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
                  v-model="dialogNew.PersonalTaxCode"
                ></base-input>
              </div>
              <div class="m-column">
                <base-input
                  label="Mức lương cơ bản"
                  type="text"
                  inputClass="text-align-right icon-money input-money"
                  typeName="money"
                  @formatMoney="dialogNew.Salary = $event"
                  v-model="dialogNew.Salary"
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
                  <base-combobox
                    type="text"
                    placeholder="Tình trạng công việc"
                    v-model="dialogNew.valueWorkStatus"
                    :options="statusWorks"
                    :isShow="isShowOptionStatusWork"
                    comboboxClass="dialog-style-selected"
                    @click="showOptionStatusWork()"
                    @updateValueOption="dialogNew.valueWorkStatus = $event"
                    @isShowOption="isShowOptionStatusWork = !isShowOptionStatusWork"
                  >
                  </base-combobox>
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
      title="Đóng Thông Tin Nhân viên"
      textButtonLeft="Tiếp tục"
      textButtonRight="Đóng"
      @continuePopupEvent="continueCancelDialog"
      @cancelPopupEvent="showPopup = false"
      v-show="showPopup"
      status="warning"
    >
      <span>Bạn có chắc muốn đóng form nhập " <b>Thông tin nhân viên</b> " hay không?</span>
    </base-popup>
    <!-- <base-toast></base-toast> -->

  </div>
</template>

<script>
import { optionSelect } from "../../constants/index";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { api } from "../../mixins/api";
import { showPopup } from "../../mixins/showPopup";
export default {
  mixins: [api, showPopup],
  name: "DialogEmployee",
  props: {
    dataEmployee: {
      type: [Object],
    },
    isLoader: {
      type: Boolean,
      default: false,
    },
    newEmployeeCode: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      resPostApi: "",
      isShowOptionGender: false,
      isShowOptionPosition: false,
      isShowOptionDepartment: false,
      isShowOptionStatusWork: false,
      dialogNew: {
        ...this.dataEmployee,
        valueGender: "",
        Gender: 0,
        valuePosition: "",
        PositionId: "",
        valueDepartment: "",
        DepartmentId: "",
        valueWorkStatus: "",
        WorkStatus: 0,
      },
      gender: optionSelect.gender,
      statusWorks: optionSelect.statusWorks,
    };
  },
  mounted() {
    this.loadDataEmployee();
    this.loadEmployeeCode();
  },
  computed: {
    ...mapState([
      "optionsDepartment",
      "optionsPosition",
      "dbDepartment",
      "dbPosition",
      "dbNewPostEmployee",
    ]),
  },
  watch: {
    dbNewPostEmployee() {
      if (this.$refs.inputEmployeeCode.$refs.input.value == "") {
        this.dialogNew.EmployeeCode = this.newEmployeeCode;
        this.dialogNew = { ...this.dialogNew };
      }
    },
  },
  methods: {
    ...mapActions(["putEmployee", "postEmployee"]),
    loadEmployeeCode() {
      this.$refs.inputEmployeeCode.$refs.input.focus();
      if (this.$refs.inputEmployeeCode.$refs.input.value == "") {
        this.dialogNew.EmployeeCode = this.newEmployeeCode;
      }
    },
    loadDataEmployee() {
      this.dialogNew.valueGender = this.dataEmployee.GenderName;
      this.dialogNew.valuePosition = this.dataEmployee.PositionName;
      this.dialogNew.valueDepartment = this.dataEmployee.DepartmentName;
      this.dialogNew.valueWorkStatus =
        this.statusWorks[this.dataEmployee.WorkStatus];
    },
    async saveDialog() {
      if (!this.validFormEmployee()) {
        return false;
      }

      this.formCombobox();

      this.dialogNew.Salary = Number(
        this.dialogNew.Salary?.toString().replaceAll(".", "")
      );

      if (this.dialogNew.EmployeeId) {
        await this.putEmployee(this.dialogNew);
      } else {
        await this.postEmployee(this.dialogNew);
      }

      this.$store.dispatch("getEmployee");
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

    formCombobox() {
      for (let i = 0; i < this.gender.length; i++) {
        if (this.dialogNew.valueGender == this.gender[i])
          this.dialogNew.Gender = i;
      }
      for (let i = 0; i < this.dbDepartment.length; i++) {
        if (
          this.dialogNew.valueDepartment == this.dbDepartment[i].DepartmentName
        )
          this.dialogNew.DepartmentId = this.dbDepartment[i].DepartmentId;
      }
      for (let i = 0; i < this.dbPosition.length; i++) {
        if (this.dialogNew.valuePosition == this.dbPosition[i].PositionName)
          this.dialogNew.PositionId = this.dbPosition[i].PositionId;
      }
      for (let i = 0; i < this.statusWorks.length; i++) {
        if (this.dialogNew.valueWorkStatus == this.statusWorks[i])
          this.dialogNew.WorkStatus = i;
      }
    },

    validFormEmployee() {
      let requiredArray = [];
      Object.entries(this.$refs).forEach(([key, element]) => {
        if (key.startsWith("input")) {
          element.$refs.input.focus();
          element.$refs.input.blur();
          if (element.req && element.isValid) {
            requiredArray = [...requiredArray, element];
          }
        }
      });
      if (requiredArray.length > 0) {
        requiredArray[0].$refs.input.focus();
        return false;
      }
      return true;
    },
  },
};
</script>
