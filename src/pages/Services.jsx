import React from 'react';
import { Camera, Megaphone, Palette, Film, Users, Printer, ArrowRight, CheckCircle, Play, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';


const Services = () => {
  const services = [
    {
      
      title: "Event Production",
      description: "Complete event planning and production services for corporate events, conferences, product launches, and entertainment shows with cutting-edge technology.",
      features: ["Event Planning & Design", "Audio/Visual Production", "Stage Design & Setup", "Live Streaming & Broadcasting", "Technical Support & Management", "Venue Coordination"],
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      
    },
    {
      
      title: "Film Making",
      description: "Professional video production services including commercials, documentaries, corporate videos, and creative content with cinematic quality.",
      features: ["Commercial Production", "Documentary Films", "Corporate Videos", "Music Videos", "Post-Production & Editing", "Animation & Motion Graphics"],
      image: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg",
      
    },
    {
      
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement with measurable results.",
      features: ["Social Media Marketing", "Content Strategy & Creation", "SEO & SEM Optimization", "Paid Advertising Campaigns", "Analytics & Reporting", "Influencer Marketing"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      
    },
    {
      
      title: "Branding & Design",
      description: "Creative brand development and visual identity services that make your business stand out in the marketplace with distinctive design.",
      features: ["Logo Design & Identity", "Brand Strategy & Guidelines", "Graphic Design", "Packaging Design", "Website Design", "Marketing Collateral"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      
    },
    {
      
      title: "Advertising",
      description: "Strategic advertising campaigns across multiple channels to maximize your brand's reach and impact with creative excellence.",
      features: ["Campaign Strategy & Planning", "Creative Development", "Media Planning & Buying", "Multi-Channel Advertising", "Performance Tracking", "Brand Positioning"],
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      
    },
    {
      
      title: "Entertainment",
      description: "Full-service entertainment production including talent management, show production, and live entertainment experiences.",
      features: ["Talent Booking & Management", "Live Entertainment", "Concert Production", "Celebrity Appearances", "Entertainment Consulting", "Wedding Parties"],
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      
    },
    {
      
      title: "Printing Services",
      description: "High-quality printing solutions for all your marketing materials, from business cards to large format displays with premium finishes.",
      features: ["Digital & Offset Printing", "Large Format Printing", "Promotional Materials", "Packaging & Labels", "Signage & Banners", "Custom Print Solutions"],
      image: "/Images/printing.jpg",
      
    },
    {
      
      title: "Creative Consulting",
      description: "Strategic creative consulting services to help businesses develop innovative solutions and creative strategies for growth.",
      features: ["Creative Strategy", "Brand Consulting", "Innovation Workshops", "Creative Direction", "Project Management", "Strategic Planning"],
      image: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg",
      
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We start by understanding your vision, goals, and requirements through detailed consultations and strategic planning sessions."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive strategy tailored to your specific needs, timeline, and budget with detailed project roadmaps."
    },
    {
      step: "03",
      title: "Creative Development",
      description: "We bring your project to life with our expertise, creativity, and cutting-edge technology, ensuring exceptional quality at every stage."
    },
    {
      step: "04",
      title: "Production & Execution",
      description: "Professional execution of your project with meticulous attention to detail and continuous quality control throughout the process."
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "We deliver exceptional results on time and provide ongoing support, optimization, and maintenance for your continued success."
    }
  ];

  const industries = [
  { name: "Technology & Software" },
  { name: "Healthcare & Medical" },
  { name: "Finance & Banking" },
  { name: "Retail & E-commerce" },
  { name: "Entertainment & Media" },
  { name: "Real Estate & Construction" },
  { name: "Education & Training" },
  { name: "Non-Profit Organizations" },
  { name: "Hospitality & Tourism" },
  { name: "Automotive & Transportation" },
  { name: "Food & Beverage" },
  { name: "Fashion & Beauty" },
  { name: "Sports & Fitness" },
  { name: "Government & Public Sector" },
  { name: "Manufacturing & Industrial" },
  { name: "Legal & Professional Services" },
  { name: "Energy & Utilities" },
  { name: "Agriculture & Environment" },
  { name: "Telecommunications" },
  { name: "Startups & Entrepreneurs" }
];

  return (
    <div className="pt-16">
      {/* Hero Section */}
     <section className="relative py-40 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8"
    >
      Creative Services That <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Inspire & Convert
      </span>
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
    >
      From idea to execution, we deliver captivating brand experiences — across digital, events, film, and design — with precision, emotion, and impact.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Let’s Work Together
        <ArrowRight className="w-6 h-6" />
      </Link>
    </motion.div>
  </div>
</section>


      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="glass rounded-3xl overflow-hidden hover:bg-gray-700/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative image-overlay">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      
                    </div>
                    <div className="absolute bottom-6 right-6">
                      
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Process Section */}
<section className="py-24 bg-gray-800/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Animated Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Our <span className="gradient-text">Process</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
        A proven methodology that ensures every project delivers exceptional results on time and within budget
      </p>
    </motion.div>

    {/* Animated Steps */}
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
      {process.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-gray-900 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
              {step.step}
            </div>
            {index < process.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-y-1/2"></div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


     
      {/* Industries Section */}
      {/* Industries Section */}
<section className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading with Animation */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Industries We <span className="gradient-text">Serve</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto mb-12">
        We proudly serve clients across ALL industries, delivering customized creative solutions that meet the unique requirements and challenges of every business sector
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 max-w-4xl mx-auto mb-16"
      >
        <h3 className="text-3xl font-bold text-white mb-6">Universal Creative Solutions</h3>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          From corporations to innovative startups, from government agencies to non-profit organizations, 
          Media Factory has the expertise and flexibility to adapt our services to any industry's specific needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold">
            3100+ Projects Completed
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold">
            20+ Industries Served
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold">
            3000+ Satisfied Clients
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Industry Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 text-center"
        >
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-3">
            {industry.name}
          </h3>
          
        </motion.div>
      ))}
    </div>

    {/* Custom Industry CTA */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <div className="glass rounded-3xl p-10 max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-white mb-8">
          Don't See Your Industry? <span className="gradient-text">We've Got You Covered!</span>
        </h3>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Our adaptable approach and diverse expertise allow us to quickly understand and serve any industry. 
          We specialize in learning your business, understanding your audience, and delivering results that matter.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: <Target className="w-10 h-10 text-gray-900" />,
              title: "Industry Research",
              desc: "We dive deep into your industry to understand trends, competitors, and opportunities"
            },
            {
              icon: <Zap className="w-10 h-10 text-gray-900" />,
              title: "Custom Solutions",
              desc: "Tailored strategies and creative solutions designed specifically for your sector"
            },
            {
              icon: <ArrowRight className="w-10 h-10 text-gray-900" />,
              title: "Proven Results",
              desc: "Track record of success across diverse industries with measurable outcomes"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
        >
          Discuss Your Industry Needs
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  </div>
</section>

    {/* Why Choose Us */}
{/* Why Choose Us */}
<section className="py-24 bg-gray-800/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Why Choose <span className="gradient-text">Media Factory</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
        Discover what makes us the trusted choice for creative excellence across industries.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: <Award className="w-8 h-8 text-yellow-400" />,
          title: "20+ Years Experience",
          description: "Proven track record of delivering exceptional results."
        },
        {
          icon: <Users className="w-8 h-8 text-yellow-400" />,
          title: "3000+ Happy Clients",
          description: "Trusted by businesses worldwide for creative excellence."
        },
        {
          icon: <Zap className="w-8 h-8 text-yellow-400" />,
          title: "3100+ Projects Completed",
          description: "Extensive portfolio across all creative disciplines."
        },
        {
          icon: <Star className="w-8 h-8 text-yellow-400" />,
          title: "Award-Winning Team",
          description: "Industry recognition for outstanding creative work."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* CTA Section */}
     {/* CTA Section */}
<section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  >
    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
      Ready to Get <span className="gradient-text">Started?</span>
    </h2>

    {/* Subtext */}
    <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
      Let's discuss your project requirements and create something extraordinary together with our comprehensive creative services.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link
        to="/contact"
        className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-full font-bold text-2xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
      >
        Start Your Project
        <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link
        to="/portfolio"
        className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-12 py-6 rounded-full font-bold text-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
      >
        View Our Work
      </Link>
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default Services;