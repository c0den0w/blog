import "./NavBar.css";

export default function NavBar({ about, blogs, work }) {
    const handleNavClick = (scrollHandler) => (e) => {
        e.preventDefault();
        scrollHandler?.();
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#" onClick={handleNavClick(about)}>About</a></li>
                    <li><a href="#" onClick={handleNavClick(blogs)}>Blogs</a></li>
                    <li><a href="#" onClick={handleNavClick(work)}>Work</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}