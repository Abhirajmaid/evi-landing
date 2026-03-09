import localFont from "next/font/local";
import Script from "next/script";
import Head from "../components/Head";
import "../styles/globals.css";

const purista = localFont({
  src: "../../public/fonts/Purista_Bold.otf",
  variable: "--font-purista",
});

const ceraPro = localFont({
  src: "../../public/fonts/Cerapro-black.otf",
  variable: "--font-cera",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className={`${purista.variable} ${ceraPro.variable} font-cerapro antialiased`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];
          t=b.createElement(e);t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}
          (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '905074672302961');
          fbq('track', 'PageView');
          `}
        </Script>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=905074672302961&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}