//## framer motion library
//##  pass these variants  as props to any framer motion elememt to apply animation



// animate the header title in Home page
export const  headerTitleVariants = {
    hiddin: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },

    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "#f26b9c",
        transition:{
        default: { duration: 3, ease: "easeInOut"},
        fill: {  duration:3}
    }  },
}


export const headerDesVariants = {
    hidden:{
        y:'200%',
        opacity:0
    },

    visible:{
        y:0,
        opacity:1,
        transition:{ duration:3,
           
         }
    }
}


export const heroButtonVariants = {
    hidden:{
        opacity:0,
        scale:0
    },
    visible:{
        opacity:1,
        scale: [1, 1.1, 1 , 1.1 , 1 , 1.1, 1 , 1.1, 1, 1.1],
        transition:{ duration:3, }
    }
}