<template>
  <div class="dialog-detail">
    <div class="dialog-model"></div>
    <div class="dialog-content">
      <div class="dialog-header">
        <div class="dialog-header-title">Thông tin nhân viên</div>
        <div class="dialog-header-close">
          <button @click="cancelDialog()" class="icon-close"></button>
        </div>
      </div>
      <div class="dialog-body">
        <form class="dialog-info" action="/action_page.php">
          <div class="dialog-avatar">
            <div class="box-icon-avatar">
              <button class="icon-avatar" type="button"></button>
            </div>
            <label for="fileInput"
              >( Vui lòng chọn ảnh có định <br />
              dạng <br />.jpg, .jpeg, .png, .gif )
            </label>
            <div class="input-file">
              <input type="file" id="fileInput" name="fileInput" />
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
                <div class="m-label">Mã nhân viên(<span>*</span>)</div>
                <div>
                  <input
                    id="txtEmployeeCode"
                    fieldName="EmployeeCode"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Họ và tên(<span>*</span>)</div>
                <div>
                  <input
                    id="txtFullName"
                    fieldName="FullName"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Ngày sinh</div>
                <div>
                  <input
                    id="dtDateOfBirth"
                    fieldName="DateOfBirth"
                    type="date"
                  />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Giới tính</div>
                <div class="dialog-selected">
                  <div class="box-selected">
                    <div
                      @click="showOptionGender()"
                      class="dialog-style-selected"
                    >
                      {{ valueGender }}
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul v-show="isShowOptionGender === true" class="box-option">
                      <li
                        class="option"
                        @click="updateValueGender(index)"
                        v-for="(sex, index) in gender"
                        :key="index"
                      >
                        <i class="fas fa-check"></i>{{ sex.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Số CMTND/Căn cước(<span>*</span>)</div>
                <div>
                  <input
                    id="txtIdentityNumber"
                    fieldName="IdentityNumber"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Ngày cấp</div>
                <div>
                  <input
                    id="txtIdentityDate"
                    fieldName="txtIdentityDate"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Nơi cấp</div>
                <div>
                  <input
                    id="txtIdentityPlace"
                    fieldName="IdentifyPlace"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Email(<span>*</span>)</div>
                <div>
                  <input
                    :class="[isEmailValid()]"
                    fieldName="Email"
                    type="email"
                    v-model="email"
                    required
                  />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Số điện thoại(<span>*</span>)</div>
                <div>
                  <input
                    id="txtPhoneNumber"
                    fieldName="PhoneNumber"
                    type="text"
                    required
                  />
                </div>
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
                  <div class="box-selected">
                    <div
                      @click="showOptionPosition()"
                      class="dialog-style-selected"
                    >
                      {{ valuePosition }}
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul
                      v-show="isShowOptionPosition === true"
                      class="box-option"
                    >
                      <li
                        class="option"
                        @click="updateValuePosition(index)"
                        v-for="(position, index) in positions"
                        :key="index"
                      >
                        <i class="fas fa-check"></i>{{ position.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Phòng ban</div>
                <div class="dialog-selected">
                  <div class="box-selected">
                    <div
                      @click="showOptionDepartment()"
                      class="dialog-style-selected"
                    >
                      {{ valueDepartment }}
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul
                      v-show="isShowOptionDepartment === true"
                      class="box-option"
                    >
                      <li
                        class="option"
                        @click="updateValueDepartment(index)"
                        v-for="(department, index) in departments"
                        :key="index"
                      >
                        <i class="fas fa-check"></i>{{ department.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Mã số thuế cá nhân</div>
                <div>
                  <input
                    id="txtPersonalTaxCode"
                    fieldName="PersonalTaxCode"
                    type="text"
                  />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Mức lương cơ bản</div>
                <div>
                  <input
                    fieldName="Salary"
                    class="text-align-right"
                    type="text"
                    v-model="money"
                    @blur="formatMoney()"
                    placeholder="VND"
                  />
                </div>
              </div>
            </div>
            <div class="m-row">
              <div class="m-column">
                <div class="m-label">Ngày gia nhập công ty</div>
                <div>
                  <input id="txtJoinDate" fieldName="JoinDate" type="date" />
                </div>
              </div>
              <div class="m-column">
                <div class="m-label">Tình trạng công việc</div>
                <div class="dialog-selected">
                  <div class="box-selected">
                    <div
                      @click="showOptionStatusWork()"
                      class="dialog-style-selected"
                    >
                      {{ valueStatusWork }}
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul
                      v-show="isShowOptionStatusWork === true"
                      class="box-option"
                    >
                      <li
                        class="option"
                        @click="updateValueStatusWork(index)"
                        v-for="(statusWork, index) in statusWorks"
                        :key="index"
                      >
                        <i class="fas fa-check"></i>{{ statusWork.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="dialog-footer">
        <div>
          <button @click="cancelDialog()" class="btn btn-cancel">Hủy</button>
        </div>
        <div>
          <button id="btnSave" type="submit" value="Submit" class="m-btn btn">
            <i class="fas fa-save"></i>Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogEmployee",
  data() {
    return {
      valueGender: "Nam",
      valuePosition: "Tất cả vị trí",
      valueDepartment: "Tất cả phòng ban",
      valueStatusWork: "Tình trạng công việc",
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
      statusWorks: [{ name: "Đang làm việc" }, { name: "Đã nghỉ việc" }],
      email: "",
      money: "",
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
    updateValueGender(index) {
      this.valueGender = this.gender[index].name;
      this.isShowOptionGender = !this.isShowOptionGender;
    },
    updateValuePosition(index) {
      this.valuePosition = this.positions[index].name;
      this.isShowOptionPosition = !this.isShowOptionPosition;
    },
    updateValueDepartment(index) {
      this.valueDepartment = this.departments[index].name;
      this.isShowOptionDepartment = !this.isShowOptionDepartment;
    },
    updateValueStatusWork(index) {
      this.valueStatusWork = this.statusWorks[index].name;
      this.isShowOptionStatusWork = !this.isShowOptionStatusWork;
    },
    isEmailValid: function () {
      return this.email == ""
        ? ""
        : this.reg.test(this.email)
        ? ""
        : "input-required";
    },
    formatMoney() {
      if (this.money) {
        this.money =
          parseFloat(this.money)
            .toFixed(0)
            .replace(/(\d)(?=(\d{3})+\b)/g, "$1.") + " VND";
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/common/dialog.css";
</style>
