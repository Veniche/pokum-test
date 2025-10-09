import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

export function Seo({
  title,
  description,
  keywords = 'pokum, business incorporation, company registration, business setup, legal services, business consulting, corporate services',
  image = 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758533832/pokum._bjfoo8.png',
  url = 'https://pokum.id',
  type = 'website',
  siteName = 'Pokum',
  locale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterSite = '@pokum_id',
  twitterCreator = '@pokum_id',
}: SeoProps) {
  const fullTitle = title === 'Pokum' ? title : `${title} | Pokum`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Pokum" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758533832/pokum._bjfoo8.png" />
      <link rel="apple-touch-icon" href="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758533832/pokum._bjfoo8.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}
