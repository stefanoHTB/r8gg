import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const Layout = () => {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3561867661653206"
          crossOrigin="anonymous"
        ></script>

        <script>
          {(window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "YOUR_AD_CLIENT_ID",
            enable_page_level_ads: true,
          })}
        </script>
      </Helmet>
      <Navbar />
      <div className="content-wrapper bg-white dark:bg-stone-950 pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
