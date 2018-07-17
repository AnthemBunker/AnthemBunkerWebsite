const state = {
  authenticated: false,
  wallets: [],
  account: null
}

const getters = {
  getWallets: state => {
    return state.wallets;
  },
  getFirstWallet: state => {
    return state.wallets[0];
  },
  getCurrentAccount: state => {
    return state.account;
  }
}

const mutations = {
  authenticate: (state, account) => {
    state.authenticated = true;
    console.log('PAYLOAD: ', account);
  },
  endSession: state => {
    state.authenticated = false;
    state.wallets = null;
    state.account = null;
  }
}

const actions = {
  authenticate: ({state, commit}, account) => {
    commit('authenticate', account);
  },
  endSession: ({commit}) => {
    commit('endSession')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
