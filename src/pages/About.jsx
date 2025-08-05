import React from 'react';
import { Users, Target, Lightbulb, Award, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const About = () => {
  
  const team = [
  {
    name: "Sha Mohammed",
    position: "Chief Executive Officer and Founder",
    image: "/Images/sha.png", // Replace with actual image path
    bio: "Provides strategic leadership and vision for the company. Oversees business growth, client relationships, and company-wide operations.",
    expertise: ["Strategic Leadership", "Business Development", "Executive Management"]
  },
  {
  name: "Mohammed Abdulla Buhussain Alfalasi",
  position: "Sponsor",
  image: "/Images/ameer.png",
  bio: "Provides financial support and strategic backing to ensure the successful execution of key projects and initiatives.",
  expertise: ["Financial Sponsorship", "Strategic Support", "Stakeholder Collaboration"]
},

  {
  name: "Sameera Shameer",
  position: "Manager",
  image: "/Images/sameera.png",
  bio: "Oversees day-to-day operations, coordinates teams, and ensures execution across all departments to meet client expectations and organizational goals.",
  expertise: ["Team Management", "Operational Oversight", "Client Coordination"]
}
,
  {
    name: "Sabu",
    position: "Public Relations Officer",
    image: "/Images/sabu.png", // Replace with actual image path
    bio: "Builds and maintains the company’s public image through effective media relations, communications, and community engagement.",
    expertise: ["Public Relations", "Media Communication", "Crisis Management"]
  }


    
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push creative boundaries and embrace cutting-edge technology to deliver extraordinary results that set new industry standards."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Every project receives our complete attention to detail and commitment to superior quality, ensuring exceptional outcomes every time."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as true partners, combining our expertise with your vision to create something remarkable."
    },
    {
      icon: Award,
      title: "Impact",
      description: "Our work creates meaningful connections between brands and audiences, driving real business results and lasting impressions."
    }
  ];

  const milestones = [
  {
    year: "2000",
    event: "Sha Communication Launched",
    description: "Began our journey in India as Sha Communication, specializing in camera production and laying the foundation for future creative ventures."
  },
  {
    year: "2005",
    event: "Expanded into Film & Events",
    description: "Evolved into movie production and event support services, broadening our creative impact across storytelling and live experiences."
  },
  {
    year: "2010",
    event: "Media Factory Debuted in Dubai",
    description: "Formally launched as Media Factory in Dubai during the International Kite Festival, supported by Ishrath Qadri (A.R. Rahman's sister). The event attracted over 1,000 attendees and marked the beginning of expanded creative services in the UAE."
  },
  {
    year: "Present",
    event: "Ongoing Growth & Innovation",
    description: "Continuing to evolve and expand our services, delivering impactful experiences worldwide."
  }
];




  return (
    <div className="pt-16">
      <section className="relative py-44 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden text-white">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto px-6 text-center"
  >
    {/* Heading */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8">
      We Are <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
        Media Factory
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
      A powerhouse of creativity, storytelling, and production excellence. For over a decade, we’ve shaped unforgettable experiences through film, design, and digital brilliance.
    </p>

    {/* Optional CTA */}
    <Link
      to="/services"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      Explore Our Services
      <ArrowRight className="w-6 h-6" />
    </Link>
  </motion.div>
</section>



      {/* Our Story */}
      <section className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-white mb-8">Our Story</h2>
        <div className="space-y-8 text-gray-400 leading-relaxed text-lg">
          <p>
            <strong>Founded in 2005</strong>, Media Factory has built a reputation as a trusted partner for delivering end-to-end event solutions across a wide range of industries.
          </p>
          <p>
            With nearly two decades of experience, we’ve evolved to meet the dynamic needs of our clients—expanding our services and deepening our expertise to stay ahead of the curve.
          </p>
          <p>
            <strong>Our Journey:</strong><br />
            What began with entertainment shows, music concerts, and cultural festivals has grown into a full-scale event production powerhouse. Today, Media Factory offers comprehensive, creative, and technical solutions that bring ambitious ideas to life.
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
          >
            View Our Work
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="image-overlay rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
            alt="Our creative workspace"
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 glass rounded-2xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-gray-900 fill-current" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">14+ Years</div>
              <div className="text-gray-400">of Excellence</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Our Team */}
      <section className="py-24 bg-gray-800/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading with Motion */}
    
      <div className="text-center mb-20">
    
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Meet Our <span className="gradient-text">Team</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
        The creative minds and industry experts who bring your vision to life with passion and precision
      </p>
    </div>

    {/* Animated Team Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      {team.map((member, index) => (
        <div  className="glass rounded-3xl overflow-hidden hover:bg-gray-700/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl">
        
          {/* Image */}
          <div className="relative image-overlay">
            <img
  src={member.image}
  alt={member.name}
  className="w-full h-96 object-cover object-[top_15%] group-hover:scale-110 transition-transform duration-300"

/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          {/* Info */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
              {member.name}
            </h3>
            <p className="text-yellow-400 font-semibold mb-4 text-lg">{member.position}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{member.bio}</p>

            <div className="space-y-2">
              {member.expertise.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="py-24 bg-gray-800/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading with animation */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Our <span className="gradient-text">Journey</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
        Key milestones that shaped Media Factory into the industry leader we are today
      </p>
    </motion.div>

    {/* Timeline Line and Milestones */}
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-500"></div>

      <div className="space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Milestone Card */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
              <div className="glass rounded-2xl p-8">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{milestone.year}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{milestone.event}</h3>
                <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="relative z-10">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-gray-900"></div>
            </div>

            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Our Values */}
      <section className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading with Motion */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Our <span className="gradient-text">Values</span>
      </h2>
      <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
        The principles that guide our work and define our commitment to excellence in every project
      </p>
    </motion.div>

    {/* Animated Value Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => {
        const IconComponent = value.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
              <IconComponent className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">
              {value.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">{value.description}</p>
          </motion.div>
        );
      })}
    </div>
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
      Ready to Work <span className="gradient-text">Together?</span>
    </h2>

    {/* Subtext */}
    <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
      Let's discuss how our expertise and passion can help bring your next project to life with exceptional results.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link
        to="/contact"
        className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-full font-bold text-2xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
      >
        Get In Touch
        <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link
        to="/careers"
        className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-12 py-6 rounded-full font-bold text-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
      >
        Join Our Team
      </Link>
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default About;