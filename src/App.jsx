import "./App.css";

function App() {
  return (
    <div className="aiaf-root">
      {/* Header */}
      <header className="aiaf-header">
        <nav className="aiaf-nav container">
          <div className="aiaf-logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            >
              <rect
                x="4"
                y="8"
                width="24"
                height="16"
                rx="6"
                fill="url(#logo-gradient)"
              />
              <circle cx="10" cy="12" r="2" fill="#fff" />
              <circle cx="22" cy="12" r="2" fill="#fff" />
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="4"
                  y1="8"
                  x2="28"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7f5fff" />
                  <stop offset="1" stopColor="#32cafe" />
                </linearGradient>
              </defs>
            </svg>
            <span>RYZEx AI</span>
          </div>
          <ul className="aiaf-nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#how">How It Works</a>
            </li>
          </ul>
          <a href="#contact" className="aiaf-btn aiaf-btn-cta">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ verticalAlign: "middle", marginRight: "8px" }}
            >
              <rect
                x="3"
                y="3"
                width="14"
                height="14"
                rx="3"
                stroke="#32cafe"
                strokeWidth="2"
              />
              <path
                d="M10 6v4l3 2"
                stroke="#7f5fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Book Free Demo
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="aiaf-hero">
        <div className="container">
          <h1>
            Transform Your Business with{" "}
            <span className="aiaf-gradient">AI Voice Agents</span> That Never
            Sleep
          </h1>
          <p className="aiaf-hero-sub">
            Automate customer interactions, qualify leads 24/7, and book
            appointments while you focus on closing deals.
          </p>
          <div className="aiaf-benefits">
            <div className="aiaf-benefit-card">
              <span className="aiaf-benefit-icon" aria-label="Lead">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle
                    cx="14"
                    cy="14"
                    r="13"
                    stroke="#7f5fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M14 7v7l5 3"
                    stroke="#32cafe"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <strong>Never Miss a Lead</strong>
                <p>24/7 AI agents capture every opportunity</p>
              </div>
            </div>
            <div className="aiaf-benefit-card">
              <span className="aiaf-benefit-icon" aria-label="Lightning">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <polygon
                    points="12,2 4,16 13,16 11,26 24,10 15,10 16,2"
                    fill="#32cafe"
                    stroke="#7f5fff"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <div>
                <strong>Instant Responses</strong>
                <p>Reply in 15 seconds vs hours</p>
              </div>
            </div>
            <div className="aiaf-benefit-card">
              <span className="aiaf-benefit-icon" aria-label="Growth">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect
                    x="4"
                    y="16"
                    width="4"
                    height="8"
                    rx="2"
                    fill="#7f5fff"
                  />
                  <rect
                    x="12"
                    y="10"
                    width="4"
                    height="14"
                    rx="2"
                    fill="#32cafe"
                  />
                  <rect
                    x="20"
                    y="4"
                    width="4"
                    height="20"
                    rx="2"
                    fill="#7f5fff"
                  />
                </svg>
              </span>
              <div>
                <strong>300% Conversion Increase</strong>
                <p>Turn more prospects into customers</p>
              </div>
            </div>
          </div>
          <div className="aiaf-cta-row">
            <a href="#contact" className="aiaf-btn aiaf-btn-primary">
              Get Your AI Demo
            </a>
            <a href="#how" className="aiaf-btn aiaf-btn-secondary">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      

      {/* Services */}
      <section id="services" className="aiaf-services">
        <div className="container">
          <h2 className="aiaf-section-title">Our AI Automation Services</h2>
          <div className="aiaf-services-grid">
            <div className="aiaf-service-card">
              <div className="aiaf-service-icon" aria-label="Voice Agent">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <ellipse cx="18" cy="18" rx="14" ry="14" fill="#7f5fff" />
                  <rect
                    x="12"
                    y="10"
                    width="12"
                    height="16"
                    rx="6"
                    fill="#fff"
                  />
                  <rect
                    x="15"
                    y="14"
                    width="2"
                    height="4"
                    rx="1"
                    fill="#7f5fff"
                  />
                  <rect
                    x="19"
                    y="14"
                    width="2"
                    height="4"
                    rx="1"
                    fill="#7f5fff"
                  />
                </svg>
              </div>
              <h3>AI Voice Agents</h3>
              <p>
                Intelligent voice assistants that handle customer calls, answer
                questions, and qualify prospects with natural conversation.
              </p>
              <ul>
                <li>Natural Language Processing</li>
                <li>Multi-language Support</li>
                <li>CRM Integration</li>
                <li>Call Recording & Analysis</li>
                <li>Intelligent Call Routing</li>
              </ul>
              <a href="#contact" className="aiaf-btn aiaf-btn-primary">
                Learn More
              </a>
            </div>
            <div className="aiaf-service-card">
              <div className="aiaf-service-icon" aria-label="Lead Gen">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="14" fill="#32cafe" />
                  <path d="M10 26l16-16" stroke="#fff" strokeWidth="2" />
                  <circle cx="26" cy="10" r="3" fill="#fff" />
                  <circle cx="10" cy="26" r="3" fill="#fff" />
                </svg>
              </div>
              <h3>Lead Generation Agents</h3>
              <p>
                Automated systems that identify, engage, and nurture prospects
                across multiple channels.
              </p>
              <ul>
                <li>Multi-channel Outreach</li>
                <li>Lead Scoring & Qualification</li>
                <li>Personalized Messaging</li>
                <li>A/B Testing</li>
                <li>Real-time Analytics</li>
              </ul>
              <a href="#contact" className="aiaf-btn aiaf-btn-primary">
                Get Started
              </a>
            </div>
            <div className="aiaf-service-card">
              <div className="aiaf-service-icon" aria-label="Calendar">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect
                    x="6"
                    y="10"
                    width="24"
                    height="18"
                    rx="4"
                    fill="#7f5fff"
                  />
                  <rect x="10" y="16" width="8" height="4" rx="2" fill="#fff" />
                  <rect x="20" y="16" width="6" height="4" rx="2" fill="#fff" />
                </svg>
              </div>
              <h3>Appointment Booking</h3>
              <p>
                Seamless scheduling automation that converts conversations into
                confirmed appointments.
              </p>
              <ul>
                <li>Calendar Integration</li>
                <li>Automated Reminders</li>
                <li>Rescheduling Management</li>
                <li>Time Zone Detection</li>
                <li>No-show Prevention</li>
              </ul>
              <a href="#contact" className="aiaf-btn aiaf-btn-primary">
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="aiaf-how">
        <div className="container">
          <h2 className="aiaf-section-title">
            From Setup to Success in 3 Simple Steps
          </h2>
          <div className="aiaf-steps">
            <div className="aiaf-step-card">
              <div className="aiaf-step-num">1</div>
              <h3>Discovery & Strategy</h3>
              <p>
                Free consultation to understand your business needs, target
                audience, and current processes. We analyze your customer
                journey and identify optimization opportunities.
              </p>
            </div>
            <div className="aiaf-step-card">
              <div className="aiaf-step-num">2</div>
              <h3>Custom AI Development</h3>
              <p>
                We build and train your personalized AI agents with your brand
                voice, integrate with your existing systems, and test everything
                thoroughly.
              </p>
            </div>
            <div className="aiaf-step-card">
              <div className="aiaf-step-num">3</div>
              <h3>Launch & Optimize</h3>
              <p>
                Deploy your AI agents and continuously monitor performance. We
                provide ongoing optimization and scaling recommendations based
                on real data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="aiaf-final-cta">
        <div className="container">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>
            Join hundreds of businesses already using AI to automate their
            customer interactions and boost sales.
          </p>
          <div className="aiaf-guarantees">
            <div className="aiaf-guarantee">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="#7f5fff"
                  strokeWidth="2"
                />
                <path
                  d="M6 10l2.5 2.5L14 7"
                  stroke="#32cafe"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              14-Day Money Back Guarantee
            </div>
            <div className="aiaf-guarantee">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              >
                <rect
                  x="3"
                  y="7"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="#32cafe"
                  strokeWidth="2"
                />
                <path
                  d="M7 7V5a3 3 0 0 1 6 0v2"
                  stroke="#7f5fff"
                  strokeWidth="2"
                />
              </svg>
              No Setup Fees
            </div>
            <div className="aiaf-guarantee">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              >
                <rect
                  x="3"
                  y="3"
                  width="14"
                  height="14"
                  rx="3"
                  stroke="#7f5fff"
                  strokeWidth="2"
                />
                <path
                  d="M10 6v4l3 2"
                  stroke="#32cafe"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Free Strategy Call
            </div>
          </div>
          <div className="aiaf-cta-row">
            <a href="#contact" className="aiaf-btn aiaf-btn-primary">
              Book Your Free Strategy Call
            </a>
            <a href="#contact" className="aiaf-btn aiaf-btn-secondary">
              Start 14-Day Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="aiaf-footer">
        <div className="container">
          <div className="aiaf-footer-content">
            <div className="aiaf-footer-section">
              <h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                >
                  <rect
                    x="4"
                    y="8"
                    width="24"
                    height="16"
                    rx="6"
                    fill="url(#footer-logo-gradient)"
                  />
                  <circle cx="10" cy="12" r="2" fill="#fff" />
                  <circle cx="22" cy="12" r="2" fill="#fff" />
                  <defs>
                    <linearGradient
                      id="footer-logo-gradient"
                      x1="4"
                      y1="8"
                      x2="28"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7f5fff" />
                      <stop offset="1" stopColor="#32cafe" />
                    </linearGradient>
                  </defs>
                </svg>
                RYZEx AI
              </h3>
              <p>
                Transform your business with AI automation that works 24/7 to
                capture leads and book appointments.
              </p>
              <p>
                <strong>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ verticalAlign: "middle", marginRight: "6px" }}
                  >
                    <rect
                      x="2"
                      y="6"
                      width="14"
                      height="8"
                      rx="2"
                      stroke="#7f5fff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 6V4a3 3 0 0 1 6 0v2"
                      stroke="#32cafe"
                      strokeWidth="1.5"
                    />
                  </svg>
                  +91-8688607055
                </strong>
              </p>
              <p>
                <strong>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ verticalAlign: "middle", marginRight: "6px" }}
                  >
                    <rect
                      x="3"
                      y="3"
                      width="12"
                      height="12"
                      rx="3"
                      stroke="#32cafe"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 6v3l2 1"
                      stroke="#7f5fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  karthik4.8877@gmail.com
                </strong>
              </p>
            </div>
            <div className="aiaf-footer-section">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#services">AI Voice Agents</a>
                </li>
                <li>
                  <a href="#services">Lead Generation</a>
                </li>
                <li>
                  <a href="#services">Appointment Booking</a>
                </li>
              </ul>
            </div>
            <div className="aiaf-footer-section">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#how">How It Works</a>
                </li>
                <li>
                  <a href="#testimonials">Case Studies</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#contact">Free Consultation</a>
                </li>
              </ul>
            </div>
            <div className="aiaf-footer-section">
              <h3>Get Started</h3>
              <p>Ready to automate your business?</p>
              <p>Contact us today to schedule a free demo.</p>
              <p>We’ll get back to you within 24 hours.</p>
            </div>
          </div>
          <div className="aiaf-footer-bottom">
            <p>
              &copy; 2025 RYZEx AI. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
