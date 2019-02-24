var douban = require('../../comm/script/fetch')
var url = 'https://douban.uieee.com/v2/movie/subject/'
var searchByTagUrl = 'https://douban.uieee.com/v2/movie/search?tag='
Page({
    data: {
        filmDetail: {},
        showLoading: true,
		showContent: false
    },
    onLoad: function(options) {
        var that = this
        var id = options.id
		that.setData({
			id: options.id
		})
		douban.fetchFilmDetail.call(that, url, id)
    },
	viewPersonDetail: function(e) {
		var data = e.currentTarget.dataset;
		wx.redirectTo({
		  url: '../personDetail/personDetail?id=' + data.id
		})
	},
	viewFilmByTag: function(e) {
		var data = e.currentTarget.dataset
		var keyword = data.tag
		wx.navigateTo({
			url: '../searchResult/searchResult?url=' + encodeURIComponent(searchByTagUrl) + '&keyword=' + keyword
		})
	},
	onPullDownRefresh: function() {
		var data = {
			id: this.data.id
		}
		this.onLoad(data)
	}
})