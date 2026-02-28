import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Axxess Healthcare Automation",
      description: "Dispatcher-performer RPA architecture processing 100+ healthcare agencies. Converts SharePoint Excel rows into Orchestrator queue items, automates QA data extraction, and uses Excel Power Query with custom M scripts to clean 10,000+ row datasets. Integrated API-driven template generation and Azure Blob Storage uploads with scheduled execution 3x daily.",
      category: "Healthcare · RPA",
      tech: ["UiPath", "SharePoint", "Excel Power Query", "LINQ", "Azure Blob Storage", "APIs"],
      impact: "10,000+ rows processed per run"
    },
    {
      title: "Ascend Patient Intake Bot",
      description: "JSON-driven healthcare intake bot populating 450+ patient assessment fields on the Ascend portal. Built using a selector-independent approach via UiPath Inject JS activities, eliminating UI selector dependency. Handles conditional workflow activation and complex LINQ-based JSON parsing for dynamic field mapping across multiple assessment sections.",
      category: "Healthcare · RPA",
      tech: ["UiPath", "Inject JS", "JavaScript", "JSON", "LINQ", "Chrome DevTools"],
      impact: "End-to-end form completion in seconds"
    },
    {
      title: "SAP PI/PO Channel & Message Monitoring",
      description: "24/7 automated integration monitoring using Orchestrator queues for early detection of SAP message failures. Executes log extraction, validation, and root cause analysis to improve error triage and proactive incident response across production interfaces.",
      category: "Enterprise Integration · RPA",
      tech: ["UiPath", "SAP", "Orchestrator Queues", "Excel"],
      impact: "417+ hours saved annually"
    },
    {
      title: "Policy Download & Management Automation",
      description: "Scalable Dispatcher-Performer solution using REFramework with queue-driven parallelization for policy retrieval. Automates extraction, renaming, and classification of .zip contents into a state-based folder structure, converting a fragmented manual process into a fully automated pipeline.",
      category: "Insurance · RPA",
      tech: ["UiPath", "REFramework", "Orchestrator Queues"],
      impact: "99.9% accuracy · 15+ hrs/week saved"
    },
    {
      title: "Healthcare Data Migration & Processing",
      description: "End-to-end data ingestion pipeline for .csv files performing data cleansing, normalization, and formatting for healthcare portals. Uses LINQ-based filtering to dynamically split a master dataset into upload-ready Excel files for BEARS and HCHB portals, eliminating manual processing for 1,000+ patient records monthly.",
      category: "Healthcare · Data Engineering",
      tech: ["UiPath", "DataTables", "LINQ", "Excel"],
      impact: "8 hrs saved per batch · 1,000+ records/month"
    },
    {
      title: "Performance-Based Employee Communication",
      description: "Dispatcher-Performer solution that scans inboxes, extracts Excel attachments, parses data, and classifies employee performance status. Identifies Risk and Jeopardy categories and triggers automated, personalized email alerts to managers for 500+ contractors.",
      category: "HR · RPA",
      tech: ["UiPath", "REFramework", "Email Automation", "Excel"],
      impact: "16+ hrs saved per quarter · 500+ contractors"
    },
    {
      title: "Defect & Incident Reporting Automation",
      description: "Automated extraction, consolidation, and distribution of incident and defect reports, reducing dependency on manual data processing. Integrates audit logs, retry logic, and queue-based processing for fault-tolerant and compliance-ready reporting.",
      category: "Operations · RPA",
      tech: ["UiPath", "Excel", "Email Automation", "Orchestrator Queues"],
      impact: "42+ hours saved annually"
    },
    {
      title: "Time & Expense Workflow Submission",
      description: "Cloud-based Power Automate flow automating weekly Time & Expense submissions using standardized Excel templates. Implements data validation rules, conditional logic, and approval routing for exceptions, with automated submission status emails for full transparency.",
      category: "HR · Cloud Automation",
      tech: ["Power Automate", "Excel Online", "Outlook", "Cloud Flows"],
      impact: "Zero missed submissions · Full audit trail"
    }
  ];

  const categoryColors: Record<string, string> = {
    "Healthcare · RPA": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    "Enterprise Integration · RPA": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Insurance · RPA": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Healthcare · Data Engineering": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    "HR · RPA": "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "Operations · RPA": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "HR · Cloud Automation": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Enterprise automation solutions built across healthcare, insurance, HR, and operations — 
            each designed for production reliability and measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600 overflow-hidden group hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full border font-medium ${categoryColors[project.category] ?? 'bg-blue-500/20 text-blue-400 border-blue-500/30'}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Impact highlight */}
                <div className="mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-wide">Impact</p>
                  <p className="text-slate-200 text-sm mt-0.5">{project.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-600/50 text-slate-300 text-xs rounded-full border border-slate-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DeerghKataria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
