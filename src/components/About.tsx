import React from 'react';
import { Code, Cloud, Cpu, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "RPA & Automation",
      description: "2+ years designing enterprise UiPath solutions across healthcare, insurance, and HR domains"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Backend",
      description: "Software Engineer at Microsoft Azure - focused on scalable cloud systems and backend engineering"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Engineering",
      description: "Python, C#, .NET, JavaScript, SQL - OOP, system design, CI/CD, and agile delivery"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stakeholder-Driven",
      description: "Strong track record of requirements gathering, documentation, and cross-functional collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <div className="bg-slate-800/80 p-6 rounded-lg font-mono text-sm mb-6">
                <div className="text-blue-400 mb-2">class AboutDeergh:</div>
                <div className="text-slate-300 ml-4 mb-2">def __init__(self):</div>
                <div className="text-slate-300 ml-8">self.name = "Deergh Kataria"</div>
                <div className="text-slate-300 ml-8">self.location = "Dublin, Ireland 🇮🇪🇪🇺"</div>
                <div className="text-slate-300 ml-8">self.education = "MSc Data & Computational Science @ UCD"</div>
                <div className="text-slate-300 ml-8">self.current_role = "Software Engineer @ Microsoft Azure"</div>
                <div className="text-slate-300 ml-8">self.background = ["RPA & Automation", "Healthcare Tech", "Backend Dev"]</div>
                <div className="text-slate-300 ml-8">self.stack = ["Python", "C#", ".NET", "JavaScript", "SQL", "UiPath"]</div>
                <div className="text-slate-300 ml-8">self.fun_fact = "As a kid, I wanted to be a Filmmaker! 🎬"</div>
                <div className="text-slate-300 ml-4 mt-4 mb-2">def say_hi(self):</div>
                <div className="text-slate-300 ml-8">print("Let's build something great together!")</div>
                <div className="text-blue-400 mt-4">me = AboutDeergh()</div>
                <div className="text-blue-400">me.say_hi()</div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I started my career building intelligent automation solutions with UiPath across regulated 
                industries like healthcare and insurance. With an MSc in Data and Computational Science from 
                University College Dublin and 2+ years of hands-on engineering experience, I'm now stepping 
                into cloud and backend infrastructure as a Software Engineer on the Microsoft Azure team - bringing a 
                systems-thinking mindset shaped by real-world automation at scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-slate-700/50"
              >
                <div className="text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-700/30 backdrop-blur-sm px-8 py-6 rounded-2xl border border-slate-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2+</div>
              <div className="text-slate-300 text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">MSc</div>
              <div className="text-slate-300 text-sm">UCD Dublin</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">8</div>
              <div className="text-slate-300 text-sm">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
