import React from 'react'
import { Box, Typography, Button, Stack, Avatar } from '@mui/material'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <Box id="hero" component={motion.section} py={10} display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={6}>
            <Box flex={1}>
                <Typography color="primary" variant="h3" fontWeight="bold">Nguyễn Hữu Bảo Trung</Typography>
                <Typography variant="h6" mt={2}>Intern Web Developer — Focused on React, Node.js & ASP.NET Core</Typography>
                <Stack direction="row" spacing={2} mt={4}>
                    <Button variant="contained">Download CV</Button>
                    <Button variant="outlined" href="#contact">Contact Me</Button>
                </Stack>
            </Box>
            <Avatar src="/avatar2.png" sx={{ width: 180, height: 180 }} />
        </Box>
    )
}
