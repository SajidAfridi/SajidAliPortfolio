# Planning Guide

A professional portfolio website inspired by Flutter.dev's modern, vibrant design aesthetic that showcases projects, skills, and professional experience in an engaging and visually striking way.

**Experience Qualities**:
1. **Bold** - The interface should command attention with confident typography, vibrant colors, and strong visual hierarchy that immediately communicates professionalism
2. **Fluid** - Smooth animations and transitions create a sense of polish and technical excellence, reflecting the quality of work being showcased
3. **Inviting** - Approachable design with clear navigation and progressive disclosure that encourages exploration without overwhelming visitors

**Complexity Level**: Light Application (multiple features with basic state)
This portfolio will feature multiple sections (hero, projects, skills, experience, contact) with interactive elements like project galleries, filterable content, and smooth scroll navigation. It maintains state for section visibility and selected project details but doesn't require complex data manipulation or multi-view architecture.

## Essential Features

### Hero Section
- **Functionality**: Display professional headline, name, title, and call-to-action
- **Purpose**: Make immediate impact and communicate core identity
- **Trigger**: Page load
- **Progression**: Page loads → Animated text reveals → CTA buttons appear → User clicks to explore or contact
- **Success criteria**: Visitor understands who you are and what you do within 3 seconds

### Project Showcase
- **Functionality**: Display portfolio projects with screenshots, descriptions, and technologies used
- **Purpose**: Demonstrate technical capabilities and design sensibility through real work
- **Trigger**: Scroll to projects section or click navigation link
- **Progression**: Section enters viewport → Projects fade in → User hovers/clicks project → Detailed view expands → User views screenshots and details
- **Success criteria**: Each project clearly shows problem, solution, and technical implementation

### Skills & Technologies
- **Functionality**: Visual display of technical skills organized by category
- **Purpose**: Quick reference for technical proficiencies and tool expertise
- **Trigger**: Scroll to skills section
- **Progression**: Section enters viewport → Skill categories appear → Icons and labels animate in → User scans capabilities
- **Success criteria**: Skills are scannable and organized logically by category

### Experience Timeline
- **Functionality**: Chronological display of work history and education
- **Purpose**: Establish credibility through professional background
- **Trigger**: Scroll to experience section
- **Progression**: Section enters viewport → Timeline renders → User scrolls through positions → Details expand on interaction
- **Success criteria**: Career progression is clear and accomplishments are highlighted

### Contact Section
- **Functionality**: Display contact information and social links
- **Purpose**: Enable visitors to reach out and connect
- **Trigger**: Scroll to footer or click contact CTA
- **Progression**: Section appears → Contact methods display → User clicks link → Opens email/social profile
- **Success criteria**: Multiple contact methods available and easily accessible

## Edge Case Handling

- **Missing Project Screenshots**: Display placeholder with project icon and color theme
- **Long Project Descriptions**: Truncate with "read more" expansion to prevent overwhelming layout
- **Mobile Navigation**: Collapse to hamburger menu with smooth drawer animation
- **Slow Image Loading**: Show skeleton loaders with smooth transition to actual content
- **No JavaScript**: Graceful degradation with all content accessible, just without animations

## Design Direction

The design should evoke confidence, creativity, and technical excellence. Drawing from Flutter.dev's playbook: vibrant gradients, bold typography, geometric patterns, and smooth micro-interactions. The aesthetic should feel modern and energetic while maintaining professional credibility - like a tech-forward startup rather than a corporate enterprise.

## Color Selection

A vibrant, high-energy palette inspired by Flutter's signature blues with complementary accent colors that create visual excitement without sacrificing readability.

- **Primary Color**: Deep electric blue (oklch(0.45 0.19 250)) - Commands attention and conveys trust, technical expertise, and innovation
- **Secondary Colors**: 
  - Lighter sky blue (oklch(0.75 0.13 245)) for backgrounds and secondary elements
  - Deep indigo (oklch(0.35 0.15 270)) for depth and hierarchy
- **Accent Color**: Vibrant cyan (oklch(0.70 0.17 210)) - Eye-catching highlight for CTAs, hover states, and important interactive elements
- **Foreground/Background Pairings**:
  - Primary Blue Background (oklch(0.45 0.19 250)): White text (oklch(0.98 0 0)) - Ratio 7.2:1 ✓
  - Light Sky Background (oklch(0.75 0.13 245)): Deep Indigo text (oklch(0.35 0.15 270)) - Ratio 5.1:1 ✓
  - Accent Cyan (oklch(0.70 0.17 210)): White text (oklch(0.98 0 0)) - Ratio 5.8:1 ✓
  - Background Light (oklch(0.98 0.01 250)): Foreground Dark (oklch(0.25 0.02 260)) - Ratio 14.3:1 ✓

## Font Selection

Typography should convey modern technical sophistication while remaining highly readable across all devices and sizes.

- **Primary Typeface**: Space Grotesk - A geometric sans-serif that balances technical precision with friendly approachability, perfect for headings and hero text
- **Secondary Typeface**: Inter - Clean, highly legible sans-serif for body text and UI elements that maintains readability at all sizes
- **Typographic Hierarchy**:
  - H1 (Hero Name): Space Grotesk Bold/64px/tight letter-spacing (-0.02em)
  - H2 (Section Titles): Space Grotesk Bold/48px/tight letter-spacing
  - H3 (Project Titles): Space Grotesk SemiBold/32px/normal letter-spacing
  - H4 (Subsections): Space Grotesk Medium/24px/normal letter-spacing
  - Body Large (Intro): Inter Regular/20px/relaxed line-height (1.7)
  - Body (Content): Inter Regular/16px/comfortable line-height (1.6)
  - Caption (Labels): Inter Medium/14px/uppercase/wide letter-spacing (0.05em)

## Animations

Animations should feel fluid and purposeful, enhancing the experience without causing distraction. Inspired by Flutter.dev's smooth, physics-based transitions: hero sections with staggered text reveals, scroll-triggered fade-ins with subtle scale effects, hover states that lift and glow, and smooth page transitions. Key moments of delight include the initial hero animation sequence and project card interactions that feel tactile and responsive.

## Component Selection

- **Components**:
  - Card: For project showcases with hover effects and elevation changes
  - Button: Primary CTAs in hero section and contact areas with distinct hover states
  - Badge: Technology tags for projects using custom styling with brand colors
  - Separator: Visual breaks between major sections
  - Scroll-area: For skills lists and technology stacks
  - Avatar: For profile image in hero with gradient border effect
  - Tabs: For filtering projects by category if needed
  
- **Customizations**:
  - Custom project cards with gradient overlays and glassmorphism effects
  - Animated background gradients in hero section using CSS mesh gradients
  - Custom timeline component for experience section with connecting lines
  - Floating navigation bar that appears/hides on scroll with blur backdrop
  - Icon grid component for skills section with staggered animations
  
- **States**:
  - Buttons: Default has gradient background, hover lifts with glow effect, active scales down slightly
  - Cards: Default has subtle shadow, hover elevates with stronger shadow and slight scale
  - Links: Underline appears on hover with smooth slide-in animation
  - Navigation: Fixed becomes floating blur card on scroll past hero
  
- **Icon Selection**:
  - ArrowRight: For CTA buttons and "learn more" links
  - GithubLogo: For GitHub profile link
  - LinkedinLogo: For LinkedIn profile
  - Envelope: For email contact
  - Code: For technical skills section
  - Briefcase: For experience section
  - FolderOpen: For projects section
  
- **Spacing**:
  - Section padding: py-24 (large breathing room between major sections)
  - Container max-width: max-w-7xl with px-6
  - Card gaps: gap-8 for project grid, gap-4 for content within cards
  - Typography spacing: mb-6 for headings, mb-4 for paragraphs
  
- **Mobile**:
  - Hero text scales down: H1 from 64px to 40px, maintaining hierarchy
  - Project grid: 3 columns desktop → 2 columns tablet → 1 column mobile
  - Navigation: Converts to fixed bottom bar or hamburger menu
  - Spacing reduces proportionally: py-24 → py-16 → py-12
  - Touch targets minimum 44px for all interactive elements
