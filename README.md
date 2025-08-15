# Nurture & Thrive — Dog Caring Website

Welcome to the Nurture & Thrive project — a full-width, modern, multi-page dog caring website crafted with Tailwind CSS, glassmorphism, dark mode support, micro-animations, and interactive UX features.

Project structure

my-project/
├── public/
│   ├── index.html        # Landing page — hero, services, gallery, FAQ, CTAs
│   ├── about.html        # About page — story, values, team
│   └── contact.html      # Contact & booking page with form
├── server/
│   └── index.js          # Express server and simple API endpoint
├── package.json          # Scripts & dependencies
├── vercel.json           # Vercel deployment config
└── README.md             # This file

Highlights & features

- Tailwind CSS used via CDN; all classes applied directly in HTML for styling.
- Google Fonts comments added at the top of HTML files ({{font: Poppins}}, {{font: Lora}}) and loaded via Google Fonts link.
- Full-width design (fluid containers, w-full, no fixed max-widths) — content stretches to viewport width.
- Glassmorphism panels, gradient accents, depth via shadows and layered backgrounds.
- Dark mode toggle with smooth transitions; preference saved to localStorage.
- Parallax and micro-animations: mouse-based parallax on hero, floating accents, slider transitions.
- Interactive components: FAQ accordion, image slider/gallery, modal tour, progress/gamified quiz, form with client-side validation, and lazy-loaded images.
- Accessibility: ARIA attributes for controls, keyboard-friendly modal (Esc to close), focusable FAQ items.
- SEO: meta tags for description and Open Graph preview placeholder.
- Server: simple Express server serving static files and a contact API endpoint at POST /api/contact.

Images

- Images use placeholders of the format https://images.pexels.com/photos/1634011/pexels-photo-1634011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940. The system that integrates these files should replace those placeholders with high-quality images (Unsplash/Pexels) or you can replace them manually with your own image URLs.
- If you want to use your own images, replace the src values with data URIs or file paths.

Local setup (development)

1. Clone the repository or copy the files into a local folder.
2. Install dependencies:

   npm install

3. Run the app locally:

   npm run dev

   This will start the server using nodemon (auto-restarts on changes). The Express server serves the public/ folder and an API endpoint at /api/contact.

4. Open http://localhost:3000 in your browser.

Deployment

- Deploy to Vercel: the provided vercel.json uses a Node server build for server/index.js and serves the public folder statically. You can also deploy as static files and move the API to an /api folder for serverless functions if preferred.

Customization tips

- Fonts: Change the font comments at the top of the HTML files and update the Google Fonts link.
- Tailwind: For production, consider building Tailwind with a proper pipeline instead of the CDN to remove unused CSS and improve performance.
- Images: Replace each https://images.pexels.com/photos/936320/pexels-photo-936320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 placeholder with real images or data URIs.
- Security: For production, add rate-limiting, request validation, and an email service to send form submissions.

Extending the project

- Add a booking calendar integration (e.g., Calendly or custom booking system).
- Add authentication and a dashboard for clients to view photos and reports.
- Integrate payments for deposits and day passes.
- Connect to a real database (Postgres, MongoDB) to store bookings and client information.

Accessibility & performance

- Site includes ARIA labels and keyboard-friendly components. For full accessibility compliance, run audits (Lighthouse, axe) and adjust focus states.
- Use a production Tailwind build + CDN caching and image optimization for faster load times.

Support

If you need assistance customizing the site or integrating with your backend services, open an issue or contact the author.

License

MIT

