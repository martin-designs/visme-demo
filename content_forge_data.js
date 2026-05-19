/* ─────────────────────────────────────────────────────────────────────────────
 * Content Forge — demo data and static configuration
 * ---------------------------------------------------------------------------
 * Pure data module. Loaded as a plain <script> (no Babel) and attaches
 * everything to `window.ContentForge` for the component layer to consume.
 * ─────────────────────────────────────────────────────────────────────── */
(function (global) {
  'use strict';

  /* ── Surface keys ───────────────────────────────────────────────────────── */
  const SURFACE_KEYS = Object.freeze({
    PRESENTATION: 'presentation',
    INFOGRAPHIC: 'infographic',
    SOCIAL_POST: 'socialPost',
  });

  /* ── Category keys ──────────────────────────────────────────────────────── */
  const CATEGORY_KEYS = Object.freeze({
    FINANCIAL: 'financial',
    PRODUCT: 'product',
    COMPLIANCE: 'compliance',
  });

  /* ── Demo content per category ──────────────────────────────────────────── */
  const contextEngineData = {
    [CATEGORY_KEYS.FINANCIAL]: {
      label: 'Financial Goal',
      rawText:
        'Our primary strategic focus for the upcoming third quarter is to aggressively scale our enterprise client acquisition metrics by an estimated 25% year-over-year, while concurrently optimizing our overall operational overhead costs across all internal sub-departments to ensure maximum profitability and lean resource distribution.',
      surfaces: {
        [SURFACE_KEYS.PRESENTATION]: {
          options: [
            { heading: 'Q3 Strategic Focus',      subheading: 'Scaling Enterprise Growth' },
            { heading: 'The 25% Target',          subheading: 'Aggressive Enterprise Acquisition' },
            { heading: 'Operational Optimization', subheading: 'Maximizing Lean Profitability' },
          ],
        },
        [SURFACE_KEYS.INFOGRAPHIC]: {
          options: [
            [
              'Accelerate enterprise acquisition by 25%',
              'Optimize operational overhead costs',
              'Maximize cross-department profitability',
            ],
            [
              '+25% YoY Enterprise Growth Target',
              'Zero-Waste Lean Resource Distribution',
              'Cross-Department Profit Scaling',
            ],
            [
              'Scale our high-value client pipeline',
              'Cut administrative operational friction',
              'Secure maximum bottom-line returns',
            ],
          ],
        },
        [SURFACE_KEYS.SOCIAL_POST]: {
          options: [
            "We're setting a bold path for Q3. Our primary goal is to scale enterprise acquisition by 25% while maximizing our internal operational efficiency. Leaner, faster, and focused on growth. Let's build! 📈 #EnterpriseGrowth #SaaS #BusinessStrategy",
            "How do you scale enterprise growth by 25% while lowering operational costs? That's the exact blueprint our team is executing for Q3. Here's a look at how we are structuring our lean operations to win. 🚀 #SaaSMetrics #Ops",
            'Q3 Focus: 1. Scale enterprise acquisition (+25% YoY). 2. Optimize overhead across all internal teams. 3. Maximize overall corporate profitability. Execution starts today. 📊 #CompanyGoals #Leadership',
          ],
        },
      },
    },

    [CATEGORY_KEYS.PRODUCT]: {
      label: 'Product Launch',
      rawText:
        'We are incredibly thrilled to announce the official rollout of our brand-new AI-powered document translation engine today. This innovative native feature allows enterprise users to instantly process, translate, and completely localize multi-format business files across 40 global languages in under five seconds flat while preserving exact layout geometry.',
      surfaces: {
        [SURFACE_KEYS.PRESENTATION]: {
          options: [
            { heading: 'Feature Rollout Live',      subheading: 'AI Document Translation Engine' },
            { heading: 'Global in 5 Seconds',       subheading: 'Zero-Latency Asset Localization' },
            { heading: 'Preserve Layout Geometry',  subheading: 'Intelligent Native Translation' },
          ],
        },
        [SURFACE_KEYS.INFOGRAPHIC]: {
          options: [
            [
              'Native zero-latency translation engine',
              'Supports 40+ global languages natively',
              'Translates files in < 5s with layout locks',
            ],
            [
              'AI-Powered Layout-Preserving Translation',
              'Multi-Format Native Document Ingestion',
              'Under 5-Second Processing Benchmark',
            ],
            [
              'Eliminate manual localization delays',
              'Instantly expand into 40 global markets',
              'Keep design files beautifully on-brand',
            ],
          ],
        },
        [SURFACE_KEYS.SOCIAL_POST]: {
          options: [
            "It's officially here! 🚀 Meet our new AI-powered document translator. Localize multi-format business files into 40 global languages in under 5 seconds flat—all while keeping your exact design layout intact. Check out the engine today! 🌍⚡ #AInative #ProductLaunch #Localization",
            'Localization used to mean breaking your slide layouts and waiting weeks for translators. Today, we changed that. Our new native AI translation engine drops localized files in 40 languages in 5 seconds without shifting a single pixel. 🤯 #BuiltWithAI #Innovation',
            'Big launch today: Say hello to our AI Document Translation Engine. 🌍 40 global languages. ⚡ Under 5 seconds processing. 🔒 Exact layout geometry locked. Enterprise content, instantly globalized. Try it out now. #TechRelease #ProductDesign',
          ],
        },
      },
    },

    [CATEGORY_KEYS.COMPLIANCE]: {
      label: 'Compliance Rule',
      rawText:
        'In accordance with our updated Q2 information security protocols, all internal engineering personnel and contractors are strictly required to complete the mandatory cyber-security refresher training module and successfully update their localized multi-factor authentication hardware tokens before Friday at 5:00 PM.',
      surfaces: {
        [SURFACE_KEYS.PRESENTATION]: {
          options: [
            { heading: 'Action Required',           subheading: 'Mandatory Q2 Security Protocols' },
            { heading: 'Hard Deadline: Friday 5PM', subheading: 'Cyber-Security Token Upgrades' },
            { heading: 'Engineering Compliance',    subheading: 'Required InfoSec System Refresher' },
          ],
        },
        [SURFACE_KEYS.INFOGRAPHIC]: {
          options: [
            [
              'Complete cyber-security refresher module',
              'Update localized MFA hardware tokens',
              'Hard compliance deadline: Friday, 5:00 PM',
            ],
            [
              'Step 1: Finish InfoSec training module',
              'Step 2: Authenticate your new hardware token',
              'Step 3: Log verification before Friday cutoff',
            ],
            [
              'Maintain baseline enterprise network security',
              'Prevent token protocol operational lockouts',
              'Secure contractor & full-time compliance status',
            ],
          ],
        },
        [SURFACE_KEYS.SOCIAL_POST]: {
          options: [
            '🔒 Attention internal engineering teams and contractors: A quick reminder that our mandatory Q2 cyber-security refresher training and localized MFA token updates must be completed before Friday at 5:00 PM. Check your internal dashboards for the direct modules.',
            'Engineering Alert ⚠️ Our Q2 security protocols have been updated. If you are a team member or contractor, please prioritize completing your cyber-security refresher and pairing your new MFA token by Friday 5PM to avoid account lockouts. #InfoSec #Engineering',
            "Securing our data is a team effort. Quick heads up to all active developers: ensure your mandatory Q2 InfoSec training modules and hardware token authentications are fully submitted by the Friday evening deadline. Let's keep our code secure! 💻 #Security",
          ],
        },
      },
    },
  };

  /* ── Category selector options ──────────────────────────────────────────── */
  const CATEGORIES = [
    { key: CATEGORY_KEYS.FINANCIAL,  label: 'Financial Goal',  icon: 'line-chart',   color: '#6CC395' },
    { key: CATEGORY_KEYS.PRODUCT,    label: 'Product Launch',  icon: 'box',          color: '#3CACD7' },
    { key: CATEGORY_KEYS.COMPLIANCE, label: 'Compliance Rule', icon: 'shield-check', color: '#9062F0' },
  ];

  /* ── Surface (output format) definitions ────────────────────────────────── */
  const LAYOUTS = Object.freeze({
    WIDE: 'wide',
    TALL: 'tall',
    SQUARE: 'square',
  });

  const SURFACES = [
    {
      key: SURFACE_KEYS.PRESENTATION,
      label: 'Presentation Slide',
      meta: '16:9 · slide cover',
      icon: 'presentation',
      accent: '#3CACD7',
      layout: LAYOUTS.WIDE,
      copyLabel: 'Slide',
    },
    {
      key: SURFACE_KEYS.INFOGRAPHIC,
      label: 'Infographic',
      meta: 'Portrait 4:5 · long-form visual',
      icon: 'bar-chart-3',
      accent: '#9062F0',
      layout: LAYOUTS.TALL,
      copyLabel: 'Infographic',
    },
    {
      key: SURFACE_KEYS.SOCIAL_POST,
      label: 'Social Post',
      meta: '1:1 · square post',
      icon: 'instagram',
      accent: '#fa607e',
      layout: LAYOUTS.SQUARE,
      copyLabel: 'Social post',
    },
  ];

  const SURFACES_BY_KEY = SURFACES.reduce((acc, s) => {
    acc[s.key] = s;
    return acc;
  }, {});

  /* ── Numeric / timing constants ─────────────────────────────────────────── */
  const OPTION_LABELS = ['Default', 'Alt 1', 'Alt 2'];
  const OPTION_COUNT = OPTION_LABELS.length;

  const TIMING = Object.freeze({
    ADAPT_MS: 1200,        // simulated "adapt content" delay
    REWRITE_MS: 1500,      // simulated "rewrite" delay
    TOAST_DISMISS_MS: 4500, // adapt-success toast lifetime
    COPY_TOAST_MS: 2500,   // copy confirmation toast lifetime
  });

  const SIZES = Object.freeze({
    SLOT_HEIGHT: 300,       // infographic and social-post share this height
    WIDE_SLOT_HEIGHT: 260,  // presentation slide spans full width, slightly shorter
  });

  /* ── Initial state ──────────────────────────────────────────────────────── */
  const INITIAL_SURFACE_OPTIONS = Object.freeze({
    [SURFACE_KEYS.PRESENTATION]: 0,
    [SURFACE_KEYS.INFOGRAPHIC]: 0,
    [SURFACE_KEYS.SOCIAL_POST]: 0,
  });

  /* ── Export to global namespace ─────────────────────────────────────────── */
  global.ContentForge = Object.assign(global.ContentForge || {}, {
    SURFACE_KEYS,
    CATEGORY_KEYS,
    LAYOUTS,
    contextEngineData,
    CATEGORIES,
    SURFACES,
    SURFACES_BY_KEY,
    OPTION_LABELS,
    OPTION_COUNT,
    TIMING,
    SIZES,
    INITIAL_SURFACE_OPTIONS,
  });
})(window);
