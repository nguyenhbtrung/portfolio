import { Box, Typography, Button, Stack, Avatar, Tooltip, alpha, IconButton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';

import { motion } from 'framer-motion';

import { publicPath } from '../../utils/path';
import { socialLinks } from '../../data/social-links';

export function Hero() {
    return (
        <Box id="hero" component={motion.section} py={10} display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={6}>
            <Box flex={1}>
                <Typography color="primary" component='h1' variant="h3" fontWeight={700}>Nguyen Huu Bao Trung</Typography>
                <Typography variant="body1" component='p' fontWeight={500} fontSize='1.125rem' mt={2}>Aspiring Software Developer</Typography>
                <Typography variant="h6" component='p' fontWeight={400} mt={2} color='text.secondary' maxWidth='45rem' lineHeight={1.4}>
                    
                    Highly focused on building scalable web applications using React, Node.js, and ASP.NET Core.
                    </Typography>
                <Stack 
                    direction={{xs: 'column', xsPlus: 'row'}}
                    spacing={2} 
                    my={4}
                >
                    <Button
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                        component="a"
                        size='large'
                        href={publicPath("/Nguyen_Trung.pdf")}
                        download
                        sx={{
                            // whiteSpace: 'nowrap',
                        }}
                    >
                        Download CV
                    </Button>
                    <Button 
                        variant="outlined" 
                        size='large' 
                        href="#projects"
                        startIcon={<FolderOpenIcon />} 
                        sx={{
                            // whiteSpace: 'nowrap',
                            border: 1,
                            transition: 'all .3s',
                            '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText'
                            }
                        }}
                    >
                        View My Work
                    </Button>

                </Stack>
                <Typography variant='body2' component='p' mb={4}>Open to Intern - Fresher opportunities. </Typography>
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
            </Box>
            <Avatar src={publicPath("/avatar2.png")} sx={{ width: 180, height: 180 }} />
        </Box>
    )
}
