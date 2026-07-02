import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  X,
  ZoomIn,
  Download,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

/* ──────────────────────────────────────────────
   Photos Database — 59 Projects with Accurate Labels
   (Analyzed from actual project photographs)
────────────────────────────────────────────── */

const PHOTOS = [
  {
    id: 1,
    title: 'Ocean View — Rooftop LED Channel Letters',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.27.59.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Ocean View',
    year: '2024',
    description: 'Large-scale blue and white illuminated channel letter signage installed on the rooftop crown of a high-rise building, visible from a long distance.'
  },
  {
    id: 2,
    title: "Rathod's 802 — Backlit Apartment Name Plate",
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.00.jpeg')}`,
    location: 'Mumbai, MH',
    client: "Rathod's",
    year: '2021',
    description: "Warm golden backlit apartment nameplate with textured stone finish background. Clean bold typography for residential unit 802."
  },
  {
    id: 3,
    title: 'Skybound Heights India Pvt. Ltd. — 3D Backlit Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.01.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Skybound Heights India Pvt. Ltd.',
    year: '2021',
    description: 'White backlit 3D acrylic letter signage with logo mounted on a brushed steel board, fabricated in-workshop before installation.'
  },
  {
    id: 4,
    title: 'Fitness Founder — Gym Facade LED Signage',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.02.jpeg')}`,
    location: 'Pune, MH',
    client: 'Fitness Founder',
    year: '2024',
    description: 'Large-format illuminated gym storefront signage with bold orange and white letters installed across the full width of a multi-story fitness center.'
  },
  {
    id: 5,
    title: 'Vijay Sales — Vertical Pole LED Sign',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.04.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Vijay Sales',
    year: '2021',
    description: 'High-brightness vertical pole sign with white LED illuminated letters for Vijay Sales electronics retail store, visible at night from a distance.'
  },
  {
    id: 6,
    title: 'Wacoal — Mall Retail LED Storefront Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.06 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Wacoal',
    year: '2024',
    description: 'Elegant white acrylic LED backlit sign with brand logo for Wacoal lingerie retail store inside a premium shopping mall.'
  },
  {
    id: 7,
    title: 'Multicolour LED Letter Samples — Workshop Display',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.06.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'In-House Showcase',
    year: '2021',
    description: 'Workshop display board showing multicolour illuminated acrylic letter samples — red, green, blue, yellow, cyan, and white — for client demonstrations.'
  },
  {
    id: 8,
    title: 'Dr. S. Radhakrishnan International School — Gate Sign',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.07 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Dr. S. Radhakrishnan International School',
    year: '2024',
    description: 'Illuminated entrance gate sign with school emblem and bilingual name text mounted on a premium ACP board with warm LED cove lighting above.'
  },
  {
    id: 9,
    title: 'Fullerton India — Office Reception Signage',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.07 (2).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Fullerton India',
    year: '2024',
    description: 'Corporate office reception backlit logo sign for Fullerton India financial services. Clean dark-panel box with white LED lettering mounted on an orange accent wall.'
  },
  {
    id: 10,
    title: 'Dr. S. Radhakrishnan School — Gate Entrance (Night)',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.07.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Dr. S. Radhakrishnan International School',
    year: '2024',
    description: 'Night shot of the school entrance gate featuring gold-toned 3D letters, a crest medallion, and elegant LED warm strip lighting above the board.'
  },
  {
    id: 11,
    title: 'Konkan Prant Restaurant — Storefront LED Sign',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.08 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Konkan Prant Restaurant',
    year: '2024',
    description: 'Bright green Devanagari LED channel letters for Konkan Prant family restaurant. ACP board with menu categories inset on the right side.'
  },
  {
    id: 12,
    title: 'Summit Garden Grove — Large Outdoor Neon Sign (Install)',
    category: 'Neon Signs',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.08.jpeg')}`,
    location: 'Pune, MH',
    client: 'Summit Garden Grove',
    year: '2024',
    description: 'Night-time installation photo of large rooftop neon sign for Summit Garden Grove residential project. Red "SUMMIT" text with white "GARDEN GROVE" below.'
  },
  {
    id: 13,
    title: 'Summit Garden Grove — Rooftop Neon Sign (Day)',
    category: 'Neon Signs',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.11.jpeg')}`,
    location: 'Pune, MH',
    client: 'Summit Garden Grove',
    year: '2024',
    description: 'Daytime view of the completed rooftop neon channel letter display for Summit Garden Grove. Red and white illuminated letters against a dramatic sky backdrop.'
  },
  {
    id: 14,
    title: 'Samsonite — Mall Interior 3D Logo Letters',
    category: 'Metal Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.12 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsonite',
    year: '2024',
    description: 'White 3D dimensional Samsonite logo letters mounted on the wall of a premium mall retail outlet interior with pendant lighting.'
  },
  {
    id: 15,
    title: 'Lenskart — Illuminated Storefront Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.12.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Lenskart',
    year: '2024',
    description: 'Warm amber backlit LED Lenskart.com sign with the brand glasses icon displayed on a glass retail store front in a busy shopping street.'
  },
  {
    id: 16,
    title: 'Samsonite — Mall Storefront Bilingual Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.13.jpeg')}`,
    location: 'Bangalore, KA',
    client: 'Samsonite',
    year: '2024',
    description: 'Samsonite storefront with dual language signage — English LED backlit board and Hindi/Kannada neon lettering — installed inside a premium mall.'
  },
  {
    id: 17,
    title: 'Brahma Kumaris — ACP Backlit Sign Board',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.14.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Brahma Kumaris',
    year: '2024',
    description: 'Bold red and blue ACP face board for Brahma Kumaris Rajyoga Meditation Centre at Dadar West, Mumbai with contact number.'
  },
  {
    id: 18,
    title: 'Accessorize London — Mall Facade Signage',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.18.jpeg')}`,
    location: 'Bangalore, KA',
    client: 'Accessorize London',
    year: '2024',
    description: 'Premium backlit white LED channel letters for Accessorize London boutique inside a shopping mall. Dual-sided signs on both the front fascia and side pillar.'
  },
  {
    id: 19,
    title: 'Havaianas — Retail Store Signage',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.19.jpeg')}`,
    location: 'Bangalore, KA',
    client: 'Havaianas',
    year: '2024',
    description: 'Red 3D channel letter signage for Havaianas footwear retail store inside a mall with digital display board on the left side panel.'
  },
  {
    id: 20,
    title: 'Pathshala College — ACP Sign Board (Workshop)',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.20.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Pathshala College',
    year: '2024',
    description: '3D gold letter acrylic work mounted on a mirrored ACP board for Pathshala educational institution. Photographed in the workshop prior to delivery.'
  },
  {
    id: 21,
    title: 'Indian Oil — Outdoor Petrol Pump Sign',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.21.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Indian Oil',
    year: '2024',
    description: 'Large outdoor Indian Oil logo installation with orange and navy brand colors — includes round emblem with Devanagari text and 3D bold lettering.'
  },
  {
    id: 22,
    title: 'Dr. S. Radhakrishnan School — Illuminated Gate Sign (Night)',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.22.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Dr. S. Radhakrishnan International School',
    year: '2024',
    description: 'Nighttime view of the full school gate fascia with gold 3D letters, school emblem, and LED cove strip lighting at the top, creating a premium entrance.'
  },
  {
    id: 23,
    title: 'Samsung Rajalaxmi Telecom — Outdoor Store Signage',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.25.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsung India',
    year: '2024',
    description: 'Full-fascia Samsung authorized dealer signage for Rajalaxmi Telecom. Blue ACP board with large white Samsung logos on both sides of the corner store.'
  },
  {
    id: 24,
    title: 'Samsung Smart Café — LED Backlit Storefront',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.28 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsung India',
    year: '2024',
    description: 'Night-time LED illuminated Samsung Smart Café storefront board with white channel letters on a black ACP panel above the retail entrance.'
  },
  {
    id: 25,
    title: 'Samsung Smart Café — Close-up Night Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.28 (2).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsung India',
    year: '2024',
    description: 'Close-up nighttime photograph of Samsung Smart Café backlit LED sign with Hindi "Samsung" text in white below the main English branding panel.'
  },
  {
    id: 26,
    title: 'Samsonite — Standalone Kiosk Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.28.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsonite',
    year: '2024',
    description: 'White LED backlit Samsonite logo panel installed at the top of a freshly constructed in-mall kiosk, photographed during setup.'
  },
  {
    id: 27,
    title: 'Gionee — Outdoor Retail Hoarding + Store Sign',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.30 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Gionee',
    year: '2024',
    description: 'Dual-layer Gionee outdoor branding — a flex hoarding above and an ACP storefront sign below for Anmol General & Mobiles dealer in a semi-rural location.'
  },
  {
    id: 28,
    title: 'Vivo Nakshatra Telecom — Store Signage',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.30.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Vivo',
    year: '2024',
    description: 'Blue ACP fascia board with white Vivo brand lettering for Nakshatra Telecom dealer. Bilingual English and Marathi signage on a residential street retail shop.'
  },
  {
    id: 29,
    title: 'Samsung Anmol General & Mobiles — Night Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.33 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsung India',
    year: '2024',
    description: 'Night-time illuminated blue ACP fascia with white Samsung letters and spotlights for Anmol General & Mobiles mobile retail store.'
  },
  {
    id: 30,
    title: 'Zydus Wellness — Office Interior 3D Letters',
    category: 'Metal Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.33 (2).jpeg')}`,
    location: 'Ahmedabad, GJ',
    client: 'Zydus Wellness',
    year: '2024',
    description: 'Large 3D painted metal logo letters for Zydus Wellness mounted on a white office wall. Blue gradient tones with green cross element in the brand design.'
  },
  {
    id: 31,
    title: 'Samsung Anmol General — Night LED Store Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.33.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Samsung India',
    year: '2025',
    description: 'Bright Samsung LED sign at night with spotlights on the canopy for Anmol General & Mobiles dealer shop. Blue ACP board with large white LED letters.'
  },
  {
    id: 32,
    title: 'Zydus Wellness — Neon Backlit Corporate Sign',
    category: 'Neon Signs',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.34.jpeg')}`,
    location: 'Ahmedabad, GJ',
    client: 'Zydus Wellness',
    year: '2025',
    description: 'Neon-style cyan LED backlit Zydus Wellness sign photographed in a dark environment, showing a glowing premium finish with the brand cross icon.'
  },
  {
    id: 33,
    title: 'Tissot — Mall Luxury Watch Brand Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.35 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Tissot',
    year: '2025',
    description: 'Premium illuminated Tissot dual-fascia LED signage inside a luxury mall with the Swiss cross brand logo reflected in the glass below.'
  },
  {
    id: 34,
    title: 'Shreshtha Bharat Bhavan — Outdoor Wall Sign',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.35.jpeg')}`,
    location: 'Pune, MH',
    client: 'Shreshtha Bharat Bhavan',
    year: '2025',
    description: 'Large-scale backlit Devanagari channel letters "Shreshtha Bharat Bhavan" mounted on an outdoor compound wall with warm white halo backlighting.'
  },
  {
    id: 35,
    title: 'Accessorize — Mall Hanging Side Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.36.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Accessorize',
    year: '2025',
    description: 'Illuminated double-sided hanging box sign for Accessorize boutique inside a mall corridor, with the brand "A" monogram and neon-style strip running vertically.'
  },
  {
    id: 36,
    title: 'American Tourister & Lenskart — Dual Storefront Signs',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.37.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'American Tourister',
    year: '2025',
    description: 'Side-by-side illuminated storefront signs — red American Tourister vertical totem with campaign imagery, and Lenskart backlit panel sign, both on a busy street.'
  },
  {
    id: 37,
    title: 'American Tourister — Full-Height Outdoor Totem',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.42.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'American Tourister',
    year: '2025',
    description: 'Daytime view of full-height illuminated American Tourister outdoor totem with campaign branding. Three-panel ACP structure with red fascias and LED-backlit imagery.'
  },
  {
    id: 38,
    title: 'JSW Paints Sri Durga Hardwares — Store Signage',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.43 (1).jpeg')}`,
    location: 'Bangalore, KA',
    client: 'JSW Paints',
    year: '2022',
    description: 'Yellow ACP fascia board with JSW Paints branding and 3D logo letters for Sri Durga Paints & Hardwares dealer in Bangalore. Bilingual Kannada and English text.'
  },
  {
    id: 39,
    title: 'JSW Paints Sri Durga — Full Shop View',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.43.jpeg')}`,
    location: 'Bangalore, KA',
    client: 'JSW Paints',
    year: '2022',
    description: 'Full storefront view of JSW Paints Sri Durga Paints & Hardwares showing the complete yellow branded ACP board fascia with violet promotional banners on the flanking walls.'
  },
  {
    id: 40,
    title: 'Mystic — Giant Illuminated 3D Letters (In-Progress)',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.44 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Mystic',
    year: '2025',
    description: 'In-progress shot of giant orange-lit "MYSTIC" 3D channel letters inside a tile showroom. Marble-patterned acrylic face with dramatic ambient glow.'
  },
  {
    id: 41,
    title: 'Toyota Genuine Parts — Backlit Store Sign',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.44.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Toyota',
    year: '2025',
    description: 'Night-time illuminated Toyota Genuine Parts sign with brand logo for Anarhesha Auto Associate spare parts dealer. Red and yellow backlit acrylic letters.'
  },
  {
    id: 42,
    title: 'WCOA 2022 — Event Display Boards',
    category: 'Digital Display',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.45 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'World Congress of Accountants',
    year: '2022',
    description: 'Pair of large illuminated display boards for the 21st World Congress of Accountants 2022 event, showing sponsor lists and floor map layout.'
  },
  {
    id: 43,
    title: 'EuroSchool Dombivli — LED Campaign Standee',
    category: 'Digital Display',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.45 (2).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'EuroSchool',
    year: '2025',
    description: 'Illuminated tall LED standee for EuroSchool Dombivli admissions campaign, displaying school building imagery and AY 2023–24 enrollment call-to-action.'
  },
  {
    id: 44,
    title: 'Mystic — Completed Giant Letter Installation',
    category: 'Channel Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.45.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Mystic',
    year: '2025',
    description: 'Completed installation view of the giant orange marble-patterned "MYSTIC" 3D channel letter installation inside a premium tile showroom, seen from the side.'
  },
  {
    id: 45,
    title: 'EuroSchool — Double-Sided Illuminated Standee',
    category: 'Digital Display',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.46 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'EuroSchool',
    year: '2025',
    description: 'Tall freestanding double-sided illuminated LED display standee for EuroSchool, positioned in a hotel lobby with "Discover Your True Potential" campaign artwork.'
  },
  {
    id: 46,
    title: 'EuroSchool — Illuminated Standee (Side View)',
    category: 'Digital Display',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.46.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'EuroSchool',
    year: '2025',
    description: 'Side view of the EuroSchool illuminated floor standee at a hotel, showing the admission open campaign with the school logo and inspirational child imagery.'
  },
  {
    id: 47,
    title: 'EuroSchool — Bright LED Floor Standee',
    category: 'Digital Display',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.47.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'EuroSchool',
    year: '2025',
    description: 'Well-lit EuroSchool "Discover Yourself" tall LED standee in a hotel lobby. The light box glows evenly showing clear, bright Dombivli admissions imagery.'
  },
  {
    id: 48,
    title: "Bajaj's 701 — Decorative Home Mirror Name Plate",
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.48 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: "Bajaj's",
    year: '2025',
    description: "Decorative mirror nameplate with golden LED lettering 'Bajaj's 701' for a residential flat, featuring a Ganesha motif and star decorative elements."
  },
  {
    id: 49,
    title: "Thakkar's 1501 & Darshana Nilesh Patel — Home Nameplates",
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.48.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Residential Clients',
    year: '2025',
    description: "Two custom home name plates — gold LED cursive mirror plate for Thakkar's 1501 and a dark textured plate for Darshana Nilesh Patel 403, with Ganesha motifs."
  },
  {
    id: 50,
    title: 'JSW Paints Halo — Triangular Kiosk Display (Workshop)',
    category: 'Digital Display',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.50 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'JSW Paints',
    year: '2023',
    description: 'Workshop photograph of a triangular three-panel illuminated display kiosk for JSW Paints Halo product featuring Alia Bhatt brand campaign imagery.'
  },
  {
    id: 51,
    title: "Parvatkar's A-1603 — Textured Residential Nameplate",
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.50.jpeg')}`,
    location: 'Mumbai, MH',
    client: "Parvatkar's",
    year: '2025',
    description: "Custom residential apartment nameplate for A-1603 'Parvatkar's' with gold script lettering on a dark brown textured leatherette background, photographed in the workshop."
  },
  {
    id: 52,
    title: 'JSW Paints Logo — Batch Production (Workshop)',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.51 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'JSW Paints',
    year: '2023',
    description: 'Workshop production shot of a large batch of JSW Paints branding boards showing the circular rainbow drop logo stacked for bulk delivery to dealers.'
  },
  {
    id: 53,
    title: 'GE Logo — 3D Acrylic Letter (In-Workshop, Pre-Finish)',
    category: 'Metal Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.51 (2).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'GE (General Electric)',
    year: '2025',
    description: 'Close-up of the GE corporate logo fabricated as a large 3D acrylic letter, photographed on the workshop floor before painting and LED installation.'
  },
  {
    id: 54,
    title: 'JSW Paints Aditya Trading — Storefront Sign',
    category: 'ACP Board',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.51.jpeg')}`,
    location: 'Pune, MH',
    client: 'JSW Paints',
    year: '2025',
    description: 'Yellow ACP fascia board for Aditya Trading Company JSW Paints dealer in Pune. 3D brand logo with Marathi bilingual text and JSW color-drop branding element.'
  },
  {
    id: 55,
    title: 'GE Logo — 3D Acrylic Letter (Day View, Workshop)',
    category: 'Metal Letters',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.52.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'GE (General Electric)',
    year: '2025',
    description: 'Larger daytime workshop view of the fabricated GE logo 3D sign letters before finishing, showing the precise acrylic routing work for the iconic GE monogram.'
  },
  {
    id: 56,
    title: 'Wacoal — Mall Store LED Sign (Duplicate View)',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.54 (1).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Wacoal',
    year: '2025',
    description: 'Second angle of the Wacoal mall store LED backlit sign showing the brand name with butterfly logo in clean white lighting inside a premium mall unit.'
  },
  {
    id: 57,
    title: 'Fullerton India — Reception LED Logo Panel (Duplicate)',
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.54 (2).jpeg')}`,
    location: 'Mumbai, MH',
    client: 'Fullerton India',
    year: '2025',
    description: 'Duplicate angle of the Fullerton India office reception LED logo board mounted on the orange accent wall, showing its corporate identity in a clean corporate setting.'
  },
  {
    id: 58,
    title: "Rathod's 802 — Warm Backlit Nameplate (Duplicate)",
    category: 'Acrylic LED',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.54.jpeg')}`,
    location: 'Mumbai, MH',
    client: "Rathod's",
    year: '2021',
    description: "Second shot of Rathod's 802 apartment nameplate showcasing the warm amber LED backlit finish against the textured stone-look panel from a different angle."
  },
  {
    id: 59,
    title: 'The Queen of Mumbai — Illuminated Heritage Arch Gate',
    category: 'Outdoor Signage',
    image: `/images/OurWork%20Images/${encodeURIComponent('WhatsApp Image 2026-07-02 at 17.28.58.jpeg')}`,
    location: 'Mumbai, MH',
    client: 'The Queen of Mumbai (Residential Project)',
    year: '2025',
    description: 'Large ornate illuminated golden arch gateway for "A New Address for The Queen of Mumbai Is Here" luxury residential project, with warm amber floodlighting at dusk.'
  }
];

const CATEGORIES = [
  'All',
  'Acrylic LED',
  'Channel Letters',
  'Neon Signs',
  'Outdoor Signage',
  'Digital Display',
  'ACP Board',
  'Metal Letters'
];

/* ──────────────────────────────────────────────
   Main Page Component
────────────────────────────────────────────── */
export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Reset pagination when category or search changes
  useEffect(() => {
    setVisibleCount(12);
  }, [activeCategory, searchQuery]);

  // Filtering Logic
  const filteredPhotos = useMemo(() => {
    return PHOTOS.filter((photo) => {
      const matchesCategory = activeCategory === 'All' || photo.category === activeCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !cleanSearch ||
        photo.title.toLowerCase().includes(cleanSearch) ||
        photo.client.toLowerCase().includes(cleanSearch) ||
        photo.location.toLowerCase().includes(cleanSearch) ||
        photo.description.toLowerCase().includes(cleanSearch) ||
        photo.category.toLowerCase().includes(cleanSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Paginated Photos
  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  // Lightbox navigation
  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  }, [filteredPhotos.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  }, [filteredPhotos.length]);

  // Handle keyboard events in Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  const currentLightboxPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow Effects */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/[0.08] blur-[150px]" />
        <div className="absolute -bottom-30 -left-30 w-[450px] h-[450px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-white text-xs font-semibold tracking-wide uppercase mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Premium Signage Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Our Work{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Photos Gallery
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            Browse through our portfolio of {PHOTOS.length}+ illuminated LED boards, custom neon signs, ACP facings, 
            and metal lettering projects delivered across India. Use search and filters to explore.
          </p>
        </div>
      </section>

      {/* ── FILTER & SEARCH STICKY BAR ── */}
      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories select/scrollable pills */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="flex gap-2 flex-nowrap md:flex-wrap items-center">
              <span className="text-xs font-bold text-slate-400 uppercase mr-2 tracking-wider hidden lg:inline-block">
                Filters:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-600 border border-slate-200/50 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by client, town..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-full text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-all"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Count details */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="text-slate-900 font-semibold">{filteredPhotos.length}</span> of{' '}
            <span className="text-slate-900 font-semibold">{PHOTOS.length}</span> photos
          </p>
          {activeCategory !== 'All' && (
            <button
              onClick={() => setActiveCategory('All')}
              className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              Clear filters <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 max-w-md mx-auto px-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mx-auto mb-4 border border-slate-200">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No photos match your filter</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
              We couldn&apos;t find any photos matching &quot;{searchQuery}&quot; under &quot;{activeCategory}&quot;. Try adjustments or reset.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition shadow-md shadow-blue-500/10"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPhotos.map((photo) => {
            // Find its matching index in the complete filteredPhotos list for Lightbox triggers
            const globalIndex = filteredPhotos.findIndex((p) => p.id === photo.id);

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(globalIndex)}
                className="group relative bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Zoom indicator overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-10">
                    <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-8 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all duration-300 hover:shadow-md active:scale-95"
            >
              Load More Photos
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Footer callout when all loaded */}
        {visibleCount >= filteredPhotos.length && filteredPhotos.length > 0 && (
          <div className="text-center mt-16 max-w-xl mx-auto py-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 font-medium">
              You&apos;ve viewed all matching {filteredPhotos.length} sign board photos.
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md shadow-blue-500/10 transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                Inquire About a Project
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* ── LIGHTBOX MODAL ── */}
      {currentLightboxPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between">
          
          {/* Top Bar inside modal */}
          <div className="w-full flex items-center justify-between p-4 sm:p-6 text-white bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-xs sm:text-sm font-semibold text-slate-300">
              Photo Showcase: <span className="text-white font-bold">{lightboxIndex + 1}</span> of{' '}
              <span className="text-white font-bold">{filteredPhotos.length}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href={currentLightboxPhoto.image}
                target="_blank"
                rel="noreferrer"
                download
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                title="Download full quality photo"
              >
                <Download className="w-4 h-4 sm:w-5 h-5" />
              </a>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none"
                title="Close lightbox (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core Image Area */}
          <div className="relative flex-1 flex items-center justify-center px-4 max-h-[70vh]">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm hidden sm:block focus:outline-none"
              title="Previous photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Picture */}
            <img
              src={currentLightboxPhoto.image}
              alt={currentLightboxPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 select-none"
            />

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm hidden sm:block focus:outline-none"
              title="Next photo (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Info Box */}
          <div className="w-full p-6 text-white bg-slate-900/90 border-t border-slate-800 backdrop-blur-md">
            <div className="max-w-4xl mx-auto">
              
              {/* Categorization & Tags */}
              <div className="flex flex-wrap gap-2.5 items-center mb-3">
                <span className="px-3 py-1 rounded bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  {currentLightboxPhoto.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  {currentLightboxPhoto.location}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-blue-500" />
                  Year {currentLightboxPhoto.year}
                </span>
              </div>

              {/* Title & Desc */}
              <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white mb-2">
                {currentLightboxPhoto.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {currentLightboxPhoto.description}
              </p>

              {/* Client Info */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                Client: <span className="text-white font-semibold">{currentLightboxPhoto.client}</span>
              </div>

            </div>

            {/* Mobile swipe indicator / tap cues */}
            <div className="sm:hidden flex items-center justify-center gap-8 mt-5 pt-3 border-t border-slate-800">
              <button onClick={handlePrev} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <div className="text-xs text-slate-500 font-semibold">Swipe or Tap Arrows</div>
              <button onClick={handleNext} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
