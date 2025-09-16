import React, { useState } from 'react';
import { 
  Activity, 
  Users, 
  Calendar, 
  FileText, 
  Brain, 
  Shield, 
  TrendingUp, 
  MessageSquare,
  Clock,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Stethoscope,
  Settings,
  Bell
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import PatientTriage from './components/PatientTriage';
import AppointmentOptimizer from './components/AppointmentOptimizer';
import PrescriptionValidator from './components/PrescriptionValidator';
import HealthInsights from './components/HealthInsights';
import WorkflowChart from './components/WorkflowChart';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'triage', label: 'AI Triage', icon: Brain },
    { id: 'appointments', label: 'Scheduling', icon: Calendar },
    { id: 'prescriptions', label: 'Prescriptions', icon: Shield },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'workflow', label: 'Workflow', icon: Activity }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'triage':
        return <PatientTriage />;
      case 'appointments':
        return <AppointmentOptimizer />;
      case 'prescriptions':
        return <PrescriptionValidator />;
      case 'insights':
        return <HealthInsights />;
      case 'workflow':
        return <WorkflowChart />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">ClinicFlow AI</h1>
                  <p className="text-sm text-gray-500">Smart Healthcare Workflow</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  DR
                </div>
                <span className="text-sm font-medium text-gray-700">Dr. Smith</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;