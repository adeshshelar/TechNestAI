import React, { useState } from 'react';
import {
  LayoutDashboard,
  Code,
  MessageCircleQuestion,
  Mail,
  Lightbulb,
  ClipboardList,
} from "lucide-react";
import './index.css';
import Dashboard from './components/Dashboard';
import EmailReplyGenerator from './components/EmailReplyGenerator';
import ProjectGenerator from './components/ProjectGenerator';
import JobDescAnalyzer from './components/JobDescAnalyzer';
import QuestionGenerator from './components/QuestionGenerator';
import CodeGenerator from './components/CodeGenerator';

function App() {

  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Email Reply Generator':
        return <EmailReplyGenerator />;
      case 'Project Idea Generator':
        return <ProjectGenerator />;
      case 'Job Description Analyzer':
        return <JobDescAnalyzer />;
      case 'Interview Question Generator':
        return <QuestionGenerator />;
      case 'Code Snippet Generator':
        return <CodeGenerator />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-gray-800 font-semibold text-white p-5">
        <img src="/technest.png" alt="" className='w-48 mb-3' />
        <ul className="space-y-4 mt-6">
                
          <li
            className={`p-3 flex items-center space-x-2 rounded-lg cursor-pointer ${
              selectedOption === "Dashboard" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Dashboard")}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </li>

          <li
            className={`p-3 flex items-center space-x-2 rounded-lg cursor-pointer ${
              selectedOption === "Code Snippet Generator" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Code Snippet Generator")}
          >
            <Code size={20} />
            <span>Code Snippet Generator</span>
          </li>

          <li
            className={`p-3 flex items-center space-x-2 rounded-lg cursor-pointer ${
              selectedOption === "Interview Question Generator" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Interview Question Generator")}
          >
            <MessageCircleQuestion size={20} />
            <span>Question Generator</span>
          </li>

          <li
            className={`p-3 flex items-center space-x-2 rounded-lg cursor-pointer ${
              selectedOption === "Email Reply Generator" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Email Reply Generator")}
          >
            <Mail size={20} />
            <span>Email Reply Generator</span>
          </li>

          <li
            className={`p-3 flex items-center space-x-2 rounded-lg cursor-pointer ${
              selectedOption === "Project Idea Generator" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Project Idea Generator")}
          >
            <Lightbulb size={20} />
            <span>Project Idea Generator</span>
          </li>

          <li
            className={`p-3 flex items-center space-x-2 rounded-lg cursor-pointer ${
              selectedOption === "Job Description Analyzer" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Job Description Analyzer")}
          >
            <ClipboardList size={20} />
            <span>Job Description Analyzer</span>
          </li>
                    
        </ul>
        <div className="text-sm text-gray-400 text-center mt-36">
    © 2025 TechnestAI. All rights reserved.
  </div>
      </div>
      

      {/* Main Content */}
      <div className="w-[1114px] flex-1 p-5">{renderComponent()}</div>
    </div>
  );
}

export default App;
