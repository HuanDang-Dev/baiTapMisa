import axios from "axios";
export const api = {
  data() {
    return {
      apiDB: "http://cukcuk.manhnv.net/v1/Employees",
      apiDepartment: "http://cukcuk.manhnv.net/api/Department",
      apiPosition: "http://cukcuk.manhnv.net/v1/Positions",
    };
  },
  methods: {
    getEmployee() {
      axios
        .get(this.apiDB)
        .then((response) => {
          this.databases = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getDepartment() {
      axios
        .get(this.apiDepartment)
        .then((response) => {
          this.dataDepartment = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getPosition() {
      axios
        .get(this.apiPosition)
        .then((response) => {
          this.dataPosition = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    putData() {
      axios
        .put(this.apiDB, {
          body: this.dataEmployee,
        })
        .then((response) => {
          this.resPostApi = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
    },
  },
};
