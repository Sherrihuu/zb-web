
# Family Business Website - Deployment Guide

This guide contains instructions for deploying your static website to Alibaba Cloud OSS.

## Project Structure

The project has been built with React, TypeScript, and Tailwind CSS, but the final output for deployment will be static HTML, CSS, and JavaScript files generated through the build process.

```
/my-website
├── index.html
├── about.html  (generated from AboutPage)
├── products.html (generated from ProductsPage)
├── contact.html (generated from ContactPage)
├── css/
│   └── style.css (and other generated CSS)
├── img/
│   ├── product1.jpg
│   ├── product2.jpg
│   └── ...
└── js/
    └── main.js (and other generated JS)
```

## Build Instructions

1. Run the build command to generate static files:

```bash
npm run build
```

2. The build files will be generated in the `dist` directory.

## Deploying to Alibaba Cloud OSS

1. **Sign in to Alibaba Cloud Console**
   - Go to the Alibaba Cloud website and sign in to your account
   - Navigate to the OSS (Object Storage Service) console

2. **Create a Bucket** (if not already created)
   - Click "Create Bucket"
   - Choose a unique bucket name
   - Select the region closest to your target audience
   - Set the bucket ACL (Access Control List) to "Public Read"
   - Set Storage Class to "Standard"
   - Click "OK" to create the bucket

3. **Upload Your Static Files**
   - Go to the bucket you created
   - Click "Files" > "Upload"
   - Select all files and folders from your `dist` directory
   - Make sure to maintain the directory structure
   - Click "Upload" to start the upload process

4. **Configure Static Website Hosting**
   - After uploading, navigate to the "Basic Settings" tab
   - Find "Static Pages" and click "Configure"
   - Set "Default Homepage" to `index.html`
   - Set "Default 404 Page" to a custom 404 page if available
   - Click "Save"

5. **Set CORS Rules** (if needed)
   - Navigate to the "Access Control" tab
   - Find "Cross-Origin Resource Sharing (CORS)" and click "Configure"
   - Add a rule allowing all needed HTTP methods (GET, POST, etc.)
   - Set "Allowed Origins" to `*` or your specific domains
   - Set "Allowed Headers" to `*`
   - Set "Exposed Headers" as needed
   - Set "Maximum Age (seconds)" to `600` or as needed
   - Click "OK"

6. **Access Your Website**
   - Your website will now be accessible at the OSS endpoint URL
   - Example: `http://your-bucket-name.oss-region-id.aliyuncs.com/`

7. **Set Up Custom Domain** (optional)
   - If you have a custom domain, you can bind it to your OSS bucket
   - Navigate to the "Transmission" tab
   - Find "Domain Names" and click "Bind Custom Domain Name"
   - Follow the wizard to complete the setup

## Important Deployment Notes

1. **Form Handling**: The contact forms use Formspree for submission. Make sure to replace the form handlers with your actual Formspree IDs or other form handling service.

2. **Images**: All image paths are relative (e.g., `/img/product1.jpg`). Ensure your directory structure on OSS matches these paths.

3. **Testing**: Before going live, test all pages, links, and forms on your OSS-hosted website.

4. **Cache Control**: Consider setting appropriate cache control headers for your static assets to improve loading performance.

5. **CDN Integration**: For better performance, especially for users in different regions, consider configuring Alibaba Cloud CDN in front of your OSS bucket.

## Updating Your Website

When you need to make updates to your website:

1. Make changes to your source code
2. Rebuild the project using `npm run build`
3. Upload only the changed files to your OSS bucket, overwriting the previous versions
