const domain = "http://141.11.107.63:8080";
export const apis = {
    "signup": `${domain}/user/signup/`,
    "signin": `${domain}/user/login/`,
    "store" : {
        "create" : `${domain}/store/create/`,
        "list" : `${domain}/store/list/`,
        "delete" : `${domain}/store/delete/`,
    },
    "product" : {
        "product" : `${domain}/product/`,
        "create" : `${domain}/product/create/`,
        "list" : `${domain}/product/list/`,
    },
}