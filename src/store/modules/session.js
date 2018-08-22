import { makeEdgeUiContext } from 'edge-login-ui-web'

const state = {
  authenticated: false,
  wallets: [],
  account: null,
  context: null
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
  },
  isAuthenticated: state => {
    return state.authenticated;
  }
}

const mutations = {
  authenticate: (state, account) => {
    state.authenticated = true;
    state.account = account;
    // console.log('PAYLOAD: ', account);
  },
  endSession: state => {
    state.authenticated = false;
    state.wallets = null;
    state.account = null;
  },
  makeContext: (state, context) => {
    state.context = context;
  }
}

const actions = {
  authenticate: ({commit}, account) => {
    commit('authenticate', account);
  },
  endSession: ({commit}) => {
    commit('endSession')
  },
  async makeEdgeContext({commit}) {
    const edgeConfig = {
      'apiKey': 'b2c53c18ac86c721f106f89ae8f8b7ce2c47f4de',
      'appId': 'com.mydomain.myapp',
      'vendorName': 'Anthem Bunker',
      'vendorImageUrl': 'http://192.168.95.1:8080/img/anthem-bunker-logo-light.26871cdf.png'
    };
    commit('makeContext', await makeEdgeUiContext(edgeConfig));
  },
  async openEdgeLoginUi({state, commit, dispatch}) {
    if(!state.context) {
      await dispatch('makeEdgeContext');
    }
    state.context.openLoginWindow({
      onLogin(account) {
        dispatch('authenticate', account);
      }
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
