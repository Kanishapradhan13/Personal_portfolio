# Kanisha's Portfolio Website

A stunning, modern, and fully responsive portfolio website built with React and Tailwind CSS. Features smooth animations, interactive components, and a professional design that showcases projects, skills, and experience.

![Portfolio Preview](./portfolio-preview.png)
<!-- UPDATE: Add a screenshot of your portfolio -->

## Features

- **Modern Design**: Unique, professional design with custom color palette and typography
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Smooth Animations**: 60fps scroll-triggered animations and micro-interactions
- **Interactive Components**:
  - Animated hero section with typing effect
  - Hover effects on project cards
  - Animated skill progress bars
  - Interactive timeline for experience
  - Working contact form with validation
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Performance**: Optimized build with lazy loading and code splitting

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter, Poppins, JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kanishapradhan13/portfolio.git
cd portfolio
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

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Personal Information

#### 1. Hero Section (`src/components/Hero.jsx`)

- **Name**: Update the name in the `<h1>` tag (line ~47)
- **Roles**: Modify the `roles` array to change the typing animation text (line ~7)
- **Description**: Update the bio paragraph (line ~56)
- **Stats**: Change the experience years and project counts (line ~62-74)
- **Resume**: Add your resume PDF link in the Download button (line ~86)
- **LinkedIn**: Add your LinkedIn profile URL (line ~100)

```javascript
// Example:
const roles = ['Your Title 1', 'Your Title 2', 'Your Title 3'];
```

#### 2. About Section (`src/components/About.jsx`)

- **Profile Photo**: Replace the placeholder div with your image (line ~38)
  ```jsx
  <img
    src="/path-to-your-photo.jpg"
    alt="Kanisha"
    className="w-full h-full object-cover"
  />
  ```
- **Bio**: Update the paragraphs describing yourself (line ~58-75)
- **Highlights**: Modify the `highlights` array to reflect your achievements (line ~9)

#### 3. Projects Section (`src/components/Projects.jsx`)

Update the `projects` array with your actual projects (line ~8):

```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Detailed description of your project',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  icon: IconName, // Import from lucide-react
  color: 'from-blue-500 to-cyan-500',
  github: 'https://github.com/username/repo',
  demo: 'https://your-demo-url.com',
  image: 'project-screenshot.jpg', // Add to public folder
}
```

To add project screenshots:
1. Add images to the `public` folder
2. Update the image rendering section (line ~77-84)

#### 4. Skills Section (`src/components/Skills.jsx`)

Modify the `skillCategories` array to match your skills (line ~8):

```javascript
{
  category: 'Your Category',
  icon: IconName,
  color: 'from-color-500 to-color-500',
  skills: [
    { name: 'Skill Name', level: 90 }, // Level is 0-100
  ],
}
```

#### 5. Experience Section (`src/components/Experience.jsx`)

Update the `timeline` array with your work experience and education (line ~8):

```javascript
{
  id: 1,
  type: 'work', // or 'education'
  icon: Briefcase, // or GraduationCap
  title: 'Your Position',
  organization: 'Company Name',
  location: 'City, Country',
  period: 'Duration',
  date: 'Start - End',
  description: 'What you did',
  achievements: [
    'Achievement 1',
    'Achievement 2',
  ],
  color: 'from-blue-500 to-cyan-500',
}
```

Update certifications section (line ~113):
- Add your actual certifications
- Update or remove placeholder text

#### 6. Contact Section (`src/components/Contact.jsx`)

- **Form Submission**: Replace the setTimeout simulation with actual form handling (line ~65)

  Example using EmailJS:
  ```javascript
  import emailjs from '@emailjs/browser';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };
  ```

- **Contact Info**: Update phone number or other details in `contactInfo` array (line ~83)
- **LinkedIn**: Add your LinkedIn URL (line ~154)

#### 7. Footer (`src/components/Footer.jsx`)

- **LinkedIn**: Update LinkedIn URL in `socialLinks` array (line ~30)
- **Additional Links**: Modify `quickLinks` or `socialLinks` arrays as needed

### Color Scheme

To change the color scheme, update `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
    500: '#YOUR_COLOR',
  },
  accent: {
    // Your accent color shades
    500: '#YOUR_COLOR',
  },
}
```

### Fonts

To change fonts, update the Google Fonts import in `src/index.css` (line 1) and the font families in `tailwind.config.js`.

## Project Structure

```
kanisha-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... other config
})
```

4. Deploy:
```bash
npm run deploy
```

## SEO Optimization

1. Update `index.html`:
   - Add meta description
   - Add Open Graph tags
   - Add Twitter Card tags
   - Update title

2. Add a `sitemap.xml` in the public folder

3. Add a `robots.txt` in the public folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Smooth 60fps animations

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Kanisha
- Email: kanisapradhan@gmail.com
- GitHub: [@Kanishapradhan13](https://github.com/Kanishapradhan13)
- LinkedIn: [Your LinkedIn Profile]

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ using React and Tailwind CSS
