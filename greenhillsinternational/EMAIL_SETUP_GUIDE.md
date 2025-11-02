# Email Integration Setup Guide
## Green Hills International Contact Form

This guide explains how the email integration works and how to configure it.

---

## 📋 What Was Implemented

### 1. **API Route** (`app/api/contact/route.ts`)
A Next.js API route that:
- Receives contact form submissions via POST request
- Validates the incoming data
- Sends formatted emails using Nodemailer and Hostinger SMTP
- Returns success/error responses

### 2. **Updated Contact Form** (`app/components/ContactSection.tsx`)
Enhanced the contact form to:
- Handle form state and validation
- Submit data to the API endpoint
- Show success/error messages using toast notifications
- Disable the button while submitting

### 3. **Environment Configuration** (`.env.example`)
Template for secure credential storage

---

## 🔧 Setup Instructions

### Step 1: Install Dependencies (Already Done)
```bash
npm install nodemailer @types/nodemailer
```

### Step 2: Configure Environment Variables

1. **Create a `.env.local` file** in your project root:
   ```bash
   # In PowerShell
   cd c:\D\Github\greenhillsinternational\greenhillsinternational
   New-Item -Path ".env.local" -ItemType File
   ```

2. **Add your Hostinger email credentials** to `.env.local`:
   ```env
   EMAIL_USER=info@greenhillsinternational.com
   EMAIL_PASSWORD=your_actual_password_here
   EMAIL_HOST=smtp.hostinger.com
   EMAIL_PORT=465
   ```

3. **Get your Hostinger SMTP credentials:**
   - Log in to your Hostinger control panel
   - Go to **Emails** section
   - Find your email account settings
   - Look for **SMTP Settings** or **Mail Server Settings**
   
   **Common Hostinger SMTP Settings:**
   - **SMTP Host:** smtp.hostinger.com
   - **SMTP Port:** 465 (SSL) or 587 (TLS/STARTTLS)
   - **Username:** info@greenhillsinternational.com (your full email)
   - **Password:** Your email password

   > **Security Tip:** Some providers support "app passwords" which are more secure than your main password. Check if Hostinger offers this option.

### Step 3: Restart Your Development Server

After adding the `.env.local` file:
```powershell
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

> **Important:** Next.js only loads environment variables on startup, so you must restart after creating/modifying `.env.local`

---

## 🧪 Testing the Contact Form

### 1. **Test Locally**
1. Start your dev server: `npm run dev`
2. Navigate to the contact section on your site
3. Fill out the form with test data
4. Click "Send Message"
5. You should see a success toast notification
6. Check your `info@greenhillsinternational.com` inbox for the email

### 2. **Check for Errors**
If the form doesn't work:
1. **Open Browser DevTools** (F12)
2. Go to the **Console** tab
3. Submit the form and look for error messages
4. Also check the **Network** tab to see the API request/response

### 3. **Check Server Logs**
In your terminal where `npm run dev` is running:
- Look for error messages after submitting the form
- Common errors and solutions below

---

## 🐛 Common Issues & Solutions

### Issue 1: "Email service not configured"
**Cause:** Environment variables not loaded

**Solution:**
1. Verify `.env.local` exists in the project root
2. Check variable names match exactly (case-sensitive)
3. Restart the dev server

### Issue 2: "Authentication failed" or "Invalid login"
**Cause:** Incorrect email credentials

**Solutions:**
1. Double-check your email password in `.env.local`
2. Ensure you're using the full email address as username
3. Try generating an "app password" if Hostinger supports it
4. Verify your email account is active in Hostinger

### Issue 3: "Connection timeout" or "SMTP error"
**Cause:** SMTP port or host might be blocked/incorrect

**Solutions:**
1. Try alternative port - change `.env.local`:
   ```env
   EMAIL_PORT=587
   ```
2. Verify SMTP settings from your Hostinger control panel
3. Check if your network/firewall blocks SMTP ports

### Issue 4: Email sends but doesn't arrive
**Causes:** Spam filters, incorrect recipient

**Solutions:**
1. Check your spam/junk folder
2. Verify `EMAIL_USER` is correct in `.env.local`
3. Check Hostinger email logs (if available)

---

## 📧 How It Works - Technical Explanation

### The Email Flow:

```
User fills form → Submit → 
  ↓
ContactSection.tsx (Frontend)
  - Validates input
  - Calls /api/contact
  ↓
app/api/contact/route.ts (Backend)
  - Receives form data
  - Validates again
  - Creates email using Nodemailer
  - Connects to Hostinger SMTP
  - Sends email
  ↓
Hostinger SMTP Server
  - Delivers to info@greenhillsinternational.com
  ↓
Success/Error response → Toast notification
```

### Key Technologies:

1. **Nodemailer**: Node.js library for sending emails
   - Creates SMTP connection
   - Formats HTML and text emails
   - Handles authentication

2. **Next.js API Routes**: Server-side endpoints
   - Runs on the server (keeps credentials secure)
   - Can't be called directly from browser
   - Environment variables only exist server-side

3. **SMTP (Simple Mail Transfer Protocol)**:
   - Standard protocol for sending email
   - Hostinger provides SMTP server
   - Requires authentication

### Security Features:

1. **Environment Variables**: 
   - Credentials never in source code
   - `.env.local` is in `.gitignore` (won't be committed to git)
   - Only accessible server-side

2. **Input Validation**:
   - Email format validation
   - Required field checks
   - Prevents injection attacks

3. **Error Handling**:
   - Catches and logs errors
   - Doesn't expose sensitive info to users

---

## 🚀 Deployment Considerations

### When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Add the same variables from `.env.local`

2. **Test in production**:
   - Send a test email after deployment
   - Verify emails arrive

3. **Consider rate limiting**:
   - Add protection against spam
   - Could add CAPTCHA or rate limiting

4. **Monitor email delivery**:
   - Keep an eye on your Hostinger email account
   - Check for bounce-backs or spam issues

---

## 📝 Customization Options

### Change Email Template:
Edit `app/api/contact/route.ts` around line 70:
```typescript
html: `
  <!-- Your custom HTML email template here -->
`
```

### Add More Form Fields:
1. Update `ContactSection.tsx` state:
   ```typescript
   const [formData, setFormData] = useState({
     // ... existing fields
     company: '',  // Add new field
   });
   ```

2. Add input in JSX:
   ```tsx
   <Input
     placeholder="Company Name"
     value={formData.company}
     onChange={(e) => setFormData({ ...formData, company: e.target.value })}
   />
   ```

3. Update API to include in email

### Change Recipient Email:
To send to multiple recipients, edit `app/api/contact/route.ts`:
```typescript
to: ['info@greenhillsinternational.com', 'sales@example.com'],
```

---

## 🎓 Learning Resources

### Understanding Email Protocols:
- **SMTP**: Protocol for sending email
- **Port 465**: SSL/TLS encrypted from start
- **Port 587**: STARTTLS (upgrades to encryption)

### Next.js API Routes:
- Run server-side only
- Perfect for sensitive operations
- Can access databases, send emails, etc.

### Nodemailer Documentation:
https://nodemailer.com/

---

## ✅ Next Steps

After you've got email working:

1. **Test thoroughly** with different browsers
2. **Add CAPTCHA** (Google reCAPTCHA) to prevent spam
3. **Set up email auto-responder** (send confirmation to user)
4. **Add analytics** (track form submissions)
5. **Create email templates** for different inquiry types
6. **Set up email forwarding** if needed

---

## 🆘 Need Help?

If you encounter issues:
1. Check the error messages in browser console and terminal
2. Verify all environment variables are set correctly
3. Test your Hostinger email credentials manually (try logging in via webmail)
4. Check Hostinger support documentation for SMTP settings

---

**Implementation completed! Your contact form is now ready to send emails to info@greenhillsinternational.com** 🎉
