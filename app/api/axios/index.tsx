import axios from "axios";
import { getCookie } from "cookies-next";
import { DEFAULT_VARIABLE_COOKIES } from "@/utils/common";

export const Axios = {
  async postFiles(url: any, formData: any, progressBar: any) {
    return await axios
      .post(url, formData, progressBar)
      .then(({ data }) => {
        if (data.status) {
          return {
            status: data.status,
            mess: data.mess,
            resul: data.resul,
          };
        } else {
          return {
            status: 503,
            mess: "Lỗi xử lý từ server",
            resul: [],
          };
        }
      })
      .catch((error) => {
        if (error.response) {
          return {
            status: 501,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        } else if (error.request) {
          return {
            status: 502,
            mess: "Không nhận được phản hồi từ server",
            resul: [],
          };
        } else {
          return {
            status: 500,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        }
      });
  },

  async postImages(
    url: any,
    file: any,
    key: "avatar" | "image" | "favicon",
    token?: string
  ) {
    let formData = new FormData();
    formData.append(key, file);

    let headers = {
      Authorization: token || getCookie(DEFAULT_VARIABLE_COOKIES.token),
    };

    return await axios
      .post(`${url}-${key}`, formData, {
        headers: headers,
      })
      .then(({ data }) => {
        return {
          status: data.status?.code,
          mess: data?.status?.mess,
          resul: data.url,
        };
      })
      .catch((error) => {
        if (error.response) {
          return {
            status: 501,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        } else if (error.request) {
          return {
            status: 502,
            mess: "Không nhận được phản hồi từ server",
            resul: [],
          };
        } else {
          return {
            status: 500,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        }
      });
  },
  async post(url: any, params: { [key: string]: any }) {
    return await axios
      .post(url, {
        params,
      })
      .then(({ data }) => {
        return {
          status: data.status,
          mess: data.mess,
          resul: data.resul,
        };
      })
      .catch((error) => {
        if (error.response) {
          return {
            status: 501,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        } else if (error.request) {
          return {
            status: 502,
            mess: "Không nhận được phản hồi từ server",
            resul: [],
          };
        } else {
          return {
            status: 500,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        }
      });
  },

  async get(url: any) {
    return await axios
      .get(url)
      .then(({ data }) => {
        return {
          status: data.status,
          mess: data.mess,
          resul: data.resul,
        };
      })
      .catch((error) => {
        if (error.response) {
          return {
            status: 501,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        } else if (error.request) {
          return {
            status: 502,
            mess: "Không nhận được phản hồi từ server",
            resul: [],
          };
        } else {
          return {
            status: 500,
            mess: "Đã xảy ra lỗi trong quá trình sử lý",
            resul: [],
          };
        }
      });
  },
};
