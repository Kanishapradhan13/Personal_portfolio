# Quick Reference Card

Quick reference for the most common customizations. For detailed instructions, see CUSTOMIZATION_GUIDE.md.

## Essential Updates (Do These First!)

### 1. Add Your LinkedIn URL (4 locations)
```javascript
// Hero.jsx (line ~100)
href="https://linkedin.com/in/YOUR-PROFILE"

// Contact.jsx (line ~154)
href="https://linkedin.com/in/YOUR-PROFILE"

// Footer.jsx (line ~30)
href: 'https://linkedin.com/in/YOUR-PROFILE'
```

### 2. Add Your Resume
1. Save your resume as `resume.pdf`
2. Place it in the `public` folder
3. Update Hero.jsx (line ~86):
```javascript
href="/resume.pdf"
```

### 3. Add Profile Photo
1. Save your photo as `profile.jpg` in `public` folder
2. Update About.jsx (line ~38-47), replace the placeholder div:
```jsx
<img
  src="/profile.jpg"
  alt="Kanisha Pradhan"
  className="w-full h-full object-cover rounded-2xl"
/>
```

### 4. Update Projects (Projects.jsx, line ~8)
```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'What your project does...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  icon: Gavel, // Choose icon
  color: 'from-blue-500 to-cyan-500',
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com',
  image: 'project-1.jpg', // Add to public folder
}
```

### 5. Setup Contact Form (Contact.jsx, line ~65)

**Option A: EmailJS (Recommended - Free)**
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
      'YOUR_SERVICE_ID',    // Get from emailjs.com
      'YOUR_TEMPLATE_ID',   // Get from emailjs.com
      formData,
      'YOUR_PUBLIC_KEY'     // Get from emailjs.com
    );
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};
```

**EmailJS Setup:**
1. Go to https://www.emailjs.com/
2. Sign up (free)
3. Create email service
4. Create email template
5. Get your IDs and add them to the code

## File Locations Quick Reference

### Components to Update
```
src/components/
├── Hero.jsx          → Name, roles, bio, resume link, LinkedIn
├── About.jsx         → Photo, bio paragraphs, highlights
├── Projects.jsx      → Your projects, screenshots, links
├── Skills.jsx        → Your skills and levels
├── Experience.jsx    → Work history, education, certifications
├── Contact.jsx       → Form submission, LinkedIn
└── Footer.jsx        → LinkedIn link
```

### Assets to Add (in `public/` folder)
```
public/
├── resume.pdf        → Your resume
├── profile.jpg       → Your photo (800x800px)
├── project-1.jpg     → Project screenshots (1200x630px)
├── project-2.jpg
├── project-3.jpg
└── project-4.jpg
```

## Color Customization

**Quick Color Change** (tailwind.config.js, line 15-40):
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue color - CHANGE THIS
  },
  accent: {
    500: '#d946ef',  // Main purple color - CHANGE THIS
  },
}
```

**Color Tools:**
- https://uicolors.app - Generate Tailwind color palette
- https://coolors.co - Color palette generator

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Vercel - Easiest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

2. Deploy to Vercel:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! ✨

## Common Issues & Fixes

### Issue: Images not showing
**Fix:** Ensure images are in `public/` folder and use `/image.jpg` path

### Issue: Colors not applying after change
**Fix:** Restart dev server after changing `tailwind.config.js`

### Issue: Form not working
**Fix:** Implement real form submission (see section 5 above)

### Issue: Build errors
**Fix:**
```bash
rm -rf node_modules
npm install
npm run build
```

## Testing Checklist

Before deploying:
- [ ] Added profile photo
- [ ] Added resume PDF
- [ ] Updated all LinkedIn URLs
- [ ] Updated project information
- [ ] Added project screenshots
- [ ] Tested contact form
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] No console errors

## SEO Quick Setup (index.html)

Add these meta tags in `<head>`:
```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Portfolio of [Your Name], Full Stack Developer specializing in React and Node.js" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Check out my portfolio" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
```

## Need Help?

1. **Detailed Guide**: See CUSTOMIZATION_GUIDE.md
2. **Technical Details**: See PROJECT_SUMMARY.md
3. **Setup Instructions**: See README.md

## Most Common Searches

**"How do I add my photo?"** → See section 3 above

**"How do I change colors?"** → See "Color Customization" above

**"How do I add projects?"** → See section 4 above

**"How do I make the contact form work?"** → See section 5 above

**"How do I deploy?"** → See "Deployment" above

---

💡 **Tip**: Use Find & Replace (Ctrl+Shift+F in VS Code) to update repeated items like LinkedIn URLs across all files!

📌 **Remember**: After adding files to `public/` folder, restart the dev server to see changes!
