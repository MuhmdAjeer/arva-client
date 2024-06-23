import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(
        <main className={`${fontSans.className}`}>
          <Component {...pageProps} />
          <Toaster />
        </main>
      )}
    </QueryClientProvider>
  );
}
