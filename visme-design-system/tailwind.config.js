/** @type {import('tailwindcss').Config} */
/**
 * Visme Design System — Tailwind Config
 * Synthesized from 7 pages: www.visme.co, dashboard.visme.co, my.visme.co
 * Generated: 2026-05-17
 */
export default {
  theme: {
    extend: {

      colors: {
        /* Brand */
        'brand-sky':       '#3CACD7',
        'brand-sky-dark':  '#3d92e7',
        'brand-blue':      '#2693FF',
        'brand-navy':      '#293745',
        'brand-amber':     '#FCBC41',
        'brand-yellow':    '#FFCC00',
        'brand-red':       '#F45F50',
        'brand-green':     '#6CC395',
        'brand-purple':    '#9062F0',
        'brand-coral':     '#fa607e',

        /* Dark text scale */
        'dark-1': '#293745',
        'dark-2': '#2B3140',
        'dark-3': '#3F4759',
        'dark-4': '#586276',
        'dark-5': '#798297',
        'dark-6': '#949DB0',

        /* Base / light scale */
        'base-1': '#7F859D',
        'base-2': '#A0A5B8',
        'base-3': '#BBD0E5',
        'base-4': '#DAE4EA',
        'base-5': '#E7EFF3',
        'base-6': '#EFF6FC',

        /* Mid / gray scale */
        'mid-1': '#97989A',
        'mid-2': '#ABABAB',
        'mid-3': '#DADADA',
        'mid-4': '#E4E4E4',
        'mid-5': '#F3F3F3',
        'mid-6': '#FDFDFD',

        /* Surfaces */
        'surface-app':     '#ECF2F5',
        'surface-card':    '#FFFFFF',
        'surface-sidebar': '#F8FAFB',
        'surface-dark':    '#020c1f',

        /* Status */
        success:        '#6CC395',
        'success-dark': '#48906B',
        'success-light':'#CAF5DF',
        warning:        '#FCBC41',
        'warning-dark': '#CF9627',
        'warning-light':'#FFE5B1',
        danger:         '#F45F50',
        'danger-dark':  '#CA4438',
        'danger-light': '#FFAEA7',

        /* Semantic action shortcuts */
        primary: {
          DEFAULT: '#3d92e7',
          hover:   '#3CACD7',
          app:     '#2693FF',
        },
        secondary: {
          DEFAULT: '#DAE4EA',
        },
        background: '#FFFFFF',
        foreground:  '#293745',
      },

      fontFamily: {
        sans:      ['Lato', 'sans-serif'],
        heading:   ['Montserrat', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },

      fontSize: {
        /* Marketing scale */
        'display': ['48px', { lineHeight: '55.5px', fontWeight: '700' }],
        'h1':      ['44px', { lineHeight: '57.2px', fontWeight: '700' }],
        'h2':      ['40px', { lineHeight: '50.9px', fontWeight: '700' }],
        'h3':      ['36px', { lineHeight: '47.9px', fontWeight: '700' }],
        'h4':      ['24px', { lineHeight: '31.2px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '30.6px' }],
        'body':    ['16px', { lineHeight: '24px' }],
        'sm':      ['15px', { lineHeight: '20px' }],
        'xs':      ['14px', { lineHeight: '20px' }],
        'xxs':     ['13px', { lineHeight: '19.5px' }],
        /* App scale */
        'app-h1':      ['30px', { lineHeight: '39px',   fontWeight: '500' }],
        'app-h2':      ['28px', { lineHeight: '30px',   fontWeight: '500' }],
        'app-h3':      ['21px', { lineHeight: '24px',   fontWeight: '500' }],
        'app-body':    ['14px', { lineHeight: '18.2px' }],
        'app-label':   ['13px', { lineHeight: '16.9px' }],
        'app-caption': ['11px', { lineHeight: '24px' }],
      },

      spacing: {
        '1px':   '1px',
        '4px':   '4px',
        '8px':   '8px',
        '10px':  '10px',
        '15px':  '15px',
        '20px':  '20px',
        '24px':  '24px',
        '30px':  '30px',
        '35px':  '35px',
        '40px':  '40px',
        '48px':  '48px',
        '50px':  '50px',
        '60px':  '60px',
        '100px': '100px',
        '135px': '135px',
        '235px': '235px',
        /* Semantic aliases */
        'xs':    '4px',
        'sm':    '8px',
        'md':    '20px',
        'lg':    '24px',
        'xl':    '40px',
        '2xl':   '50px',
      },

      borderRadius: {
        'none': '0px',
        'xs':   '2px',
        'sm':   '4px',   /* controls, app buttons */
        'md':   '8px',   /* cards, marketing buttons */
        'lg':   '16px',
        'xl':   '20px',
        'xl-m': '24px',  /* marketing feature cards */
        'full': '50px',
      },

      boxShadow: {
        'border':   'rgb(218, 228, 234) 0px -1px 0px 0px',
        'sm':       'rgba(33, 51, 67, 0.12) 0px 1px 5px 0px',
        'offset':   'rgba(49, 65, 82, 0.3) 2px 2px 6px 0px',
        'md':       'rgba(184, 184, 184, 0.3) 0px 0px 12px 3px',
        'float':    'rgba(0, 0, 0, 0.25) 0px 0px 10px 0px',
        'lg':       'rgba(0, 0, 0, 0.12) 0px 4px 16px 0px',
        'xl':       'rgba(0, 0, 0, 0.28) 0px 8px 28px 0px',
      },

      screens: {
        'xs':   '412px',
        'sm':   '680px',
        'md':   '768px',
        'lg':   '1024px',
        'xl':   '1280px',
        '2xl':  '1600px',
      },

      transitionDuration: {
        'fast':   '100ms',
        'normal': '150ms',
        'medium': '200ms',
        'slow':   '300ms',
      },

      transitionTimingFunction: {
        'default': 'ease',
        'custom':  'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      maxWidth: {
        'container': '1280px',
      },

    },
  },
};
