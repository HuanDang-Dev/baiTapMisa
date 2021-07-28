import axios from "axios";
export const api = {
  data() {
    return {
      apiDB: "http://cukcuk.manhnv.net/v1/Employees",
      apiDepartment: "http://cukcuk.manhnv.net/api/Department",
      apiPosition: "http://cukcuk.manhnv.net/v1/Positions",
      isShowLoader: false,
    };
  },
  methods: {
    /**
      Hàm thực hiện gọi API employee và gán vào giá trị databases
      CreatedBy: DVHUAN(14/07/2021)
     */
    async getEmployee() {
      await axios
        .get(this.apiDB)
        .then((response) => {
          this.setTimeOutLoader();
          this.databases = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    /**
      Hàm thực hiện gọi API department và gán vào giá trị dataDepartment
      CreatedBy: DVHUAN(14/07/2021)
     */
    async getDepartment() {
      await axios
        .get(this.apiDepartment)
        .then((response) => {
          this.dataDepartment = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    /**
      Hàm thực hiện gọi API position và gán vào giá trị dataDepartment
      CreatedBy: DVHUAN(14/07/2021)
     */
    async getPosition() {
      await axios
        .get(this.apiPosition)
        .then((response) => {
          this.dataPosition = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    /**
      Hàm thực hiện thay đổi dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(14/07/2021)
     */
    async putData(id, db) {
      await axios
        .put(this.apiDB + id, db)
        .then((response) => {
          this.resPutApi = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
    },

    /**
      Hàm thực hiện thêm dữ liệu của 1 nhân viên lên API
      CreatedBy: DVHUAN(14/07/2021)
     */
    async postData(db) {
      await axios
        .post(this.apiDB, db)
        .then((response) => {
          this.resPostApi = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
    },
    /**
      Hàm thực hiện xóa dữ liệu của 1 nhân viên trên API
      CreatedBy: DVHUAN(14/07/2021)
     */
    deleteEmployee(id) {
      axios
        .delete(this.apiDB + id)
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
    setTimeOutLoader() {
      this.isShowLoader = true;
      setTimeout(() => {
        this.isShowLoader = false;
      }, 1000);
    },
  },
};
