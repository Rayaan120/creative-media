import React, { useState, useRef } from 'react';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, DollarSign, Heart, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
 import emailjs from '@emailjs/browser';


const Careers = () => {
 


const formRef = useRef();
const [isSent, setIsSent] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'your_service_id',       // Replace with your actual service ID
    'your_template_id',      // Replace with your actual template ID
    formRef.current,
    'your_public_key'        // Replace with your actual public key
  ).then(() => {
    setIsSent(true);
    formRef.current.reset();
  }).catch((error) => {
    console.error('EmailJS error:', error);
  });
};





  const buildGmailUrl = (to, subject, body) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const [selectedJob, setSelectedJob] = useState(null);

  const benefits = [
    { icon: DollarSign, title: "Competitive Compensation", description: "Above-market salaries with performance bonuses and equity options" },
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance plus wellness programs" },
    { icon: Clock, title: "Work-Life Balance", description: "Flexible working hours, remote options, and generous PTO policy" },
    { icon: Zap, title: "Professional Growth", description: "Continuous learning opportunities, conferences, and skill development programs" },
    { icon: Users, title: "Collaborative Culture", description: "Work with talented creatives in an inspiring and supportive environment" },
    { icon: Award, title: "Recognition & Rewards", description: "Regular recognition programs and opportunities to work on award-winning projects" }
  ];

 const jobs = [
  {
    id: 1,
    title: "Sales and Marketing Executive",
    department: "Marketing & Sales",
    type: "Full-time",
    location: "Dubai",
    experience: "2+ years",
   
    description: "We are seeking a motivated Sales and Marketing Executive to grow our client base and promote our creative services. You’ll drive campaigns, build relationships, and help position Media Factory as a leader in the industry.",
    requirements: [
      "2+ years of experience in sales, marketing, or business development",
      "Strong understanding of digital and traditional marketing strategies",
      "Excellent communication, negotiation, and interpersonal skills",
      "Proficiency in CRM tools, email marketing, and sales reporting",
      "Bachelor’s degree in Marketing, Business, or related field",
      "Ability to meet sales targets and manage multiple campaigns"
    ],
    responsibilities: [
      "Develop and execute sales and marketing strategies",
      "Generate leads and convert prospects into clients",
      "Build long-term relationships with key clients",
      "Coordinate marketing campaigns across platforms",
      "Analyze and report on campaign performance",
      "Attend industry events and represent the brand"
    ]
  },
  {
    id: 2,
    title: "Graphic Designer",
    department: "Design",
    type: "Full-time",
    location: "Dubai",
    experience: "2+ years",
    
    description: "We’re looking for a creative Graphic Designer to craft compelling visuals across print and digital platforms. You’ll work closely with our creative team to produce marketing materials, social media assets, and brand visuals.",
    requirements: [
      "2+ years of graphic design experience",
      "Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong understanding of design principles, layout, and typography",
      "Experience designing for both digital and print media",
      "Excellent attention to detail and organizational skills",
      "Portfolio showcasing a variety of creative work"
    ],
    responsibilities: [
      "Design marketing materials, social media graphics, and branding assets",
      "Collaborate with creative directors and content teams",
      "Ensure designs align with brand identity and project goals",
      "Revise concepts based on feedback in a timely manner",
      "Prepare and deliver final design files for production or deployment",
      "Stay updated with design trends and best practices"
    ]
  },
  {
    id: 3,
    title: "Delivery Driver",
    department: "Logistics",
    type: "Full-time",
    location: "Dubai",
    experience: "1+ year",
    
    description: "We are hiring a reliable and punctual Delivery Driver to transport equipment and supplies to various client sites and event venues. You’ll play a key role in the success of our operations and client satisfaction.",
    requirements: [
      "1+ year of professional driving experience",
      "Valid driver’s license with a clean driving record",
      "Familiarity with GPS navigation and local routes",
      "Ability to lift and carry heavy items (up to 50 lbs)",
      "Strong time management and communication skills",
      "Willingness to work flexible hours including weekends"
    ],
    responsibilities: [
      "Deliver and pick up equipment and materials on time",
      "Ensure safe loading, transport, and unloading of items",
      "Conduct basic vehicle inspections and report issues",
      "Maintain delivery records and logs",
      "Coordinate with logistics team for scheduling and routing",
      "Represent the company professionally with clients on-site"
    ]
  },
  // Keep other job entries (4 to 6) unchanged or continue replacing as needed
];


 const handleApply = (jobTitle) => {
  const gmailUrl = buildGmailUrl(
    'shamediafactory@gmail.com',
    `Application for ${jobTitle}`,
    `Hi Media Factory Team,\n\nI am interested in applying for the ${jobTitle} position. Please find my resume attached.\n\nBest regards,\n[Your Name]`
  );
  window.open(gmailUrl, '_blank');
};


  return (
    <div className="pt-16">
    <section className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto px-6 text-center"
  >
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
      Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Creative Team</span>
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
      Build your career with passionate professionals. We’re looking for talented minds driven by innovation, storytelling, and bold ideas that inspire.
    </p>

    <a
      href="#open-positions"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      View Open Positions
      <ArrowRight className="w-5 h-5" />
    </a>
  </motion.div>
</section>


      {/* Culture Section */}
<section className="relative py-28 bg-gray-900 overflow-hidden">
  {/* Soft background accents (optional) */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
    <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
  </div>

  <div className="relative max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
      Why <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Work With Us?</span>
    </h2>

    {/* subtle divider */}
    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

    <div className="mt-10 space-y-8">
      <p className="text-xl text-gray-300 leading-relaxed">
        At Media Factory, great work starts with great people. We’ve built a culture that values
        creativity, collaboration, and continuous learning. Our team members aren’t just employees—
        they’re partners in our mission to craft extraordinary experiences that make a lasting impact.
      </p>

      <p className="text-xl text-gray-400 leading-relaxed">
        Whether you’re an experienced professional or just starting your career, you’ll find room to grow,
        contribute to meaningful projects, and work alongside some of the most talented people in the industry.
      </p>
    </div>

    
  </div>
</section>


      

      {/* Job Listings */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
              Explore our current job openings and find the perfect opportunity to advance your career with Media Factory
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={job.id} className="glass rounded-3xl overflow-hidden hover:bg-gray-700/50 transition-all duration-500 animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-gray-400">
                        <span className="flex items-center text-lg">
                          <Users className="w-5 h-5 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center text-lg">
                          <Clock className="w-5 h-5 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center text-lg">
                          <MapPin className="w-5 h-5 mr-2" />
                          {job.location}
                        </span>
                        <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold">
                          {job.experience}
                        </span>
                       
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(job.title)}
                      className="mt-6 lg:mt-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center group btn-primary"
                    >
                      Apply Now
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed text-xl">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">Requirements</h4>
                      <ul className="space-y-4">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-400 text-lg">
                            <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">Responsibilities</h4>
                      <ul className="space-y-4">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start text-gray-400 text-lg">
                            <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Don't See Your 
            <span className="gradient-text"> Perfect Role?</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:careers@mediafactory.com"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-full font-bold text-2xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 group btn-primary"
            >
              Contact Us
              <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-gray-400 text-xl">or email us at shamediafactory@gmail.com</span>
          </div>
        </div>
        
      </section>
      

<section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Calling All <span className="gradient-text">Talents</span>
        </h2>
        <p className="text-2xl text-gray-400 mb-12">
          Got unique skills and passion to offer? We’d love to hear from you!<br />
          Share your profile below and send your photos via WhatsApp.
          
        </p>
        {/* WhatsApp Button */}
    <a
      href="https://wa.me/971509930532?text=Hi%20Media%20Factory%2C%20I’d%20like%20to%20share%20my%20photos%20and%20portfolio."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mb-12 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
    >
      Send via WhatsApp
    </a>

        <form ref={formRef} onSubmit={sendEmail} className="bg-gray-800 p-8 rounded-3xl space-y-6 text-left shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Full Name</label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Which service describes you?</label>
            <select name="service" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400">
              <option value="">Select a category</option>
              <option value="Dancer">Dancer</option>
              <option value="Singer">Singer</option>
              <option value="Host / Emcee">Host / Emcee</option>
              <option value="Performer">Performer</option>
              <option value="Musician">Musician</option>
              <option value="Backstage Crew">Backstage Crew</option>
              <option value="Lighting / Sound Tech">Lighting / Sound Tech</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Tell us about your skills</label>
            <textarea name="message" rows="5" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400" placeholder="E.g. I’m a lighting technician with 5 years of experience..."></textarea>
          </div>

          <button type="submit" className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300">
            {isSent ? "Submitted ✔" : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  


    </div>
  );
};

export default Careers;