import { getCookie } from "cookies-next";
import React from "react";

export const middleware = (Component, pageProps) =>
  class MiddlewareAuth extends React.Component {
    render() {
      if (
        this.props.router?.state?.asPath?.includes("admin") &&
        this.props.router?.state?.asPath !== "/admin/login"
      ) {
        if (!getCookie("token_logistic")) {
          this.props.router.push("/admin/login");
        } else {
          return <Component {...this.props} />;
        }
        // else {
        //   switch (getCookie("role_tdcx")) {
        //     case "admin":
        //       return <Component {...this.props} />;
        //     case "partner":
        //       let path = this.props.router?.state?.asPath;
        //       if (pathPartner?.find((_) => _ === path)) {
        //         return <Component {...this.props} />;
        //       } else {
        //         this.props.router.push("/admin/post");
        //       }
        //       break;
        //   }
        // }
      }

      return <Component {...this.props} />;
    }
  };

export const pathPartner = ["/admin/post", "/admin/request-form"];
