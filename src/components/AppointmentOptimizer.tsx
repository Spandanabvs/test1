import React, { useState } from 'react';
import { Calendar, Clock, Users, TrendingUp, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

const AppointmentOptimizer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const appointments = [
    {
      id: 1,
      time: '09:00',
      patient: 'Sarah Johnson',
      type: 'Check-up',
      duration: 30,
      status: 'confirmed',
      optimized: true
    },
    {
      id: 2,
      time: '09:30',
      patient: 'Michael Brown',
      type: 'Follow-up',
      duration: 20,
      status: 'confirmed',
      optimized: false
    },
    {
      id: 3,
      time: '10:00',
      patient: 'Emma Wilson',
      type: 'Consultation',
      duration: 45,
      status: 'pending',
      optimized: true
    },
    {
      id: 4,
      time: '11:00',
      patient: 'David Lee',
      type: 'Urgent Care',
      duration: 30,
      status: 'confirmed',
      optimized: true
    }
  ];

  const optimizations = [
    {
      type: 'schedule_gap',
      message: 'Gap detected: 15-minute break added between complex procedures',
      impact: '+12% efficiency',
      time: '2 min ago'
    },
    {
      type: 'no_show_prediction',
      message: 'High no-show probability for 2:30 PM slot - backup patient suggested',
      impact: 'Prevented 30min downtime',
      time: '5 min ago'
    },
    {
      type: 'resource_optimization',
      message: 'Room utilization optimized - moved procedure to better equipped room',
      impact: '+8% patient satisfaction',
      time: '12 min ago'
    }
  ];

  const metrics = [
    { label: 'Today\'s Efficiency', value: '94%', change: '+12%', color: 'text-green-600' },
    { label: 'No-Show Rate', value: '3.2%', change: '-45%', color: 'text-green-600' },
    { label: 'Avg Wait Time', value: '8 min', change: '-23%', color: 'text-green-600' },
    { label: 'Patient Throughput', value: '47/day', change: '+18%', color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dynamic Appointment Optimization</h2>
        <p className="text-gray-600">AI-powered scheduling with reinforcement learning</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
              <span className={`text-sm font-medium ${metric.color}`}>{metric.change}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Schedule View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Today's Schedule</h3>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="p-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="text-lg font-semibold text-gray-900 w-16">
                        {appointment.time}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{appointment.patient}</h4>
                        <p className="text-sm text-gray-600">{appointment.type} • {appointment.duration} min</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {appointment.optimized && (
                        <div className="flex items-center space-x-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          <TrendingUp className="h-3 w-3" />
                          <span className="text-xs font-medium">AI Optimized</span>
                        </div>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.duration} minutes</span>
                    </span>
                    <span>Room 1</span>
                    <span>Dr. Smith</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Optimization Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Live Optimizations</h3>
            </div>

            <div className="space-y-4">
              {optimizations.map((opt, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-3">
                  <div className="flex items-start space-x-2 mb-2">
                    {opt.type === 'schedule_gap' && <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />}
                    {opt.type === 'no_show_prediction' && <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />}
                    {opt.type === 'resource_optimization' && <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-1">{opt.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-600 font-medium">{opt.impact}</span>
                        <span className="text-xs text-gray-500">{opt.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Optimize Today's Schedule</div>
                <div className="text-sm text-gray-600">AI will rearrange for maximum efficiency</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Fill Empty Slots</div>
                <div className="text-sm text-gray-600">Suggest patients for available times</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Predict No-Shows</div>
                <div className="text-sm text-gray-600">Analyze patterns for tomorrow</div>
              </button>
            </div>
          </div>

          {/* Learning Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Model Accuracy</span>
                  <span className="font-medium">89.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '89.3%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Training Data</span>
                  <span className="font-medium">12.4K appointments</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptimizer;