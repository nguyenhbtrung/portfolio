import { Box, Typography, Stack, Link, Divider, Container, Tooltip, IconButton, alpha } from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import { socialLinks } from '../../data/social-links';

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <Box borderTop="1px solid" borderColor="divider" py={4}>
            <Container maxWidth="lg">
                <Stack 
                    direction={{ xs: 'column', sm: 'row'}} 
                    justifyContent='space-between' 
                    alignItems="center"
                    spacing={2}
                >
                    <Stack 
                        direction="row" 
                        spacing={2}
                        divider={<Divider orientation="vertical" flexItem />}
                        alignItems="center"
                    >
                        <Link href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box 
                                component="img" 
                                src="/logo.png" 
                                alt="Logo" 
                                sx={{ height: 32, width: 'auto' }} 
                            />
                        </Link>
                        
                        <Typography variant="body2" fontWeight={500}>
                            Copyright © {year}{' '}
                            <Box component="span" sx={{ color: 'primary.main' }}>
                                Trung Nguyen
                            </Box>
                        </Typography>
                    </Stack>

                    <Stack direction='row' spacing={2}>
                        {socialLinks.map((item) => (
                            <Tooltip key={item.title} title={item.title}>
                            <IconButton
                                variant='contained'
                                color="inherit"
                                component="a"
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    borderRadius: 0.5,
                                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    color: 'primary.main',
                                    transition: 'all .3s',
                                    "&:hover": {
                                        bgcolor: "primary.main", 
                                        color: "primary.contrastText",
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <item.icon />
                            </IconButton>
                        </Tooltip>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}