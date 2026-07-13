import Box from "@mui/material/Box";
import { motion } from 'framer-motion'; 

/**
 * @typedef {import('@mui/material').BoxProps & import('framer-motion').MotionProps} MotionBoxProps
 */

/**
 * A Box component that supports animations using Framer Motion.
 *
 * @param {MotionBoxProps} props - Props for both the MUI Box component and Framer Motion.
 */
const MotionBox = ({ 
    children, 
    initial, 
    whileInView, 
    viewport, 
    transition, 
    ...restProps 
}) => {
    return (
        <Box
            component={motion.div} 
            initial={{ opacity: 0, y: 100, ...initial }}
            whileInView={{ opacity: 1, y: 0, ...whileInView }} 
            viewport={{ margin: "100% 0px -10% 0px", ...viewport }} 
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], ...transition }} 
            {...restProps}
        >
            {children}
        </Box>
    )
};

export default MotionBox;
