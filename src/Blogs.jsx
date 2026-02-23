import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import './Blogs.css';

export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: 'Getting Started with React',
            image: 'https://via.placeholder.com/400x300?text=React+Basics',
            description: 'Learn the fundamentals of React including components, hooks, and state management.',
        },
        {
            id: 2,
            title: 'Advanced State Management',
            image: 'https://via.placeholder.com/400x300?text=State+Management',
            description: 'Explore advanced patterns for managing application state using Context API.',
        },
        {
            id: 3,
            title: 'Building Responsive Layouts',
            image: 'https://via.placeholder.com/400x300?text=Responsive+Design',
            description: 'Master CSS Grid and Flexbox to create beautiful responsive layouts.',
        },
        {
            id: 4,
            title: 'Performance Optimization Tips',
            image: 'https://via.placeholder.com/400x300?text=Performance',
            description: 'Discover techniques to optimize your React applications for better performance.',
        },
        {
            id: 5,
            title: 'JavaScript Async Patterns',
            image: 'https://via.placeholder.com/400x300?text=Async+Patterns',
            description: 'Master async/await and promises to write clean asynchronous JavaScript code.',
        },
        {
            id: 6,
            title: 'CSS Animation Techniques',
            image: 'https://via.placeholder.com/400x300?text=CSS+Animations',
            description: 'Create stunning visual effects with CSS animations and transitions.',
        },
    ];

    const handleReadMore = (blogId) => {
        console.log(`Redirecting to blog ${blogId}`);
    };

    return (
        <Box className="blogs-container">
            <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 4, fontFamily: 'monospace', fontSize: '3.5rem', textAlign: 'center' }}>
                    Blogs
                </Typography>

                <Box className="blogs-grid">
                    {blogs.slice(0, 3).map((blog) => (
                        <Card key={blog.id} className="blog-card" sx={{ '&:hover': {  transition: 'all 0.3s ease-in-out' }, border: "1px solid black", borderRadius: '1rem' }}>
                            <CardMedia
                                component="img"
                                image={blog.image}
                                alt={blog.title}
                                sx={{ height: '120px', objectFit: 'cover' }}
                            />
                            <CardContent sx={{ padding: '12px', paddingBottom: '8px', flexGrow: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold', fontSize: '0.95rem', lineHeight: 1.3, fontFamily: 'monospace', minHeight: '2.6rem' }}>
                                    {blog.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: 1.4, fontFamily: 'monospace', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {blog.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', gap: '4px' }}>
                                <Chip label="2 min read" size='small' variant="outlined" slotProps={{ label: { sx: { fontSize: '0.6rem !important' } } }} />
                                <Button size="small" color="primary" onClick={() => handleReadMore(blog.id)} sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '0.75rem', padding: '2px 6px' }}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                    <Button variant="text" color="primary" sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1rem', textTransform: 'none' }}>
                        View All
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
