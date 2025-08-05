import React, { useState, useRef  } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';



const Contact = () => {
  const formRef = useRef(null);
   const handleBookNow = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // optional: focus first field after a small delay
    setTimeout(() => {
      const first = document.getElementById('name');
      first?.focus();
    }, 500);
  };
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  'shamediafactory@gmail.com'
)}&su=${encodeURIComponent(
  'Project Inquiry — Media Factory'
)}&body=${encodeURIComponent(
  'Hi Media Factory team,\n\nI’d like to discuss a new project.\n\nDetails:\n— Service:\n— Timeline:\n— Budget:\n\nThanks,\n[Your Name]'
)}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    
    message: '',
    timeline: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    company: formData.company,
    service: formData.service,
    
    message: formData.message,
    timeline: formData.timeline,
    phone: formData.phone
  };

  emailjs.send('service_wpyjduc', 'template_gmt8suc', templateParams, '_MaMl2caEo5gsW8HH')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    });
};

  

  const services = [
    "Event Production",
    "Film Making",
    "Digital Marketing",
    "Branding & Design",
    "Advertising",
    "Entertainment",
    "Printing Services",
    "Creative Consulting",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Let's discuss"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      info: "Kuwait Street, Al Shraifi, Mezanine floor, M 07 - Dubai",
      link: "https://maps.app.goo.gl/561VGUZUFitQdK3M8",
      description: "Our state-of-the-art facility in the heart of Dubai"
    },
    {
  icon: Phone,
  title: "Call Us",
  info: [
    { label: "+971 58 951 4368", link: "tel:+971589514368" },
    { label: "+971 55 560 6603", link: "tel:+971555606603" },
    { label: "+971 4 3333793", link: "+97143333793" }
  ],
  description: "Available Monday - Saturday, 9 AM - 7 PM"
},
   {
  icon: Mail,
  title: "Email Us",
  info: "shamediafactory@gmail.com",
  link: gmailComposeUrl, // ⬅️ was "mailto:shamediafactory@gmail.com"
  description: "We respond during business hours"
},

    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9:00 AM - 7:00 PM\nSun: Closed",
      link: null,
      description: "Extended hours available for urgent projects"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start a new project?",
      answer: "We typically can begin new projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited services and can often start within a few days. Our team is flexible and can accommodate tight deadlines when needed."
    },
    {
      question: "Do you work with clients outside of Dubai?",
      answer: "Absolutely! While we're based in Dubai, we serve clients nationwide and internationally. We have experience managing remote projects and can coordinate on-site work as needed. Our digital capabilities allow us to collaborate effectively regardless of location."
    },
   
    {
      question: "Can you handle multiple services for one project?",
      answer: "Yes! We're a full-service creative agency and many of our clients benefit from our integrated approach. We can combine services like event production with video content, digital marketing, and branding for maximum impact and consistency across all touchpoints."
    },
    {
      question: "What makes Media Factory different from other agencies?",
      answer: "Our unique combination of creative excellence, technical expertise, and comprehensive service offerings sets us apart. With 20+ years of experience, award-winning work, and a 4.9-star client rating, we deliver results that exceed expectations while maintaining the highest quality standards."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide ongoing support, maintenance, and optimization services. Whether it's updating marketing campaigns, maintaining event relationships, or providing technical support, we're here to ensure your continued success long after project delivery."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center animate-fadeIn">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-10">
            <CheckCircle className="w-16 h-16 text-gray-900" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-8">Thank You!</h1>
          <p className="text-2xl text-gray-400 mb-10 leading-relaxed">
            Your message has been received. Our team will reach out to you shortly to discuss your project requirements and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  service: '',
                  
                  message: '',
                  timeline: '',
                  phone: ''
                });
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 btn-primary"
            >
              Send Another Message
            </button>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
   <section className="relative py-36 md:py-48 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden">
  {/* Optional background glow */}
  <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

  {/* Animated Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto px-6 text-center relative z-10"
  >
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
      Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Brand Experience</span>
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
      We help businesses turn bold ideas into immersive events, videos, and visual experiences that leave a lasting impact.
    </p>

    <motion.button
      onClick={handleBookNow}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      Start Your Project
      <Send className="w-5 h-5" />
    </motion.button>
  </motion.div>
</section>


      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
  {/* Contact Form */}
  <div className="glass rounded-3xl p-10 animate-slideInLeft w-full max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-8">Start Your Project</h2>
    <form onSubmit={handleSubmit} className="space-y-8 mb-0">
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-400 mb-3">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-gray-400 mb-3">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="your.email@company.com"
          />
        </div>
      </div>

      {/* Company & Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-lg font-semibold text-gray-400 mb-3">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-semibold text-gray-400 mb-3">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-lg font-semibold text-gray-400 mb-3">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-lg font-semibold text-gray-400 mb-3">
          Project Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Select timeline</option>
          <option value="ASAP">ASAP</option>
          <option value="1-2 weeks">1-2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="2-3 months">2-3 months</option>
          <option value="3+ months">3+ months</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-lg font-semibold text-gray-400 mb-3">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-0">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-2xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Send Message
              <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  </div>


            {/* Contact Information */}
            <div className="space-y-10 animate-slideInRight">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
                <p className="text-gray-400 leading-relaxed mb-10 text-xl">
                  Have questions about our services or want to discuss your project? We're here to help. 
                  Reach out through any of the channels below, and our team will get back to you promptly.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{info.title}</h3>
                        {Array.isArray(info.info) ? (
  info.info.map((phone, i) => (
    <a
      key={i}
      href={phone.link}
      className="text-gray-300 hover:text-yellow-400 transition-colors whitespace-pre-line text-lg font-semibold block mb-2"
    >
      {phone.label}
    </a>
  ))
) : info.link ? (
  <a
    href={info.link}
    target={info.link.startsWith('http') ? '_blank' : undefined}
    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="text-gray-300 hover:text-yellow-400 transition-colors whitespace-pre-line text-lg font-semibold block mb-2"
  >
    {info.info}
  </a>
) : (
  <span className="text-gray-300 whitespace-pre-line text-lg font-semibold block mb-2">
    {info.info}
  </span>
)}

                        <p className="text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="glass rounded-3xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Find Our Studio</h3>
             <div className="w-full h-80 rounded-3xl overflow-hidden">
  <iframe
    title="Media Factory Dubai Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.761514040347!2d55.304074873950114!3d25.244956329767277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d648c04a5d%3A0x6a1448415efbc40!2sMedia%20Factory%20Events%20%26%20Production%20%2C%20Dubai!5e0!3m2!1sen!2sae!4v1753881016406!5m2!1sen!2sae"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    className="border-0 w-full h-full"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about our services, process, and working with Media Factory
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-3xl p-8 hover:bg-gray-700/50 transition-all duration-300 animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <MessageSquare className="w-6 h-6 text-yellow-400 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need <span className="gradient-text">Immediate</span> Assistance?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-3xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 animate-slideInLeft">
              <Phone className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Call Now</h3>
              <p className="text-gray-400 mb-6">For urgent inquiries and immediate assistance</p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 btn-primary"
              >
                +971 58 951 4368
              </a>
            </div>

            <div className="glass rounded-3xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 animate-slideInLeft" style={{animationDelay: '0.1s'}}>
              <Mail className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-400 mb-6">For detailed project discussions and proposals</p>
              <a
  href={gmailComposeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 btn-primary"
>
  Send Email
</a>

            </div>

            <div className="glass rounded-3xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Schedule Meeting</h3>
              <p className="text-gray-400 mb-6">Book a consultation to discuss your project in detail</p>
             <button
  onClick={handleBookNow}
  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 btn-primary"
>
  Book Now
</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;