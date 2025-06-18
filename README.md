# 49 Shades Web Project

This repository contains guidance and a basic HTML/CSS prototype that mirrors the intended layout and styles for the **49 Shades** marketing guild website. The prototype is designed so that it can be rebuilt in Webflow using the provided assets, class names, and component references.

## Overview

- **Tone**: Bold, energetic, creative, refined. Inspired by Lagos hustle with global sophistication.
- **Typography**: [Fjalla One](https://fonts.google.com/specimen/Fjalla+One) for headings and [Inter](https://fonts.google.com/specimen/Inter) for body copy.
- **Colors**: Base `#0D0D0D`, accent gold `#E3B341`, and a gradient palette spanning 49 shades.
- **Layout**: 12‑column responsive grid with generous spacing, rounded corners, and soft shadows.

The HTML files demonstrate general layout and animation structure using BEM‑style class names. They do not provide membership or e‑commerce features, which must be configured directly inside Webflow.

## File Structure

```
/
├─ README.md          – This guide
└─ template/
   ├─ index.html       – Home page mockup
   ├─ about.html       – About page mockup
   ├─ css/
   │  └─ styles.css    – Styles for all pages
   └─ js/
      └─ main.js       – Simple fade/slide interactions
```

## Setup

1. Clone this repository.
2. Open the HTML files in your browser to preview the layout and styles.
3. Use the file content as a reference when recreating each section in Webflow Designer.

## Collections to Create in Webflow

1. **Services** – Items for Meta Ads, SEO, Funnels, etc.
2. **Case Studies** – Summaries and KPI fields. Filterable by shade.
3. **Blog Posts** – Standard CMS for articles.
4. **Cities** – Directory of locations.
5. **Blueprints** – Gated content using Webflow Membership roles.

## Notes

- Interaction logic (scroll fades, parallax hero) is implemented in `main.js` using basic Intersection Observer patterns. You can replicate similar effects with Webflow interactions.
- Dialogflow chatbot embed, GA4, and Hotjar can be inserted in the Webflow project settings under **Custom Code**.
- For e‑commerce (templates & courses) configure Webflow Ecommerce with Paystack/Stripe gateways.
- Ensure all images are exported in WebP and set to lazy load for optimal performance.

