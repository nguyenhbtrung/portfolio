import { Box, Container } from "@mui/material"
import Header from "../components/Header"
import ScrollToTop from "../components/ScrollToTop"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";

const MainLayout = ({ darkMode, setDarkMode }) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                minHeight: '100vh',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container maxWidth="lg">
                <ScrollToTop />
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
};

export default MainLayout;