import React, { useState } from "react";
import { Send, MessageCircle, Mail, MapPin, Phone, Clock, Leaf } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-white to-brand-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary/10 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-brand-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-darkText mb-4">
            Connect With Us
          </h1>
          <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
            Have questions about remedies, want to share your experience, or need guidance? 
            We're here to help you on your natural wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-brand-darkText mb-6 flex items-center">
              <Leaf className="mr-2 text-brand-clay" /> Get In Touch
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-brand-primary/10 p-2 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-darkText">Email Us</h3>
                  <p className="text-brand-secondary">support@naturalremedies.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-primary/10 p-2 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-darkText">Call Us</h3>
                  <p className="text-brand-secondary">+234 (706) 6070-HEAL</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-primary/10 p-2 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-darkText">Visit Us</h3>
                  <p className="text-brand-secondary">123 Nature Way, Herbal Mountains Way</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-primary/10 p-2 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-darkText">Hours</h3>
                  <p className="text-brand-secondary">Mon-Fri: 9AM-6PM</p>
                  <p className="text-brand-secondary">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-medium text-brand-darkText mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: "Twitter", icon: "logo-twitter", color: "text-blue-400" },
                  { name: "Facebook", icon: "logo-facebook", color: "text-blue-600" },
                  { name: "Instagram", icon: "logo-instagram", color: "text-pink-500" },
                  { name: "YouTube", icon: "logo-youtube", color: "text-red-500" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`bg-gray-100 hover:bg-brand-primary/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <ion-icon name={social.icon} class="text-lg"></ion-icon>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-brand-darkText mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-600">We'll get back to you within 24 hours. Thank you for reaching out!</p>
              </div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-brand-darkText mb-2">
                    What can we help you with?
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="remedy-advice">Remedy Advice</option>
                    <option value="ingredient-question">Ingredient Question</option>
                    <option value="account-help">Account Help</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-darkText mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-darkText mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-brand-darkText mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Please share your questions, experiences, or thoughts..."
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-secondary text-white font-semibold py-3 rounded-lg hover:bg-brand-darkText transition-colors flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Preview Section */}
        <div className="bg-brand-primary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-darkText mb-4">Common Questions</h2>
          <p className="text-brand-secondary mb-6">
            Before contacting us, you might find answers in our frequently asked questions.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            {[
              "How do I know which remedy is right for my symptoms?",
              "Are the remedies safe for children and pregnant women?",
              "How long does it typically take to see results from herbal remedies?",
              "Can I use multiple remedies at the same time?"
            ].map((question, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-brand-darkText">{question}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-brand-clay text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
            View Full FAQ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;