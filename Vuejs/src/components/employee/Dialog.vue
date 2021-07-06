<template>
  <div class="m-dialog dialog-detail">
    <div class="dialog-model"></div>
    <div class="dialog-content">
      <div class="dialog-header">
        <div class="dialog-header-title">Thông tin nhân viên</div>
        <div class="dialog-header-close">
          <button id="btnClose" class="icon-close"></button>
        </div>
      </div>
      <div class="dialog-body">
        <form class="dialog-info" action="/action_page.php">
          <div class="dialog-avatar">
            <div class="box-icon-avatar">
              <button id="btnAvatar" class="icon-avatar" type="button"></button>
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
                    <div id="selectedGender" class="dialog-style-selected">
                      Giới tính
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul id="optionGender" class="box-option">
                      <li class="option"><i class="fas fa-check"></i>Nam</li>
                      <li class="option"><i class="fas fa-check"></i>Nữ</li>
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
                    id="txtEmail"
                    fieldName="Email"
                    type="email"
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
                      id="selectedPositionDialog"
                      class="dialog-style-selected"
                    >
                      Vị trí
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul id="optionPositionDialog" class="box-option">
                      <li class="option">
                        <i class="fas fa-check"></i>Giám đốc
                      </li>
                      <li class="option">
                        <i class="fas fa-check"></i>Kế toán
                      </li>
                      <li class="option">
                        <i class="fas fa-check"></i>Nhân viên
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
                      id="selectedDepartmentDialog"
                      class="dialog-style-selected"
                    >
                      Phòng ban
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul id="optionDepartmentDialog" class="box-option">
                      <li class="option">
                        <i class="fas fa-check"></i>Đào tạo
                      </li>
                      <li class="option">
                        <i class="fas fa-check"></i>Nhân sự
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
                    id="txtSalary"
                    fieldName="Salary"
                    class="text-align-right"
                    type="text"
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
                    <div id="selectedStatusWork" class="dialog-style-selected">
                      Phòng ban
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul id="optionStatusWork" class="box-option">
                      <li class="option">
                        <i class="fas fa-check"></i>Đào tạo
                      </li>
                      <li class="option">
                        <i class="fas fa-check"></i>Nhân sự
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
          <button id="btnCancel" class="btn btn-cancel">Hủy</button>
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
};
</script>

<style scoped>
</style>
