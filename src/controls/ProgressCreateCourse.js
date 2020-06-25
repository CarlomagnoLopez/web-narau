import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LinearProgress from '@material-ui/core/LinearProgress';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        flexGrow: 1,
        background: "#fff",
        justifyContent: "flex-end",
        // backgroundColor:"#000"
        barColorPrimary: {
            backgroundColor: "#000"
        }

    },

    backgroundColorStepper: {
        backgroundColor: "#69696938"
    },
    backgroundColorStepperBar: {
        backgroundColor: "#000"

    }
});

// const theme = createMuiTheme({
//     overrides: {
//       // Style sheet name ⚛️
//       MuiButton: {
//         // Name of the rule
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         text: {
//           // Some CSS
//           background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//           borderRadius: 3,
//           border: 0,
//           color: 'white',
//           height: 48,
//           padding: '0 30px',
//           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         },
//       },
//     },
//   });


// const useStylesLinear = makeStyles({
//     root: {
//         // backgroundColor: "#fff"
//         color:"#000"
//     }
// });

export default function ProgressCreateCourse(props) {
    const classes = useStyles();
    const { currentStep, totalPercent } = props
    // const classesLinear = useStylesLinear();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(currentStep);
    const totalSteps = 7;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <MobileStepper
            variant="progress"
            steps={totalSteps}
            position="static"
            activeStep={currentStep}
            className={classes.root}
            classes={{
                progress: classes.backgroundColorStepper,
                root:"classBarColor"
                // progress: {
                //     barColorPrimary: classes.backgroundColorStepperBar
                // }
                // colorPrimary:classes.backgroundColorStepperBar,
                // backgroundColor:classes.backgroundColorStepperBar,
                // bar: {
                //     barColorPrimary: classes.backgroundColorStepperBar
                // }// class name, e.g. `classes-nesting-root-x`

                // label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            // LinearProgressProps={{ classes: }}
            nextButton={
                <IconButton edge="start" color="inherit"
                onClick={props.handleClose}
                aria-label="close">
                <CloseIcon />
              
              </IconButton>
            }
            backButton={
                <Button size="small" disabled>
                    {totalPercent()}
                </Button>
            }
        />
    );
}
