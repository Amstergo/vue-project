export default {
  state: {
    ads: [
      {
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "title",
        description: "desc",
        promo: true,
        id: "123"
      },
      {
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "title2",
        description: "desc2",
        promo: false,
        id: "1223"
      },
      {
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "title3",
        description: "desc3",
        promo: false,
        id: "122223"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = Math.random().toString();

      commit("createAd", payload);
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId);
      };
    }
  }
};
