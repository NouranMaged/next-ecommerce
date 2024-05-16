import React from "react";
import App from "next/app";
import RootLayout from "@/app/layout";
import "../app/globals.css";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        );
    }
}

export default MyApp;
