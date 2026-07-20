import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    InputLabel,
} from '@mui/material';
import Send from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import { useTypingPlaceholders } from '../../hooks';
import { contactPlaceholders } from '../../data/contact';

export function ContactForm() {
    const [status, setStatus] = useState({ loading: false });
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const hasInput = Object.values(form).some(value => value.trim() !== '');

    const {
        placeholders,
        placeholderOpacity,
        fadeDuration,
    } = useTypingPlaceholders(contactPlaceholders, {
        typingSpeed: 16,
        pauseAfterTyping: 5000,
        fadeOut: true,
        fadeDuration: 400,
        paused: hasInput,
    });

    const textfieldStyle = {
        "& .MuiInputBase-input::placeholder": {
            opacity: placeholderOpacity, 
            transition: `opacity ${fadeDuration}ms ease`,   
        },
    }

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
                setForm({ name: '', email: '', subject: '', message: '' });
                toast.success('Message sent successfully!');
            })
            .catch(() => {
                setStatus({ loading: false });
                toast.error('Failed to send. Try again later.');
            });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
        >
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <InputLabel
                        htmlFor="name"
                        sx={{
                            mb: 1,
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 2,
                            textTransform: 'uppercase'
                        }}
                    >
                        Full Name{' '}
                        <Box
                            component="span"
                            color="error.main"
                        >
                            *
                        </Box>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        placeholder={form.name ? '' : placeholders.name}
                        value={form.name}
                        onChange={handleChange}
                        required
                        sx={textfieldStyle}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <InputLabel
                        htmlFor="email"
                        sx={{
                            mb: 1,
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 2,
                            textTransform: 'uppercase'
                        }}
                    >
                        Email Address{' '}
                        <Box
                            component="span"
                            color="error.main"
                        >
                            *
                        </Box>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        type="email"
                        placeholder={form.email ? '' : placeholders.email}
                        value={form.email}
                        onChange={handleChange}
                        required
                        sx={textfieldStyle}
                    />
                </Grid>

                <Grid size={12}>
                    <InputLabel
                        htmlFor="subject"
                        sx={{
                            mb: 1,
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 2,
                            textTransform: 'uppercase'
                        }}
                    >
                        Subject
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="subject"
                        name="subject"
                        placeholder={form.subject ? '' : placeholders.subject}
                        value={form.subject}
                        onChange={handleChange}
                        sx={textfieldStyle}
                    />
                </Grid>

                <Grid size={12}>
                    <InputLabel
                        htmlFor="message"
                        sx={{
                            mb: 1,
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: 2,
                            textTransform: 'uppercase'
                        }}
                    >
                        Message{' '}
                        <Box
                            component="span"
                            color="error.main"
                        >
                            *
                        </Box>
                    </InputLabel>

                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        id="message"
                        name="message"
                        placeholder={form.message ? '' : placeholders.message}
                        value={form.message}
                        onChange={handleChange}
                        required
                        sx={textfieldStyle}
                    />
                </Grid>

                <Grid size={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        loading={status.loading}
                        loadingPosition="end"
                        endIcon={<Send />}
                        sx={{
                            py: 1.75,
                            borderRadius: 1,
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            boxShadow:
                                '0 0 30px rgba(var(--mui-palette-primary-mainChannel) / 0.35)',

                            '&:hover': {
                                boxShadow:
                                    '0 0 40px rgba(var(--mui-palette-primary-mainChannel) / 0.5)'
                            }
                        }}
                    >
                        {status.loading ? 'Sending...' : 'Send Message'}
                    </Button>

                    <Typography
                        variant="caption"
                        align="center"
                        display="block"
                        color="primary.main"
                        sx={{
                            mt: 2,
                            fontFamily:
                                'var(--font-geist-mono)',
                            letterSpacing: 1.5,
                            opacity: 0
                        }}
                    >
                        {'> TRANSMITTING_DATA...'}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}