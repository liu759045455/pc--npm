import axios from "./http";

export function IndexList() {
    return axios({
        url: "/brigade/view/index",
        method: "post"
    })
}

export function PostBanners() {
    return axios({
        url: "/datalyg/view/banners",
        method: "post"
    })
}


export function GetNews(data) {
    return axios({
        url: `/brigade/view/news`,
        method: "post",
        data
    })
}

export function GetSpecial(type) {
    return axios({
        url: `/brigade/view/specialClass/${type}`,
        method: "get",
    })
}
