import { Container, Grid, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './Hero.css';
import profileImage from './assets/Gemini_Generated_Image_n5wl6en5wl6en5wl.png';
import snowLogo from './assets/snow-logo.avif';

export default function Hero() {
    const [displayText1, setDisplayText1] = useState('');
    const [displayText2, setDisplayText2] = useState('');
    const [displayText3, setDisplayText3] = useState('');
    const [displayText4, setDisplayText4] = useState('');
    const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

    const texts = [
        { text: "Hi There 👋, I'm Bhavani Shankar", setState: setDisplayText1 },
        { text: "ServiceNow Developer and Implementation specialist 🧑‍💻", setState: setDisplayText2 },
        { text: "Amateur technical blogger and content creator ✍️", setState: setDisplayText3 },
        { text: "Find more about me below 👇", setState: setDisplayText4 },
    ];

    const typingSpeed = 30; // milliseconds per character
    const delayBetweenTexts = 200; // milliseconds between each text

    useEffect(() => {
        let currentTextIndex = 0;
        let charIndex = 0;
        let timeout;

        const typeNextCharacter = () => {
            if (currentTextIndex >= texts.length) return;

            setCurrentTypingIndex(currentTextIndex);
            const currentText = texts[currentTextIndex];
            if (charIndex <= currentText.text.length) {
                currentText.setState(currentText.text.substring(0, charIndex));
                charIndex++;
                timeout = setTimeout(typeNextCharacter, typingSpeed);
            } else {
                // Move to next text after delay
                charIndex = 0;
                currentTextIndex++;
                timeout = setTimeout(typeNextCharacter, delayBetweenTexts);
            }
        };

        typeNextCharacter();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Box className="hero-container">
            <Container maxWidth="lg" sx={{ height: '100%' }}>
                <Grid container spacing={4} sx={{ height: '100%', alignItems: 'center' }}>
                    {/* Left Column - 70% */}
                    {/*Adjusted the grid item to take up 70% of the width by adding size={8.4} this will take 8.4 out of 12 columns which is 70% of the width*/}
                    <Grid item xs={12} md={8.4} lg={8.4} size={8.4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: 'monospace', fontSize: '3.5rem', minHeight: '7rem' }}>
                            {displayText1}
                            {currentTypingIndex === 0 && <span className="typewriter-cursor">|</span>}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 0 }}>
                            {/* <img src={snowLogo} alt="ServiceNow Logo" style={{ height: '2.5rem', width: 'auto', marginTop: '-5px' }} />  */}
                            {displayText2}
                            {currentTypingIndex === 1 && <span className="typewriter-cursor">|</span>}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'monospace' }}>
                            {displayText3}
                            {currentTypingIndex === 2 && <span className="typewriter-cursor">|</span>}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'monospace' }}>
                            {displayText4}
                            {currentTypingIndex === 3 && <span className="typewriter-cursor">|</span>}
                        </Typography>
                    </Grid>
                    {/* Right Column - 30% */}
                    <Grid item xs={12} md={3.6} size={3.6} lg={3.6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={profileImage}
                            alt="Profile"
                            sx={{
                                width: '150%',
                                // maxWidth: '300px',
                                height: 'auto',
                                // borderRadius: '8px',
                                // boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}