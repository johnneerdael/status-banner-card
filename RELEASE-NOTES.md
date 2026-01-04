What's New
v1.4.2 - Project Rename & Polish

    Renamed to Lovelace Multi State Entities Card - Reflecting the flexibility of the card
    Footer Stacking Fix - Action button now properly sits above the timestamp when both are on the same side
    Strict Editor Layout - Completely reorganized editor to match logical configuration flow

v1.4.1 - Button Types & Layout Refinement

    New Button Types - Action button now supports Service, Toggle, More Info, Navigate, URL, and Assist types directly from the editor
    Independent Subtitle Alignment - New subtitle_alignment option allows separate control from title
    Timestamp Configuration - Moved timestamp settings to Layout section for better discoverability
    Removed "Full Background" Toggle - Simplified to just "Triangle Edge" controls (set both to same edge for full background)

v1.4.0 - User Experience & Alignment Refinement

    Improved Alignment Logic - Fixed "Center" alignment to properly stack and center content without overlapping
    Editor UI Overhaul - Reorganized editor sections to follow a logical flow (Entity -> Color Map -> Layout -> Alignment -> Rules)
    Enhanced Rule Clarity - Added clear labels in the editor for Rule-to-Title/Subtitle mapping
    Status Box Prepending - Improved "Status Label" behavior for dual-mode status box (Prepending label vs Sensor content)
    Robust Entity Picker - Fixed issues where sensors could appear "detached" or unavailable in the primary picker
    New Icon Color Option - Set icon color independently of the accent color in Layout options

v1.3.1 - AI Vision Blueprint

    Garbage Collection Blueprint - Ready-to-use automation blueprint using AI Vision (LLM Vision) for smart bin detection
    Blueprint is importable directly from blueprints/garbage_vision_verification.yaml

v1.3.0 - Editor Overhaul & New Features

    Fixed Button Overlay Bug - Footer now uses proper document flow instead of absolute positioning
    Icon Color Override - New icon_color option to set icon color independently of accent
    Center Alignment - Title and icon alignment now support left/center/right
    Status Entity - Display content from any entity (text_helper, sensor) in status box with status_entity
    Reorganized Editor - Improved section ordering and merged Triangle controls into Layout
    Footer Controls Moved - "Show Footer" toggle now in Alignment section

v1.2.0 - Flexible Layout & Triangle Control

    Triangle Corner Control - Configure accent_start and accent_end to any corner (top-left, top-right, bottom-left, bottom-right)
    Full Background Mode - Set accent_full_background: true to fill entire card with accent color
    Header Alignment - Independent title_alignment and icon_alignment (left/right)
    Footer Positioning - Place timestamp and button at any corner with timestamp_position and button_position
    Text Color Overrides - title_color, subtitle_color, timestamp_color for when text overlaps accent

v1.1.5 - Cleaner Labels & Simplified Options

    Renamed Labels - "Show Diagonal Pattern" → "Show Stripes", "Pattern Size" → "Stripe Width"
    Removed Variant - The card variant dropdown was removed; use show_status and show_footer toggles instead

v1.1.4 - Accent Toggle

    Show/Hide Accent - New toggle to completely disable the diagonal accent
    Sliders start at 0% - Width and height sliders now go from 0-100/150% for full control

v1.1.3 - Status Box Transparency

    Status Box Opacity - Configurable transparency (0-100%) lets the accent show through
    Fixed Accent Flow - The diagonal accent now properly extends behind body and footer sections

v1.1.2 - Full Card Accent

    Accent Spans Full Card - The diagonal color accent now flows from header through body to footer
    Accent Width Control - Adjust the triangle width (30-100% of card width)
    Accent Height Control - Extend beyond card boundaries (25-150%) for dramatic effects

v1.1.1 - Typography & Pattern Control

    Per-Rule Font Sizes - Customize title and subtitle sizes for each state rule
    Pattern Size Control - Adjust diagonal stripe density (in pixels)
    Custom Status Labels - Change "Status:" to any label (Strategy, Action, etc.)

v1.1.0 - Visual Editor

    Full GUI Configuration - Complete visual editor with sliders and toggles
    Live Preview - See changes instantly as you configure

    This card started as a personal project but has evolved into a highly customizable component. Every visual aspect can now be tweaked to match your dashboard style.
