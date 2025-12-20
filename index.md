<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags - CRITICAL for Google Indexing -->
    <title>Mohammed Bello Sani | Aerospace Engineer | Digital Twin & Predictive Maintenance Expert | MRO Optimization</title>
    <meta name="description" content="Mohammed Bello Sani - Aerospace Engineer specializing in Digital Twin Technology, Predictive Maintenance, Aircraft Structural Health Monitoring, MRO Optimization, Aviation Safety Systems, and AI Applications in Aviation. ICAS 2024 Researcher.">
    <meta name="keywords" content="aerospace engineer, digital twin, predictive maintenance, aircraft maintenance, MRO optimization, aviation safety, structural health monitoring, PHM, prognostics, landing gear, aircraft systems, MATLAB, Simulink, aviation technology, airworthiness, flight operations, aviation management, AI in aviation, machine learning aerospace, condition based maintenance, reliability engineering, aircraft structures, maintenance analytics">
    <meta name="author" content="Mohammed Bello Sani">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph for LinkedIn/Social Sharing -->
    <meta property="og:title" content="Mohammed Bello Sani - Aerospace Engineer & Digital Twin Specialist">
    <meta property="og:description" content="Aerospace Engineer specializing in Digital Twin Technology, Predictive Maintenance, and MRO Optimization for Aviation Safety">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sm-bello.github.io/">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://sm-bello.github.io/">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✈️</text></svg>">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Font Awesome for Icons -->
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
            --success-color: #28a745;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: var(--bg-light);
            overflow-x: hidden;
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
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 30px rgba(0, 0, 0, 0.15);
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
        }
        
        .logo i {
            font-size: 1.8rem;
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
        
        .nav-links a:hover {
            color: var(--primary-color);
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 6rem 2rem 4rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
        }
        
        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }
        
        .hero-content {
            color: white;
            animation: fadeInUp 1s ease;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        
        .hero h1 .highlight {
            background: linear-gradient(120deg, #00a8ff, #00ff88);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            opacity: 0.95;
        }
        
        .hero-description {
            font-size: 1.1rem;
            max-width: 700px;
            margin-bottom: 2rem;
            opacity: 0.9;
            line-height: 1.8;
        }
        
        .hero-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .tag {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
        }
        
        .cta-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background: white;
            color: var(--primary-color);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid white;
            backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
            background: white;
            color: var(--primary-color);
        }
        
        /* Section Styles */
        section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-align: center;
            color: var(--text-dark);
        }
        
        .section-subtitle {
            text-align: center;
            color: var(--text-light);
            font-size: 1.1rem;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* Focus Areas Grid */
        .focus-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .focus-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
        }
        
        .focus-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .focus-icon {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .focus-card h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }
        
        .focus-card p {
            color: var(--text-light);
            line-height: 1.6;
        }
        
        /* Featured Projects */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .project-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .project-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }
        
        .project-content {
            padding: 2rem;
        }
        
        .project-content h3 {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }
        
        .project-content p {
            color: var(--text-light);
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .project-tag {
            background: var(--bg-light);
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.85rem;
            color: var(--primary-color);
            font-weight: 500;
        }
        
        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            transition: gap 0.3s ease;
        }
        
        .project-link:hover {
            gap: 1rem;
        }
        
        /* Stats Section */
        .stats {
            background: white;
            padding: 4rem 2rem;
            margin: 4rem 0;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }
        
        .stat-item h3 {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .stat-item p {
            color: var(--text-light);
            font-size: 1.1rem;
        }
        
        /* Footer */
        footer {
            background: var(--text-dark);
            color: white;
            padding: 3rem 2rem 1rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--accent-color);
        }
        
        .footer-section a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
            color: white;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-links a {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background: var(--accent-color);
            transform: translateY(-3px);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.6);
        }
        
        /* Animations */
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
        
        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                gap: 1rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .projects-grid,
            .focus-grid {
                grid-template-columns: 1fr;
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
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/publications.html">Publications</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1>
                    <span class="highlight">Aerospace Engineer</span><br>
                    Advancing Aviation Safety Through Technology
                </h1>
                <p class="hero-subtitle">Digital Twin Specialist | Predictive Maintenance Expert | MRO Optimization</p>
                <p class="hero-description">
                    I develop intelligent systems at the intersection of aircraft structures, digital twin technology, and predictive maintenance—transforming how the aviation industry approaches safety, reliability, and operational efficiency through data-driven innovation.
                </p>
                <div class="hero-tags">
                    <span class="tag">Digital Twin Technology</span>
                    <span class="tag">Predictive Maintenance</span>
                    <span class="tag">Aviation Safety</span>
                    <span class="tag">MRO Optimization</span>
                    <span class="tag">AI in Aviation</span>
                </div>
                <div class="cta-buttons">
                    <a href="/projects.html" class="btn btn-primary">
                        View My Work <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="/contact.html" class="btn btn-secondary">
                        Get In Touch <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Focus Areas -->
    <section>
        <h2 class="section-title">Areas of Expertise</h2>
        <p class="section-subtitle">
            Specializing in cutting-edge technologies that enhance aircraft safety, optimize maintenance operations, and drive the future of aviation
        </p>
        <div class="focus-grid">
            <div class="focus-card">
                <div class="focus-icon"><i class="fas fa-cube"></i></div>
                <h3>Digital Twin Technology</h3>
                <p>Developing physics-based digital replicas of aircraft systems for real-time monitoring, predictive analysis, and maintenance optimization using MATLAB and Simulink platforms.</p>
            </div>
            <div class="focus-card">
                <div class="focus-icon"><i class="fas fa-chart-line"></i></div>
                <h3>Predictive Maintenance</h3>
                <p>Implementing AI-driven predictive algorithms and condition-based maintenance strategies to reduce unplanned downtime and optimize maintenance schedules for aircraft systems.</p>
            </div>
            <div class="focus-card">
                <div class="focus-icon"><i class="fas fa-tools"></i></div>
                <h3>MRO Optimization</h3>
                <p>Streamlining Maintenance, Repair, and Overhaul operations through digital transformation, data analytics, and intelligent decision-support systems for enhanced operational efficiency.</p>
            </div>
            <div class="focus-card">
                <div class="focus-icon"><i class="fas fa-shield-alt"></i></div>
                <h3>Aviation Safety Systems</h3>
                <p>Advancing aviation safety through structural health monitoring, prognostics and health management (PHM), and airworthiness compliance in aircraft operations.</p>
            </div>
            <div class="focus-card">
                <div class="focus-icon"><i class="fas fa-heartbeat"></i></div>
                <h3>Structural Health Monitoring</h3>
                <p>Designing real-time health monitoring systems for critical aircraft components using sensor data analytics and advanced diagnostic algorithms for early fault detection.</p>
            </div>
            <div class="focus-card">
                <div class="focus-icon"><i class="fas fa-robot"></i></div>
                <h3>AI Applications in Aviation</h3>
                <p>Leveraging machine learning, IoT, and data science to develop intelligent aviation systems that enhance safety, reliability, and operational decision-making.</p>
            </div>
        </div>
    </section>

    <!-- Featured Projects -->
    <section style="background: white; padding: 5rem 2rem; margin: 0;">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
            Cutting-edge research and development work in aviation technology and maintenance systems
        </p>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-plane-departure"></i>
                </div>
                <div class="project-content">
                    <h3>Landing Gear Digital Twin Architecture</h3>
                    <p>Comprehensive digital twin system for landing gear health monitoring, featuring physics-based modeling of impact scenarios, hard-landing detection, and fault injection analysis. Contributed to ICAS 2024 Conference.</p>
                    <div class="project-tags">
                        <span class="project-tag">MATLAB</span>
                        <span class="project-tag">Simulink</span>
                        <span class="project-tag">Digital Twin</span>
                        <span class="project-tag">PHM</span>
                    </div>
                    <a href="/projects.html#landing-gear" class="project-link">
                        View Details <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    <i class="fas fa-database"></i>
                </div>
                <div class="project-content">
                    <h3>Virtual HUMS & CAMP System</h3>
                    <p>Integrated health and usage monitoring system (HUMS) with maintenance analytics pipeline, utilizing real-time data processing, fault detection algorithms, and intelligent maintenance scheduling.</p>
                    <div class="project-tags">
                        <span class="project-tag">PostgreSQL</span>
                        <span class="project-tag">InfluxDB</span>
                        <span class="project-tag">Grafana</span>
                        <span class="project-tag">Analytics</span>
                    </div>
                    <a href="/projects.html#hums-camp" class="project-link">
                        View Details <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <div class="stats">
        <div class="stats-grid">
            <div class="stat-item">
                <h3>2024</h3>
                <p>ICAS Conference Contributor</p>
            </div>
            <div class="stat-item">
                <h3>5+</h3>
                <p>Years Academic Training</p>
            </div>
            <div class="stat-item">
                <h3>3+</h3>
                <p>Major Research Projects</p>
            </div>
            <div class="stat-item">
                <h3>10+</h3>
                <p>Technical Skills</p>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Mohammed Bello Sani</h3>
                <p>Aerospace Engineer specializing in Digital Twin Technology, Predictive Maintenance, and Aviation Safety Systems.</p>
                <div class="social-links">
                    <a href="https://github.com/SMBello" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mohammed-bello-sani-369a89284" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:bellosani2drescue@gmail.com"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="/">Home</a>
                <a href="/about.html">About Me</a>
                <a href="/projects.html">Projects</a>
                <a href="/publications.html">Publications</a>
            </div>
            <div class="footer-section">
                <h3>Expertise</h3>
                <a href="/projects.html">Digital Twin Technology</a>
                <a href="/projects.html">Predictive Maintenance</a>
                <a href="/projects.html">MRO Optimization</a>
                <a href="/projects.html">Aviation Safety</a>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p><i class="fas fa-envelope"></i> bellosani2drescue@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Kaduna, Nigeria</p>
                <p><i class="fas fa-graduation-cap"></i> Air Force Institute of Technology</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Mohammed Bello Sani. All rights reserved. | Aerospace Engineer | Digital Twin Specialist</p>
        </div>
    </footer>

    <script>
        // Navbar scroll effect
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
            anchor.addEventListener('click', function (e) {
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

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.focus-card, .project-card, .stat-item').forEach(el => {
            observer.observe(el);
        });
    </script>
</body>
</html>