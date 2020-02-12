import React from "react";
import Head from "next/head";

const Layout = props => (
  <>
    <Head>
      <title>{props?.pageTitle ?? "Just some page"}</title>

      {typeof window !== "undefined" && (
        /* Happens only on the client side */
        <script>
          {(function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-KV6HRXR")}
        </script>
      )}
    </Head>

    {props?.children}
  </>
);

export default Layout;
