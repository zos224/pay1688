import { status_api } from '@/api/common';
import api from "@/api/graphql";
import { reState } from '@/context';
import { DEFAULT_VARIABLE_COOKIES, TIMEOUT_COOKIES } from '@/utils/common';
import { message } from 'antd';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React from 'react';
import { handleAuth, typeGetUser } from './type';


const useAuth = () => {
    const router = useRouter()
    const { setUser } = React.useContext(reState);
    const [loading, setLoading] = React.useState(false)

    const handleAuth: handleAuth = {
        login: async (req) => {
            try {
                setLoading(true)
                const { data } = await api.apiLogin(req);
                if (data?.status?.code === status_api.success) {
                    setCookie(DEFAULT_VARIABLE_COOKIES.token, data?.status?.token, {
                        maxAge: TIMEOUT_COOKIES,
                    });
                    // setUser(data?.data)
                    message.success(data?.status?.mess)
                    setLoading(false)
                    router.push('/admin')
                } else {
                    setLoading(false)
                    message.success(data?.status?.mess)
                }

            } catch (error) {
                setLoading(false)
                throw error
            }
        },
        getUser: async (req: typeGetUser) => {
            try {
                const { data } = await api.apiGetUser({})
                if (data?.status?.code === status_api.success) {
                    setUser(data?.data)
                }

            } catch (error) {
                throw error;
            }
        }
    }

    return [{ loading }, { handleAuth }]
};

export default useAuth;