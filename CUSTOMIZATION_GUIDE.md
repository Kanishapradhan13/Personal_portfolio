# Portfolio Customization Guide

This guide will help you quickly customize the portfolio with your personal information. All placeholders are marked with comments `// UPDATE:` or `[PLACEHOLDER]`.

## Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add profile photo in About section
- [ ] Update projects with your own work
- [ ] Adjust skills and skill levels
- [ ] Update work experience and education
- [ ] Add LinkedIn profile URL
- [ ] Add resume PDF file
- [ ] Test contact form with real email service
- [ ] Add project screenshots
- [ ] Update meta tags for SEO

## Section-by-Section Guide

### 1. Hero Section (`src/components/Hero.jsx`)

**Line 7**: Update the roles array with your titles
```javascript
const roles = ['Full Stack Developer', 'Software Engineer', 'UI/UX Enthusiast', 'DevSecOps Advocate'];
// Change to your own roles/titles
```

**Line 47**: Update your name
```jsx
<h1>Hi, I'm <span className="gradient-text">Kanisha</span></h1>
```

**Line 56-60**: Update your bio description
```jsx
<p>
  A passionate software engineering student at College of Science and Technology with 4 years of experience
  crafting innovative solutions. Specializing in full-stack development, cybersecurity, and creating
  exceptional user experiences.
</p>
```

**Line 62-74**: Update stats (years, projects, technologies)
```jsx
<div className="text-3xl font-bold gradient-text">4+</div>
<div className="text-sm text-dark-400">Years Experience</div>
```

**Line 86**: Add resume PDF link
```jsx
<a
  href="/resume.pdf" // ADD YOUR RESUME PDF TO PUBLIC FOLDER
  download
  className="btn-secondary flex items-center space-x-2"
>
```

**Line 100**: Add LinkedIn profile URL
```jsx
<a
  href="https://linkedin.com/in/your-profile" // UPDATE THIS
  target="_blank"
  rel="noopener noreferrer"
>
```

### 2. About Section (`src/components/About.jsx`)

**Line 38-47**: Replace profile photo placeholder
```jsx
{/* REPLACE THIS ENTIRE DIV WITH YOUR IMAGE */}
<img
  src="/profile-photo.jpg" // Add your photo to public folder
  alt="Kanisha Pradhan"
  className="w-full h-full object-cover rounded-2xl"
/>
```

**Line 58-75**: Update bio paragraphs with your story
```jsx
<p className="text-dark-300 text-lg leading-relaxed">
  I'm a software engineering student with a strong passion for creating impactful digital experiences.
  With 4 years of hands-on experience...
</p>
```

**Line 9-35**: Update highlights array with your achievements
```javascript
const highlights = [
  {
    icon: Briefcase,
    title: 'Your Achievement Title',
    description: 'Description of achievement',
  },
  // Add more highlights
];
```

### 3. Projects Section (`src/components/Projects.jsx`)

**Line 8-70**: Update projects array with your actual projects

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Detailed description explaining what the project does and its purpose',
    technologies: ['React', 'Node.js', 'MongoDB'], // Your tech stack
    features: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
    icon: Gavel, // Choose appropriate icon from lucide-react
    color: 'from-blue-500 to-cyan-500', // Choose gradient colors
    github: 'https://github.com/yourusername/project-repo', // UPDATE
    demo: 'https://your-project-demo.com', // UPDATE
    image: 'project-screenshot.jpg', // UPDATE (add to public folder)
  },
  // Add more projects (recommended: 4-6 projects)
];
```

**To add project screenshots:**
1. Save screenshots (recommended size: 1200x630px) to `public` folder
2. Update the image section around line 77-84:
```jsx
<div className="relative h-48 rounded-lg overflow-hidden">
  <img
    src={`/${project.image}`}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

### 4. Skills Section (`src/components/Skills.jsx`)

**Line 8-90**: Update skill categories and levels

```javascript
const skillCategories = [
  {
    category: 'Your Skill Category',
    icon: Code2, // Choose from lucide-react icons
    color: 'from-blue-500 to-cyan-500', // Choose gradient
    skills: [
      { name: 'Skill Name', level: 90 }, // Level is 0-100
      { name: 'Another Skill', level: 85 },
    ],
  },
  // Add more categories (6 categories provided as template)
];
```

**Line 104-109**: Update additional technologies list
```javascript
{[
  'JavaScript', 'React Native', 'Vue.js', // Update with your technologies
].map((tech, index) => (
  // ... rendering code
))}
```

### 5. Experience Section (`src/components/Experience.jsx`)

**Line 8-40**: Update timeline with your experience

```javascript
const timeline = [
  {
    id: 1,
    type: 'work', // 'work' or 'education'
    icon: Briefcase, // Briefcase for work, GraduationCap for education
    title: 'Your Job Title',
    organization: 'Company Name',
    location: 'City, Country',
    period: '3 Months',
    date: 'Jan 2024 - Mar 2024', // UPDATE with actual dates
    description: 'What you did in this role',
    achievements: [
      'Key achievement or responsibility 1',
      'Key achievement or responsibility 2',
      'Key achievement or responsibility 3',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more timeline items
];
```

**Line 113-135**: Update certifications
```javascript
{[
  {
    title: 'Your Certification Name',
    issuer: 'Issuing Organization',
    year: '2024',
  },
  // Add more certifications
].map((cert, index) => (
  // ... rendering code
))}
```

### 6. Contact Section (`src/components/Contact.jsx`)

**Line 65-75**: Implement real form submission

Option 1: Using EmailJS (Recommended)
```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID', // Get from emailjs.com
      'YOUR_TEMPLATE_ID', // Get from emailjs.com
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY' // Get from emailjs.com
    );

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 5000);
  } catch (error) {
    console.error('Error sending email:', error);
    // Show error message to user
  } finally {
    setIsSubmitting(false);
  }
};
```

Option 2: Using your own backend API
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch('YOUR_API_ENDPOINT/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

**Line 154**: Add LinkedIn URL
```jsx
<a
  href="https://linkedin.com/in/your-profile" // UPDATE THIS
  target="_blank"
  rel="noopener noreferrer"
>
```

### 7. Footer (`src/components/Footer.jsx`)

**Line 28-36**: Update social links
```javascript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername', // UPDATE
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/your-profile', // UPDATE
  },
  // Add more social links as needed
];
```

### 8. Navigation (`src/components/Navigation.jsx`)

Usually no changes needed, but you can:
- Update logo text (line 37)
- Add/remove navigation items (line 11-18)
- Customize colors in hover states

## Additional Customizations

### Color Scheme (`tailwind.config.js`)

Change the primary and accent colors:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... adjust all shades
    500: '#0ea5e9', // Main primary color
    // ... adjust all shades
  },
  accent: {
    50: '#fdf4ff',
    // ... adjust all shades
    500: '#d946ef', // Main accent color
    // ... adjust all shades
  },
}
```

Use a tool like [UIColors](https://uicolors.app) to generate color palettes.

### Fonts

1. Choose fonts from [Google Fonts](https://fonts.google.com)
2. Update the import in `src/index.css` (line 1)
3. Update font families in `tailwind.config.js` (line 48-52)

### SEO Meta Tags (`index.html`)

Update these tags:
```html
<title>Kanisha Pradhan - Full Stack Developer Portfolio</title>
<meta name="description" content="Portfolio of Kanisha Pradhan, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourwebsite.com/" />
<meta property="og:title" content="Kanisha Pradhan - Full Stack Developer" />
<meta property="og:description" content="Portfolio showcasing my work in web development and software engineering" />
<meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yourwebsite.com/" />
<meta property="twitter:title" content="Kanisha Pradhan - Full Stack Developer" />
<meta property="twitter:description" content="Portfolio showcasing my work in web development and software engineering" />
<meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
```

## Assets Checklist

Place these files in the `public` folder:

- [ ] `profile-photo.jpg` - Your professional photo (800x800px recommended)
- [ ] `resume.pdf` - Your latest resume
- [ ] `project-1.jpg` - Screenshot of project 1 (1200x630px recommended)
- [ ] `project-2.jpg` - Screenshot of project 2
- [ ] `project-3.jpg` - Screenshot of project 3
- [ ] `project-4.jpg` - Screenshot of project 4
- [ ] `og-image.jpg` - Open Graph image for social sharing (1200x630px)
- [ ] `favicon.ico` - Website favicon (optional)

## Testing Your Changes

1. Start the dev server: `npm run dev`
2. Check all sections load correctly
3. Test form validation
4. Test all links (resume download, project links, social links)
5. Test responsive design on mobile
6. Test animations and scroll behavior
7. Check browser console for errors

## Common Issues

**Images not showing:**
- Ensure images are in the `public` folder
- Use paths like `/image.jpg` (starting with `/`)
- Check file names match exactly (case-sensitive)

**Colors not applying:**
- Run `npm run dev` to restart if you changed `tailwind.config.js`
- Check Tailwind class names are correct

**Form not working:**
- Implement real form submission logic (see Contact section guide above)
- Test with actual email service credentials

## Need Help?

If you run into issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are installed: `npm install`
4. Try clearing cache: `npm run build` then `npm run preview`

---

Happy customizing! Your portfolio is ready to showcase your amazing work.
