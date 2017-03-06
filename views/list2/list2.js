let start = 0;
let count = 10;
let page = 1;
let nomore = 0;
let loading = true;
let url = "https://api.douban.com/v2/movie/";
var getData = function(_this,url){
    wx.request({
        url: url,
        data:{
            "start": start,
            "count": page*count,
        },
        header: {
            'content-type': 'json'//注意官方提供的设置参数失效，使用当前的配置方可
        },
        success(res){
            _this.setData({
                showTitle: res.data.title,
                movieList: res.data.subjects,
                loadingShow: false,
                // if(nomore == )
            });
            page++;
            loading = false;
            // console.log(_this.data.movieList);
            if(nomore != _this.data.movieList.length){
                console.log(1);
                nomore = _this.data.movieList.length;
            }else{
                console.log(2);
                _this.data.bottomTitle = "小主下面没有了"
                wx.showModal({
                    title: '提示',
                    content: '没有更多资源了',
                    success: function(res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                        }
                    }
                })
            }
        }
    })
}

Page({
    data:{
        showTitle:'努力加载中...',
        movieList:[],
        loadingShow: loading,
        scrollHeight: 0,
        bottomTitle: "加载更多..."
    },
    onLoad (params) {
        url = url + params.type;
        const _this = this;
        wx.getSystemInfo({
          success: res => {
            console.info(res.windowHeight);
            _this.setData({
                scrollHeight: res.windowHeight
            })
          }
        });
        getData(_this,url);
    },
    // 页面显示后处理的逻辑
    onShow (){

    },
    // 下拉到底部触发的事件
    bindDownLoad () {
        loading = true;
        console.log(this);
        getData(this,url)
        console.log('滑动到了底部')
    }
})