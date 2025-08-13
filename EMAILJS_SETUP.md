# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form without a backend.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service (Gmail Setup)

### Option A: Use Gmail with App Passwords (Recommended for beginners)

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. **Important**: Use an App Password instead of your regular Gmail password
5. To create an App Password:
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "EmailJS" or "Mail"
   - Use this 16-character password in EmailJS (not your regular Gmail password)
6. Note down the **Service ID** (you'll need this)

### Option B: Use Gmail with OAuth2 (More secure, for advanced users)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Gmail API:
   - Go to "APIs & Services" → "Library"
   - Search for "Gmail API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `https://api.emailjs.com/api/v1.0/email/send`
     - `http://localhost:3000` (for development)
5. Download the client configuration file
6. In EmailJS, choose "Gmail" and use OAuth2 with your client credentials

### Option C: Use Outlook/Office 365 (Alternative to Gmail)

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Outlook" or "Office 365"
4. Connect your Microsoft account
5. This often has fewer authentication issues than Gmail

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Quote Request - {{service_required}}

Hello,

You have received a new quote request:

**Customer Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{from_phone}}
- Service Required: {{service_required}}

**Message:**
{{message}}

Please respond to this customer with a quote.

Best regards,
Your Business Name
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Your Code

Replace the placeholder values in `src/config/emailjs.ts`:

```typescript
// Replace these values with your actual EmailJS credentials
"service_id" → Your Service ID
"template_id" → Your Template ID  
"public_key" → Your Public Key
```

## Step 6: Test

1. Fill out the contact form
2. Click "Send Message"
3. Check both email addresses for the received emails

## Troubleshooting Gmail API Issues

### "Request had insufficient authentication scopes" Error

This error occurs when Gmail API doesn't have proper permissions. Here's how to fix it:

#### Solution 1: Use App Passwords (Easiest)
1. Enable 2-Step Verification on your Google Account
2. Generate an App Password specifically for EmailJS
3. Use the App Password instead of your regular password

#### Solution 2: Check Gmail API Permissions
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to "APIs & Services" → "Enabled APIs & services"
4. Make sure Gmail API is enabled
5. Check "APIs & Services" → "OAuth consent screen" is configured

#### Solution 3: Use OAuth2 Instead of Password
1. Follow the OAuth2 setup steps above
2. This provides proper authentication scopes automatically

#### Solution 4: Switch to Outlook
1. Outlook/Office 365 often has fewer authentication issues
2. Follow the Outlook setup steps above

## Important Notes

- **Free Plan Limits**: EmailJS free plan allows 200 emails/month
- **Rate Limiting**: Don't spam the form - implement proper validation
- **Security**: Your public key is safe to expose in frontend code
- **Email Delivery**: Emails go through EmailJS servers, not directly from your domain
- **Gmail Limitations**: Gmail has stricter security requirements than other providers

## Alternative Services

If you continue having issues with Gmail, consider:
- **Formspree**: 50 submissions/month free, easier setup
- **Netlify Forms**: 100 submissions/month free, built into Netlify
- **GetForm**: 50 submissions/month free, simple configuration
- **Outlook/Office 365**: Often more reliable than Gmail for business use
