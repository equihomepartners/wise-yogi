# Wise Yogi Website

A modern, responsive website for Wise Yogi, celebrating mindful living and sustainable farming practices.

## Features

- Modern, responsive design
- Server-side rendering with Next.js
- Smooth animations with Framer Motion
- Mobile-friendly navigation
- SEO optimized
- Tailwind CSS for styling
- Cloudinary video integration

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd wise-yogi
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file in the root directory and add your Cloudinary configuration:
```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Important Notes for Local Development

- The project uses Cloudinary for video hosting. Make sure your `.env.local` file has the correct `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.
- When running locally, the project will use server-side rendering for better development experience.
- Production builds will use static export (`output: 'export'`), but this is handled automatically.
- If videos don't load, verify that:
  - Your Cloudinary cloud name is correct
  - The video public IDs match exactly with what's in your Cloudinary Media Library
  - The videos are publicly accessible in your Cloudinary account

## Project Structure

- `src/app/` - Main application code
  - `components/` - Reusable React components
  - `sections/` - Page sections and layouts
  - `styles/` - Global styles and Tailwind CSS configuration
  - `utils/` - Utility functions and helpers
  - `assets/` - Static assets like images and fonts

## Built With

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Hero Icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [Cloudinary](https://cloudinary.com/) - Cloud-based video and image management

## Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
- Run linter: `npm run lint`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
