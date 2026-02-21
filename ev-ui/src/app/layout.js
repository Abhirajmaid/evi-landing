import localFont from "next/font/local";
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
      </body>
    </html>
  );
}