import ky from "ky";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      users: [],
    };
  },

  actions: {},
});
