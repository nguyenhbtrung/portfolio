import {
    Box,
    Grid,
    Stack,
    Typography,
    IconButton,
    Tooltip
} from '@mui/material';
import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { socialLinks } from '../../data/social-links';

export function Contact() {

    return (
        <Box id="contact" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} py={{ xs: 8, md: 12 }}>
            <Grid
                container
                spacing={{ xs: 6, md: 8 }}
                alignItems="flex-start"
            >
                {/* Left */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <SectionHeading>
                        Get in Touch
                    </SectionHeading>
                    <Typography
                        variant="h4"
                        component="p"
                        fontSize={{ xs: '1.5rem', md: '2.125rem' }}
                        mb={3}
                    >
                        Let's build something amazing together.
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        lineHeight={1.9}
                    >
                        Reach out for collaborations, inquiries, or just to talk tech. I'm always open to new opportunities and interesting projects.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={2}
                        mt={5}
                    >
                        {socialLinks.map((item) => (
                            <Tooltip key={item.title} title={item.title}>
                                <IconButton
                                    component="a"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '50%',
                                        border: (theme) =>
                                            `1px solid ${theme.palette.divider}`,
                                        color: 'text.secondary',
                                        transition: 'all .3s',

                                        '&:hover': {
                                            color: 'primary.main',
                                            borderColor: 'primary.main',
                                            bgcolor: 'action.hover',
                                            transform:
                                                'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <item.icon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Stack>
                </Grid>

                {/* Right */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Box>
    );
}