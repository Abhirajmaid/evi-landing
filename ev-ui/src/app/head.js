export default function Head() {
  const title = "EVI — Electric Vehicles & Dealerships";
  const description =
    "EVI - Made for the electric future. Explore Chhota Otto, Rydan and Chhota Bull — dealership opportunities, products, and contact information.";
  const siteUrl = "https://evimobility.com";
  const image = `${siteUrl}/favicon/web-app-manifest-512x512.png`;

  return (
    <>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content="EVI, electric vehicles, Chhota Otto, Rydan, Chhota Bull, dealership, EV dealership, Greenway Mobility"
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Favicons (from public/favicon/) */}
      <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="EVI" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#00586D" />

      {/* JSON-LD structured data (LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EVI",
            url: siteUrl,
            logo: `${siteUrl}/favicon/favicon-96x96.png`,
            telephone: "+91 917-3862672",
            email: "info@greenwaymobility.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Greenway Mobility, Ahmedabad",
              addressLocality: "Ahmedabad",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </>
  );
}

