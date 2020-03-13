import * as fb from "firebase";

class Ad {
  constructor(
    title,
    description,
    ownerId,
    imageSrc = "",
    id = null,
    promo = false
  ) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.id = id;
    this.promo = promo;
  }
}

export default {
  namespaced: true,
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
    async createAd({ commit, rootGetters }, payload) {
      commit("common/clearError", payload, { root: true });
      commit("common/setLoading", true, { root: true });

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          rootGetters["user/user"].id,
          payload.imageSrc,
          payload.promo
        );
        const fbValue = await fb
          .database()
          .ref("ads")
          .push(newAd);
        console.log(fbValue);
      } catch (e) {
        commit("common/setError", e.message, { root: true });
        commit("common/setLoading", false, { root: true });
        console.log(rootGetters);

        throw e;
      }
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
