<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Projects | Mohammed Bello Sani | Digital Twin Landing Gear | Predictive Maintenance Systems | Aviation Projects</title>
    <meta name="description" content="Explore Mohammed Bello Sani's aerospace engineering projects: Landing Gear Digital Twin Architecture (ICAS 2024), Virtual HUMS & CAMP Systems, Predictive Maintenance Solutions, Aircraft Structural Health Monitoring, and MRO optimization technologies.">
    <meta name="keywords" content="landing gear digital twin, aircraft predictive maintenance, HUMS system, CAMP system, aviation projects, aerospace engineering portfolio, structural health monitoring projects, MRO optimization, aircraft maintenance systems, MATLAB Simulink projects, aviation safety projects">
    
    <link rel="canonical" href="https://sm-bello.github.io/projects.html">
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
        
        /* Navigation */
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
        
        /* Page Hero */
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
        
        /* Filter Tabs */
        .filter-section {
            max-width: 1200px;
            margin: 3rem auto 0;
            padding: 0 2rem;
        }
        
        .filter-tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
        }
        
        .filter-btn {
            padding: 0.8rem 1.5rem;
            border: 2px solid var(--primary-color);
            background: white;
            color: var(--primary-color);
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
            background: var(--primary-color);
            color: white;
        }
        
        /* Projects Grid */
        .projects-container {
            max-width: 1200px;
            margin: 0 auto 4rem;
            padding: 0 2rem;
        }
        
        .project-detailed {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 4rem;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            scroll-margin-top: 100px;
        }
        
        .project-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        
        .project-header.alt {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .project-header.coming-soon {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .project-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }
        
        .project-header h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .project-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }
        
        .meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            opacity: 0.95;
        }
        
        .project-body {
            padding: 3rem 2rem;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-bottom: 2rem;
        }
        
        .tag {
            background: var(--bg-light);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .project-description {
            color: var(--text-light);
            line-height: 1.8;
            margin-bottom: 2rem;
        }
        
        .project-features {
            margin: 2rem 0;
        }
        
        .project-features h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            background: var(--bg-light);
            border-radius: 8px;
        }
        
        .feature-icon {
            font-size: 1.5rem;
            color: var(--primary-color);
        }
        
        .feature-content h4 {
            margin-bottom: 0.3rem;
        }
        
        .feature-content p {
            color: var(--text-light);
            font-size: 0.9rem;
        }
        
        .project-impact {
            background: var(--bg-light);
            padding: 2rem;
            border-radius: 8px;
            border-left: 4px solid var(--primary-color);
            margin: 2rem 0;
        }
        
        .project-impact h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .impact-list {
            list-style: none;
        }
        
        .impact-list li {
            display: flex;
            align-items: start;
            gap: 0.8rem;
            margin-bottom: 0.8rem;
            color: var(--text-light);
        }
        
        .impact-list li i {
            color: var(--primary-color);
            margin-top: 0.2rem;
        }
        
        /* Coming Soon Projects */
        .coming-soon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .coming-soon-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            text-align: center;
            border: 2px dashed var(--border-color);
            transition: all 0.3s ease;
        }
        
        .coming-soon-card:hover {
            border-color: var(--primary-color);
            transform: translateY(-5px);
        }
        
        .coming-soon-icon {
            font-size: 3rem;
            color: var(--text-light);
            margin-bottom: 1rem;
        }
        
        .coming-soon-card h3 {
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        
        .coming-soon-card p {
            color: var(--text-light);
        }
        
        .status-badge {
            display: inline-block;
            background: var(--accent-color);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.85rem;
            margin-top: 1rem;
        }
        
        /* Footer */
        footer {
            background: var(--text-dark);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        
        footer a {
            color: var(--accent-color);
            text-decoration: none;
        }
        
        @media (max-width: 768px) {
            .page-hero h1 {
                font-size: 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .coming-soon-grid {
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
        <h1>Research & Development Projects</h1>
        <p>Innovative solutions for aviation safety, predictive maintenance, and digital transformation in aerospace engineering</p>
    </section>

    <!-- Filter Section -->
    <div class="filter-section">
        <div class="filter-tabs">
            <button class="filter-btn active" onclick="filterProjects('all')">All Projects</button>
            <button class="filter-btn" onclick="filterProjects('completed')">Completed</button>
            <button class="filter-btn" onclick="filterProjects('ongoing')">Ongoing</button>
            <button class="filter-btn" onclick="filterProjects('upcoming')">Coming Soon</button>
        </div>
    </div>

    <!-- Projects Container -->
    <div class="projects-container">
        
        <!-- Project 1: Landing Gear Digital Twin -->
        <article class="project-detailed" id="landing-gear" data-category="completed">
            <div class="project-header">
                <div class="project-icon">
                    <i class="fas fa-plane-departure"></i>
                </div>
                <h2>Landing Gear Digital Twin Architecture</h2>
                <p>Physics-based Digital Modeling for Predictive Maintenance & Structural Health Monitoring</p>
                <div class="project-meta">
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>2023 - 2024</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-award"></i>
                        <span>ICAS 2024 Conference</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Completed</span>
                    </div>
                </div>
            </div>
            
            <div class="project-body">
                <div class="project-tags">
                    <span class="tag">Digital Twin</span>
                    <span class="tag">MATLAB</span>
                    <span class="tag">Simulink</span>
                    <span class="tag">Predictive Maintenance</span>
                    <span class="tag">Structural Health Monitoring</span>
                    <span class="tag">Landing Gear Systems</span>
                </div>
                
                <div class="project-description">
                    <p>
                        This flagship research project develops a comprehensive Digital Twin architecture for aircraft landing gear systems, enabling real-time structural health monitoring and predictive maintenance capabilities. The system integrates physics-based modeling with sensor data analytics to create a virtual representation that mirrors the physical behavior of landing gear components under various operational conditions.
                    </p>
                    <p>
                        The architecture includes sophisticated modeling of landing impact scenarios, including normal landings, hard-landing events, and fault injection simulations. By analyzing structural response patterns and maintenance implications, this system provides actionable insights for maintenance engineers, enabling proactive decision-making that enhances safety while optimizing maintenance schedules and reducing operational costs.
                    </p>
                    <p>
                        This work was contributed to the ICAS 2024 (International Council of the Aeronautical Sciences) Conference, representing cutting-edge research in aviation maintenance technology and digital transformation.
                    </p>
                </div>
                
                <div class="project-features">
                    <h3>Key Features & Capabilities</h3>
                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-cubes"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Physics-Based Modeling</h4>
                                <p>Accurate simulation of landing gear structural behavior using advanced engineering principles</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Hard-Landing Detection</h4>
                                <p>Automated identification of excessive impact loads that may compromise structural integrity</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-bug"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Fault Injection Analysis</h4>
                                <p>Simulation of component failures to study failure modes and maintenance implications</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Predictive Analytics</h4>
                                <p>Data-driven algorithms for forecasting maintenance needs and remaining useful life</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-heartbeat"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Real-Time Monitoring</h4>
                                <p>Continuous health assessment through virtual sensor integration and data processing</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-tools"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Maintenance Optimization</h4>
                                <p>Intelligent scheduling recommendations based on actual component condition data</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-impact">
                    <h3><i class="fas fa-rocket"></i> Impact & Applications</h3>
                    <ul class="impact-list">
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Enables transition from time-based to condition-based maintenance strategies, reducing unnecessary inspections</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Enhances aviation safety through early detection of structural anomalies and potential failures</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Reduces maintenance costs by optimizing component replacement timing based on actual condition</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Provides valuable data for airworthiness compliance and regulatory reporting</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Demonstrates scalable architecture applicable to other critical aircraft systems</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        <!-- Project 2: Virtual HUMS & CAMP -->
        <article class="project-detailed" id="hums-camp" data-category="completed">
            <div class="project-header alt">
                <div class="project-icon">
                    <i class="fas fa-database"></i>
                </div>
                <h2>Virtual HUMS & CAMP System</h2>
                <p>Integrated Health Monitoring & Maintenance Analytics Platform</p>
                <div class="project-meta">
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>2023 - 2024</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Completed</span>
                    </div>
                </div>
            </div>
            
            <div class="project-body">
                <div class="project-tags">
                    <span class="tag">HUMS</span>
                    <span class="tag">CAMP</span>
                    <span class="tag">PostgreSQL</span>
                    <span class="tag">InfluxDB</span>
                    <span class="tag">Telegraf</span>
                    <span class="tag">Grafana</span>
                    <span class="tag">Data Analytics</span>
                </div>
                
                <div class="project-description">
                    <p>
                        Development of a comprehensive virtual Health and Usage Monitoring System (HUMS) integrated with a Continuing Analysis and Maintenance Program (CAMP) platform. This system provides real-time aircraft health monitoring, automated fault detection, and intelligent maintenance scheduling capabilities for aviation operators.
                    </p>
                    <p>
                        The architecture leverages modern data engineering practices, combining time-series databases for sensor data management with relational databases for maintenance records. Advanced analytics pipelines process operational data in real-time, generating actionable insights for maintenance teams while ensuring compliance with aviation safety regulations.
                    </p>
                    <p>
                        This platform demonstrates how digital transformation technologies can modernize aviation maintenance operations, providing operators with a unified view of fleet health and enabling data-driven maintenance decisions that enhance both safety and operational efficiency.
                    </p>
                </div>
                
                <div class="project-features">
                    <h3>System Architecture & Components</h3>
                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-server"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Data Infrastructure</h4>
                                <p>Hybrid database architecture combining PostgreSQL and InfluxDB for optimal performance</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-stream"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Real-Time Processing</h4>
                                <p>Telegraf-based data collection and processing pipeline for live operational monitoring</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-chart-area"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Visualization Dashboards</h4>
                                <p>Grafana-powered interactive dashboards for intuitive health monitoring and trend analysis</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Automated Alerting</h4>
                                <p>Intelligent alert system for critical events and threshold violations</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Maintenance Tracking</h4>
                                <p>Comprehensive logging of maintenance activities and compliance records</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-brain"></i>
                            </div>
                            <div class="feature-content">
                                <h4>Analytics Engine</h4>
                                <p>Advanced algorithms for fault detection, diagnosis, and prognosis</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-impact">
                    <h3><i class="fas fa-rocket"></i> Benefits & Applications</h3>
                    <ul class="impact-list">
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Centralizes aircraft health data from multiple sources into unified monitoring platform</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Automates fault detection reducing manual inspection workload and human error</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Enables predictive maintenance scheduling based on actual component condition trends</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Improves regulatory compliance through automated documentation and audit trails</span>
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>Provides fleet-wide visibility for operators managing multiple aircraft</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        <!-- Coming Soon Section -->
        <section class="project-detailed" data-category="upcoming">
            <div class="project-header coming-soon">
                <div class="project-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h2>Upcoming Projects & Research</h2>
                <p>Exciting new developments in aviation technology and maintenance innovation</p>
            </div>
            
            <div class="project-body">
                <p style="text-align: center; color: var(--text-light); margin-bottom: 3rem;">
                    These are placeholder sections ready for your flagship projects. As you complete new research and development work, simply add your content here following the same structure as the completed projects above.
                </p>
                
                <div class="coming-soon-grid">
                    <div class="coming-soon-card">
                        <div class="coming-soon-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3>AI-Powered Maintenance Scheduling</h3>
                        <p>Machine learning algorithms for optimizing maintenance resource allocation and minimizing aircraft downtime</p>
                        <span class="status-badge">Coming Soon</span>
                    </div>
                    
                    <div class="coming-soon-card">
                        <div class="coming-soon-icon">
                            <i class="fas fa-network-wired"></i>
                        </div>
                        <h3>IoT Sensor Network Integration</h3>
                        <p>Wireless sensor deployment for comprehensive structural health monitoring across aircraft systems</p>
                        <span class="status-badge">Coming Soon</span>
                    </div>
                    
                    <div class="coming-soon-card">
                        <div class="coming-soon-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3>Aviation Safety Analytics Platform</h3>
                        <p>Big data analytics for safety trend analysis and proactive risk management in aviation operations</p>
                        <span class="status-badge">Coming Soon</span>
                    </div>
                    
                    <div class="coming-soon-card">
                        <div class="coming-soon-icon">
                            <i class="fas fa-atom"></i>
                        </div>
                        <h3>Advanced Materials Research</h3>
                        <p>Investigation of composite materials and their application in next-generation aircraft structures</p>
                        <span class="status-badge">Coming Soon</span>
                    </div>
                    
                    <div class="coming-soon-card">
                        <div class="coming-soon-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Mobile Maintenance Assistant</h3>
                        <p>AR-powered mobile application for maintenance technicians with real-time guidance and diagnostics</p>
                        <span class="status-badge">Coming Soon</span>
                    </div>
                    
                    <div class="coming-soon-card">
                        <div class="coming-soon-icon">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h3>Your Next Flagship Project</h3>
                        <p>This space is reserved for your upcoming research work. Simply replace this placeholder when ready!</p>
                        <span class="status-badge">Awaiting Content</span>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Mohammed Bello Sani | Aerospace Engineer | <a href="/contact.html">Get in Touch</a></p>
    </footer>

    <script>
        // Smooth scroll for navigation
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

        // Project filtering
        function filterProjects(category) {
            const projects = document.querySelectorAll('.project-detailed');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter projects
            projects.forEach(project => {
                if (category === 'all') {
                    project.style.display = 'block';
                } else {
                    if (project.dataset.category === category) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        }

        // Animate on scroll
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.project-detailed').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
