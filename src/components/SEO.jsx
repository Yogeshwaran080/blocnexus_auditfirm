import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "BlocNexus | Institutional Web3 Smart Contract Audits & Protocol Security";
const DEFAULT_DESC = "BlocNexus provides tier-1 Web3 smart contract auditing, protocol penetration testing, formal verification, and real-time transaction threat prevention for blockchain systems.";
const DEFAULT_KEYWORDS = "smart contract audit, Web3 security, protocol audit, blockchain security, EVM audit, Solana security, formal verification, transaction fraud prevention";
const SITE_URL = "https://blocnexus-auditfirm.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema,
}) {
  const location = useLocation();
  const currentUrl = canonical ? `${SITE_URL}${canonical}` : `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (nameAttr, attrValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update standard meta tags
    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);
    updateMeta("name", "author", "BlocNexus Security");

    // OpenGraph meta tags
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:url", currentUrl);
    updateMeta("property", "og:image", ogImage);
    updateMeta("property", "og:site_name", "BlocNexus Security");

    // Twitter Card meta tags
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", ogImage);

    // Canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // JSON-LD Structured Data
    let scriptTag = document.getElementById("json-ld-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "json-ld-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BlocNexus Security",
      "url": SITE_URL,
      "logo": ogImage,
      "description": description,
      "sameAs": [
        "https://github.com/Yogeshwaran080/blocnexus_auditfirm"
      ],
      "knowsAbout": [
        "Smart Contract Auditing",
        "Blockchain Security",
        "Penetration Testing",
        "Transaction Threat Prevention",
        "Formal Verification"
      ]
    };

    scriptTag.textContent = JSON.stringify(schema || defaultSchema);
  }, [title, description, keywords, currentUrl, ogType, ogImage, schema]);

  return null;
}
