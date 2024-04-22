import { Axios } from "@/api/axios"
export function asValueTypeAny(value: any) {
    return value;
}

export const imagesRenderUrl = async (params: any) => {
    let url = "";
    await Axios.postImages(
        (process.env.NEXT_PUBLIC_SEVER_URL || "https://demo3.ani2am.me") + '/upload',
        params,
        "image"
    ).then(({ resul }) => {
        url = resul
    })

    return url;
}

export const imagesRenderUrlFv = async (params: any) => {
    let url = "";
    await Axios.postImages(
        (process.env.NEXT_PUBLIC_SEVER_URL || "https://demo2.ani2am.me") + '/upload',
        params,
        "favicon"
    ).then(({ resul }) => {
        url = resul
    })

    return url;
}