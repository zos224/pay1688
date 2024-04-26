import React from 'react';
import { typeHandleSettings } from './type';
import { typeHomePage, typeServicePage, typeSettings } from '@/api/type/settings';
import { message } from 'antd';
import api from "../api/graphql";
import { status_api } from '@/api/common';
import { asValueTypeAny, imagesRenderUrl, imagesRenderUrlFv } from '@/utils';


const useSettings = () => {

    const [loading, setLoading] = React.useState(false)
    const [setting, setSetting] = React.useState<typeSettings | null>({
        home: {
            depositVnTq: {
                logo: undefined,
                title: undefined,
                description: undefined,
                url: undefined
            },
            depositTqVn: {
                logo: undefined,
                title: undefined,
                description: undefined,
                url: undefined
            },
            nhapKhauChinhNgach: {
                logo: undefined,
                title: undefined,
                description: undefined,
                url: undefined
            },
        },
        service: {
            orderShip: []
        }
    })
    const handleSettings: typeHandleSettings = {
        createHome: async (params: typeHomePage, values?: typeSettings) => {
            setLoading(true)
            if (asValueTypeAny(params.banner)?.uid) {
                params.banner = await imagesRenderUrl(asValueTypeAny(params.banner))
            }

            if (asValueTypeAny(params.bannerFooter)?.uid) {
                params.bannerFooter = await imagesRenderUrl(asValueTypeAny(params.bannerFooter))
            }

            if (asValueTypeAny(params.favicon)?.uid) {
                params.favicon = await imagesRenderUrlFv(asValueTypeAny(params.favicon))
            }

            if (asValueTypeAny(params.logoWebsite)?.uid) {
                params.logoWebsite = await imagesRenderUrlFv(asValueTypeAny(params.logoWebsite))
            }

            //
            if (asValueTypeAny(params?.depositVnTq?.logo)?.file) {
                if (asValueTypeAny(params?.depositVnTq?.logo)?.file?.originFileObj) {
                    if (params?.depositVnTq) {
                        params.depositVnTq.logo = await imagesRenderUrl(asValueTypeAny(params?.depositVnTq?.logo)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.depositVnTq?.logo)?.file?.status === "removed") {
                        if (params?.depositVnTq) {
                            params.depositVnTq.logo = "";
                        }
                    }
                }
            }


            //
            if (asValueTypeAny(params?.cooperateWithUs)?.file) {
                if (asValueTypeAny(params?.cooperateWithUs)?.file?.originFileObj) {
                    if (params?.cooperateWithUs) {
                        params.cooperateWithUs = await imagesRenderUrl(asValueTypeAny(params?.cooperateWithUs)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.cooperateWithUs)?.file?.status === "removed") {
                        if (params?.cooperateWithUs) {
                            params.cooperateWithUs = "";
                        }
                    }
                }
            }

            //
            if (asValueTypeAny(params?.depositTqVn?.logo)?.file) {
                if (asValueTypeAny(params?.depositTqVn?.logo)?.file?.originFileObj) {
                    if (params?.depositTqVn) {
                        params.depositTqVn.logo = await imagesRenderUrl(asValueTypeAny(params?.depositTqVn?.logo)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.depositTqVn?.logo)?.file?.status === "removed") {
                        if (params?.depositTqVn) {
                            params.depositTqVn.logo = "";
                        }
                    }
                }
            }

            if (asValueTypeAny(params?.nhapKhauChinhNgach?.logo)?.file) {
                if (asValueTypeAny(params?.nhapKhauChinhNgach?.logo)?.file?.originFileObj) {
                    if (params?.nhapKhauChinhNgach) {
                        params.nhapKhauChinhNgach.logo = await imagesRenderUrl(asValueTypeAny(params?.nhapKhauChinhNgach?.logo)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.nhapKhauChinhNgach?.logo)?.file?.status === "removed") {
                        if (params?.nhapKhauChinhNgach) {
                            params.nhapKhauChinhNgach.logo = "";
                        }
                    }
                }
            }

            //
            if (asValueTypeAny(params?.ecommerces)?.length) {
                for (let [i, file] of asValueTypeAny(params?.ecommerces).entries()) {

                    if (file?.originFileObj) {
                        if (params.ecommerces) {
                            params.ecommerces[i] = await imagesRenderUrl(file?.originFileObj)
                        }
                    } else {
                        if (file && file?.status === "removed") {
                            if (params.ecommerces) {
                                params.ecommerces[i] = ""
                            }
                        }
                    }
                }
            }

            //
            if (asValueTypeAny(params?.paymentService?.banner)?.file) {
                if (asValueTypeAny(params?.paymentService?.banner)?.file?.originFileObj) {
                    if (params?.paymentService) {
                        params.paymentService.banner = await imagesRenderUrl(asValueTypeAny(params?.paymentService?.banner)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.paymentService?.banner)?.file?.status === "removed") {
                        if (params?.paymentService) {
                            params.paymentService.banner = "";
                        }
                    }
                }
            }

            if (asValueTypeAny(params?.depositService?.image)?.file) {
                if (asValueTypeAny(params?.depositService?.image)?.file?.originFileObj) {
                    if (params?.depositService) {
                        params.depositService.image = await imagesRenderUrl(asValueTypeAny(params?.depositService?.image)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.depositService?.image)?.file?.status === "removed") {
                        if (params?.depositService) {
                            params.depositService.image = "";
                        }
                    }
                }
            }

            //
            if (asValueTypeAny(params?.financialManagement?.banner)?.file) {
                if (asValueTypeAny(params?.financialManagement?.banner)?.file?.originFileObj) {
                    if (params?.financialManagement) {
                        params.financialManagement.banner = await imagesRenderUrl(asValueTypeAny(params?.financialManagement?.banner)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.financialManagement?.banner)?.file?.status === "removed") {
                        if (params?.financialManagement) {
                            params.financialManagement.banner = "";
                        }
                    }
                }
            }

            //
            if (asValueTypeAny(params?.depositProcess?.banner)?.file) {
                if (asValueTypeAny(params?.depositProcess?.banner)?.file?.originFileObj) {
                    if (params?.depositProcess) {
                        params.depositProcess.banner = await imagesRenderUrl(asValueTypeAny(params?.depositProcess?.banner)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.depositProcess?.banner)?.file?.status === "removed") {
                        if (params?.depositProcess) {
                            params.depositProcess.banner = "";
                        }
                    }
                }
            }

            //
            if (asValueTypeAny(params?.orderManage?.banner)?.file) {
                if (asValueTypeAny(params?.orderManage?.banner)?.file?.originFileObj) {
                    if (params?.orderManage) {
                        params.orderManage.banner = await imagesRenderUrl(asValueTypeAny(params?.orderManage?.banner)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.orderManage?.banner)?.file?.status === "removed") {
                        if (params?.orderManage) {
                            params.orderManage.banner = "";
                        }
                    }
                }
            }

            if (asValueTypeAny(params?.reasonsPayment?.banner)?.file) {
                if (asValueTypeAny(params?.reasonsPayment?.banner)?.file?.originFileObj) {
                    if (params?.reasonsPayment) {
                        params.reasonsPayment.banner = await imagesRenderUrl(asValueTypeAny(params?.reasonsPayment?.banner)?.file?.originFileObj)
                    }
                } else {
                    if (asValueTypeAny(params?.reasonsPayment?.banner)?.file?.status === "removed") {
                        if (params?.reasonsPayment) {
                            params.reasonsPayment.banner = "";
                        }
                    }
                }
            }




            // return;
            const { data } = await api.apiCreateSetting({
                content: {
                    ...values,
                    home: params
                }
            })
            if (data.status.code === status_api.success) {
                message.success(data?.status?.mess)
            } else {
                message.success(data?.status?.mess)
            }
            setLoading(false)


        },
        createService: async (params: typeServicePage, values?: typeSettings) => {
            try {

                setLoading(true)
                if (asValueTypeAny(params.banner)?.uid) {
                    params.banner = await imagesRenderUrl(asValueTypeAny(params.banner))
                }

                //
                if (asValueTypeAny(params?.orderShip)?.length) {

                    for (let [index, file] of asValueTypeAny(params?.orderShip).entries()) {
                        if (file?.logo?.file?.originFileObj) {
                            if (params?.orderShip) {
                                params.orderShip[index].logo = await imagesRenderUrl(file?.logo?.file?.originFileObj)
                            }
                        } else {
                            if (file?.logo?.file?.status === "removed") {
                                if (params?.orderShip) {
                                    params.orderShip[index].logo = "";
                                }
                            }
                        }
                    }


                }


                //
                if (asValueTypeAny(params?.processTq?.banner)?.file) {
                    if (asValueTypeAny(params?.processTq?.banner)?.file?.originFileObj) {
                        if (params?.processTq) {
                            params.processTq.banner = await imagesRenderUrl(asValueTypeAny(params?.processTq?.banner)?.file?.originFileObj)
                        }
                    } else {
                        if (asValueTypeAny(params?.processTq?.banner)?.file?.status === "removed") {
                            if (params?.processTq) {
                                params.processTq.banner = "";
                            }
                        }
                    }
                }



                //
                if (asValueTypeAny(params?.supportSearch)?.length) {

                    for (let [index, file] of asValueTypeAny(params?.supportSearch).entries()) {
                        if (file?.logo?.file?.originFileObj) {
                            if (params?.supportSearch && params?.supportSearch[index].logo) {
                                params.supportSearch[index].logo = await imagesRenderUrl(file?.logo?.file?.originFileObj)
                            }
                        } else {
                            if (file?.logo?.file?.status === "removed") {
                                if (params?.supportSearch) {
                                    params.supportSearch[index].logo = "";
                                }
                            }
                        }
                    }


                }


                //
                if (asValueTypeAny(params?.trendVn?.banner)?.file) {
                    if (asValueTypeAny(params?.trendVn?.banner)?.file?.originFileObj) {
                        if (params?.trendVn) {
                            params.trendVn.banner = await imagesRenderUrl(asValueTypeAny(params?.trendVn?.banner)?.file?.originFileObj)
                        }
                    } else {
                        if (asValueTypeAny(params?.trendVn?.banner)?.file?.status === "removed") {
                            if (params?.trendVn) {
                                params.trendVn.banner = "";
                            }
                        }
                    }
                }




                // return;
                const { data } = await api.apiCreateSetting({
                    content: {
                        ...values,
                        service: params
                    }
                })
                if (data.status.code === status_api.success) {
                    message.success(data?.status?.mess)
                } else {
                    message.success(data?.status?.mess)
                }
                setLoading(false)
            } catch (error) {
                throw error;
            }
        },
        getSetting: async (): Promise<any> => {
            try {
                return new Promise((resolve, reject) => {
                    setLoading(true)
                    api.apiGetSetting({}).then(({ data }) => {
                        if (data.status.code === status_api.success) {
                            setSetting(data?.data?.content)
                            resolve(data?.data?.content)
                        } else {
                            message.error(data?.status?.mess)
                            setSetting(null)
                        }
                        setLoading(false)
                    }).catch((e) => {
                        setLoading(false)
                        reject(e)
                    })


                })

            } catch (error) {
                setLoading(false)
                throw error;
            }
        },
    }

    return [{ loading, setting }, { setSetting, setLoading, handleSettings }]
};

export default useSettings;