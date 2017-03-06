App({
   // 额外的方法
    foo () {
      return 'bar'
    },
    data:{},
    num:100,
    // 生命周期v
    onLaunch () {
        console.log("onLaunch");
    },
    onShow () {
        console.log("onShow");
    }
})