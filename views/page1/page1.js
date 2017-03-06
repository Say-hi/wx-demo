//通过getApp获取应用程序的全局对象
const app = getApp()

Page({
    data: {
        loadingShow: true,
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
   onLoad () {
        this.setData({
            loadingShow: false
        })
   }
})