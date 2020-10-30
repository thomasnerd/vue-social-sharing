import AvailableNetworks from './networks'
import ShareNetwork from './share-network'
// import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

export default {
  install: (Vue, options) => {
    Vue.use(VueCompositionAPI)
    Vue.component(ShareNetwork.name, ShareNetwork)

    Vue.prototype.$SocialSharing = {
      options: {
        networks: options && options.hasOwnProperty('networks') ? Object.assign(
          AvailableNetworks,
          options.networks
        ) : AvailableNetworks
      }
    }
  }
}

export { ShareNetwork }
