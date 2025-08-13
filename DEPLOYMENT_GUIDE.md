# 🚀 Deployment Guide for Shower Reseal Website

This guide will help you deploy your shower resealing website to a live domain with professional hosting.

## 🌐 Step 1: Domain Registration

### **Register: showerreseal.com.au**

**Recommended Registrars:**
1. **Crazy Domains** - [crazy domains.com.au](https://www.crazydomains.com.au/)
   - Cost: ~$15-25/year
   - Good Australian support

2. **GoDaddy Australia** - [godaddy.com.au](https://godaddy.com.au/)
   - Cost: ~$20-30/year
   - Reliable and trusted

3. **VentraIP** - [ventraip.com.au](https://ventraip.com.au/)
   - Cost: ~$18-25/year
   - Australian company with local support

**Domain Features to Include:**
- Privacy protection (WHOIS privacy)
- DNS management
- Email forwarding (optional)

## 🏠 Step 2: Choose Hosting Platform

### **Option A: Vercel (Recommended)**
- **Cost**: Free tier, then $20/month
- **Best for**: React/Vite apps
- **Features**: 
  - Automatic deployments
  - Global CDN
  - SSL certificates
  - Custom domains

### **Option B: Netlify**
- **Cost**: Free tier, then $19/month
- **Best for**: Static sites
- **Features**:
  - Form handling
  - SSL certificates
  - Easy deployment

### **Option C: Australian Hosting**
- **VentraIP**: $10-20/month
- **Crazy Domains**: $8-15/month
- **Pros**: Local support, Australian servers

## 💰 Cost Breakdown

**Annual Costs:**
- Domain (.au): $15-30
- Hosting: $0-240
- **Total: $15-270/year**

## 🛠️ Step 3: Prepare Your Project

### **Build for Production**
```bash
npm run build
```

This creates a `dist` folder with your production-ready website.

### **Test Production Build**
```bash
npm run preview
```

## 🚀 Step 4: Deploy to Vercel (Recommended)

### **1. Create Vercel Account**
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub/GitLab

### **2. Import Your Project**
- Click "New Project"
- Import from GitHub/GitLab
- Select your repository

### **3. Configure Build Settings**
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### **4. Deploy**
- Click "Deploy"
- Wait for build to complete

### **5. Add Custom Domain**
- Go to Project Settings → Domains
- Add `showerreseal.com.au`
- Update DNS records as instructed

## 🔧 Step 5: DNS Configuration

### **DNS Records to Add:**
```
Type: A
Name: @
Value: [Vercel/Netlify IP]

Type: CNAME
Name: www
Value: [your-domain.vercel.app]
```

## 📧 Step 6: EmailJS Production Setup

### **Update EmailJS Template**
Make sure your EmailJS template includes:
- Professional business branding
- Company logo
- Contact information
- Service details

### **Test Email Functionality**
- Fill out contact form
- Verify emails are received
- Check spam folders

## 🎯 Step 7: SEO & Performance

### **Add Meta Tags**
Update your HTML head with:
- Page titles
- Meta descriptions
- Open Graph tags
- Business schema markup

### **Performance Optimization**
- Compress images
- Enable gzip compression
- Use CDN for assets

## 📱 Step 8: Mobile & Browser Testing

### **Test On:**
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS, Android)
- Different screen sizes
- Contact form functionality

## 🔍 Step 9: Go Live Checklist

- [ ] Domain registered and configured
- [ ] Website deployed and accessible
- [ ] SSL certificate working
- [ ] Contact form sending emails
- [ ] Mobile responsive design
- [ ] Fast loading times
- [ ] SEO meta tags added
- [ ] Google Analytics set up (optional)

## 🆘 Troubleshooting

### **Common Issues:**
1. **Build Errors**: Check console for errors
2. **Domain Not Working**: Verify DNS settings
3. **Emails Not Sending**: Check EmailJS configuration
4. **Slow Loading**: Optimize images and assets

### **Support Resources:**
- Vercel/Netlify documentation
- Domain registrar support
- EmailJS support

## 🎉 Congratulations!

Once deployed, your website will be live at:
**https://showerreseal.com.au**

Your business will have a professional online presence for customers to:
- Learn about your services
- View your work gallery
- Get free quotes
- Contact you directly

## 📞 Next Steps

1. **Register your domain** (showerreseal.com.au)
2. **Choose hosting platform** (Vercel recommended)
3. **Deploy your website**
4. **Configure custom domain**
5. **Test everything thoroughly**
6. **Go live and start getting customers!**

Need help with any specific step? Let me know!
