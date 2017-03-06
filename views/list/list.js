Page({
    data:{
      message:'hello 小程序',
        list:[],
        loading: true
    },
    onLoad (){
       // 加载数据并呈现到页面上
       //  this.data.message = xxx 这种方法小程序捕获不到
        this.setData({
            message: Date.now()
        })
        // 获取一个api中的数据 不使用ajax，ajax是bom提供的api
        const _this = this;
        wx.request({
            url: 'https://api.douban.com/v2/movie/in_theaters',
            data: {},
            header: {
                'content-type': 'json'//注意官方提供的设置参数失效，使用当前的配置方可
            },
            success: function(res) {
                _this.setData({
                    list: res.data.subjects,
                    loading: false
                })
            }
        })
    }

})