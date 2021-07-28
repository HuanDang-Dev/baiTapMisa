import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const storeData = {
  state: {
    apiDB: "http://cukcuk.manhnv.net/v1/Employees/",
    apiDepartment: "http://cukcuk.manhnv.net/api/Department",
    apiPosition: "http://cukcuk.manhnv.net/v1/Positions",
    // Dữ liệu lấy về từ API
    dbEmployee: [],
    dbDepartment: [],
    dbPosition: [],
    optionsDepartment: [],
    optionsPosition: [],
    // Dữ liệu lỗi khi gọi API
    errors: [],
    resPut: [],
    isShowLoader: false,
  },
  getters: {
    optionsDepartment(state) {
      let tmp = [];
      for (let i = 0; i < state.dbDepartment.length; i++) {
        tmp.push(state.dbDepartment[i].DepartmentName);
      }
      state.optionsDepartment = [...tmp];
    },
    optionsPosition(state) {
      let tmp = [];
      for (let i = 0; i < state.dbPosition.length; i++) {
        tmp.push(state.dbPosition[i].PositionName);
      }
      state.optionsPosition = [...tmp];
    },
  },
  actions: {
    getEmployee({ commit }) {
      axios.get(this.state.apiDB).then((response) => {
        commit("setTimeOutLoader");
        commit("setEmployee", response.data);
      });
    },
    getDepartment({ commit }) {
      axios.get(this.state.apiDepartment).then((response) => {
        commit("setDepartment", response.data);
      });
    },
    getPosition({ commit }) {
      axios.get(this.state.apiPosition).then((response) => {
        commit("setPosition", response.data);
      });
    },
    putEmployee({ commit }, id, db) {
      axios.put(this.state.apiDB + id, db).then((response) => {
        commit("putData", response.data);
      });
    },
    postEmployee({ commit }, db) {
      axios.post(this.state.apiDB, db).then((response) => {
        commit("postData", response.data);
      });
    },
  },
  mutations: {
    setEmployee(state, dbEmployee) {
      state.dbEmployee = dbEmployee;
    },
    setDepartment(state, dbDepartment) {
      state.dbDepartment = dbDepartment;
    },
    setPosition(state, dbPosition) {
      state.dbPosition = dbPosition;
    },
    /**
      Hàm thực hiện thay đổi dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(14/07/2021)
     */
    putData(state, db) {
      state.resPut = db;
    },

    /**
      Hàm thực hiện thêm dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(14/07/2021)
     */
    postData(state, db) {
      state.resPut = db;
    },
    /**
      Hàm thực hiện xóa dữ liệu của 1 nhân viên trên API
      CreatedBy: DVHUAN(14/07/2021)
     */
    deleteEmployee(id) {
      axios
        .delete(this.apiDelete + id)
        .then((response) => {
          this.getEmployee();
          alert("Xóa nhân viên thành công" + response);
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
    },
    /**
      Hàm thực hiện loader
      CreatedBy: DVHUAN(19/07/2021)
     */
    setTimeOutLoader(state) {
      state.isShowLoader = true;
      setTimeout(() => {
        state.isShowLoader = false;
      }, 1000);
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
