import React, { useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, DollarSign, Heart, Zap, Award } from 'lucide-react';

const Careers = () => {
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
      title: "Senior Video Editor",
      department: "Production",
      type: "Full-time",
      location: "New York, NY",
      experience: "5+ years",
      salary: "$75,000 - $95,000",
      description: "We're looking for a talented Senior Video Editor to join our production team. You'll work on high-profile projects including commercials, documentaries, and corporate videos while mentoring junior team members.",
      requirements: [
        "5+ years of professional video editing experience",
        "Expert knowledge of Adobe Premiere Pro, After Effects, and DaVinci Resolve",
        "Experience with color grading and audio post-production",
        "Strong storytelling and creative skills",
        "Ability to work under tight deadlines and manage multiple projects",
        "Portfolio demonstrating diverse editing styles and techniques"
      ],
      responsibilities: [
        "Edit and assemble video content for various client projects",
        "Collaborate with directors and producers on creative decisions",
        "Manage multiple projects simultaneously while maintaining quality",
        "Ensure technical quality and brand consistency across all deliverables",
        "Mentor junior editors and provide creative guidance and feedback"
      ]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "New York, NY",
      experience: "3+ years",
      salary: "$55,000 - $70,000",
      description: "Join our dynamic marketing team to develop and execute digital marketing campaigns that drive results for our diverse client portfolio across multiple industries.",
      requirements: [
        "3+ years of digital marketing experience with proven results",
        "Proficiency in Google Ads, Facebook Ads, and social media platforms",
        "Experience with marketing automation tools and CRM systems",
        "Strong analytical skills and data-driven approach to optimization",
        "Excellent written and verbal communication skills",
        "Bachelor's degree in Marketing, Communications, or related field"
      ],
      responsibilities: [
        "Develop and execute comprehensive digital marketing campaigns",
        "Manage social media accounts and content calendars for multiple clients",
        "Analyze campaign performance and optimize for maximum ROI",
        "Collaborate with creative team on marketing materials and content",
        "Present campaign results and insights to clients and stakeholders"
      ]
    },
    {
      id: 3,
      title: "Event Production Coordinator",
      department: "Events",
      type: "Full-time",
      location: "New York, NY",
      experience: "2+ years",
      salary: "$45,000 - $60,000",
      description: "Coordinate and manage event production from concept to execution. Work closely with clients to deliver memorable experiences that exceed expectations.",
      requirements: [
        "2+ years of event planning or production experience",
        "Strong organizational and project management skills",
        "Experience with event management software and vendor coordination",
        "Excellent communication and client relations skills",
        "Ability to work flexible hours including evenings and weekends",
        "Attention to detail and creative problem-solving abilities"
      ],
      responsibilities: [
        "Coordinate all aspects of event production from planning to execution",
        "Manage vendor relationships, contracts, and logistics coordination",
        "Oversee event logistics, timeline management, and on-site coordination",
        "Ensure client satisfaction and successful event outcomes",
        "Collaborate with creative team on event concepts and design elements"
      ]
    },
    {
      id: 4,
      title: "Creative Director",
      department: "Creative",
      type: "Full-time",
      location: "New York, NY",
      experience: "8+ years",
      salary: "$100,000 - $130,000",
      description: "Lead our creative team in developing innovative concepts and strategies for our clients across all service areas. Drive creative excellence and strategic thinking.",
      requirements: [
        "8+ years of creative leadership experience in agency environment",
        "Portfolio demonstrating creative excellence across multiple mediums",
        "Experience managing and inspiring creative teams",
        "Strong presentation and client communication skills",
        "Degree in Design, Advertising, or related creative field",
        "Knowledge of current design trends and emerging technologies"
      ],
      responsibilities: [
        "Lead creative strategy and concept development for major client projects",
        "Oversee creative team performance and project quality standards",
        "Present creative concepts and strategies to clients and stakeholders",
        "Collaborate with account management on project goals and objectives",
        "Stay current with industry trends and innovative creative approaches"
      ]
    },
    {
      id: 5,
      title: "Motion Graphics Designer",
      department: "Design",
      type: "Full-time",
      location: "New York, NY",
      experience: "4+ years",
      salary: "$65,000 - $80,000",
      description: "Create stunning motion graphics and animations for various projects including commercials, events, and digital content. Push creative boundaries with cutting-edge design.",
      requirements: [
        "4+ years of motion graphics and animation experience",
        "Expert proficiency in After Effects, Cinema 4D, and Adobe Creative Suite",
        "Strong design fundamentals and typography skills",
        "Experience with 3D animation, rendering, and compositing",
        "Portfolio showcasing diverse animation styles and techniques",
        "Understanding of video production workflow and technical requirements"
      ],
      responsibilities: [
        "Create motion graphics and animations for video projects and campaigns",
        "Develop visual concepts, style guides, and animation frameworks",
        "Collaborate with video editors and creative directors on project vision",
        "Ensure consistency with brand guidelines and creative standards",
        "Meet project deadlines while maintaining exceptional quality standards"
      ]
    },
    {
      id: 6,
      title: "Account Manager",
      department: "Client Services",
      type: "Full-time",
      location: "New York, NY",
      experience: "3+ years",
      salary: "$60,000 - $75,000",
      description: "Manage client relationships and serve as the primary liaison between clients and our creative teams. Drive account growth and ensure exceptional service delivery.",
      requirements: [
        "3+ years of account management or client services experience",
        "Strong communication, presentation, and relationship-building skills",
        "Experience in advertising, media, or creative industries preferred",
        "Project management skills and attention to detail",
        "Bachelor's degree in Business, Communications, or related field",
        "Ability to manage multiple client accounts simultaneously"
      ],
      responsibilities: [
        "Manage client relationships and serve as primary point of contact",
        "Coordinate project timelines, deliverables, and client communications",
        "Present project updates, results, and strategic recommendations to clients",
        "Identify opportunities for account growth and service expansion",
        "Collaborate with internal teams on project execution and quality delivery"
      ]
    }
  ];

  const handleApply = (jobTitle) => {
    // In a real application, this would open an application form or redirect to an application portal
    alert(`Application form for ${jobTitle} would open here. In a real implementation, this would redirect to an application portal or open a detailed application form with file upload capabilities.`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Build your career with a dynamic team of creative professionals. We're looking for talented individuals who share our passion for excellence, innovation, and creating extraordinary experiences.
          </p>
        </div>
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
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full font-bold">
                          {job.salary}
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
    </div>
  );
};

export default Careers;