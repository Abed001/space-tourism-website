/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Barlow: 'Barlow Condensed, sans-serif',
      Bellefair: 'Bellefair , serif'
    },

    fontSize: {
      heading1: '150px',
      heading2: '100px',
      heading3: '56px',
      heading4: '32px',
      heading5: ['28px', { letterSpacing: '4.75px' }],
      subheading1: '28px',
      subheading2: ['14px', { letterSpacing: '2.35px' }],
      navtext: ['16px', { letterSpacing: '2.7px' }],
     navtext2: '15px',
     navtext3: ['18px', { letterSpacing: '1.25px' }],

      /* '2xl': ['1.5rem', {
         lineHeight: '2rem',
         letterSpacing: '-0.01em',
         fontWeight: '500',
       }],*/

    },
    colors: {
      darkcolor: '#0B0D17',
      lightdarkcolor:'#797979',
      lightgrey:'#DCDCDC',
      blueish: '#D0D6f9',
      whitecolor: '#FFFFFF',
    },

    backgroundImage: {
      'homelg': "url('./images/home/background-home-desktop.jpg')",
      'homemd': "url('./images/home/background-home-tablet.jpg')",
      'homesm':  "url('./images/home/background-home-mobile.jpg')",

      'destlg': "url('./images/destination/background-destination-desktop.jpg')",
      'destmd': "url('./images/destination/background-destination-tablet.jpg')",
      'destsm':  "url('./images/destination/background-destination-mobile.jpg')",

      'crewlg': "url('./images/crew/background-crew-desktop.jpg')",
      'crewmd': "url('./images/crew/background-crew-tablet.jpg')",
      'crewsm':  "url('./images/crew/background-crew-mobile.jpg')",

      
      'techlg': "url('./images/technology/background-technology-desktop.jpg')",
      'techmd': "url('./images/technology/background-technology-tablet.jpg')",
      'techsm':  "url('./images/technology/background-technology-mobile.jpg')",
      
      
    },
    extend: {
     
    },
  },
  plugins: [],
}