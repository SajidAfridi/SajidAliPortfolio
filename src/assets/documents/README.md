# Resume Setup Instructions

## How to Add Your Resume PDF

1. **Upload your resume PDF** to your Git repository
2. **Place the file** in this directory: `src/assets/documents/`
3. **Name the file**: `Sajid_Ali_Resume.pdf`

The portfolio website is already configured to use this file for the "Download Resume" buttons in:
- Navigation bar (top right)
- Hero section (main landing area)
- Mobile navigation menu

## File Location

Your resume should be located at:
```
/workspaces/spark-template/src/assets/documents/Sajid_Ali_Resume.pdf
```

## Alternative: Using a Different File Name

If you prefer to use a different filename, you'll need to update the download paths in:
- `src/components/Navigation.tsx` (line with `handleResumeDownload` function)
- `src/components/Hero.tsx` (line with `handleResumeDownload` function)

Replace `Sajid_Ali_Resume.pdf` with your preferred filename.

## Tips

- Keep the filename simple without spaces (use underscores or hyphens)
- Make sure the file is in PDF format for best compatibility
- File size should ideally be under 2MB for quick downloads
