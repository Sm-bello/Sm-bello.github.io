<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>About Mohammed Bello Sani | Aerospace Engineer | Digital Twin Expert | Aviation Safety Researcher</title>
    <meta name="description" content="Learn about Mohammed Bello Sani's journey in aerospace engineering, specializing in digital twin technology, predictive maintenance, MRO optimization, and aviation safety systems. AFIT Kaduna graduate and ICAS 2024 researcher.">
    <meta name="keywords" content="aerospace engineer bio, digital twin specialist, aviation safety expert, MRO optimization engineer, predictive maintenance researcher, aircraft systems engineer, AFIT Kaduna, aviation management">
    
    <link rel="canonical" href="https://sm-bello.github.io/about.html">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
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
        
        /* Navigation - Same as homepage */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
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
        }
        
        .nav-links a:hover {
            color: var(--primary-color);
        }
        
        /* Hero Section */
        .page-hero {
            padding: 8rem 2rem 4rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        
        .page-hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .page-hero p {
            font-size: 1.2rem;
            opacity: 0.95;
            max-width: 700px;
            margin: 0 auto;
        }
        
        /* Main Content */
        .about-content {
            max-width: 1200px;
            margin: -3rem auto 4rem;
            padding: 0 2rem;
        }
        
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
            background: white;
            border-radius: 12px;
            padding: 3rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        
        .profile-sidebar {
            text-align: center;
        }
        
        .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            font-size: 5rem;
            color: white;
        }
        
        .profile-info h2 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .profile-info p {
            color: var(--text-light);
            margin-bottom: 1rem;
        }
        
        .profile-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .profile-links a {
            width: 45px;
            height: 45px;
            background: var(--bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: var(--primary-color);
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .profile-links a:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-3px);
        }
        
        .bio-content h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        
        .bio-content p {
            color: var(--text-light);
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }
        
        .highlight-box {
            background: var(--bg-light);
            border-left: 4px solid var(--primary-color);
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        
        .highlight-box h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        /* Skills Section */
        .skills-section {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .skill-category {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .skill-category h4 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .skill-list {
            list-style: none;
        }
        
        .skill-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
        }
        
        .skill-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        .skill-name {
            font-weight: 500;
        }
        
        .skill-level {
            font-size: 0.9rem;
            color: var(--primary-color);
        }
        
        /* Education Timeline */
        .timeline-section {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        
        .timeline {
            position: relative;
            padding: 2rem 0;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 30px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--primary-color);
        }
        
        .timeline-item {
            position: relative;
            padding-left: 80px;
            margin-bottom: 3rem;
        }
        
        .timeline-icon {
            position: absolute;
            left: 14px;
            width: 34px;
            height: 34px;
            background: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .timeline-content {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .timeline-content h4 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }
        
        .timeline-content .institution {
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .timeline-content .date {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        /* Footer */
        footer {
            background: var(--text-dark);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        
        @media (max-width: 768px) {
            .about-grid {
                grid-template-columns: 1fr;
            }
            
            .page-hero h1 {
                font-size: 2rem;
            }
            
            .skills-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
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

    <!-- Page Hero -->
    <section class="page-hero">
        <h1>About Me</h1>
        <p>Dedicated aerospace engineer passionate about transforming aviation safety and maintenance through innovative digital technologies</p>
    </section>

    <!-- Main Content -->
    <div class="about-content">
        <div class="about-grid">
            <div class="profile-sidebar">
                <div class="profile-image">
                    <i class="fas fa-user-tie"></i>
                </div>
                <div class="profile-info">
                    <h2>Mohammed Bello Sani</h2>
                    <p>Aerospace Engineer</p>
                    <p><i class="fas fa-map-marker-alt"></i> Kaduna, Nigeria</p>
                    <p><i class="fas fa-graduation-cap"></i> AFIT Kaduna</p>
                    <div class="profile-links">
                        <a href="https://github.com/SMBello" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/mohammed-bello-sani-369a89284" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="mailto:bellosani2drescue@gmail.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="bio-content">
                <h3>Building the Future of Aviation Safety</h3>
                <p>
                    I am an aerospace engineering graduate from the Air Force Institute of Technology (AFIT) Kaduna, dedicated to advancing aviation safety through the strategic application of emerging technologies in aircraft structures and airworthiness systems. My passion lies at the convergence of traditional aerospace engineering and digital innovation—where physics-based analysis meets data-driven intelligence.
                </p>
                
                <p>
                    My work focuses on developing intelligent systems for aircraft health monitoring and predictive maintenance. Through my research in Digital Twin technology, I explore how virtual representations of physical aircraft systems can revolutionize maintenance strategies, reduce operational costs, and enhance safety margins in aviation operations.
                </p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> Research Philosophy</h4>
                    <p>
                        I believe the future of aviation safety lies in proactive, data-driven maintenance strategies. By integrating Digital Twin technology, machine learning algorithms, and structural health monitoring systems, we can transform reactive maintenance cultures into predictive, intelligent operations that prevent failures before they occur.
                    </p>
                </div>
                
                <h3>Professional Journey</h3>
                <p>
                    My academic journey at AFIT Kaduna provided me with a comprehensive foundation in aerospace principles, from aerodynamics and flight mechanics to aircraft structures and propulsion systems. However, it was during my advanced studies in aircraft maintenance engineering that I discovered my true calling: the intersection of MRO (Maintenance, Repair, and Overhaul) optimization and digital technologies.
                </p>
                
                <p>
                    My contribution to the ICAS 2024 Conference paper on Landing Gear Digital Twin Architecture represents a significant milestone in my research journey. This work demonstrates how physics-based modeling combined with sensor data analytics can create comprehensive health monitoring systems for critical aircraft components, enabling predictive maintenance strategies that enhance both safety and operational efficiency.
                </p>
                
                <h3>Vision & Goals</h3>
                <p>
                    I aspire to pursue postgraduate studies in Aviation Management and Safety Systems, with the ultimate goal of contributing to safer, more efficient, and technology-driven air transport operations. I am particularly motivated to explore how emerging technologies—including AI, IoT, and advanced analytics—can improve aircraft maintenance practices, enhance operational reliability, and ensure regulatory compliance in an increasingly complex aviation environment.
                </p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-target"></i> Career Objectives</h4>
                    <p>
                        To become a leading expert in aviation maintenance systems and digital transformation, bridging the gap between aerospace engineering and data science to create next-generation solutions for aircraft health monitoring, predictive maintenance, and MRO optimization across the global aviation industry.
                    </p>
                </div>
                
                <p>
                    I am actively seeking collaboration opportunities, research partnerships, and professional connections within the aviation and aerospace community. Whether you're working on innovative maintenance solutions, safety technologies, or digital transformation initiatives in aviation, I'd love to connect and explore potential synergies.
                </p>
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <section class="skills-section">
        <h2 class="section-title">Technical Expertise</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h4><i class="fas fa-cube"></i> Digital Technologies</h4>
                <ul class="skill-list">
                    <li class="skill-item">
                        <span class="skill-name">Digital Twin Development</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Predictive Maintenance</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Machine Learning</span>
                        <span class="skill-level">Intermediate</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Data Analytics</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h4><i class="fas fa-plane"></i> Aerospace Engineering</h4>
                <ul class="skill-list">
                    <li class="skill-item">
                        <span class="skill-name">Aircraft Structures</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Structural Analysis</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Airworthiness Systems</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Flight Operations</span>
                        <span class="skill-level">Intermediate</span>
                    </li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h4><i class="fas fa-tools"></i> Technical Tools</h4>
                <ul class="skill-list">
                    <li class="skill-item">
                        <span class="skill-name">MATLAB/Simulink</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Python</span>
                        <span class="skill-level">Intermediate</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">CATIA</span>
                        <span class="skill-level">Intermediate</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Database Systems</span>
                        <span class="skill-level">Intermediate</span>
                    </li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h4><i class="fas fa-shield-alt"></i> Aviation Safety</h4>
                <ul class="skill-list">
                    <li class="skill-item">
                        <span class="skill-name">MRO Optimization</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Safety Management Systems</span>
                        <span class="skill-level">Intermediate</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Reliability Engineering</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                    <li class="skill-item">
                        <span class="skill-name">Health Monitoring</span>
                        <span class="skill-level">Advanced</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Education Timeline -->
    <section class="timeline-section">
        <h2 class="section-title">Education & Training</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="timeline-content">
                    <h4>Bachelor of Engineering in Aerospace Engineering</h4>
                    <p class="institution">Air Force Institute of Technology (AFIT), Kaduna</p>
                    <p class="date">2019 - 2024 (Expected)</p>
                    <p>Comprehensive aerospace engineering program covering aerodynamics, aircraft structures, propulsion systems, flight mechanics, and advanced maintenance engineering. Specialized in Digital Twin technology and predictive maintenance systems for aircraft applications.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <div class="timeline-content">
                    <h4>Research Contribution - ICAS 2024</h4>
                    <p class="institution">International Council of the Aeronautical Sciences</p>
                    <p class="date">2024</p>
                    <p>Contributed to conference paper on "Landing Gear Digital Twin Architecture" focusing on physics-based modeling for predictive maintenance and structural health monitoring applications.</p>
                </div>