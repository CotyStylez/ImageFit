# ImageFit — Pure, Clutter-Free Standalone Bulk Resizer & Normalizer

A hyper-focused, dead-simple standalone tool dedicated exclusively to image fitting, resizing, and canvas normalization. Stripped of all secondary feature clutter (no watermarks, no EXIF scrubbers, no filters, no extra tools), ImageFit does one single job better, faster, and more intuitively than corporate subscription tools: fit images to any dimension with zero confusion, zero paywalls, and zero cloud uploads.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following direction is locked in to eliminate clutter and provide maximum simplicity:

- **Complete De-Cluttering & Scope Lock**:
  - **Permanently Removed**: Watermark engine, logo graphic uploads, signature embedding, EXIF/location scrubber toggles, auto-enhance clarity filters, and target byte search algorithms. Those belong in their own dedicated standalone tools.
  - **The 4 Essential Controls Retained**:
    1. **Dimensions**: Target Width & Height in pixels, with standard presets (Instagram, TikTok/Stories, YouTube, E-Commerce, 4K, Custom) and aspect ratio lock.
    2. **Fit Mode**: Plain-English fitting logic:
       - *Fit inside (adds clean borders so nothing gets cut off)*
       - *Fill entire frame (crops edges to fill without borders)*
       - *Stretch to exact size (forces exact dimensions)*
       - *Scale by percentage (shrink or enlarge)*
       - *Limit longest edge (keeps natural shape, caps max length)*
    3. **Background Padding Color**: Choose border fill for "Fit inside" (Clean White, Transparent, Dark Slate, Pure Black, or Custom Color).
    4. **Save Format & Quality**: WebP (fastest/smallest), JPEG (universal), PNG (lossless), or Original format, with a simple 10–100% quality slider.
- **Interface Structure**: Clean, minimal sidebar containing only these essential controls, paired with an open, spacious workspace for instant drag-and-drop, queue monitoring, Before/After preview slider, and 1-click ZIP export.

---

## 1. Overview & Core Concept

- **What It Does**: Drop any number of images, select your target size and fit mode, and get perfectly fitted photos in seconds. No account required, no paywalls, no confusing menus, running 100% locally in your browser.
- **Why It Beats Corporate Tools**: Mainstream tools (Canva, Adobe, TinyPNG) clutter the screen with upsells, accounts, and complicated nested panels. ImageFit gives creators a clean, distraction-free tool that does exactly what they came to do.

---

## 2. User Experience & Visual Design

### Clean & Minimal Workspace

1. **Intake**:
   - Clean, large dropzone with file picker and 1-click **"Try with Demo Samples"** button.
   - Quiet, unboxed indicator: *"100% In-Browser · No Uploads · Free Forever"*.
2. **Minimal Sidebar**:
   - Only 4 clean sections in natural order:
     - **1. Target Size**: Presets dropdown + Width/Height inputs.
     - **2. How to Fit**: Fit inside, Fill & crop, Stretch, Scale %, Longest edge.
     - **3. Border Color**: Simple color chips (White, Transparent, Black, Dark, Custom).
     - **4. Output Format**: WebP, JPG, PNG + Quality slider.
   - Primary **"Process All Images"** button and **"Download All (.ZIP)"** button.
3. **Queue & Inspection**:
   - Clear cards showing thumbnail, original dimensions & size, new dimensions & size, and reduction badge.
   - Individual download button, remove button, and Before/After split comparison preview.
4. **Focused Resizing Guide**:
   - Slide-over drawer explaining only the core fitting concepts: *Fit vs Fill vs Stretch* and *Which format to choose*.

---

## 3. Technical Architecture & Component Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                          ImageFit Top Bar                              │
│   [IF Brand Wordmark]   │   [Privacy Marker]   │   [Guide / Samples]   │
└────────────────────────────────────────────────────────────────────────┘
                                    │
          ┌─────────────────────────┴────────────────────────┐
          ▼                                                  ▼
┌───────────────────────────┐      ┌─────────────────────────────────────┐
│    Minimal Sizing Bar     │      │          Clean Workspace            │
│  ┌─────────────────────┐  │      │  ┌───────────────────────────────┐  │
│  │ 1. Target Size      │  │      │  │  Spacious Drag & Drop Deck    │  │
│  ├─────────────────────┤  │      │  ├───────────────────────────────┤  │
│  │ 2. How to Fit       │  │      │  │  Batch Progress & Metrics     │  │
│  ├─────────────────────┤  │      │  ├───────────────────────────────┤  │
│  │ 3. Background Color │  │      │  │  Image Cards (List / Grid)    │  │
│  ├─────────────────────┤  │      │  ├───────────────────────────────┤  │
│  │ 4. Format & Quality │  │      │  │  Before/After Split Slider    │  │
│  ├─────────────────────┤  │      │  └───────────────────────────────┘  │
│  │ Process & ZIP       │  │      │  ┌───────────────────────────────┐  │
│  └─────────────────────┘  │      │  │  Slide-Over Sizing Guide      │  │
└───────────────────────────┘      │  └───────────────────────────────┘  │
                                   └─────────────────────────────────────┘
```
