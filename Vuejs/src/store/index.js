import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const storeData = {
  state: {
    // API lấy dữ liệu
    apiDB: "http://cukcuk.manhnv.net/v1/Employees/",
    newPostEmployee: "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode",
    apiDepartment: "http://cukcuk.manhnv.net/api/Department",
    apiPosition: "http://cukcuk.manhnv.net/v1/Positions",
    // Dữ liệu lấy về từ API
    dbEmployee: [],
    dbDepartment: [],
    dbPosition: [],
    dbNewPostEmployee: "",

    // Tất cả tên phòng ban
    optionsDepartment: [],
    // Tất cả tên vị trí
    optionsPosition: [],
    // Dữ liệu lỗi khi gọi API
    errors: [],
    resPut: [],
    // Ẩn hiện của loader
    isShowLoader: false,
    // Thời gian mặc định cho một lần hiện loader
    minTimeResponse: 1000,
  },
  getters: {
    dbNewPostEmployee: (state) => state.dbNewPostEmployee,
    /**
      Hàm tạo một danh sách tên phòng ban để hiển thị trong combobox
      CreatedBy: DVHUAN(19/07/2021)
     */
    optionsDepartment(state) {
      let tmp = [];
      for (let i = 0; i < state.dbDepartment.length; i++) {
        tmp.push(state.dbDepartment[i].DepartmentName);
      }
      state.optionsDepartment = [...tmp];
    },

    /**
      Hàm tạo một danh sách tên vị trí để hiển thị trong combobox
      CreatedBy: DVHUAN(19/07/2021)
     */
    optionsPosition(state) {
      let tmp = [];
      for (let i = 0; i < state.dbPosition.length; i++) {
        tmp.push(state.dbPosition[i].PositionName);
      }
      state.optionsPosition = [...tmp];
    },
  },
  actions: {
    /**
      Hàm thực hiện gọi API lấy dữ liệu của tất cả nhân viên
      CreatedBy: DVHUAN(19/07/2021)
     */
    async getEmployee({ commit }) {
      // xét thời gian bắt đầu gọi API
      const startTime = Date.now();
      // Xét thực hiện loader khi bắt đầu gọi hàm lấy dữ liệu nhân viên
      commit("startTimeOutLoader");
      // Gọi API lấy dữ liệu theo kiểu bất đồng bộ
      await axios.get(this.state.apiDB).then((response) => {
        commit("setEmployee", response.data);
      });
      // thời gian sau khi gọi API xong
      const endTime = Date.now() - startTime;
      // Xét khoảng thời gian gọi API
      // Nếu khoảng thời gian gọi API nhỏ hơn thời gian mặc định (minTimeResponse) thì sẽ lấy thời gian mặc định và ngược lại
      if (endTime < this.state.minTimeResponse) {
        commit("endTimeOutLoader", this.state.minTimeResponse - endTime);
      } else commit("endTimeOutLoader", endTime - this.state.minTimeResponse);
    },

    /**
      Hàm thực hiện gọi API lấy dữ liệu của tất cả phòng ban
      CreatedBy: DVHUAN(19/07/2021)
     */
    getDepartment({ commit }) {
      return axios.get(this.state.apiDepartment).then((response) => {
        commit("setDepartment", response.data);
      });
    },

    /**
      Hàm thực hiện gọi API lấy dữ liệu của tất cả vị trí
      CreatedBy: DVHUAN(19/07/2021)
     */
    getPosition({ commit }) {
      return axios.get(this.state.apiPosition).then((response) => {
        commit("setPosition", response.data);
      });
    },

    /**
      Hàm thực hiện thay đổi dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(26/07/2021)
     */
    putEmployee({ commit }, db) {
      return axios
        .put(`${this.state.apiDB}${db.EmployeeId}`, db)
        .then((response) => {
          commit("putEmployee", response.data);
        });
    },

    /**
      Hàm thực hiện thay đổi dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(26/07/2021)
     */
    postEmployee({ commit }, db) {
      return axios.post(this.state.apiDB, db).then((response) => {
        commit("postEmployee", response.data);
      });
    },

    /**
      Hàm thực hiện xóa dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(26/07/2021)
     */
    deleteEmployee({ commit, dispatch }, db) {
      return axios
        .delete(`${this.state.apiDB}${db.EmployeeId}`)
        .then((response) => {
          alert("Xóa nhân viên thành công" + response.data);
          commit("deleteEmployee", response.data);
          dispatch("getEmployee");
        });
    },

    /**
      Hàm thực hiện lấy mã mới của nhân viên từ API
      CreatedBy: DVHUAN(26/07/2021)
     */
    newEmployee({ commit }) {
      return axios.get(this.state.newPostEmployee).then((response) => {
        commit("newEmployee", response.data);
      });
    },
  },
  mutations: {
    /**
      Nhận dữ liệu trả về khi gọi API lấy dữ liệu nhân viên
      CreatedBy: DVHUAN(19/07/2021)
     */
    setEmployee(state, dbEmployee) {
      state.dbEmployee = dbEmployee;
    },

    /**
      Nhận dữ liệu trả về khi gọi API lấy dữ liệu phòng ban
      CreatedBy: DVHUAN(19/07/2021)
     */
    setDepartment(state, dbDepartment) {
      state.dbDepartment = dbDepartment;
    },

    /**
      Nhận dữ liệu trả về khi gọi API lấy dữ liệu vị trí
      CreatedBy: DVHUAN(19/07/2021)
     */
    setPosition(state, dbPosition) {
      state.dbPosition = dbPosition;
    },

    /**
      Nhận dữ liệu trả về khi sửa dữ liệu 1 nhân viên
      CreatedBy: DVHUAN(26/07/2021)
     */
    putEmployee(state, resPut) {
      state.resPut = resPut;
    },

    /**
      Nhận dữ liệu trả về khi thêm mới dữ liệu 1 nhân viên
      CreatedBy: DVHUAN(26/07/2021)
     */
    postEmployee(state, resPut) {
      state.resPut = resPut;
    },

    /**
      Nhận dữ liệu trả về khi xóa dữ liệu 1 nhân viên
      CreatedBy: DVHUAN(26/07/2021)
     */
    deleteEmployee(state, resDelete) {
      state.resDelete = resDelete;
    },

    /**
      Nhận dữ liệu trả về là mã nhân viên khi thêm mới nhân viên
      CreatedBy: DVHUAN(26/07/2021)
     */
    newEmployee(state, dbNewPostEmployee) {
      state.dbNewPostEmployee = dbNewPostEmployee;
    },

    /**
      Hàm bắt đầu hiện loader
      CreatedBy: DVHUAN(19/07/2021)
     */
    startTimeOutLoader(state) {
      state.isShowLoader = true;
    },

    /**
      Hàm thực hiện loader sau 1 khoảng thời gian
      CreatedBy: DVHUAN(19/07/2021)
     */
    endTimeOutLoader(state, time) {
      setTimeout(() => {
        state.isShowLoader = false;
      }, time);
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
