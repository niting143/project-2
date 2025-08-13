# 🔐 Account Setup Guide - Your Own GitHub Account

## ✅ **Git Configuration Updated**

Your Git is now configured with:
- **Name**: `Nitin Gautam`
- **Email**: `nitingautam15@gmail.com`

## 🚫 **Clearing Old Account Associations**

### **Step 1: Clear Browser Credentials**
1. **Open your browser** (Chrome, Safari, Firefox)
2. **Go to**: [github.com](https://github.com)
3. **Sign out** if you're signed in as `deepakfantasticfare`
4. **Clear browser data** for GitHub:
   - Chrome: Settings → Privacy → Clear browsing data
   - Safari: Preferences → Privacy → Manage Website Data
   - Firefox: Options → Privacy → Clear Data

### **Step 2: Sign in with Your Account**
1. **Go to**: [github.com](https://github.com)
2. **Click "Sign in"**
3. **Use your email**: `nitingautam15@gmail.com`
4. **Enter your password** for your GitHub account
5. **Verify** you're signed in as `niting143` (your account)

## 🆕 **Create New Repository with Your Account**

### **Step 1: Create Repository**
1. **Make sure you're signed in** as `niting143`
2. **Click "New repository"**
3. **Repository name**: `shower-reseal-website`
4. **Description**: `Professional shower resealing business website`
5. **Make it Public**
6. **CHECK** "Add a README file"
7. **Click "Create repository"**

### **Step 2: Upload Your Files**
1. **Click "Add file" → "Upload files"**
2. **Drag and drop** your entire `project 2` folder contents:
   - `src/` folder (all contents)
   - `index.html`
   - `package.json`
   - `tailwind.config.js`
   - `vite.config.ts`
   - All other config files
3. **DO NOT upload**:
   - `node_modules/` folder
   - `dist/` folder
   - Any hidden files

### **Step 3: Commit Changes**
1. **Commit message**: `Initial website upload`
2. **Click "Commit changes"**

## 🔧 **If You Still See Old Account**

### **Check macOS Keychain**
1. **Open "Keychain Access"** (Applications → Utilities)
2. **Search for**: `github.com`
3. **Delete any entries** related to `deepakfantasticfare`
4. **Search for**: `git`
5. **Delete any entries** related to old accounts

### **Check Git Credentials**
```bash
# Check if any credentials are stored
git config --global credential.helper

# If something is returned, clear it
git config --global --unset credential.helper
```

## 🎯 **Your New Setup**

After completing these steps:
- ✅ **Git configured** with your name and email
- ✅ **GitHub signed in** as `niting143`
- ✅ **Repository created** under your account
- ✅ **Files uploaded** to your repository
- ✅ **Ready for deployment** to Vercel/Netlify

## 🚀 **Next Steps After Repository Creation**

1. **Go to**: [vercel.com](https://vercel.com)
2. **Sign in** with your GitHub account (`niting143`)
3. **Import** your new repository
4. **Deploy** your website
5. **Get custom domain** (showerreseal.com.au)

## 🎉 **Result**

**You'll have your own GitHub repository** with your shower resealing website, completely separate from any old account associations!

## 📞 **Need Help?**

If you still see the old account:
1. **Clear browser completely**
2. **Check macOS Keychain**
3. **Verify Git configuration**
4. **Create repository with your account**

**Your website will be live under your own account! 🚀**
