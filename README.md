<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1W8pIxmJuzMDHRRssa3C9K5KDLI5IqYGX

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Set up EmailJS for the contact form (see below)
4. Run the app:
   `npm run dev`

## Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails directly to your Gmail account. To set it up:

1. **Sign up for EmailJS**: Go to https://www.emailjs.com/ and create a free account

2. **Add Email Service**:
   - Navigate to **Email Services** → **Add New Service**
   - Choose **Gmail**
   - Connect your Gmail account (fysion3@gmail.com)
   - Copy your **Service ID**

3. **Create Email Template**:
   - Go to **Email Templates** → **Create New Template**
   - Use this template:
     ```
     From: {{from_name}} <{{from_email}}>
     To: fysion3@gmail.com
     
     Subject: New Contact Form Submission from {{from_name}}
     
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Copy your **Template ID**

4. **Get Public Key**:
   - Go to **Account** → **API Keys**
   - Copy your **Public Key**

5. **Create `.env.local` file** in the project root with:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

6. Restart your dev server after adding the environment variables.
