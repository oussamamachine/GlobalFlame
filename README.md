# GlobalFlame - The World's Kitchen

A premium, fully responsive restaurant website built with React, TailwindCSS, and Framer Motion.

## Features

- **Luxury Design**: Dark, elegant theme inspired by high-end restaurants
- **Fully Responsive**: Mobile-first design that works on all devices
- **Multi-language Support**: English, French, and Arabic
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Menu Filtering**: Filter by cuisine, dietary preferences, and price
- **Online Reservations**: Complete booking system with form validation
- **Order Online**: Delivery and pickup options
- **SEO Optimized**: Meta tags and structured data

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd globalflame
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📁 Project Structure

```
globalflame/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── FloatingBookButton.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Reservations.jsx
│   │   ├── OrderOnline.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── context/         # React context
│   │   └── LanguageContext.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useImageLazyLoad.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Pages

1. **Home**: Hero section with parallax, restaurant story, featured dishes, reviews
2. **Menu**: Complete menu with filtering by cuisine, diet, and price
3. **Reservations**: Online table booking with date/time selection
4. **Order Online**: Delivery and pickup options
5. **About**: Restaurant story, chef profiles, values, timeline
6. **Contact**: Contact form, location map, WhatsApp integration

## 🌍 Multi-language Support

Switch between:

- English (EN)
- French (FR)
- Arabic (AR)

Language preference is saved in localStorage.

## 🛠 Technologies Used

- **React** 18.3.1
- **React Router** 6.21.0
- **TailwindCSS** 3.4.1
- **Framer Motion** 11.0.0
- **React Icons** 5.0.0
- **Vite** 5.1.0

## Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Key Features

### Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized animations with Framer Motion
- CSS-in-JS with TailwindCSS

### UX/UI

- Smooth scroll behavior
- Parallax effects
- Glass morphism design
- Hover animations
- Full-screen mobile menu
- Floating "Book a Table" button

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Screen reader friendly

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or support, please contact: info@globalflame.com

---

Made by Oussama Machine
