import React from "react";
import App from "next/app";

import "../app/globals.css";
import RootLayout from "@/app/layout";
import Navbar from "@/app/components/navBar";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <RootLayout>
              <Navbar/>
                <Component {...pageProps} screen={'register'}/>
            </RootLayout>
        );
    }
}

export default MyApp;