import axios from "./http";

// 首页轮播图
export function PostBanners() {
    return axios({
        url: "/datalyg/view/banners",
        method: "post"
    })
}
