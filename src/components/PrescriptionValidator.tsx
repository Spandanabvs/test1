import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, X, Search, FileText } from 'lucide-react';

const PrescriptionValidator = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const prescriptions = [
    {
      id: 1,
      patient: 'Emily Johnson',
      medication: 'Lisinopril 10mg',
      prescriber: 'Dr. Smith',
      status: 'validated',
      riskLevel: 'low',
      interactions: 0,
      compliance: 95,
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      patient: 'Michael Brown',
      medication: 'Warfarin 5mg + Aspirin 81mg',
      prescriber: 'Dr. Johnson',
      status: 'warning',
      riskLevel: 'high',
      interactions: 1,
      compliance: 78,
      timestamp: '11:15 AM'
    },
    {
      id: 3,
      patient: 'Sarah Wilson',
      medication: 'Metformin 500mg',
      prescriber: 'Dr. Smith',
      status: 'validated',
      riskLevel: 'low',
      interactions: 0,
      compliance: 92,
      timestamp: '11:45 AM'
    },
    {
      id: 4,
      patient: 'David Lee',
      medication: 'Simvastatin 40mg',
      prescriber: 'Dr. Chen',
      status: 'flagged',
      riskLevel: 'medium',
      interactions: 2,
      compliance: 65,
      timestamp: '12:20 PM'
    }
  ];

  const alerts = [
    {
      type: 'interaction',
      message: 'Drug Interaction: Warfarin + Aspirin may increase bleeding risk',
      patient: 'Michael Brown',
      severity: 'high',
      recommendation: 'Consider alternative anticoagulation or reduce dosage'
    },
    {
      type: 'allergy',
      message: 'Allergy Alert: Patient allergic to Penicillin derivatives',
      patient: 'David Lee',
      severity: 'high',
      recommendation: 'Switch to non-penicillin antibiotic'
    },
    {
      type: 'dosage',
      message: 'Dosage Warning: Exceeds recommended maximum for patient weight',
      patient: 'Sarah Wilson',
      severity: 'medium',
      recommendation: 'Reduce dosage to 250mg twice daily'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'validated':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'flagged':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'medium':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Smart Prescription & Compliance Advisor</h2>
        <p className="text-gray-600">AI-powered prescription validation and drug interaction monitoring</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <Shield className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">247</span>
          </div>
          <p className="text-sm text-gray-600">Prescriptions Validated</p>
          <p className="text-xs text-green-600 font-medium">+12% this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">3</span>
          </div>
          <p className="text-sm text-gray-600">Critical Interactions</p>
          <p className="text-xs text-red-600 font-medium">Requires attention</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">99.2%</span>
          </div>
          <p className="text-sm text-gray-600">Validation Accuracy</p>
          <p className="text-xs text-green-600 font-medium">Industry leading</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <FileText className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">87%</span>
          </div>
          <p className="text-sm text-gray-600">Avg Compliance Rate</p>
          <p className="text-xs text-green-600 font-medium">+8% improvement</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Prescription Queue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Recent Prescriptions</h3>
              <div className="relative">
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search prescriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              {prescriptions.map((prescription) => (
                <div key={prescription.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{prescription.patient}</h4>
                      <p className="text-sm text-gray-600">{prescription.medication}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(prescription.riskLevel)}`}>
                        {prescription.riskLevel.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(prescription.status)}`}>
                        {prescription.status === 'validated' && <CheckCircle className="h-3 w-3 inline mr-1" />}
                        {prescription.status === 'warning' && <AlertTriangle className="h-3 w-3 inline mr-1" />}
                        {prescription.status === 'flagged' && <X className="h-3 w-3 inline mr-1" />}
                        {prescription.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Prescriber:</span>
                      <p className="font-medium">{prescription.prescriber}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Interactions:</span>
                      <p className={`font-medium ${prescription.interactions > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {prescription.interactions} found
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Compliance:</span>
                      <p className="font-medium">{prescription.compliance}%</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{prescription.timestamp}</span>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Critical Alerts</h3>
            </div>

            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="border-l-4 border-red-400 bg-red-50 p-3 rounded">
                  <div className="flex items-start space-x-2">
                    {getSeverityIcon(alert.severity)}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-1">{alert.message}</p>
                      <p className="text-xs text-gray-600 mb-2">Patient: {alert.patient}</p>
                      <p className="text-xs text-gray-700 font-medium">
                        Recommendation: {alert.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drug Database Search */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Drug Database</h3>
            <div className="relative mb-4">
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search drug interactions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2 text-sm">
              <div className="p-2 border border-gray-200 rounded hover:bg-gray-50">
                <span className="font-medium">Warfarin</span>
                <p className="text-gray-600 text-xs">124 known interactions</p>
              </div>
              <div className="p-2 border border-gray-200 rounded hover:bg-gray-50">
                <span className="font-medium">Simvastatin</span>
                <p className="text-gray-600 text-xs">67 known interactions</p>
              </div>
              <div className="p-2 border border-gray-200 rounded hover:bg-gray-50">
                <span className="font-medium">Metformin</span>
                <p className="text-gray-600 text-xs">23 known interactions</p>
              </div>
            </div>
          </div>

          {/* Compliance Tracking */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Insights</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Overall Compliance</span>
                  <span className="font-medium text-green-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Diabetes medications:</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hypertension drugs:</span>
                  <span className="font-medium">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Antibiotics:</span>
                  <span className="font-medium text-red-600">73%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionValidator;