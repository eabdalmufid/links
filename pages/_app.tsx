import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';

import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from 'next/script';

import SEO from '../config/seo';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/sen/400.css';
import '@fontsource/sen/700.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script strategy="lazyOnload" src={`https://cloud.umami.is/script.js`} data-website-id={process.env.NEXT_PUBLIC_UMAMI_ANALYTICS} />
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

			<Script id="google-analytics" strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
        `}
			</Script>

			<Analytics />

			<NextSeo {...SEO} />

			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
