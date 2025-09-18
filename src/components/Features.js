import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, MessageCircle, Share2, FolderOpen, Calendar, Play, Pause } from 'lucide-react';
import './Features.css';

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const features = [
    {
      id: 1,
      title: "Match Your Profiles",
      description: "Connect with like-minded individuals based on your interests, skills, and professional background. Our intelligent matching algorithm helps you find the perfect collaborators.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      color: "blue-purple"
    },
    {
      id: 2,
      title: "Group Discussions",
      description: "Engage in meaningful conversations with your team members. Share ideas, brainstorm solutions, and keep everyone aligned with real-time messaging and discussion threads.",
      icon: MessageCircle,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      color: "green-teal"
    },
    {
      id: 3,
      title: "Resource Sharing",
      description: "Easily share documents, links, and resources with your team. Organize everything in one place and ensure everyone has access to the latest information.",
      icon: Share2,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      color: "orange-red"
    },
    {
      id: 4,
      title: "Team Projects",
      description: "Manage your projects efficiently with our collaborative tools. Track progress, assign tasks, and keep your team organized from start to finish.",
      icon: FolderOpen,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      color: "purple-pink"
    },
    {
      id: 5,
      title: "Event Planning",
      description: "Plan and organize events seamlessly. Schedule meetings, send invitations, and coordinate with your team to make every event a success.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      color: "indigo-blue"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextFeature = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevFeature = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToFeature = (index) => {
    if (index !== currentFeature) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentFeature(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentFeatureData = features[currentFeature];
  const IconComponent = currentFeatureData.icon;

  return (
    <section className="features-section">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">Our Features</h2>
          <p className="features-subtitle">
            Discover powerful tools designed to enhance collaboration and productivity
          </p>
          
          {/* Play/Pause Control */}
          <div className="features-controls">
            <button onClick={togglePlay} className="play-pause-btn">
              {isPlaying ? (
                <Pause className="control-icon" />
              ) : (
                <Play className="control-icon" />
              )}
              <span className="control-text">
                {isPlaying ? 'Pause' : 'Play'} Slideshow
              </span>
            </button>
          </div>
        </div>

        {/* Main Feature Display */}
        <div className="feature-display">
          {/* Feature Content */}
          <div className="feature-content">
            {/* Image Section */}
            <div className="feature-image-section">
              <div className={`feature-image-container ${isTransitioning ? 'transitioning' : ''} ${currentFeatureData.color}`}>
                <div className="image-wrapper">
                  <img
                    src={currentFeatureData.image}
                    alt={currentFeatureData.title}
                    className={`feature-image ${isTransitioning ? 'blur' : ''}`}
                  />
                  <div className={`image-overlay ${currentFeatureData.color} ${isTransitioning ? 'transitioning' : ''}`}></div>
                </div>
                
                {/* Animated Overlay */}
                <div className="hover-overlay">
                  <div className="overlay-icon">
                    <IconComponent className="icon" />
                  </div>
                </div>
              </div>
              
              {/* Floating Icon */}
              <div className={`floating-icon ${currentFeatureData.color} ${isTransitioning ? 'transitioning' : ''}`}>
                <IconComponent className="icon" />
                <div className={`pulse-ring ${currentFeatureData.color}`}></div>
              </div>

              {/* Feature Number Badge */}
              <div className="feature-badge">
                <span className="badge-number">{currentFeature + 1}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="feature-text-section">
              <div className={`text-content ${isTransitioning ? 'transitioning' : ''}`}>
                {/* Feature Title */}
                <div className="title-section">
                  <div className={`feature-tag ${currentFeatureData.color}`}>
                    Feature {currentFeature + 1} of {features.length}
                  </div>
                  <h3 className="feature-title">
                    {currentFeatureData.title}
                  </h3>
                </div>
                
                <p className="feature-description">
                  {currentFeatureData.description}
                </p>

                {/* Feature Benefits */}
                <div className="feature-benefits">
                  <div className="benefit-item">
                    <div className={`benefit-dot ${currentFeatureData.color}`}></div>
                    <span className="benefit-text">Easy to use interface</span>
                  </div>
                  <div className="benefit-item">
                    <div className={`benefit-dot ${currentFeatureData.color}`}></div>
                    <span className="benefit-text">Real-time collaboration</span>
                  </div>
                  <div className="benefit-item">
                    <div className={`benefit-dot ${currentFeatureData.color}`}></div>
                    <span className="benefit-text">Secure and reliable</span>
                  </div>
                </div>
              </div>

              {/* Feature Stats */}
              <div className={`feature-stats ${isTransitioning ? 'transitioning' : ''}`}>
                <div className="stat-card">
                  <div className={`stat-number ${currentFeatureData.color}`}>99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
                <div className="stat-card">
                  <div className={`stat-number ${currentFeatureData.color}`}>24/7</div>
                  <div className="stat-label">Support</div>
                </div>
                <div className="stat-card">
                  <div className={`stat-number ${currentFeatureData.color}`}>10k+</div>
                  <div className="stat-label">Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevFeature} className="nav-arrow left-arrow">
            <ChevronLeft className="arrow-icon" />
          </button>

          <button onClick={nextFeature} className="nav-arrow right-arrow">
            <ChevronRight className="arrow-icon" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="dots-navigation">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToFeature(index)}
              className={`dot ${index === currentFeature ? 'active' : ''} ${currentFeatureData.color}`}
            />
          ))}
        </div>

        {/* Feature Thumbnails */}
        <div className="feature-thumbnails">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => goToFeature(index)}
                className={`thumbnail ${index === currentFeature ? 'active' : ''}`}
              >
                <div className={`thumbnail-icon ${feature.color}`}>
                  <FeatureIcon className="icon" />
                </div>
                <h4 className="thumbnail-title">
                  {feature.title}
                </h4>
                <div className={`thumbnail-progress ${index === currentFeature ? 'active' : ''} ${feature.color}`}></div>
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className={`progress-fill ${currentFeatureData.color}`}
              style={{ width: `${((currentFeature + 1) / features.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

// In Features.js
<section id="features" className="features-section">
  {/* The rest of your component's code */}
</section>