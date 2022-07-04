module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0063BD',
        secondary: '#223875',
        success: '#65C553',
        warning: '#FFE81C',
        danger: '#E7458C',
        blue: {
          100: '#002951',
          200: '#004990',
        },
        pink: {
          100: '#FF4398',
        },
        green: {
          100: '#07FD60',
          200: '#00D44D',
        },
        gray: {
          100: '#B3B3B4',
          200: '#707070',
          300: '#2E2E2E',
          400: '#ACACAC',
          500: '#7E7E7E',
        },
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        '12px': '0.75rem',    // 12px
        '14px': '0.875rem',   // 14px
        '15px': '0.9375rem',  // 15px
        '16px': '1rem',       // 16px
        '18px': '1.125rem',   // 18px
        '20px': '1.25rem',    // 20px
        '22px': '1.375rem',   // 22px
        '24px': '1.5rem',     // 24px
        '28px': '1.75rem',    // 28px
        '40px': '2.5rem',     // 40px
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1601px'
      },
      borderRadius: {
        '5': '0.3125rem',
        '9': '0.5625rem',
      },
      zIndex: {
        999: 999,
        1099: 1099,
      }
    },
  },
  plugins: [],
}