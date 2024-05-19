import type { AppProps } from "next/app";
import "@/app/globals.css";
import NavBar from "@/app/components/navBar";
import RootLayout from "@/app/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <NavBar />
      <Component {...pageProps} />
    </RootLayout>
  );
}
