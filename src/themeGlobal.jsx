import { createMuiTheme } from "@material-ui/core/styles";

const themeGlobal= createMuiTheme({
    palette:{
        primary:{
            main:'#18CE94'
        },
        secondary:{
            main:'#000000'
        },
        input:{
            main:'#858585'
        }
    },
    typography:{
        fontFamily: "'Raleway', 'sans-serif'"  
    },
})

export default themeGlobal;
