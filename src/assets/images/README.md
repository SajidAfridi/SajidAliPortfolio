# Project Screenshots Setup

## Current Setup

The portfolio currently uses a placeholder screenshot (`placeholder-project.svg`) for all projects. This placeholder displays a gradient background with "Flutter App Screenshot Placeholder" text.

## How to Replace with Your Screenshots

### Option 1: Replace the Placeholder (Simplest)
1. **Upload your screenshot** to this directory (`src/assets/images/`)
2. **Replace the file**: `placeholder-project.svg` with your image file
3. **Supported formats**: JPG, PNG, or SVG
4. All projects will automatically use this image

### Option 2: Individual Screenshots per Project
1. **Upload multiple screenshots** to this directory
2. **Name them descriptively** (e.g., `financial-app.png`, `health-tracker.png`, etc.)
3. **Update `src/components/Projects.tsx`**:
   - Import each image: `import financialApp from "@/assets/images/financial-app.png"`
   - Update the `image` property for each project in the `sampleProjects` array

Example:
```typescript
import financialApp from "@/assets/images/financial-app.png"
import healthTracker from "@/assets/images/health-tracker.png"

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Financial Transaction App",
    image: financialApp,  // ← Change this line
    ...
  },
  {
    id: "2", 
    title: "Health Workers Tracking System",
    image: healthTracker,  // ← Change this line
    ...
  },
  ...
]
```

## Recommended Image Specifications

- **Aspect Ratio**: 16:9 (e.g., 1920x1080, 1280x720, 800x450)
- **Format**: PNG or JPG
- **File Size**: Under 500KB each (compress if needed)
- **Content**: App screenshots showing the main interface or key features

## Tips

- Use high-quality screenshots that showcase your app's best features
- Ensure screenshots are clear and readable when scaled down
- Consider using mockups with device frames for a more polished look
- All images will be optimized during the build process
