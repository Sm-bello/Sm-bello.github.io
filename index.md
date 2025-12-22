<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Mohammed Bello Sani | Aerospace Engineer | Digital Twin & MRO Optimization</title>
    <meta name="description" content="Mohammed Bello Sani - Aerospace Engineer specializing in Digital Twin Technology, Predictive Maintenance, and Aircraft Structural Health Monitoring.">
    <meta name="keywords" content="aerospace engineer, digital twin, predictive maintenance, MRO optimization, aircraft structures, aviation safety">
    <meta name="author" content="Mohammed Bello Sani">
    <link rel="canonical" href="https://sm-bello.github.io/">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Mohammed Bello Sani | Aerospace Engineer">
    <meta property="og:description" content="Aerospace Engineer specializing in Digital Twin Technology, Predictive Maintenance, and Aircraft Structural Health Monitoring.">
    <meta property="og:image" content="https://sm-bello.github.io/og-image.jpg">
    <meta property="og:url" content="https://sm-bello.github.io/">
    <meta property="og:type" content="website">

    <!-- Fonts & Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary-color: #0066cc;
            --secondary-color: #004999;
            --accent-color: #00a8ff;
            --text-dark: #1a1a1a;
            --text-light: #666666;
            --bg-light: #f8f9fa;
            --bg-white: #ffffff;
            --border-color: #e0e0e0;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: var(--bg-light);
        }
        
        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }
        
        nav.scrolled {
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: color 0.3s ease;
        }
        
        .logo:hover {
            color: var(--secondary-color);
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }
        
        .nav-links a:hover {
            color: var(--primary-color);
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        /* Mobile Menu Toggle */
        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
        }
        
        .menu-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-dark);
            transition: all 0.3s ease;
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 8rem 2rem 4rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
        }
        
        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.2;
            animation: fadeInUp 0.8s ease;
        }
        
        .highlight {
            background: linear-gradient(120deg, #00a8ff, #00ff88);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            margin: 1rem 0;
            opacity: 0.95;
            animation: fadeInUp 0.8s ease 0.2s both;
        }
        
        .hero-description {
            max-width: 700px;
            font-size: 1.1rem;
            opacity: 0.9;
            margin-bottom: 2rem;
            line-height: 1.8;
            animation: fadeInUp 0.8s ease 0.4s both;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* CTA Buttons */
        .cta-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.6s both;
        }
        
        .btn {
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .btn-primary {
            background: white;
            color: var(--primary-color);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .btn-secondary:hover {
            background: white;
            color: var(--primary-color);
        }
        
        /* Sections */
        section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--text-dark);
            position: relative;
            padding-bottom: 1rem;
        }
        
        section h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            border-radius: 2px;
        }
        
        /* Focus Grid */
        .focus-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .focus-card {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .focus-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-color: var(--primary-color);
        }
        
        .focus-card i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .focus-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        
        .focus-card p {
            color: var(--text-light);
            line-height: 1.8;
        }
        
        /* Stats Section */
        .stats-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4rem 2rem;
            margin: 4rem 0;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            font-size: 1rem;
            opacity: 0.9;
        }
        
        /* Footer */
        footer {
            background: var(--text-dark);
            color: white;
            padding: 3rem 2rem;
            margin-top: 4rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--accent-color);
        }
        
        .footer-section p {
            opacity: 0.8;
            margin-bottom: 0.5rem;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-links a {
            color: white;
            font-size: 1.5rem;
            transition: color 0.3s ease;
        }
        
        .social-links a:hover {
            color: var(--accent-color);
        }
        
        .footer-bottom {
            text-align: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .menu-toggle {
                display: flex;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                display: none;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
            
            .focus-grid {
                grid-template-columns: 1fr;
            }
            
            section h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav id="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <i class="fas fa-plane"></i>
                <span>Mohammed Bello Sani</span>
            </a>
            <div class="menu-toggle" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="/">Home</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <h1>
                <span class="highlight">Mohammed Bello Sani</span><br>
                Aerospace Engineer
            </h1>
            <p class="hero-subtitle">Digital Twin Specialist | Predictive Maintenance Expert</p>
            <p class="hero-description">
                I develop intelligent systems at the intersection of aircraft structures and data-driven innovation to transform aviation safety and MRO operations.
            </p>
            <div class="cta-buttons">
                <a href="/projects.html" class="btn btn-primary">
                    View My Work <i class="fas fa-arrow-right"></i>
                </a>
                <a href="/contact.html" class="btn btn-secondary">
                    Get In Touch <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Areas of Expertise -->
    <section>
        <h2>Areas of Expertise</h2>
        <div class="focus-grid">
            <div class="focus-card">
                <i class="fas fa-cube"></i>
                <h3>Digital Twin Technology</h3>
                <p>Developing physics-based digital replicas of aircraft systems for real-time monitoring using MATLAB and Simulink.</p>
            </div>
            
            <div class="focus-card">
                <i class="fas fa-tools"></i>
                <h3>MRO Optimization</h3>
                <p>Streamlining Maintenance, Repair, and Overhaul operations through data analytics and digital transformation.</p>
            </div>
            
            <div class="focus-card">
                <i class="fas fa-shield-alt"></i>
                <h3>Aviation Safety</h3>
                <p>Implementing structural health monitoring systems to enhance aircraft safety and airworthiness compliance.</p>
            </div>
            
            <div class="focus-card">
                <i class="fas fa-brain"></i>
                <h3>Predictive Analytics</h3>
                <p>Leveraging machine learning and data science for predictive maintenance and fault detection systems.</p>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <div class="stats-section">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">3+</div>
                <div class="stat-label">Research Publications</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Commitment to Safety</div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Mohammed Bello Sani</h3>
                <p>Aerospace Engineer specializing in Digital Twin Technology and Aviation Safety.</p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/mohammed-bello-sani" target="_blank" title="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Sm-bello" target="_blank" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:bellosani2drescue@gmail.com" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-section">
                <h3>Quick Links</h3>
                <p><a href="/about.html" style="color: white; text-decoration: none;">About Me</a></p>
                <p><a href="/projects.html" style="color: white; text-decoration: none;">Projects</a></p>
                <p><a href="/contact.html" style="color: white; text-decoration: none;">Contact</a></p>
            </div>
            
            <div class="footer-section">
                <h3>Contact</h3>
                <p><i class="fas fa-envelope"></i> bellosani2drescue@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Kaduna, Nigeria</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 Mohammed Bello Sani. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }
        
        // Add scrolled class to navbar on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>

</body>
</html>
