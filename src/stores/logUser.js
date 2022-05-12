import ky from "ky";
import { defineStore } from "pinia";
import router from "../router";

export const useLogUser = defineStore("useLogUser", {
  state: () => {
    return {
      logUser: {},
    };
  },

  actions: {
    async logIn() {
      const accessToken = localStorage.getItem("access_token");
      ky.get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .json()
        .then((resp) => {
          this.logUser = resp;
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("access_token");
          router.push({ path: "/login" });
        });
    },

    // if(!logUser) {
    //     return null;
    // }
  },
});
