import React from 'react';
import { TrendingUp, Activity, Heart, Brain, Users, AlertTriangle, BarChart3, PieChart } from 'lucide-react';

const HealthInsights = () => {
  const healthMetrics = [
    {
      title: 'Chronic Disease Management',
      value: '89%',
      trend: '+5.2%',
      patients: 156,
      color: 'blue',
      description: 'Patients with improved chronic condition outcomes'
    },
    {
      title: 'Preventive Care Adherence',
      value: '76%',
      trend: '+12.1%',
      patients: 203,
      color: 'green',
      description: 'Patients following preventive care recommendations'
    },
    {
      title: 'Risk Score Improvement',
      value: '67%',
      trend: '+8.7%',
      patients: 134,
      color: 'purple',
      description: 'Patients with decreased health risk scores'
    },
    {
      title: 'Follow-up Completion',
      value: '92%',
      trend: '+3.4%',
      patients: 178,
      color: 'orange',
      description: 'Patients completing recommended follow-ups'
    }
  ];

  const riskPredictions = [
    {
      condition: 'Diabetes Complications',
      riskLevel: 'high',
      affectedPatients: 23,
      confidence: 94,
      recommendation: 'Immediate intervention for HbA1c monitoring'
    },
    {
      condition: 'Cardiovascular Events',
      riskLevel: 'medium',
      affectedPatients: 45,
      confidence: 87,
      recommendation: 'Enhanced lifestyle counseling and medication review'
    },
    {
      condition: 'Medication Non-adherence',
      riskLevel: 'high',
      affectedPatients: 18,
      confidence: 91,
      recommendation: 'Implement medication reminder systems'
    },
    {
      condition: 'Hospital Readmission',
      riskLevel: 'medium',
      affectedPatients: 34,
      confidence: 82,
      recommendation: 'Strengthen discharge planning and follow-up'
    }
  ];

  const patientInsights = [
    {
      category: 'At-Risk Patients',
      count: 67,
      change: '+12',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      category: 'Stable Conditions',
      count: 189,
      change: '+23',
      icon: Heart,
      color: 'green'
    },
    {
      category: 'Needs Follow-up',
      count: 42,
      change: '-8',
      icon: Activity,
      color: 'yellow'
    },
    {
      category: 'Preventive Care Due',
      count: 78,
      change: '+15',
      icon: Users,
      color: 'blue'
    }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: type === 'bg' ? 'bg-blue-500' : 'text-blue-600',
      green: type === 'bg' ? 'bg-green-500' : 'text-green-600',
      purple: type === 'bg' ? 'bg-purple-500' : 'text-purple-600',
      orange: type === 'bg' ? 'bg-orange-500' : 'text-orange-600',
      red: type === 'bg' ? 'bg-red-500' : 'text-red-600',
      yellow: type === 'bg' ? 'bg-yellow-500' : 'text-yellow-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Predictive Health Insights & Analytics</h2>
        <p className="text-gray-600">AI-driven patient risk analysis and personalized care recommendations</p>
      </div>

      {/* Health Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${getColorClasses(metric.color)}`}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {metric.trend}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
            <p className="text-sm font-medium text-gray-700 mb-2">{metric.title}</p>
            <p className="text-xs text-gray-600">{metric.description}</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">{metric.patients} patients</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Risk Predictions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">AI Risk Predictions</h3>
            </div>

            <div className="space-y-4">
              {riskPredictions.map((prediction, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{prediction.condition}</h4>
                      <p className="text-sm text-gray-600">{prediction.affectedPatients} patients at risk</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700">Confidence</p>
                        <p className="text-lg font-bold text-blue-600">{prediction.confidence}%</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRiskColor(prediction.riskLevel)}`}>
                        {prediction.riskLevel.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Recommendation:</span> {prediction.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Categories */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Patient Categories</h3>
            </div>

            <div className="space-y-4">
              {patientInsights.map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getColorClasses(insight.color)} bg-opacity-20`}>
                        <Icon className={`h-4 w-4 ${getColorClasses(insight.color, 'text')}`} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{insight.category}</p>
                        <p className="text-sm text-gray-600">{insight.count} patients</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      insight.change.startsWith('+') ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                    }`}>
                      {insight.change}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Model Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Activity className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Model Performance</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Prediction Accuracy</span>
                  <span className="font-medium">94.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.7%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Data Processing</span>
                  <span className="font-medium">Real-time</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Model Training</span>
                  <span className="font-medium">15.2K records</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last Updated</span>
                <span className="font-medium text-green-600">2 minutes ago</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Generate Risk Report</div>
                <div className="text-sm text-gray-600">Create comprehensive risk analysis</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Schedule Interventions</div>
                <div className="text-sm text-gray-600">Auto-schedule high-risk patient follow-ups</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Export Analytics</div>
                <div className="text-sm text-gray-600">Download detailed insights report</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsights;