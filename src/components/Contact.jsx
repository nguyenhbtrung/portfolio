import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Stack,
    IconButton,
    Tooltip,
    Fade,
    useTheme
} from '@mui/material';
import { GitHub, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false })
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            toast.warn('Please fill in all fields.')
            return
        };

        setStatus({ loading: true });

        emailjs
            .send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
            .then(() => {
                setStatus({ loading: false })
                setForm({ name: '', email: '', message: '' })
                toast.success('Message sent successfully!')
            })
            .catch(() => {
                setStatus({ loading: false })
                toast.error('Failed to send. Try again later.')
            });
    };

    // 👇 Hiệu ứng xuất hiện khi scroll tới
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('contact')
            if (section) {
                const rect = section.getBoundingClientRect()
                if (rect.top < window.innerHeight - 150) {
                    setVisible(true)
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Fade in={visible} timeout={800}>
            <Box
                id="contact"
                textAlign="center"
                py={8}
                sx={{
                    transition: 'all 0.3s ease',
                    color: theme.palette.text.primary,
                }}
            >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Me
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                    Feel free to reach out via form or any of the platforms below.
                </Typography>

                {/* Social Links */}
                <Stack direction="row" justifyContent="center" spacing={2} mb={4}>
                    <Tooltip title="Email">
                        <IconButton color="primary" href="mailto:nguyenhbtrung1907@gmail.com">
                            <Email />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="GitHub">
                        <IconButton
                            color="primary"
                            href="https://github.com/nguyenhbtrung"
                            target="_blank"
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="LinkedIn">
                        <IconButton
                            color="primary"
                            href="https://www.linkedin.com/in/trung-nguy%E1%BB%85n-ab7289387/"
                            target="_blank"
                        >
                            <LinkedIn />
                        </IconButton>
                    </Tooltip>

                    {/* <Tooltip title="Phone">
                        <IconButton color="primary" href="tel:+84123456789">
                            <Phone />
                        </IconButton>
                    </Tooltip> */}
                    {/* <Tooltip title="Location">
                        <IconButton
                            color="primary"
                            href="https://goo.gl/maps/your-location"
                            target="_blank"
                        >
                            <LocationOn />
                        </IconButton>
                    </Tooltip> */}
                </Stack>

                {/* Contact Form */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: 500,
                        mx: 'auto',
                        p: 3,
                        borderRadius: 2,
                        boxShadow: theme.palette.mode === 'dark' ? 4 : 2,
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? theme.palette.background.paper
                                : '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: theme.palette.mode === 'dark' ? 6 : 4,
                            transform: 'translateY(-4px)',
                        },
                    }}
                >
                    <Stack spacing={2}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            value={form.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            fullWidth
                            value={form.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            fullWidth
                            multiline
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                        />
                        <Button variant="contained" type="submit" size="large" disabled={status.loading}>
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Fade>
    );
}
