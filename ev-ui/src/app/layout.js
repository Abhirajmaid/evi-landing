import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

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
      <body className={`${purista.variable} ${ceraPro.variable} font-cerapro antialiased`}>
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