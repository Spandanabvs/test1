import React, { useState } from 'react';
import { Activity, ArrowRight, Clock, CheckCircle, AlertTriangle, Users } from 'lucide-react';

const WorkflowChart = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const workflowSteps = [
    {
      id: 'checkin',
      title: 'Patient Check-in',
      description: 'Patients arrive and check in at the front desk',
      type: 'start',
      position: { x: 100, y: 100 },
      metrics: { processed: 247, avgTime: '2 min', efficiency: 95 }
    },
    {
      id: 'triage',
      title: 'AI-powered Symptom Assessment',
      description: 'Conversational AI collects patient symptoms and medical history',
      type: 'ai',
      position: { x: 350, y: 100 },
      metrics: { processed: 247, avgTime: '5 min', efficiency: 97 }
    },
    {
      id: 'scheduling',
      title: 'AI-assisted Triage & Appointment Scheduling',
      description: 'AI prioritizes patients and optimizes appointment scheduling',
      type: 'ai',
      position: { x: 600, y: 100 },
      metrics: { processed: 247, avgTime: '1 min', efficiency: 89 }
    },
    {
      id: 'virtual_coding',
      title: 'Virtual Coding Assistant',
      description: 'AI assists with medical coding and documentation',
      type: 'ai',
      position: { x: 850, y: 100 },
      metrics: { processed: 156, avgTime: '3 min', efficiency: 94 }
    },
    {
      id: 'non_urgent',
      title: 'Non-Urgent Case',
      description: 'Standard consultation pathway for non-urgent patients',
      type: 'standard',
      position: { x: 250, y: 300 },
      metrics: { processed: 189, avgTime: '25 min', efficiency: 92 }
    },
    {
      id: 'urgent_case',
      title: 'Urgent Case',
      description: 'Fast-track pathway for urgent medical cases',
      type: 'urgent',
      position: { x: 650, y: 300 },
      metrics: { processed: 58, avgTime: '8 min', efficiency: 96 }
    },
    {
      id: 'consultation',
      title: 'Consultation with Physician',
      description: 'AI-informed diagnosis & treatment suggestions',
      type: 'consultation',
      position: { x: 150, y: 450 },
      metrics: { processed: 189, avgTime: '15 min', efficiency: 93 }
    },
    {
      id: 'immediate_consult',
      title: 'Immediate Physician Consultation',
      description: 'Emergency consultation for urgent cases',
      type: 'urgent',
      position: { x: 550, y: 450 },
      metrics: { processed: 58, avgTime: '5 min', efficiency: 98 }
    },
    {
      id: 'diagnostic',
      title: 'AI-supported Diagnostic Imaging/Lab Tests',
      description: 'AI assists with diagnostic test interpretation',
      type: 'ai',
      position: { x: 750, y: 450 },
      metrics: { processed: 98, avgTime: '12 min', efficiency: 91 }
    },
    {
      id: 'prescription',
      title: 'Automated Prescription & Follow-up Reminders',
      description: 'AI validates prescriptions and sets follow-up reminders',
      type: 'ai',
      position: { x: 350, y: 600 },
      metrics: { processed: 167, avgTime: '2 min', efficiency: 99 }
    },
    {
      id: 'data_analysis',
      title: 'AI-driven Data Analysis & Personalized Health Recommendations',
      description: 'Machine learning provides personalized care insights',
      type: 'ai',
      position: { x: 150, y: 750 },
      metrics: { processed: 247, avgTime: '1 min', efficiency: 95 }
    },
    {
      id: 'discharge',
      title: 'Patient Discharge & Ongoing Monitoring',
      description: 'Patient care continues with AI-powered monitoring',
      type: 'end',
      position: { x: 550, y: 750 },
      metrics: { processed: 247, avgTime: '3 min', efficiency: 94 }
    }
  ];

  const connections = [
    { from: 'checkin', to: 'triage' },
    { from: 'triage', to: 'scheduling' },
    { from: 'scheduling', to: 'virtual_coding' },
    { from: 'scheduling', to: 'non_urgent' },
    { from: 'scheduling', to: 'urgent_case' },
    { from: 'non_urgent', to: 'consultation' },
    { from: 'urgent_case', to: 'immediate_consult' },
    { from: 'urgent_case', to: 'diagnostic' },
    { from: 'consultation', to: 'prescription' },
    { from: 'immediate_consult', to: 'prescription' },
    { from: 'diagnostic', to: 'prescription' },
    { from: 'prescription', to: 'data_analysis' },
    { from: 'prescription', to: 'discharge' },
    { from: 'data_analysis', to: 'discharge' }
  ];

  const getStepColor = (type) => {
    switch (type) {
      case 'start':
        return 'bg-green-500 border-green-600';
      case 'ai':
        return 'bg-purple-500 border-purple-600';
      case 'urgent':
        return 'bg-red-500 border-red-600';
      case 'consultation':
        return 'bg-blue-500 border-blue-600';
      case 'standard':
        return 'bg-yellow-500 border-yellow-600';
      case 'end':
        return 'bg-gray-500 border-gray-600';
      default:
        return 'bg-gray-400 border-gray-500';
    }
  };

  const getStepIcon = (type) => {
    switch (type) {
      case 'start':
        return <Users className="h-4 w-4 text-white" />;
      case 'ai':
        return <Activity className="h-4 w-4 text-white" />;
      case 'urgent':
        return <AlertTriangle className="h-4 w-4 text-white" />;
      case 'consultation':
        return <CheckCircle className="h-4 w-4 text-white" />;
      case 'end':
        return <CheckCircle className="h-4 w-4 text-white" />;
      default:
        return <Clock className="h-4 w-4 text-white" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Smart Clinic Workflow Visualization</h2>
        <p className="text-gray-600">Interactive flowchart showing AI-optimized patient journey</p>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { type: 'start', label: 'Start Point' },
            { type: 'ai', label: 'AI-Powered' },
            { type: 'urgent', label: 'Urgent Care' },
            { type: 'consultation', label: 'Consultation' },
            { type: 'standard', label: 'Standard Care' },
            { type: 'end', label: 'End Point' }
          ].map((item) => (
            <div key={item.type} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded border-2 ${getStepColor(item.type)}`}>
                {getStepIcon(item.type)}
              </div>
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Workflow Chart */}
        <div className="xl:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="relative" style={{ height: '900px', minWidth: '1000px' }}>
              {/* Connections */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {connections.map((connection, index) => {
                  const fromStep = workflowSteps.find(s => s.id === connection.from);
                  const toStep = workflowSteps.find(s => s.id === connection.to);
                  if (!fromStep || !toStep) return null;

                  return (
                    <line
                      key={index}
                      x1={fromStep.position.x + 60}
                      y1={fromStep.position.y + 30}
                      x2={toStep.position.x + 60}
                      y2={toStep.position.y + 30}
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  );
                })}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#e5e7eb"
                    />
                  </marker>
                </defs>
              </svg>

              {/* Workflow Steps */}
              {workflowSteps.map((step) => (
                <div
                  key={step.id}
                  className="absolute"
                  style={{ 
                    left: step.position.x, 
                    top: step.position.y,
                    zIndex: 2
                  }}
                >
                  <div
                    className={`w-32 h-20 rounded-lg border-2 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedStep === step.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    } ${getStepColor(step.type)}`}
                    onClick={() => setSelectedStep(step.id)}
                  >
                    <div className="p-2 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        {getStepIcon(step.type)}
                        <span className="text-xs text-white font-medium">
                          {step.metrics.processed}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-white font-medium leading-tight">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Details Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step Details</h3>
            
            {selectedStep ? (
              <div className="space-y-4">
                {(() => {
                  const step = workflowSteps.find(s => s.id === selectedStep);
                  return (
                    <>
                      <div className={`p-3 rounded-lg border-2 ${getStepColor(step.type)}`}>
                        <div className="flex items-center space-x-2 mb-2">
                          {getStepIcon(step.type)}
                          <h4 className="font-semibold text-white">{step.title}</h4>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Patients Processed:</span>
                            <span className="font-medium">{step.metrics.processed}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Avg Processing Time:</span>
                            <span className="font-medium">{step.metrics.avgTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Efficiency Score:</span>
                            <span className="font-medium text-green-600">{step.metrics.efficiency}%</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Performance</span>
                            <span className="font-medium">{step.metrics.efficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${step.metrics.efficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                Click on any workflow step to view detailed metrics and information
              </p>
            )}
          </div>

          {/* Overall Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Patients:</span>
                <span className="font-medium">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Patient Journey:</span>
                <span className="font-medium">42 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">AI Interventions:</span>
                <span className="font-medium text-purple-600">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Workflow Efficiency:</span>
                <span className="font-medium text-green-600">94.2%</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Export Workflow Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowChart;