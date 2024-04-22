import { login } from "./auth";
import { createNew } from "./createNew";
import { createSetting } from "./createSettings";
import { getNew } from "./getNew";
import { getNews } from "./getNews";
import { getSetting } from "./getSettings";
import { getUser } from "./getUser";
import { updateNew } from "./updateNew";

export default {
  apiLogin: login,
  apiGetUser: getUser,
  apiCreateSetting: createSetting,
  apiGetSetting: getSetting,
  apiGetNews: getNews,
  apiGetNew: getNew,
  apiCreateNew: createNew,
  apiUpdateNew: updateNew,
};

export const resultResponsive:
  | {
      data: {
        status: {
          code: number;
          mess: string;
          token: string;
        };
        data: any;
      };
    }
  | any = async (data: any, key: any) => {
  try {
    const resul = data?.data;

    if (data) {
      return {
        data: resul[key],
        ...resul.status,
      };
    }
    return null;
  } catch (error) {
    throw error;
  }
};
