import React from 'react'
import { Box, Typography, Button, Stack, Avatar } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined'

import { motion } from 'framer-motion'
import { publicPath } from '../../utils/path'

export function Hero() {
    return (
        <Box id="hero" component={motion.section} py={10} display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={6}>
            <Box flex={1}>
                <Typography color="primary" component='h1' variant="h3" fontWeight="bold">Nguyễn Hữu Bảo Trung</Typography>
                <Typography variant="h6" component='p' fontWeight={400} mt={2}>Web Developer Intern — Focused on React, Node.js & ASP.NET Core</Typography>
                <Stack direction="row" spacing={2} mt={4}>
                    <Button
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                        component="a"
                        href={publicPath("/Nguyen_Trung.pdf")}
                        download
                    >
                        Download CV
                    </Button>
                    <Button variant="outlined" href="#contact">Contact Me</Button>
                </Stack>
            </Box>
            <Avatar src={publicPath("/avatar2.png")} sx={{ width: 180, height: 180 }} />
        </Box>
    )
}
