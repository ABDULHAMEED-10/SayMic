# Wedding & Walima Invitation Card

A beautiful, responsive wedding invitation card built with React, TypeScript, and Tailwind CSS.

## Features

- **Elegant Design**: Clean, minimal layout with custom color palette
- **Responsive**: Adapts beautifully to all screen sizes
- **Dynamic Personalization**: URL parameter support for personalized invitations
- **Smooth Animations**: Fade-in effects and hover transitions
- **Google Fonts**: Playfair Display for headings, Inter for body text

## Color Palette

- Background: Soft Ivory (`#FAF9F6`)
- Text: Deep Charcoal (`#333333`)
- Accents:
  - Gold (`#D4AF37`)
  - Blush Pink (`#F8D7DA`)
  - Emerald Green (`#0F9D58`)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:
   ```bash
   cd wedding-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Basic Invitation

Visit `http://localhost:5173` to see the default invitation.

### Personalized Invitation

Add a `name` parameter to the URL to personalize the invitation:

```
http://localhost:5173?name=roman_akhtar
```

This will display: "Roman Akhtar is invited to the wedding of Abdul Hameed weds Daughter of Shahid Iqbal"

The name parameter:
- Replaces underscores (`_`) with spaces
- Capitalizes each word
- Example: `roman_akhtar` becomes "Roman Akhtar"

## Project Structure

```
wedding-card/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Custom animations and styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      ivory: '#FAF9F6',
      charcoal: '#333333',
      gold: '#D4AF37',
      blush: '#F8D7DA',
      emerald: '#0F9D58',
    },
  },
}
```

### Content

Update the wedding details in `src/App.tsx`:

- Wedding date and time
- Walima date and time
- Venue information
- Couple names
- Google Maps coordinates

### Fonts

Change fonts in `index.html` and `tailwind.config.js`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## License

ISC
