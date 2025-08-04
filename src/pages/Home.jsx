import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap, Camera, Megaphone, Palette, Play, CheckCircle } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';


import { useInView } from 'react-intersection-observer';

const Home = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Media Factory transformed our corporate event into an unforgettable experience. Their attention to detail and creative vision exceeded all expectations.",
      company: "Tech Corp",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Outstanding film production quality. The team's professionalism and creative expertise delivered exactly what we envisioned for our brand campaign.",
      company: "Creative Agency",
      date: "1 month ago"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Their digital marketing strategies boosted our online presence significantly. Results-driven approach with exceptional creative execution.",
      company: "Startup Inc",
      date: "3 weeks ago"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Incredible event production! From concept to execution, Media Factory delivered a flawless experience that impressed all our stakeholders.",
      company: "Fortune 500 Co",
      date: "1 week ago"
    },
    {
      name: "Lisa Park",
      rating: 5,
      text: "The branding work they did for us was phenomenal. Our new identity perfectly captures our vision and has received amazing feedback from clients.",
      company: "Design Studio",
      date: "2 months ago"
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Professional, creative, and reliable. Media Factory consistently delivers high-quality work that drives real business results.",
      company: "Marketing Firm",
      date: "1 month ago"
    }
  ];

  const stats = [
  { icon: Users, value: 3000, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 50, suffix: "+", label: "Awards Won" },
  { icon: Zap, value: 3100, suffix: "+", label: "Projects Completed" },
  { icon: Star, value: 4.9, decimals: 1, label: "Client Rating" }
];


  const services = [
    {
      icon: Camera,
      title: "Event Production",
      description: "Full-service event planning and production with cutting-edge technology and creative excellence.",
      features: ["Corporate Events", "Conferences", "Product Launches", "Live Streaming"]
    },
    {
      icon: Play,
      title: "Film Making",
      description: "Professional video production from concept to final cut, delivering compelling visual stories.",
      features: ["Commercials", "Documentaries", "Corporate Videos", "Music Videos"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic digital campaigns that drive engagement, boost brand visibility, and deliver measurable results.",
      features: ["Social Media", "SEO/SEM", "Content Strategy", "Analytics"]
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Crafting brand identities and stories that captivate and connect.",
      features: ["Logo Design", "Brand Identity", "Packaging", "Guidelines"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
  {/* Background Layers */}
  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

  {/* Animated Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  >
    <div className="p-10 rounded-2xl shadow-2xl space-y-8">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Media Factory
        </span>
        <br />
        <span className="text-white">Production House</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        From spectacular events to compelling films, innovative digital marketing to stunning brand identities –
        we're your complete creative production powerhouse delivering excellence across all media channels.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link
          to="/portfolio"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 flex items-center group btn-primary"
        >
          View Our Work
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  </motion.div>

  {/* Floating gradient shapes */}
  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
</section>


      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {stats.map((stat, index) => {
  const IconComponent = stat.icon;
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div
      key={index}
      ref={ref}
      className="text-center group hover:scale-105 transition-transform duration-300 animate-slideInLeft"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
        <IconComponent className="w-10 h-10 text-gray-900" />
      </div>

      <div className="text-4xl font-bold text-white mb-2">
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2}
            suffix={stat.suffix || ""}
            decimals={stat.decimals || 0}
          />
        ) : (
          stat.suffix ? `0${stat.suffix}` : "0"
        )}
      </div>

      <div className="text-gray-400 text-lg">{stat.label}</div>
    </div>
  );
})}

              
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-900">
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
        Our <span className="gradient-text">Expertise</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
        Comprehensive creative services designed to elevate your brand and captivate your audience across all platforms
      </p>
    </motion.div>

    {/* Service Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => {
        const IconComponent = service.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 hover:bg-gray-700/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
              <IconComponent className="w-10 h-10 text-gray-900" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>

    {/* View All Services Button */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <Link
        to="/services"
        className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
      >
        View All Services
        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  </div>
</section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-gray-800/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        What Our <span className="gradient-text">Clients Say</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
        Don't just take our word for it - hear from our satisfied clients who've experienced the Media Factory difference
      </p>
    </motion.div>

    {/* Review Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 hover:bg-gray-700/50 transition-all duration-500 group hover:scale-105"
        >
          {/* Stars and Date */}
          <div className="flex items-center mb-6">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-3 text-gray-400 text-sm">{review.date}</span>
          </div>

          {/* Review Text */}
          <p className="text-gray-300 mb-8 leading-relaxed text-lg italic">
            "{review.text}"
          </p>

          {/* Reviewer Info */}
          <div className="flex items-center">
            <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-gray-900 font-bold text-xl">{review.name.charAt(0)}</span>
            </div>
            <div>
              <div className="font-bold text-white text-lg">{review.name}</div>
              <div className="text-gray-400">{review.company}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Overall Rating Summary */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center glass rounded-full px-8 py-4 mb-6">
        <div className="flex items-center mr-6">
          <Star className="w-8 h-8 text-yellow-400 fill-current mr-2" />
          <span className="text-yellow-400 font-bold text-2xl">4.9</span>
        </div>
        <span className="text-gray-300 text-lg">Based on 200+ Google Reviews</span>
      </div>
      <p className="text-gray-400 text-lg">
        Trusted by businesses for exceptional creative services
      </p>
    </motion.div>

  </div>
</section>


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
      Ready to Create Something
      <span className="gradient-text"> Extraordinary?</span>
    </h2>

    {/* Subtext */}
    <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
      Let's bring your vision to life with our expertise in events, production, marketing, creative services, and many more.
    </p>

    {/* CTA Buttons */}
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
        View Portfolio
      </Link>
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default Home;