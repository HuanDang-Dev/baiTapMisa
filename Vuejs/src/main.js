import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@mdi/font/css/materialdesignicons.css";

import BaseButton from "../src/components/base/BaseButton.vue";
import BaseInput from "../src/components/base/BaseInput.vue";
import BaseLoader from "../src/components/base/BaseLoader.vue";
import BaseSelect from "../src/components/base/BaseSelect.vue";
import BaseCombobox from "../src/components/base/BaseCombobox.vue";
import BaseModified from "../src/components/base/BaseModified.vue";

import TheToolBar from "../src/components/employee/TheToolBar.vue";
import FooterPaging from "../src/components/employee/FooterPaging.vue";
import HeaderPaging from "../src/components/employee/HeaderPaging.vue";
import TheDialog from "../src/components/employee/TheDialog.vue";

import BasePopup from "../src/components/popup/BasePopup.vue";
import BaseToast from "../src/components/toast/BaseToast.vue";

import TheHeader from "../src/views/TheHeader.vue";
import TheNavbar from "../src/views/TheNavbar.vue";
import TheEmployee from "../src/views/TheEmployee.vue";

Vue.config.productionTip = false;

Vue.component("TheToolBar", TheToolBar);
Vue.component("FooterPaging", FooterPaging);
Vue.component("HeaderPaging", HeaderPaging);
Vue.component("TheDialog", TheDialog);
Vue.component("BaseModified", BaseModified);
Vue.component("BaseLoader", BaseLoader);
Vue.component("BaseSelect", BaseSelect);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseInput", BaseInput);
Vue.component("BaseCombobox", BaseCombobox);
Vue.component("BasePopup", BasePopup);
Vue.component("BaseToast", BaseToast);
Vue.component("TheHeader", TheHeader);
Vue.component("TheNavbar", TheNavbar);
Vue.component("TheEmployee", TheEmployee);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
