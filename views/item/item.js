Page({
    data:{
        viewShow: true,
        subjectId:'加载中哦O(∩_∩)O',
        itemDetail: {},
    },

    onLoad(params){
        const _this = this;
        this.setData({
            subjectId: params.subjectId
        }),
        wx.request({
            url: 'https://api.douban.com/v2/movie/subject/'+this.data.subjectId,
            header: {
                'content-type': 'json'//注意官方提供的设置参数失效，使用当前的配置方可
            },
            success (res) {
                _this.setData({
                    itemDetail: res.data,
                    viewShow: false
                })
            }
        })
    }
})