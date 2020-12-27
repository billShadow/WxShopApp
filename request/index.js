let num = 0;
export const request=(params)=>{
    num++;
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/"
    wx.showLoading({title: "加载中"});
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:baseUrl + params.url,
            success: (result)=>{
                resolve(result);
                
            },
            fail: (err)=>{
                reject(err);
            },
            complete:()=>{
                num--;
                if (num === 0) {
                    wx.hideLoading();
                }
            }
        });
    })
}