
//## framer motion library
//##  pass these variants  as props to any framer motion elememt to apply animation



/// animate the sidebar
export const sideDrawerVariants = {
  hiddin: {x: "-100%"},
  visible: {
      x: 0,
      transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2},
    },

  exit: {
      x: "-100vw",
      transition: {
      duration: 0.5,},
    },
};

/// animate  list elements inside side bar
export const linksVariants = {
    hiddin: {
    opacity: 0,
    x: "-100%",},

    visible: {
    opacity: 1,
    x: 0,
    transition: {
    duration: 0.5,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
};
