var order = ['red', 'yellow', 'blue', 'green', 'red'];
var initData = 'this is first line\nthis is second line';
var extraLine = [];
Page({
    data: {
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
            {
                id: 0,
                name: '美国'
            },
            {
                id: 1,
                name: '中国'
            },
            {
                id: 2,
                name: '巴西'
            },
            {
                id: 3,
                name: '日本'
            }
        ],
        index: 0,
        date: '2016-09-01',
        time: '12:01',
        focus: false,
        inputValue: '',
        disable: false,
        loading: false,
        text: initData,
        toView: 'red',
        scrollTop: 100,
        iconSize: [20, 30, 40, 50, 60, 70],
        iconColor: [
            'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple','rgb(0,0,0)'
        ],
        iconType: [
            'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
            'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
            'info_circle', 'cancel', 'search', 'clear'
        ],
        items: [
            {name: "USA",value:'美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ]
    },
    onPullDownRefresh (){
      console.log(123);
      wx.stopPullDownRefresh();
    },
    upper: function(e) {
        console.log(e)
    },
    lower: function(e) {
        console.log(e)
    },
    scroll: function(e) {
        console.log(e)
    },
    tap: function(e) {
        for (var i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1]
                })
                break
            }
        }
    },
    tapMove: function(e) {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        })
    },
    add () {
        extraLine.push('other line')
        this.setData({
            text: initData + '\n' + extraLine.join('\n'),
            loading: true,
            disable: true
        })
        console.log(this.data.text)
    },
    remove () {
        if(extraLine.length > 0){
            extraLine.pop()
            this.setData({
                text: initData + '\n' + extraLine.join('\n'),
                loading: false,
                disable: false
            })
        }
    },
    checkboxChange (e) {
        console.log(e);
        console.log('checkbox发生change事件,携带的value值为：'+e.detail.value)
    },
    bindButtonTap: function() {
        this.setData({
            focus: true
        })
    },
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
    bindReplaceInput: function(e) {
        var value = e.detail.value
        var pos = e.detail.cursor
        if(pos != -1){
            //光标在中间
            var left = e.detail.value.slice(0,pos)
            //计算光标的位置
            pos = left.replace(/22/g,'2').length
        }

        //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
        return {
            value: value.replace(/22/g,'2').replace(/11/g,"1"),
            cursor: pos
        }

        //或者直接返回字符串,光标在最后边
        //return value.replace(/11/g,'2'),
    },
    bindHideKeyboard: function(e) {
        if (e.detail.value === '123') {
            //收起键盘
            wx.hideKeyboard()
        }
    },
    onShareAppMessage () {
        return {
            title: '我的小程序',
            path: '/views'
        }
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindDateChange: function(e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function(e) {
        this.setData({
            time: e.detail.value
        })
    }
})
