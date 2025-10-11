import React from 'react'
import { Box, Typography, Stack, Link } from '@mui/material'
import { GitHub, LinkedIn, Email, LocationOn } from '@mui/icons-material'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <Box
            component="footer"
            py={4}
            mt={6}
            borderTop="1px solid"
            borderColor="divider"
            textAlign="center"
        >
            <Typography variant="body2" fontWeight={500}>
                © {year} Trung Nguyen
            </Typography>

            {/* Liên hệ */}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                spacing={3}
                mt={1.5}
            >
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Email fontSize="small" color="action" />
                    <Link
                        href="mailto:nguyenhbtrung1907@gmail.com"
                        underline="hover"
                        color="inherit"
                    >
                        nguyenhbtrung1907@gmail.com
                    </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <GitHub fontSize="small" color="action" />
                    <Link
                        href="https://github.com/nguyenhbtrung"
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        color="inherit"
                    >
                        github.com/nguyenhbtrung
                    </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <LinkedIn fontSize="small" color="action" />
                    <Link
                        href="https://www.linkedin.com/in/nguyenhbtrung/"
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        color="inherit"
                    >
                        linkedin.com/in/nguyenhbtrung
                    </Link>
                </Stack>
            </Stack>

            {/* Địa chỉ */}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
                mt={2}
            >
                <LocationOn fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                    Hà Đông, Hà Nội, Việt Nam
                </Typography>
            </Stack>
        </Box>
    )
}
