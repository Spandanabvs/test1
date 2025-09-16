import React from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Brain,
  FileText,
  Shield
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Patients',
      value: '247',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Appointments Today',
      value: '42',
      change: '+8%',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Avg. Wait Time',
      value: '8 min',
      change: '-23%',
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      title: 'Patient Satisfaction',
      value: '94%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const aiModules = [
    {
      name: 'Patient Triage AI',
      status: 'active',
      processed: '156 patients',
      accuracy: '97.3%',
      icon: Brain,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Appointment Optimizer',
      status: 'active',
      processed: '42 appointments',
      accuracy: '89.1%',
      icon: Calendar,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Prescription Validator',
      status: 'active',
      processed: '73 prescriptions',
      accuracy: '99.8%',
      icon: Shield,
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Documentation AI',
      status: 'active',
      processed: '28 reports',
      accuracy: '94.7%',
      icon: FileText,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const recentAlerts = [
    {
      type: 'urgent',
      message: 'High-risk patient flagged for immediate attention',
      time: '2 minutes ago',
      patient: 'John D.'
    },
    {
      type: 'warning',
      message: 'Potential drug interaction detected',
      time: '5 minutes ago',
      patient: 'Sarah M.'
    },
    {
      type: 'info',
      message: 'Appointment rescheduled automatically',
      time: '12 minutes ago',
      patient: 'Mike R.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Real-time clinic performance and AI insights</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* AI Modules Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Modules Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${module.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{module.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500">Active</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processed:</span>
                    <span className="font-medium">{module.processed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="font-medium text-green-600">{module.accuracy}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Alerts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Alerts</h3>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-1 rounded-full ${
                  alert.type === 'urgent' ? 'bg-red-100 text-red-600' :
                  alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {alert.type === 'urgent' ? <AlertTriangle className="h-4 w-4" /> : 
                   alert.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                   <CheckCircle className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">Patient: {alert.patient}</span>
                    <span className="text-xs text-gray-400">{alert.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">System Performance</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">CPU Usage</span>
                <span className="font-medium">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Memory Usage</span>
                <span className="font-medium">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">AI Model Load</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">System Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;