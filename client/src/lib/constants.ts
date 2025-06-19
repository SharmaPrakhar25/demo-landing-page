// App Configuration
export const APP_CONFIG = {
  SCROLL_THRESHOLD: 50,
  SCROLL_OFFSET: 80,
  TYPEWRITER_SPEED: 100,
  ANIMATION_DURATION: 300,
} as const;

// Text Content
export const TEXT_CONTENT = {
  HERO_TITLE: "Next-Gen IT Solutions",
  HERO_SUBTITLE: "Empowering businesses with cutting-edge ServiceNow solutions, AI-driven automation, and strategic IT consulting that propels your organization into the future.",
  COMPANY_NAME: "R K Ads",
  COMPANY_EMAIL: "rkads23@gmail.com",
  COMPANY_PHONE: "+91-8096152094",
  COMPANY_ADDRESS: "Flat # 401, R.K. Residency, House No.84258/R/ 18 & 19,\nBupesh Nagar, Greenland Colony,\nKarmanghat, Hyderabad-500079",
} as const;

// Navigation Routes
export const ROUTES = {
  HOME: "/",
  INDUSTRIES: "/industries",
  CAREERS: "/careers",
  CONTACT: "/contact",
} as const;

// Section IDs for smooth scrolling
export const SECTION_IDS = {
  HOME: "home",
  SERVICES: "services",
  ABOUT: "about",
  TEAM: "team",
  TESTIMONIALS: "testimonials",
  CONTACT: "contact",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: "/api/contact",
  CONTACT_SUBMISSIONS: "/api/contact-submissions",
} as const;

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED_FIELDS: "Please fill in all required fields.",
  EMAIL_INVALID: "Please enter a valid email address.",
  MESSAGE_SUCCESS: "Thank you for your message. We'll get back to you soon.",
  MESSAGE_ERROR: "Failed to send message. Please try again.",
} as const; 