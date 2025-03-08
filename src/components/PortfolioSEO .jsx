import { Helmet } from "react-helmet";

const PortfolioSEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Your Name | Web Developer</title>
      <meta name="description" content="Portfolio of MD ABID SARKAR, a Frontend Developer specializing in React, JavaScript, and Tailwind CSS." />
      <meta name="keywords" content="Frontend Developer, React, JavaScript, Tailwind, Web Development, Portfolio BD" />
      <meta name="author" content="Md abid sarkar" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Md Abid Sarkar | Web Developer" />
      <meta property="og:description" content="Portfolio of Md Abid Sarkar, showcasing projects built with React, Tailwind, and more." />
      <meta property="og:image" content="https://yourportfolio.com/preview-image.jpg" />
      <meta property="og:url" content="https://yourportfolio.com" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Name | Web Developer" />
      <meta name="twitter:description" content="Check out my portfolio showcasing my web development projects!" />
      <meta name="twitter:image" content="https://yourportfolio.com/preview-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default PortfolioSEO;
