
const mutations = {
  setCurIndex(state,index) {
    state.curIndex = index
  },
  hasLogin(state) {
    state.isLogin = true
  },
  //用户名
  setUsername(state, username) {
    state.username = username
  },
  //被赞数
  setStarnum(state) {
    state.starnum++
  },
  cutStarnum(state) {
    state.starnum--
  },
  //粉丝数
  setFannum(state) {
    state.fannum++
  },
  cutFannum(state) {
    state.fannum--
  },
  //关注数
  setFocusnum(state) {
    state.focusnum ++
  },
  cutFocusnum(state) {
    state.focusnum --
  },
  //发布数
  setFabunum(state) {
    state.fabunum ++
  },
  cutFabunum(state) {
    state.fabunum --
  },
  //卖出数
  setSellnum(state) {
    state.sellnum ++
  },
  cutSellnum(state) {
    state.sellnum --
  },
  //买到数
  setBuynum(state) {
    state.buynum++
  },
  cutBuynum(state) {
    state.buynum --
  },
  //赞过的
  setLikenum(state) {
    state.likenum ++
  },
  cutLikenum(state) {
    state.likenum --
  },
  //获取用户信息
  setUserinfo(state,userinfo) {
    window.localStorage.setItem('useravatar', userinfo.avatar)
    state.userinfo = userinfo
  },
  //登陆状态为false
  noLogin(state) {
    state.isLogin = false
  },
  setNews(state, news) {
    state.news = news
  }
}

export default mutations