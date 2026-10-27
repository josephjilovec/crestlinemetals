# Crestline Metals

[Public website](https://crestlinemetals.josephjilovec.com/) for a steel-manufacturing venture in development. Bethlehem, Pennsylvania is the planned operating base.

## Public experience

The homepage follows material requirements, a proposed melt/cast/roll/finish route, an illustrative traceability traveler, and a browser-local buyer requirements organizer. It does not quote, accept an order, or establish current facility capacity.

All eight existing pages and Vercel clean URLs are preserved: home, about, capabilities, markets, quality, news, careers, and contact. The existing parent-hosted executive-brief link is retained without changing the parent repository.

## Stack and maintenance

Static HTML, one venture-specific stylesheet (styles.css), and site.js. No dependency installation or framework is required. The competing runtime theme has been removed; the stylesheet loads directly in the document.

site.js handles the accessible mobile menu, local requirements draft, year labels, and the existing contact preview. Neither form sends data or saves a draft. Input and draft content remain in the page; the requirement draft is not automatically transferred to the contact route.

Representative image sources and delivery variants are documented in assets/IMAGE_NOTES.md. Inline documentation and workflow examples are illustrative, not operating certificates.

Keep facility, capacity, certification, customer, hiring, and operating claims aligned with verified current information. Private business documents remain separate. Deployment configuration is unchanged.
