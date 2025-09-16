import React, { useState } from 'react';
import { Brain, MessageSquare, AlertTriangle, Clock, User, Heart, Thermometer } from 'lucide-react';

const PatientTriage = () => {
  const [chatInput, setChatInput] = useState('');
  const [currentPatient, setCurrentPatient] = useState(null);

  const triageQueue = [
    {
      id: 1,
      name: 'Emily Johnson',
      age: 34,
      symptoms: 'Chest pain, shortness of breath',
      priority: 'urgent',
      riskScore: 87,
      estimatedWait: '5 min',
      vitals: { temp: '99.2°F', bp: '140/90', hr: '102 bpm' }
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 28,
      symptoms: 'Fever, cough, fatigue',
      priority: 'moderate',
      riskScore: 54,
      estimatedWait: '25 min',
      vitals: { temp: '101.5°F', bp: '120/80', hr: '88 bpm' }
    },
    {
      id: 3,
      name: 'Sarah Williams',
      age: 45,
      symptoms: 'Headache, nausea',
      priority: 'low',
      riskScore: 23,
      estimatedWait: '45 min',
      vitals: { temp: '98.6°F', bp: '118/75', hr: '72 bpm' }
    },
    {
      id: 4,
      name: 'Robert Davis',
      age: 67,
      symptoms: 'Dizziness, confusion',
      priority: 'urgent',
      riskScore: 92,
      estimatedWait: '2 min',
      vitals: { temp: '97.8°F', bp: '160/95', hr: '110 bpm' }
    }
  ];

  const chatHistory = [
    { type: 'ai', message: 'Hello! I\'m your AI Triage Assistant. Can you please describe your symptoms?' },
    { type: 'patient', message: 'I\'ve been having chest pain and feeling short of breath for the past hour.' },
    { type: 'ai', message: 'I understand. On a scale of 1-10, how would you rate your chest pain?' },
    { type: 'patient', message: 'About 7 or 8. It\'s pretty intense.' },
    { type: 'ai', message: 'Thank you. Based on your symptoms, I\'m flagging this as urgent. A physician will see you shortly.' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return 'text-red-600 bg-red-100';
    if (score >= 50) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Patient Triage</h2>
        <p className="text-gray-600">Intelligent symptom analysis and prioritization system</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Triage Queue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Patient Queue</h3>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">AI Sorted by Risk Score</span>
              </div>
            </div>

            <div className="space-y-4">
              {triageQueue.map((patient) => (
                <div 
                  key={patient.id} 
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow cursor-pointer"
                  onClick={() => setCurrentPatient(patient)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                        <p className="text-sm text-gray-600">Age: {patient.age}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(patient.priority)}`}>
                        {patient.priority.toUpperCase()}
                      </span>
                      <div className={`px-2 py-1 rounded text-xs font-bold ${getRiskScoreColor(patient.riskScore)}`}>
                        Risk: {patient.riskScore}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Symptoms</p>
                      <p className="text-sm text-gray-600">{patient.symptoms}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Vital Signs</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Thermometer className="h-3 w-3" />
                          <span>{patient.vitals.temp}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{patient.vitals.hr}</span>
                        </span>
                        <span>{patient.vitals.bp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Estimated wait: {patient.estimatedWait}</span>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">AI Triage Chat</h3>
            </div>

            <div className="h-80 overflow-y-auto space-y-3 mb-4">
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'patient' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.type === 'patient'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type patient response..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* AI Analysis Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis</h3>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-red-800">High Risk Detected</span>
                </div>
                <p className="text-sm text-red-700">
                  Chest pain with shortness of breath requires immediate attention. Possible cardiac event.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Symptom Severity:</span>
                  <span className="font-medium text-red-600">High (8/10)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Urgency Level:</span>
                  <span className="font-medium text-red-600">Immediate</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium text-green-600">97.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTriage;