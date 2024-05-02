export interface typeSettings {
    home: typeHomePage
    service: typeServicePage
}


export interface typeHomePage {
    bannerFooter?: string
    logoWebsite?: string
    bct?: string
    favicon?: string,
    homeTitle?: string
    homeDescription?: string
    banner?: string
    searchUrl?: string
    depositVnTq: {
        logo?: string
        title?: string
        description?: string
        url?: string
    }
    depositTqVn: {
        logo?: string
        title?: string
        description?: string
        url?: string
    }
    nhapKhauChinhNgach: {
        logo?: string
        title?: string
        description?: string
        url?: string
    }
    urlDangNhap?: string
    urlDangKy?: string
    calculateShippingChargeUrl?: string
    lookUpThePriceUrl?: string
    lookUpBillUrl?: string
    ecommerces?: string[]
    paymentService?: {
        banner?: string
        description?: string
        url?: string
    }
    depositService?: {
        description?: string
        url?: string
        image?: string
    }

    depositProcess?: {
        title?: string
        banner?: string
        url?: string
        step?: {
            url?: string
            title?: string
            description?: string
        }[]
    }

    financialManagement?: {
        banner?: string
        description?: string;
    }

    orderManage?: {
        banner?: string
        url?: string
        itemOrder?: {
            title?: string
            description?: string
        }[]
    }
    reasonsPayment?: {
        title?: string[]
        banner?: string
    }
    cooperateWithUs?: string
    partner?: {
        description?: string
        url?: string
    }

}


export interface typeServicePage {
    favicon?: string,
    homeTitle?: string
    homeDescription?: string
    banner?: string
    titleBanner?: string
    descriptionBanner?: string
    urlBanner?: string
    orderShip: {
        logo?: string;
        title?: string
        items?: {
            title?: string
        }[]
    }[]
    orderShipUrl?: string
    processTq?: {
        banner?: string
    }
    supportSearch?: {
        logo?: string
        title?: string
        description?: string
    }[]
    ourCooperate?: {
        title?: string
        description?: string
        url?: string
    }
    trendVn?: {
        description?: string
        banner?: string

    }
    source?: {
        description?: string
    }

    ship?: {
        description?: string
        url?: string
    }


}