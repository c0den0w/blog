import { Container, Box, Typography } from '@mui/material';
import './About.css';

export default function About() {
  return (
    <Box className="about-container">
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 4, fontFamily: 'monospace', fontSize: '3.5rem', textAlign: 'center' }}>
          About me
        </Typography>

        <div className="about-grid-wrapper">
          <div className="about-grid">
            <div className="about-cell about-description">
              {/* <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '0.5rem' }}>Hello — I'm Bhavani</Typography> */}
              <Typography variant="body1" sx={{ fontFamily: 'monospace', lineHeight: 1.6 }}>
                I am a ServiceNow developer with specializing in the ITOM domain and having more than 3 years of experience in implementing solutions and solving problems for a large scale enterprise. 
                I am passionate about learning new technologies and sharing my knowledge through blogs and social media.
                Currently learning React and Python, and with intention to explore more about Web development and AI.
              </Typography>
            </div>

            <div className="about-cell about-skills">
              <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '0.5rem' }}>Skills</Typography>
              <div className="skills-grid">
                {[
                  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg' },
                  { name: 'ServiceNow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/servicenow/servicenow-original.svg' },
                  { name: 'React', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg' },
                  { name: 'PowerShell', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/powershell.svg' },
                  { name: 'Python', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/python.svg' },
                ].map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <img src={skill.src} alt={skill.name} />
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-cell about-certs">
              <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '0.5rem' }}>Certifications</Typography>
              <ul className="certs-list">
                {/* <li>Certified ServiceNow Administrator</li> */}
                <li>CIS - ITSM</li>
                <li>CIS - Discovery</li>
                <li>CIS - Event Management</li>
                <li>CIS - HAM</li>
                <li>GCP - CDL</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}
