import React, { useState } from 'react';
import { Eye, ArrowRight, Play, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'events', label: 'Events', count: 8 },
    { id: 'films', label: 'Films', count: 6 },
    { id: 'branding', label: 'Branding', count: 5 },
    { id: 'digital', label: 'Digital Marketing', count: 5 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Annual Summit 2024",
      category: "events",
      type: "Corporate Event",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      description: "A spectacular corporate event featuring cutting-edge stage design, interactive displays, and seamless live streaming for 2000+ attendees.",
      client: "TechCorp Industries",
      year: "2024",
      award: "Best Corporate Event 2024"
    },
    {
      id: 2,
      title: "Sustainable Future Documentary",
      category: "films",
      type: "Documentary Film",
      image: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg",
      description: "An award-winning documentary exploring sustainable technology solutions, featuring cinematic storytelling and compelling interviews.",
      client: "Green Earth Foundation",
      year: "2024",
      award: "Environmental Film Award"
    },
    {
      id: 3,
      title: "EcoLife Brand Identity",
      category: "branding",
      type: "Brand Development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      description: "Complete brand identity design for sustainable lifestyle brand, including logo, packaging, and comprehensive brand guidelines.",
      client: "EcoLife Products",
      year: "2024",
      award: null
    },
    {
      id: 4,
      title: "FitnessPro Digital Campaign",
      category: "digital",
      type: "Digital Marketing",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description: "Comprehensive digital marketing campaign that increased brand awareness by 300% and generated 5x ROI for fitness brand.",
      client: "FitnessPro Gym",
      year: "2024",
      award: null
    },
    {
      id: 5,
      title: "Innovation Conference 2024",
      category: "events",
      type: "Conference Production",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
      description: "Multi-day innovation conference with immersive experiences, keynote productions, and networking events for industry leaders.",
      client: "Innovation Hub",
      year: "2024",
      award: null
    },
    {
      id: 6,
      title: "Luxury Watch Commercial",
      category: "films",
      type: "Commercial Production",
      image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg",
      description: "High-end commercial production featuring luxury watches with cinematic cinematography and premium post-production.",
      client: "Prestige Timepieces",
      year: "2023",
      award: "Best Commercial 2023"
    },
    {
      id: 7,
      title: "StartupHub Visual Identity",
      category: "branding",
      type: "Visual Identity",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description: "Modern visual identity system for tech startup incubator, including digital assets and brand strategy implementation.",
      client: "StartupHub Accelerator",
      year: "2023",
      award: null
    },
    {
      id: 8,
      title: "FoodieApp Launch Campaign",
      category: "digital",
      type: "App Launch Marketing",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      description: "Multi-platform launch campaign for food delivery app, achieving 100k downloads in first month through strategic digital marketing.",
      client: "FoodieApp Inc",
      year: "2023",
      award: null
    },
    {
      id: 9,
      title: "Music Festival Experience",
      category: "events",
      type: "Entertainment Event",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      description: "Immersive music festival production with interactive installations, stage design, and audience engagement experiences.",
      client: "Summer Beats Festival",
      year: "2023",
      award: "Best Festival Production"
    },
    {
      id: 10,
      title: "Healthcare Heroes Documentary",
      category: "films",
      type: "Documentary Series",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      description: "Inspiring documentary series highlighting healthcare workers during challenging times, featuring emotional storytelling.",
      client: "Medical Association",
      year: "2023",
      award: "Humanitarian Award"
    },
    {
      id: 11,
      title: "Fashion Week Runway Show",
      category: "events",
      type: "Fashion Event",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
      description: "Glamorous fashion week runway show with dramatic lighting, professional photography, and live streaming coverage.",
      client: "Fashion Forward",
      year: "2023",
      award: null
    },
    {
      id: 12,
      title: "Tech Startup Rebrand",
      category: "branding",
      type: "Brand Redesign",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description: "Complete brand transformation for growing tech startup, including new logo, website, and marketing materials.",
      client: "InnovateTech",
      year: "2023",
      award: null
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      quote: "Media Factory didn't just meet our expectations—they completely transformed our vision into reality. Their creativity and professionalism made our event absolutely unforgettable.",
      author: "Jennifer Davis",
      position: "CEO, Innovation Corp",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
    },
    {
      quote: "The film production quality was outstanding. Every detail was perfect, and the final result exceeded what we had imagined for our brand campaign.",
      author: "Michael Rodriguez",
      position: "Marketing Director, TechCorp",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Explore our showcase of creative excellence - from spectacular events and compelling films to innovative digital campaigns and memorable brand identities that drive real results.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg shadow-yellow-400/25'
                    : 'glass text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group relative glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden image-overlay">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Award Winner
                    </div>
                  )}
                  
                  {/* View Button */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4">
                      <Eye className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  
                  {/* Project Type */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gray-900/80 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">{project.client}</span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.award && (
                    <div className="flex items-center text-yellow-400 text-sm font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      {project.award}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slideInLeft">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                1000+
              </div>
              <div className="text-gray-400 text-xl">Projects Completed</div>
            </div>
            <div className="text-center animate-slideInLeft" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                500+
              </div>
              <div className="text-gray-400 text-xl">Happy Clients</div>
            </div>
            <div className="text-center animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                50+
              </div>
              <div className="text-gray-400 text-xl">Awards Won</div>
            </div>
            <div className="text-center animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                14
              </div>
              <div className="text-gray-400 text-xl">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass rounded-3xl p-10 hover:bg-gray-700/50 transition-all duration-300 animate-slideInLeft" style={{animationDelay: `${index * 0.2}s`}}>
                <blockquote className="text-2xl font-light text-white mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-6"
                  />
                  <div>
                    <div className="font-bold text-white text-xl">{testimonial.author}</div>
                    <div className="text-gray-400 text-lg">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
              Highlighting some of our most impactful and award-winning projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="relative image-overlay rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                  alt="Featured project"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4 inline-flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Best Corporate Event 2024
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slideInRight">
              <h3 className="text-4xl font-bold text-white mb-6">TechCorp Annual Summit 2024</h3>
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
                Our most ambitious corporate event production to date, featuring cutting-edge technology, 
                immersive experiences, and seamless execution for over 2,000 attendees. This project 
                showcased our ability to handle large-scale events with precision and creativity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "2,000+ attendees across 3 days",
                  "Live streaming to 50,000+ viewers",
                  "15 interactive technology stations",
                  "Award-winning stage design"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
              >
                Discuss Your Event
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Create Your 
            <span className="gradient-text"> Next Project?</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Let's collaborate to bring your vision to life with the same level of excellence and creativity showcased in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-full font-bold text-2xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
            >
              Start Your Project
              <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-12 py-6 rounded-full font-bold text-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;