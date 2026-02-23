import { Container, Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import './MyWork.css';

export default function MyWork() {
    const experiences = [
        {
            id: 1,
            period: 'May 2022 - Dec 2022',
            title: 'Intern',
            company: 'Cognizant Technology Solutions Corporation',
        },
        {
            id: 2,
            period: 'Jan 2023 - Now',
            title: 'Technical Lead',
            company: 'Cognizant Technology Solutions Corporation',
        },
    ];

    return (
        <Box className="mywork-container">
            <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 4, fontFamily: 'monospace', fontSize: '3.5rem', textAlign: 'center' }}>
                    My Work
                </Typography>

                <Timeline position="alternate">
                    {experiences.map((experience, index) => (
                        <TimelineItem key={experience.id}>
                            <TimelineOppositeContent color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.95rem', fontWeight: 'bold' }}>
                                {experience.period}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: '#3b82f6', padding: '8px' }}>
                                    <WorkIcon sx={{ fontSize: '1.5rem' }} />
                                </TimelineDot>
                                {index < experiences.length - 1 && <TimelineConnector sx={{ backgroundColor: '#e0e0e0' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ paddingY: 2 }}>
                                <Typography variant="h6" component="span" sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                    {experience.title}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.95rem', color: 'text.secondary', marginTop: 1 }}>
                                    {experience.company}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}
