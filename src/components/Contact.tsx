// JSX runtime handles React import automatically
import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
  const [emailVisible, setEmailVisible] = useState(false);

  // Split email into parts so bots can't scrape it as a plain string
  const emailUser = 'deerghkatariabusiness';
  const emailDomain = 'gmail.com';
  const fullEmail = `${emailUser}@${emailDomain}`;

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/DeerghKataria"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deergh-kataria-544564236/"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      url: "https://www.youtube.com/deerghkataria"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/deerghkataria/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just want to talk tech? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Let's Connect
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                Whether you're interested in automation engineering, cloud and backend development, 
                or just want to connect with a fellow engineer — my inbox is always open.
              </p>

              {/* Contact Info Row */}
              <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-8">

                {/* Email — revealed on click, hidden from bots */}
                <div className="flex items-center space-x-4 group">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    {emailVisible ? (
                      <a
                        href={`mailto:${fullEmail}`}
                        className="font-medium text-blue-400 hover:underline transition-colors duration-300"
                      >
                        {fullEmail}
                      </a>
                    ) : (
                      <button
                        onClick={() => setEmailVisible(true)}
                        className="font-medium text-slate-300 hover:text-blue-400 transition-colors duration-300 underline underline-offset-2"
                      >
                        Click to reveal email
                      </button>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="font-medium text-slate-300">Dublin, Ireland 🇮🇪</div>
                  </div>
                </div>

              </div>

              <div className="pt-8 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Follow Me</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
