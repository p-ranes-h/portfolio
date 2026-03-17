
import React from 'react';
import { Mail, Phone, Linkedin, Send, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  // const [email, setEmail] = useState('');
  // const [description, setDescription] = useState('');
  // const [status, setStatus] = useState('');
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSent, setIsSent] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.name || !formData.email || !formData.message) return;

  //   setIsSubmitting(true);
    
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSent(true);
  //     setFormData({ name: '', email: '', message: '' });
      
  //     // Reset success message after 5 seconds
  //     setTimeout(() => setIsSent(false), 5000);
  //   }, 1500);
  // };

  return (
    <section id="contact" className="animate-in fade-in py-50">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 inline-block border-b-4 border-[#ff4d5a] pb-2">Get In Touch</h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and technical collaborations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Info (2 columns) */}
          <div className="md:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Details</h3>
            
            <a href="mailto:pranesh9944@gmail.com" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              <div className="shrink-0 w-14 h-14 bg-red-50 text-[#ff4d5a] rounded-full flex items-center justify-center group-hover:bg-[#ff4d5a] group-hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Email Me</span>
                <span className="text-lg font-bold text-slate-900 break-all">pranesh9944@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918073164030" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              <div className="shrink-0 w-14 h-14 bg-red-50 text-[#ff4d5a] rounded-full flex items-center justify-center group-hover:bg-[#ff4d5a] group-hover:text-white transition-all shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Call Me</span>
                <span className="text-lg font-bold text-slate-900">+91 80731 64030</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/pranesh-swaminathan-3b51b8190" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              <div className="shrink-0 w-14 h-14 bg-red-50 text-[#ff4d5a] rounded-full flex items-center justify-center group-hover:bg-[#ff4d5a] group-hover:text-white transition-all shadow-sm">
                <Linkedin size={24} />
              </div>
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">LinkedIn</span>
                <span className="text-lg font-bold text-slate-900">Professional Profile</span>
              </div>
            </a>

            <div className="flex items-center gap-6 p-4">
              <div className="shrink-0 w-14 h-14 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Location</span>
                <span className="text-lg font-bold text-slate-900">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form (3 columns) */}
          {/* <div className="md:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden">
              {isSent && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-in fade-in">
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600 font-medium">I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-6 text-[#ff4d5a] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )} */}

              {/* <h4 className="text-2xl font-black text-slate-900 mb-8">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1 block">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d5a] focus:ring-4 focus:ring-red-50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1 block">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d5a] focus:ring-4 focus:ring-red-50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1 block">
                    Your Message
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d5a] focus:ring-4 focus:ring-red-50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-[#ff4d5a] text-black font-black rounded-xl hover:bg-[#e0434f] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-100 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'opacity-100'}`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>Send Message <Send size={20} className="stroke-[3px]" /></>
                  )}
                </button>
              </form> */}
            {/* </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
