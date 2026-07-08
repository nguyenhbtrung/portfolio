import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Stack,
    IconButton,
    Tooltip,
    useTheme
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion'; 
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import SectionHeading from './SectionHeader';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false });
    const theme = useTheme();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            toast.warn('Please fill in all fields.')
            return;
        }

        setStatus({ loading: true });

        emailjs
            .send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
            .then(() => {
                setStatus({ loading: false });
                setForm({ name: '', email: '', message: '' });
                toast.success('Message sent successfully!');
            })
            .catch(() => {
                setStatus({ loading: false });
                toast.error('Failed to send. Try again later.');
            });
    };

    // 2. Đã loại bỏ useEffect tự tính tọa độ scroll cũ để tránh xung đột

    return (
        <Box
            id="contact"
            component={motion.div} 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ margin: "-100px" }} 
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} 
            textAlign="center"
            py={8}
            sx={{
                color: theme.palette.text.primary,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>

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
                        href="https://www.linkedin.com/in/nguyenhbtrung/"
                        target="_blank"
                    >
                        <LinkedIn />
                    </IconButton>
                </Tooltip>
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
    );
}
