import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
