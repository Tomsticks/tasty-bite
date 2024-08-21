import { defineStore } from 'pinia';

export const useBiteStore = defineStore({
  id: 'BiteStore',
  state: () => {
    return {
      accountType: [],
      activeUser: '',
      userData: {},
      popular: [],
      orders: [],
      cart: [],
      profile: {},
      token: '',
    };
  },
  actions: {
    SetActiveUser(id, set) {
      let name = 'activeUser';
      if (set) {
        this.activeUser = id;
        localStorage.setItem(name, id);
      } else {
        this.activeUser = '';
      }
    },
    setUserData(data) {
      this.userData = data;
    },
    setPopular(data) {
      this.popular = data;
    },
    setOrders(data) {
      this.orders = data;
    },
    setCart(data) {
      this.cart = data;
    },
    setToken(token) {
      let name = 'Token';
      if (set) {
        this.token = token;
        localStorage.setItem(name, token);
      } else {
        this.token = '';
      }
    },
  },
  getters: {
    // filtersList: state => state.filtersList,
  },
});
