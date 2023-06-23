const domain = "http://141.11.107.63:8080";
export const apis = {
    "signup": `${domain}/user/signup/`,
    "signin": `${domain}/user/login/`,
    "store" : {
        "create" : `${domain}/store/create/`,
        "list" : `${domain}/store/list/`,
        "delete" : `${domain}/store/delete/`,
        "search" : `${domain}/store/search/?search=`,
    },
    "product" : {
        "product" : `${domain}/product/`,
        "create" : `${domain}/product/create/`,
        "list" : `${domain}/product/list/`,
        "delete" : `${domain}/product/delete/`,
        "search" : `${domain}/product/search/?search=`,
    },
    "basket" : {
        "create" : `${domain}/basket/create/`,
        "list" : `${domain}/basket/list/`,
        "delete" : `${domain}/basket/delete/`,
    },
}