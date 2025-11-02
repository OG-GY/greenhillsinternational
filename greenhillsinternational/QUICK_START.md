# Quick Start - Email Setup

## 🚀 Immediate Steps to Get Email Working

### 1. Create `.env.local` file in project root:
```powershell
cd c:\D\Github\greenhillsinternational\greenhillsinternational
New-Item -Path ".env.local" -ItemType File
```

### 2. Add these credentials to `.env.local`:
```env
EMAIL_USER=info@greenhillsinternational.com
EMAIL_PASSWORD=your_hostinger_email_password
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
```

### 3. Restart your dev server:
```powershell
# Press Ctrl+C to stop current server
npm run dev
```

### 4. Test the contact form:
- Go to http://localhost:3000/construction (scroll to contact section)
- Fill out the form
- Submit and check your inbox at info@greenhillsinternational.com

---

## 📧 Where to Find Your Hostinger SMTP Settings

1. **Log in to Hostinger Control Panel** (hpanel.hostinger.com)
2. Go to **Emails** section
3. Click on your email account (info@greenhillsinternational.com)
4. Look for **Email Configuration** or **Manual Settings**
5. Find SMTP settings:
   - **Incoming/Outgoing Server**: smtp.hostinger.com
   - **Port**: 465 (SSL) or 587 (TLS)
   - **Username**: info@greenhillsinternational.com
   - **Password**: Your email password

---

## ⚠️ Common Issues

### "Email service not configured"
- Make sure `.env.local` file exists
- Restart dev server after creating/editing `.env.local`

### "Authentication failed"
- Double-check password in `.env.local`
- Try resetting your email password in Hostinger panel

### Port 465 doesn't work?
Try port 587 instead:
```env
EMAIL_PORT=587
```

---

## 📁 Files Modified/Created

### Created:
- `app/api/contact/route.ts` - Email sending API endpoint
- `.env.example` - Template for environment variables
- `EMAIL_SETUP_GUIDE.md` - Detailed documentation
- `QUICK_START.md` - This file

### Modified:
- `app/components/ContactSection.tsx` - Added form handling
- `package.json` - Added nodemailer dependency

---

## 🎯 How It Works (Simple Explanation)

```
User fills form
    ↓
Form sends data to /api/contact
    ↓
API validates data
    ↓
API connects to Hostinger SMTP server
    ↓
Email sent to info@greenhillsinternational.com
    ↓
Success message shown to user
```

---

## 📖 Full Documentation

For detailed explanations, troubleshooting, and customization options, see:
**EMAIL_SETUP_GUIDE.md**

---

## ✅ Next Steps After Email Works

1. Test from different devices/browsers
2. Add Google reCAPTCHA to prevent spam
3. Set up auto-reply emails to users
4. Configure email forwarding if needed
5. Deploy to production and add env vars to hosting platform

---

**Need help? Check EMAIL_SETUP_GUIDE.md for detailed troubleshooting!**
