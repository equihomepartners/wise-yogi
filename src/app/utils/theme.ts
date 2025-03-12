export const colors = {
  primary: {
    50: '#f0f9f1',
    100: '#dcf0de',
    200: '#bbdfbe',
    300: '#92c896',
    400: '#68ac6d',
    500: '#4c904f',
    600: '#3b733e',
    700: '#315c33',
    800: '#2a492c',
    900: '#243d26',
  },
  earth: {
    100: '#f7f3e9',
    200: '#ede3cc',
    300: '#dac7a3',
    400: '#c4a97d',
    500: '#b08b5e',
    600: '#96714d',
    700: '#7c5c42',
    800: '#654b3a',
    900: '#534035',
  }
};

export const transitions = {
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  sectionTransition: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
  },
  stagger: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }
  }
}; 