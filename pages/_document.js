import Document, { Html, Head, Main, NextScript } from 'next/document'
import ScreenDebug from '../components/ScreenDebug';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };
        return props;
    }

    render() {
        return (
            <Html>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-53098604-8');
                    `}} />
                    <meta name="facebook-domain-verification" content="7nfzcjgr3eow37bilf7kpnh51npyw8" />
                    <meta name="google-site-verification" content="0HtQM6tcc_qrAqOr1V-5G1syL0b6Obc5i6S1PgCSIMQ" />
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '697842164149493');
                        fbq('track', 'PageView');
                    `}} />
                    <noscript dangerouslySetInnerHTML={{
                        __html: `
                        <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=697842164149493&ev=PageView&noscript=1"/>
                    `}} />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
                    <script src="https://use.fontawesome.com/3522c14f66.js" defer></script>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
                    <script src="https://gumroad.com/js/gumroad.js" ></script>
                </Head>
                <body>
                    <ScreenDebug />
                    <Main />
                    <div id="modal" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
