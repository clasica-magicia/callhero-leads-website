```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [calculatorType, setCalculatorType] = useState('roi');
  const [roiInputs, setRoiInputs] = useState({
    monthlyMarketingBudget: 3000,
    currentLeadCost: 75,
    conversionRate: 40,
    averageJobValue: 250
  });
  const [breakEvenInputs, setBreakEvenInputs] = useState({
    monthlyFixedCosts: 5000,
    averageJobProfit: 150,
    leadCost: 65
  });
  const [serviceArea, setServiceArea] = useState('');
  const [leadVolume, setLeadVolume] = useState(50);

  const plans = [
    {
      id: 'direct',
      name: 'Direct Call Leads',
      price: '$40-$55',
      description: 'Get direct calls from potential customers in your service area',
      features: [
        'Geo-targeted microsite & ad campaign',
        'Call tracking & routing',
        'Basic lead filtering',
        'Client dashboard with analytics',
        'Call recordings',
        'Payment & subscription management',
        'Email notifications',
        'Appliance repair specific targeting',
        'Competitor analysis for your market',
        'Seasonal campaign optimization'
      ],
      exclusivity: 'Optional exclusivity available',
      bestFor: 'Businesses just starting with lead gen'
    },
    {
      id: 'qualified',
      name: 'Pre-Qualified Calls',
      price: '$55-$75',
      description: 'Receive calls that have been pre-screened for quality',
      features: [
        'Everything in Direct Call Leads',
        'Advanced lead filtering',
        'Lead scoring system',
        'Priority call routing',
        'Customizable call scripts',
        'SMS notifications',
        'Weekly performance reports',
        'Appliance type filtering (washer, dryer, fridge, etc.)',
        'Urgency level identification',
        'Customer budget qualification'
      ],
      exclusivity: 'Included in price',
      bestFor: 'Established businesses looking for higher quality leads'
    },
    {
      id: 'confirmed',
      name: 'Confirmed Appointment Bookings',
      price: '$90-$150',
      priceDetails: [
        '$90 for standard appointments',
        '$120 for same-day appointments',
        '$150 for emergency/after-hours'
      ],
      description: 'Only pay for calls that result in booked appointments',
      features: [
        'Everything in Pre-Qualified Calls',
        'Appointment scheduling integration',
        'Calendar sync with your business',
        'Automated appointment reminders',
        'Cancellation alerts',
        'Downloadable reports',
        'Dedicated account manager',
        'Appliance diagnostic pre-screening',
        'Parts availability verification',
        'Customer loyalty program integration'
      ],
      exclusivity: 'Guaranteed exclusivity in your area',
      bestFor: 'Premium service providers with high conversion rates'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      business: 'Appliance Repair Pros',
      location: 'Austin, TX',
      quote: 'CallHero has transformed our business. We went from 5-10 calls per week to 30+ qualified leads, and our revenue increased by 200% in just 3 months.',
      rating: 5,
      beforeStats: { monthlyRevenue: 8000, monthlyLeads: 20 },
      afterStats: { monthlyRevenue: 24000, monthlyLeads: 65 }
    },
    {
      name: 'Sarah Johnson',
      business: 'QuickFix Appliance Service',
      location: 'Denver, CO',
      quote: 'The pre-qualified call tier is worth every penny. We\'re only getting calls from serious customers ready to book, which has dramatically improved our close rate.',
      rating: 5,
      beforeStats: { monthlyRevenue: 6500, monthlyLeads: 15 },
      afterStats: { monthlyRevenue: 18500, monthlyLeads: 45 }
    },
    {
      name: 'Mike Rodriguez',
      business: 'Elite Appliance Repair',
      location: 'Miami, FL',
      quote: 'The confirmed appointment booking service has been a game-changer. We only pay for actual booked jobs, which makes our marketing budget predictable and effective.',
      rating: 5,
      beforeStats: { monthlyRevenue: 12000, monthlyLeads: 30 },
      afterStats: { monthlyRevenue: 32000, monthlyLeads: 75 }
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I start receiving leads?',
      answer: 'Most appliance repair clients begin receiving leads within 7-10 business days after onboarding. We need this time to set up your geo-targeted microsite, create customized ad campaigns focused on appliance repair keywords, and configure call tracking and routing specific to your business and service area.'
    },
    {
      question: 'What types of appliance repair leads do you provide?',
      answer: 'We specialize in all types of appliance repair leads including refrigerators, washers, dryers, dishwashers, ovens, stoves, microwaves, and more. Our system can filter leads by appliance type, brand, urgency level, and customer budget to ensure you receive the most relevant leads for your business.'
    },
    {
      question: 'Can I target specific appliance brands or types?',
      answer: 'Yes! Our advanced targeting allows you to focus on specific appliance types (like only refrigerators or washers) or even specific brands (Samsung, LG, Whirlpool, etc.). This ensures you receive leads for appliances you specialize in and have parts for, maximizing your conversion rate and profitability.'
    },
    {
      question: 'How do you ensure lead quality for appliance repair businesses?',
      answer: 'We use a multi-layered approach including targeted ad campaigns using appliance-specific keywords, call screening questions tailored to appliance repair (age of appliance, symptoms, brand, etc.), and continuous optimization based on your feedback. Our system learns which types of appliance repair leads convert best for your business and prioritizes those.'
    },
    {
      question: 'Do you offer seasonal campaign adjustments for appliance repair?',
      answer: 'Absolutely! We understand that appliance repair demand fluctuates seasonally (more AC and refrigerator issues in summer, more dryer and oven issues in winter). Our team proactively adjusts your campaigns based on seasonal trends to ensure you receive the right type of leads at the right time of year.'
    }
  ];

  const resources = [
    {
      title: 'The Ultimate Guide to Appliance Repair Marketing',
      excerpt: 'Learn proven strategies to attract more customers to your appliance repair business.',
      category: 'Marketing',
      date: 'June 15, 2023'
    },
    {
      title: 'How to Price Your Appliance Repair Services for Maximum Profit',
      excerpt: 'Find the sweet spot in your pricing to attract customers while maintaining healthy margins.',
      category: 'Pricing',
      date: 'May 22, 2023'
    },
    {
      title: 'Top 10 Most Common Appliance Problems and How to Fix Them',
      excerpt: 'Stay ahead of customer needs with insights into the most frequent appliance issues.',
      category: 'Technical',
      date: 'April 30, 2023'
    },
    {
      title: 'Building Customer Loyalty in the Appliance Repair Industry',
      excerpt: 'Strategies to turn one-time customers into repeat clients and brand advocates.',
      category: 'Customer Service',
      date: 'March 18, 2023'
    }
  ];

  const applianceStats = [
    { appliance: 'Refrigerators', failureRate: '35%', avgRepairCost: '$220', commonIssues: 'Not cooling, leaking, noisy' },
    { appliance: 'Washers', failureRate: '25%', avgRepairCost: '$180', commonIssues: 'Not spinning, leaking, not draining' },
    { appliance: 'Dryers', failureRate: '20%', avgRepairCost: '$160', commonIssues: 'Not heating, not tumbling, noisy' },
    { appliance: 'Dishwashers', failureRate: '12%', avgRepairCost: '$150', commonIssues: 'Not cleaning, leaking, not draining' },
    { appliance: 'Ovens/Ranges', failureRate: '8%', avgRepairCost: '$190', commonIssues: 'Not heating, uneven cooking, error codes' }
  ];

  // ROI Calculator
  const calculateROI = () => {
    const { monthlyMarketingBudget, currentLeadCost, conversionRate, averageJobValue } = roiInputs;
    const currentLeads = monthlyMarketingBudget / currentLeadCost;
    const currentCustomers = currentLeads * (conversionRate / 100);
    const currentRevenue = currentCustomers * averageJobValue;
    
    // CallHero projected numbers (assuming 30% better conversion and 20% lower cost)
    const callHeroLeadCost = currentLeadCost * 0.8;
    const callHeroConversionRate = conversionRate * 1.3;
    const callHeroLeads = monthlyMarketingBudget / callHeroLeadCost;
    const callHeroCustomers = callHeroLeads * (callHeroConversionRate / 100);
    const callHeroRevenue = callHeroCustomers * averageJobValue;
    
    return {
      current: {
        leads: Math.round(currentLeads),
        customers: Math.round(currentCustomers),
        revenue: Math.round(currentRevenue),
        profit: Math.round(currentRevenue - monthlyMarketingBudget)
      },
      callHero: {
        leads: Math.round(callHeroLeads),
        customers: Math.round(callHeroCustomers),
        revenue: Math.round(callHeroRevenue),
        profit: Math.round(callHeroRevenue - monthlyMarketingBudget)
      },
      improvement: {
        leads: Math.round((callHeroLeads - currentLeads) / currentLeads * 100),
        customers: Math.round((callHeroCustomers - currentCustomers) / currentCustomers * 100),
        profit: Math.round((callHeroRevenue - monthlyMarketingBudget - (currentRevenue - monthlyMarketingBudget)) / (currentRevenue - monthlyMarketingBudget) * 100)
      }
    };
  };

  // Break-even Calculator
  const calculateBreakEven = () => {
    const { monthlyFixedCosts, averageJobProfit, leadCost } = breakEvenInputs;
    const leadsNeeded = Math.ceil(monthlyFixedCosts / (averageJobProfit * (40/100))); // Assuming 40% conversion rate
    const jobsNeeded = Math.ceil(monthlyFixedCosts / averageJobProfit);
    const monthlyMarketingBudget = leadsNeeded * leadCost;
    
    return {
      leadsNeeded,
      jobsNeeded,
      monthlyMarketingBudget,
      costPerJob: leadCost / 0.4 // Based on 40% conversion
    };
  };

  // Market Potential Calculator
  const calculateMarketPotential = () => {
    if (!serviceArea || !leadVolume) return null;
    
    // These are estimates based on US Census data and industry reports
    const avgHouseholds = 50000; // Average for a medium-sized city
    const applianceOwnership = 0.95; // 95% of households have major appliances
    const annualRepairRate = 0.15; // 15% of appliances need repair annually
    const monthlyRepairRate = annualRepairRate / 12;
    
    const estimatedMarket = Math.round(avgHouseholds * applianceOwnership * monthlyRepairRate);
    const marketShare = (leadVolume / estimatedMarket * 100).toFixed(1);
    
    return {
      estimatedMarket,
      marketShare,
      competitionLevel: marketShare > 10 ? 'High' : marketShare > 5 ? 'Medium' : 'Low',
      recommendedLeads: Math.round(estimatedMarket * 0.05) // 5% market share target
    };
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoiInputChange = (e) => {
    setRoiInputs({
      ...roiInputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const handleBreakEvenInputChange = (e) => {
    setBreakEvenInputs({
      ...breakEvenInputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: ''
    });
  };

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-medium text-sm md:text-base transition-all duration-300 border-b-4 ${
        isActive
          ? 'text-blue-600 border-blue-600 bg-blue-50'
          : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">CallHero</div>
              <span className="ml-2 text-gray-600 hidden md:block">Appliance Repair Leads</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              <TabButton id="home" label="Home" isActive={activeTab === 'home'} onClick={setActiveTab} />
              <TabButton id="services" label="Services" isActive={activeTab === 'services'} onClick={setActiveTab} />
              <TabButton id="calculators" label="Calculators" isActive={activeTab === 'calculators'} onClick={setActiveTab} />
              <TabButton id="how-it-works" label="How It Works" isActive={activeTab === 'how-it-works'} onClick={setActiveTab} />
              <TabButton id="pricing" label="Pricing" isActive={activeTab === 'pricing'} onClick={setActiveTab} />
              <TabButton id="testimonials" label="Success Stories" isActive={activeTab === 'testimonials'} onClick={setActiveTab} />
              <TabButton id="resources" label="Resources" isActive={activeTab === 'resources'} onClick={setActiveTab} />
              <TabButton id="contact" label="Contact" isActive={activeTab === 'contact'} onClick={setActiveTab} />
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <TabButton id="home" label="Home" isActive={activeTab === 'home'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="services" label="Services" isActive={activeTab === 'services'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="calculators" label="Calculators" isActive={activeTab === 'calculators'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="how-it-works" label="How It Works" isActive={activeTab === 'how-it-works'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="pricing" label="Pricing" isActive={activeTab === 'pricing'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="testimonials" label="Success Stories" isActive={activeTab === 'testimonials'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="resources" label="Resources" isActive={activeTab === 'resources'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
                <TabButton id="contact" label="Contact" isActive={activeTab === 'contact'} onClick={(id) => { setActiveTab(id); setIsMenuOpen(false); }} />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Performance-Based Lead Generation for Appliance Repair Businesses
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Only pay for qualified appliance repair calls or booked appointments. Specialized marketing for the appliance repair industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('calculators')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition duration-300 shadow-lg"
                >
                  Calculate Your ROI
                </button>
                <button 
                  onClick={() => setActiveTab('pricing')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  View Pricing Plans
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-20">
            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-16">Why Choose CallHero for Appliance Repair</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Appliance-Specific Targeting</h3>
                  <p className="text-gray-600">We target customers searching for specific appliance repairs (refrigerators, washers, dryers, etc.) in your service area.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Seasonal Optimization</h3>
                  <p className="text-gray-600">Our campaigns automatically adjust for seasonal appliance repair trends (AC in summer, heaters in winter).</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Brand Specialization</h3>
                  <p className="text-gray-600">Target customers with specific appliance brands you specialize in (Samsung, LG, Whirlpool, etc.).</p>
                </div>
              </div>
            </section>

            {/* Appliance Repair Statistics */}
            <section className="bg-white py-16 px-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-12">Appliance Repair Industry Statistics</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appliance Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Failure Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Repair Cost</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Issues</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applianceStats.map((stat, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stat.appliance}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.failureRate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.avgRepairCost}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{stat.commonIssues}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">Data based on industry reports and customer service data from major appliance manufacturers.</p>
              </div>
            </section>

            {/* Stats */}
            <section className="text-center py-16">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
                  <div className="text-gray-600">Client Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">200%</div>
                  <div className="text-gray-600">Average Revenue Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Appliance Repair Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Appliance Repair Leads Delivered</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Specialized Services for Appliance Repair</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've tailored our lead generation services specifically for the appliance repair industry, with features designed to maximize your ROI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Appliance Repair Specific Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4">Appliance Type Filtering</h3>
                  <p className="text-gray-600 mb-4">Filter leads by specific appliance types to focus on your areas of expertise.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Refrigerators & Freezers</li>
                    <li>• Washers & Dryers</li>
                    <li>• Dishwashers</li>
                    <li>• Ovens, Ranges & Cooktops</li>
                    <li>• Microwaves</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4">Brand Specialization</h3>
                  <p className="text-gray-600 mb-4">Target customers with specific appliance brands you service and have parts for.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Samsung & LG</li>
                    <li>• Whirlpool & Maytag</li>
                    <li>• GE & Frigidaire</li>
                    <li>• Bosch & Miele</li>
                    <li>• Custom brand targeting</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4">Seasonal Campaigns</h3>
                  <p className="text-gray-600 mb-4">Automatic adjustment of campaigns based on seasonal appliance repair trends.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Summer: Refrigerators & AC units</li>
                    <li>• Fall: Washers & Dryers</li>
                    <li>• Winter: Ovens & Heaters</li>
                    <li>• Spring: Deep cleaning appliances</li>
                    <li>• Holiday special campaigns</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4">Urgency Level Identification</h3>
                  <p className="text-gray-600 mb-4">Screen calls to identify emergency repairs vs. routine maintenance.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Emergency (no cooling/heating)</li>
                    <li>• High priority (leaking/flooding)</li>
                    <li>• Medium priority (noisy/not efficient)</li>
                    <li>• Low priority (cosmetic issues)</li>
                    <li>• Maintenance/scheduled service</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4">Diagnostic Pre-Screening</h3>
                  <p className="text-gray-600 mb-4">Basic diagnostic questions to help you prepare for the service call.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Age of appliance</li>
                    <li>• Error codes displayed</li>
                    <li>• Specific symptoms</li>
                    <li>• Previous repair history</li>
                    <li>• Parts already purchased</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-4">Customer Budget Qualification</h3>
                  <p className="text-gray-600 mb-4">Identify customer budget ranges to match with appropriate service options.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Basic repair budget</li>
                    <li>• Premium service budget</li>
                    <li>• Replacement consideration</li>
                    <li>• Warranty/insurance coverage</li>
                    <li>• Payment plan interest</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Additional Appliance Repair Tools</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Parts Availability Integration</h3>
                  <p className="text-gray-600 mb-4">Connect with parts suppliers to verify availability before accepting jobs.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Real-time parts inventory checks</li>
                    <li>• Price comparison across suppliers</li>
                    <li>• Delivery time estimates</li>
                    <li>• Alternative part suggestions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Service Area Optimization</h3>
                  <p className="text-gray-600 mb-4">Maximize efficiency by clustering jobs in specific neighborhoods or zip codes.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Geo-fencing for efficient routing</li>
                    <li>• Day-of-week optimization</li>
                    <li>• Traffic pattern analysis</li>
                    <li>• Fuel cost minimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Customer Loyalty Program</h3>
                  <p className="text-gray-600 mb-4">Build repeat business with automated maintenance reminders and loyalty discounts.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automated maintenance reminders</li>
                    <li>• Loyalty point tracking</li>
                    <li>• Referral program integration</li>
                    <li>• Seasonal tune-up promotions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Competitor Analysis</h3>
                  <p className="text-gray-600 mb-4">Understand your local market with insights into competitor pricing and services.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Local competitor pricing analysis</li>
                    <li>• Service gap identification</li>
                    <li>• Market share estimates</li>
                    <li>• Review sentiment analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calculators Tab */}
        {activeTab === 'calculators' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Appliance Repair Business Calculators</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our specialized calculators to understand your business potential and make informed decisions.
              </p>
            </div>

            {/* Calculator Selector */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setCalculatorType('roi')}
                  className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                    calculatorType === 'roi'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ROI Calculator
                </button>
                <button
                  onClick={() => setCalculatorType('breakEven')}
                  className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                    calculatorType === 'breakEven'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Break-Even Calculator
                </button>
                <button
                  onClick={() => setCalculatorType('market')}
                  className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                    calculatorType === 'market'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Market Potential Calculator
                </button>
              </div>

              {/* ROI Calculator */}
              {calculatorType === 'roi' && (
                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Appliance Repair ROI Calculator</h2>
                  <p className="text-gray-600 mb-8 text-center">See how much more profitable your business could be with CallHero Leads</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold mb-4">Your Current Numbers</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Monthly Marketing Budget ($)
                          </label>
                          <input
                            type="number"
                            name="monthlyMarketingBudget"
                            value={roiInputs.monthlyMarketingBudget}
                            onChange={handleRoiInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Cost Per Lead ($)
                          </label>
                          <input
                            type="number"
                            name="currentLeadCost"
                            value={roiInputs.currentLeadCost}
                            onChange={handleRoiInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Conversion Rate (%)
                          </label>
                          <input
                            type="number"
                            name="conversionRate"
                            value={roiInputs.conversionRate}
                            onChange={handleRoiInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Average Job Value ($)
                          </label>
                          <input
                            type="number"
                            name="averageJobValue"
                            value={roiInputs.averageJobValue}
                            onChange={handleRoiInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-4">Your Projected Results with CallHero</h3>
                      <div className="bg-white rounded-lg p-6 shadow">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Monthly Leads:</span>
                            <span className="font-bold text-blue-600">{calculateROI().callHero.leads}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Monthly Customers:</span>
                            <span className="font-bold text-blue-600">{calculateROI().callHero.customers}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Monthly Revenue:</span>
                            <span className="font-bold text-blue-600">${calculateROI().callHero.revenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="font-medium">Monthly Profit:</span>
                            <span className="font-bold text-blue-600">${calculateROI().callHero.profit.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="mt-6 p-4 bg-green-50 rounded-lg">
                          <h4 className="font-bold text-green-800 mb-2">Improvement with CallHero:</h4>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">+{calculateROI().improvement.leads}%</div>
                              <div className="text-green-700">More Leads</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">+{calculateROI().improvement.customers}%</div>
                              <div className="text-green-700">More Customers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">+{calculateROI().improvement.profit}%</div>
                              <div className="text-green-700">More Profit</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-bold mb-4">How We Achieve These Results</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>20% lower cost per lead through optimized appliance-specific targeting</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>30% higher conversion rate with pre-qualified, appliance-specific leads</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Reduced wasted time on unqualified leads and wrong appliance types</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Seasonal optimization to capture high-demand periods for specific appliances</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Break-Even Calculator */}
              {calculatorType === 'breakEven' && (
                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Appliance Repair Break-Even Calculator</h2>
                  <p className="text-gray-600 mb-8 text-center">Calculate how many appliance repair jobs you need to cover your costs</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold mb-4">Your Business Costs</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Monthly Fixed Costs ($)
                            <span className="text-gray-500 text-xs ml-2">Rent, salaries, insurance, etc.</span>
                          </label>
                          <input
                            type="number"
                            name="monthlyFixedCosts"
                            value={breakEvenInputs.monthlyFixedCosts}
                            onChange={handleBreakEvenInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Average Profit Per Job ($)
                            <span className="text-gray-500 text-xs ml-2">After parts and variable costs</span>
                          </label>
                          <input
                            type="number"
                            name="averageJobProfit"
                            value={breakEvenInputs.averageJobProfit}
                            onChange={handleBreakEvenInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cost Per Lead ($)
                            <span className="text-gray-500 text-xs ml-2">With CallHero or current provider</span>
                          </label>
                          <input
                            type="number"
                            name="leadCost"
                            value={breakEvenInputs.leadCost}
                            onChange={handleBreakEvenInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-4">Your Break-Even Analysis</h3>
                      <div className="bg-white rounded-lg p-6 shadow">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Jobs Needed to Break Even:</span>
                            <span className="font-bold text-blue-600">{calculateBreakEven().jobsNeeded}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Leads Needed (40% Conv. Rate):</span>
                            <span className="font-bold text-blue-600">{calculateBreakEven().leadsNeeded}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Monthly Marketing Budget:</span>
                            <span className="font-bold text-blue-600">${calculateBreakEven().monthlyMarketingBudget.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="font-medium">Effective Cost Per Job:</span>
                            <span className="font-bold text-blue-600">${calculateBreakEven().costPerJob.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">Business Health Assessment:</h4>
                          <p className="text-blue-700">
                            Based on your numbers, you need to complete approximately {calculateBreakEven().jobsNeeded} appliance repair jobs per month to cover your fixed costs. 
                            With a typical 40% conversion rate, this requires about {calculateBreakEven().leadsNeeded} leads per month.
                          </p>
                          <p className="text-blue-700 mt-2">
                            Your effective cost per acquired customer is ${calculateBreakEven().costPerJob.toFixed(2)}, which represents 
                            {(calculateBreakEven().costPerJob / breakEvenInputs.averageJobProfit * 100).toFixed(1)}% of your average profit per job.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-bold mb-4">Tips to Improve Your Break-Even Point</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">Increase Profit Per Job:</h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Bundle services (cleaning with repair)</li>
                          <li>• Offer maintenance plans</li>
                          <li>• Upsell parts with warranties</li>
                          <li>• Implement tiered pricing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">Reduce Cost Per Lead:</h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Switch to performance-based lead gen</li>
                          <li>• Target high-conversion appliance types</li>
                          <li>• Focus on your best service areas</li>
                          <li>• Leverage customer referrals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Market Potential Calculator */}
              {calculatorType === 'market' && (
                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Appliance Repair Market Potential Calculator</h2>
                  <p className="text-gray-600 mb-8 text-center">Estimate the size of your local appliance repair market and your potential share</p>
                  
                  <div className="max-w-2xl mx-auto">
                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Service Area (City/Region)
                        </label>
                        <input
                          type="text"
                          value={serviceArea}
                          onChange={(e) => setServiceArea(e.target.value)}
                          placeholder="e.g., Austin, TX or Metro Area"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Monthly Leads
                        </label>
                        <input
                          type="number"
                          value={leadVolume}
                          onChange={(e) => setLeadVolume(parseInt(e.target.value) || 0)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    {serviceArea && calculateMarketPotential() && (
                      <div className="bg-white rounded-lg p-6 shadow">
                        <h3 className="text-lg font-bold mb-4">Market Analysis for {serviceArea}</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Estimated Monthly Appliance Repair Market:</span>
                            <span className="font-bold text-blue-600">{calculateMarketPotential().estimatedMarket.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Your Current Market Share:</span>
                            <span className="font-bold text-blue-600">{calculateMarketPotential().marketShare}%</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Competition Level:</span>
                            <span className={`font-bold ${
                              calculateMarketPotential().competitionLevel === 'High' ? 'text-red-600' :
                              calculateMarketPotential().competitionLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                            }`}>
                              {calculateMarketPotential().competitionLevel}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="font-medium">Recommended Lead Volume (5% Market Share):</span>
                            <span className="font-bold text-blue-600">{calculateMarketPotential().recommendedLeads.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">Growth Strategy Recommendations:</h4>
                          {calculateMarketPotential().marketShare < 5 && (
                            <p className="text-blue-700 mb-3">
                              You have significant room to grow in this market. Consider increasing your lead volume to capture more market share.
                            </p>
                          )}
                          {calculateMarketPotential().marketShare >= 5 && calculateMarketPotential().marketShare < 10 && (
                            <p className="text-blue-700 mb-3">
                              You have a solid market presence. Focus on customer retention and premium services to increase profitability.
                            </p>
                          )}
                          {calculateMarketPotential().marketShare >= 10 && (
                            <p className="text-blue-700 mb-3">
                              You have a strong market position. Consider expanding to adjacent service areas or adding complementary services.
                            </p>
                          )}
                          
                          <div className="mt-4">
                            <h5 className="font-bold text-blue-800 mb-2">Next Steps:</h5>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li>• Schedule a free consultation to discuss your growth strategy</li>
                              <li>• Consider our volume discount plans for higher lead volumes</li>
                              <li>• Explore our exclusivity options to protect your market share</li>
                              <li>• Implement our customer loyalty program to increase retention</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {!serviceArea && (
                      <div className="text-center py-12">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <p className="text-gray-500">Enter your service area and current lead volume to calculate your market potential</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Industry Benchmark Data */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Appliance Repair Industry Benchmarks</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40-60%</div>
                  <h3 className="font-bold mb-2">Average Conversion Rate</h3>
                  <p className="text-gray-600 text-sm">For qualified appliance repair leads</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">$150-$350</div>
                  <h3 className="font-bold mb-2">Average Repair Value</h3>
                  <p className="text-gray-600 text-sm">Depending on appliance type and complexity</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3-7 days</div>
                  <h3 className="font-bold mb-2">Average Repair Turnaround</h3>
                  <p className="text-gray-600 text-sm">From lead to completed service</p>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">By Appliance Type</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Refrigerators</span>
                      <span className="text-blue-600 font-bold">$220 avg.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Washers</span>
                      <span className="text-blue-600 font-bold">$180 avg.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Dryers</span>
                      <span className="text-blue-600 font-bold">$160 avg.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Dishwashers</span>
                      <span className="text-blue-600 font-bold">$150 avg.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Ovens/Ranges</span>
                      <span className="text-blue-600 font-bold">$190 avg.</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Customer Lifetime Value</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Single Repair</span>
                      <span className="text-green-600 font-bold">$150-$350</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Annual Maintenance Plan</span>
                      <span className="text-green-600 font-bold">$200-$500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Multiple Appliances</span>
                      <span className="text-green-600 font-bold">$400-$800</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Referral Value</span>
                      <span className="text-green-600 font-bold">$75-$150</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">5-Year Customer Value</span>
                      <span className="text-green-600 font-bold">$800-$2,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How It Works Tab */}
        {activeTab === 'how-it-works' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">How It Works for Appliance Repair</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized process ensures you get high-quality appliance repair leads while we handle all the marketing and technology.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Appliance-Specific Onboarding</h2>
                  <p className="text-gray-600 mb-6">
                    We start by understanding your appliance repair business, including which appliance types and brands you specialize in, 
                    your service areas, pricing structure, and any specific qualification criteria for leads.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Appliance type and brand specialization setup
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Service area mapping and geo-targeting configuration
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom call scripts for appliance diagnostics
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pricing and service package configuration
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500">Appliance Repair Onboarding Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Appliance-Targeted Campaigns</h2>
                  <p className="text-gray-600 mb-6">
                    We create and launch targeted campaigns focused specifically on appliance repair keywords and customer intent. 
                    Our system targets customers searching for repair services for their specific appliance type and brand.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Keyword targeting for specific appliance problems
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Brand-specific ad campaigns (Samsung, LG, Whirlpool, etc.)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Seasonal campaign adjustments for appliance trends
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Competitor analysis and market positioning
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <p className="text-gray-500">Campaign Performance Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Appliance Repair Lead Qualification</h2>
                  <p className="text-gray-600 mb-6">
                    Our team screens calls using appliance-specific questions to ensure you only receive qualified leads. 
                    We identify the appliance type, brand, symptoms, urgency level, and customer budget before connecting the call.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Appliance type and brand verification
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Symptom and problem description
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Urgency level assessment
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Budget range qualification
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Location and availability confirmation
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-gray-500">Lead Qualification Interface</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
                  <p className="text-gray-600 mb-6">
                    We continuously optimize your campaigns based on performance data and your feedback. 
                    We adjust targeting, messaging, and qualification criteria to maximize your ROI and deliver the highest quality appliance repair leads.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Monthly performance reviews with appliance repair KPIs
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Seasonal adjustment recommendations
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Implementation of customer feedback
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Testing new appliance categories and service offerings
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Scaling successful campaigns and service areas
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-gray-500">Optimization Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get Started in 3 Simple Steps</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Schedule Appliance Repair Consultation</h3>
                  <p className="text-gray-600 text-sm">Book a free 30-minute consultation to discuss your appliance repair business goals</p>
                </div>
                <div className="hidden md:block">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Complete Appliance-Specific Onboarding</h3>
                  <p className="text-gray-600 text-sm">Provide information about your appliance specialties, service areas, and pricing</p>
                </div>
                <div className="hidden md:block">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Start Receiving Qualified Leads</h3>
                  <p className="text-gray-600 text-sm">Begin getting appliance repair leads within 7-10 business days</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('contact')}
                className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
              >
                Schedule Your Free Appliance Repair Consultation
              </button>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Pricing Plans for Appliance Repair</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your appliance repair business needs. All plans include our core technology and support services.
              </p>
            </div>

            {/* Pricing Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      {plans.map(plan => (
                        <th key={plan.id} className="px-6 py-4 text-center">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-blue-600">{plan.name}</h3>
                            <div className="text-2xl font-bold text-gray-900 my-2">{plan.price}</div>
                            {plan.priceDetails && (
                              <div className="text-xs text-gray-600 mb-2">
                                {plan.priceDetails.map((detail, index) => (
                                  <div key={index}>{detail}</div>
                                ))}
                              </div>
                            )}
                            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                            <button 
                              onClick={() => setSelectedPlan(plan)}
                              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                            >
                              Select Plan
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Lead Type</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center">{plan.name.split(' ')[0]}</td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Appliance Type Filtering</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center">
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Brand Specialization</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Seasonal Optimization</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Urgency Level Identification</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Diagnostic Pre-Screening</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Exclusivity</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center text-sm">{plan.exclusivity}</td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Best For</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center text-sm">{plan.bestFor}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Core Features</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4">
                          <ul className="space-y-2 text-sm">
                            {plan.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                            {plan.features.length > 3 && (
                              <li className="text-blue-600 font-medium">+ {plan.features.length - 3} more features</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Call Tracking & Routing</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center">
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Client Dashboard</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center">
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Call Recordings</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center">
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Email Notifications</td>
                      {plans.map(plan => (
                        <td key={plan.id} className="px-6 py-4 text-center">
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">SMS Notifications</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Downloadable Reports</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Dedicated Account Manager</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Volume Discounts */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Volume Discounts for Appliance Repair</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+ Leads/Month</div>
                  <div className="text-lg font-bold mb-4">5% Discount</div>
                  <p className="text-gray-600">Perfect for growing appliance repair businesses looking to scale their lead volume</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="font-bold">Best for:</div>
                    <div>• Single technician operations</div>
                    <div>• Limited service areas</div>
                    <div>• Specific appliance focus</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+ Leads/Month</div>
                  <div className="text-lg font-bold mb-4">10% Discount</div>
                  <p className="text-gray-600">Ideal for established appliance repair businesses with consistent demand</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="font-bold">Best for:</div>
                    <div>• Multi-technician teams</div>
                    <div>• Expanded service areas</div>
                    <div>• Multiple appliance types</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+ Leads/Month</div>
                  <div className="text-lg font-bold mb-4">15% Discount</div>
                  <p className="text-gray-600">Best for high-volume appliance repair businesses with multiple service areas</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="font-bold">Best for:</div>
                    <div>• Large service teams</div>
                    <div>• Regional coverage</div>
                    <div>• Full appliance spectrum</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Payment & Subscription Options</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Credit Card</h3>
                  <p className="text-gray-600 mb-4">We accept all major credit cards including Visa, Mastercard, American Express, and Discover.</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">Visa</div>
                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">MC</div>
                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">Amex</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Stripe</h3>
                  <p className="text-gray-600 mb-4">Secure payments processed through Stripe with bank-level encryption and fraud protection.</p>
                  <div className="text-sm text-gray-500">PCI compliant • Bank-level security • Fraud protection</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">ACH/Bank Transfer</h3>
                  <p className="text-gray-600 mb-4">Lower fee option for businesses that prefer direct bank transfers. Setup required.</p>
                  <div className="text-sm text-gray-500">Lower fees • Direct deposit • Monthly billing</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-center">Billing Cycles</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Weekly</div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Bi-Weekly</div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Monthly</div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Quarterly (5% discount)</div>
                </div>
              </div>
            </div>

            {/* Plan Selection Modal */}
            {selectedPlan && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold">Get Started with {selectedPlan.name}</h2>
                    <button 
                      onClick={() => setSelectedPlan(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4">You've selected our <span className="font-bold text-blue-600">{selectedPlan.name}</span> plan at {selectedPlan.price} per lead.</p>
                    <p className="text-gray-600">To get started, please provide your contact information and we'll schedule a free consultation to discuss your appliance repair business needs.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input
                          type="text"
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Area (City/State)</label>
                      <input
                        type="text"
                        name="serviceArea"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Austin, TX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Primary Appliance Types Serviced</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="all">All Major Appliances</option>
                        <option value="refrigerators">Refrigerators & Freezers</option>
                        <option value="washers">Washers & Dryers</option>
                        <option value="dishwashers">Dishwashers</option>
                        <option value="ovens">Ovens, Ranges & Cooktops</option>
                        <option value="microwaves">Microwaves</option>
                        <option value="multiple">Multiple Specific Types</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">How many leads do you need per month?</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="10-20">10-20 leads per month</option>
                        <option value="20-50">20-50 leads per month</option>
                        <option value="50-100">50-100 leads per month</option>
                        <option value="100+">100+ leads per month</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your appliance repair business, specialties, and goals..."
                      ></textarea>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="terms" className="mr-2" required />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                      >
                        Schedule Free Consultation
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPlan(null)}
                        className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Appliance Repair Success Stories</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from real appliance repair businesses that have transformed their growth with CallHero Leads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{testimonial.beforeStats.monthlyRevenue.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Monthly Revenue (Before)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.afterStats.monthlyRevenue.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Monthly Revenue (After)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{testimonial.beforeStats.monthlyLeads}</div>
                      <div className="text-xs text-gray-500">Monthly Leads (Before)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.afterStats.monthlyLeads}</div>
                      <div className="text-xs text-gray-500">Monthly Leads (After)</div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.business}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Case Study: Appliance Repair Pros</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                    <p className="mb-6">Appliance Repair Pros was struggling to generate consistent leads in the competitive Austin market. They were spending $3,000+ per month on various marketing channels with inconsistent results and poor ROI tracking. Their leads were often for appliances they didn't specialize in, leading to wasted time and resources.</p>
                    
                    <h3 className="text-xl font-bold mb-4">The Solution</h3>
                    <p className="mb-6">We implemented our Pre-Qualified Calls plan with geo-targeting focused on Austin and surrounding suburbs. We created custom landing pages highlighting their same-day service guarantee and 5-star customer reviews, and set up advanced call filtering to ensure only serious customers with the right appliance types reached them. We also implemented seasonal campaign adjustments to focus on refrigerators in summer and washers/dryers in winter.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">The Results</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-3xl font-bold">42</div>
                        <div className="text-blue-200">Qualified appliance repair calls per week</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">68%</div>
                        <div className="text-blue-200">Appointment booking rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">200%</div>
                        <div className="text-blue-200">Revenue increase in 3 months</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">$47</div>
                        <div className="text-blue-200">Average cost per booked appointment</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">85%</div>
                        <div className="text-blue-200">Leads for target appliance types</div>
                      </div>
                    </div>
                    <p className="italic">"CallHero has been a game-changer for our business. We now have a predictable flow of high-quality appliance repair leads and can focus on delivering great service instead of worrying about marketing. The seasonal adjustments have been particularly helpful in maximizing our revenue throughout the year."</p>
                    <p className="font-bold mt-2">- John Smith, Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Testimonial Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-6">Watch Our Client Success Stories</h2>
              <div className="max-w-4xl mx-auto bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500">Video Testimonial Placeholder</p>
                  <p className="text-sm text-gray-400 mt-2">Real client video testimonials coming soon</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Resources for Appliance Repair Businesses</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest articles, industry news, and marketing tips specifically for appliance repair businesses.
              </p>
            </div>

            {/* Blog/Resources Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <p>Article Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">{resource.category}</span>
                      <span className="text-gray-500 text-sm ml-3">{resource.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                    <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry News */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Appliance Repair Industry News</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold mb-2 hover:text-blue-600 cursor-pointer">New Energy Efficiency Standards Impact Appliance Repair</h3>
                  <p className="text-gray-600 mb-3">Recent changes to energy efficiency standards are affecting which appliances can be repaired vs. replaced, creating new opportunities for repair businesses.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>October 12, 2023</span>
                    <span className="mx-2">•</span>
                    <span>3 min read</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold mb-2 hover:text-blue-600 cursor-pointer">Supply Chain Improvements Benefit Repair Industry</h3>
                  <p className="text-gray-600 mb-3">After years of shortages, appliance parts availability is improving, allowing repair businesses to complete more jobs and reduce turnaround times.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>September 28, 2023</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold mb-2 hover:text-blue-600 cursor-pointer">Smart Appliance Repairs Create New Service Opportunities</h3>
                  <p className="text-gray-600 mb-3">The growing market of smart appliances is creating demand for technicians with specialized skills in electronics and software diagnostics.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>September 15, 2023</span>
                    <span className="mx-2">•</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guides & Downloads */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Free Guides & Resources for Appliance Repair</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Appliance Repair Pricing Guide</h3>
                  <p className="text-gray-600 mb-4 text-sm">Comprehensive guide to pricing your appliance repair services for maximum profitability.</p>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm">
                    Download PDF
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">ROI Calculator for Appliance Repair</h3>
                  <p className="text-gray-600 mb-4 text-sm">Excel template to calculate your return on investment for marketing and lead generation.</p>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm">
                    Download Excel
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Seasonal Marketing Calendar</h3>
                  <p className="text-gray-600 mb-4 text-sm">Month-by-month guide to optimizing your appliance repair marketing for seasonal trends.</p>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm">
                    Download Template
                  </button>
                </div>
              </div>
            </div>

            {/* Legal & Compliance */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Legal & Compliance for Appliance Repair</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Privacy & Data Policy</h3>
                  <p className="text-gray-600 mb-4">We take your privacy seriously. All data collected is used solely for the purpose of delivering our services and improving our platform.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• GDPR and CCPA compliant data handling</li>
                    <li>• Secure data storage with encryption</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Data retention policies</li>
                  </ul>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm mt-4">
                    Read Full Policy →
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Terms of Service</h3>
                  <p className="text-gray-600 mb-4">Our terms outline the agreement between CallHero Leads and our appliance repair clients, including payment terms, service levels, and responsibilities.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Service level agreements</li>
                    <li>• Payment terms and conditions</li>
                    <li>• Cancellation and refund policies</li>
                    <li>• Intellectual property rights</li>
                  </ul>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm mt-4">
                    Read Terms of Service →
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Call Recording Disclaimer</h3>
                  <p className="text-gray-600 mb-4">All calls may be recorded for quality assurance and training purposes. By using our service, you agree to our call recording policy.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Compliance with federal and state laws</li>
                    <li>• Notification requirements</li>
                    <li>• Data usage and storage policies</li>
                    <li>• Consumer rights and opt-out options</li>
                  </ul>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm mt-4">
                    Read Disclaimer →
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Appliance Repair Industry Compliance</h3>
                  <p className="text-gray-600 mb-4">We ensure all marketing activities comply with industry regulations and best practices for appliance repair businesses.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• FTC advertising guidelines for repair services</li>
                    <li>• Local business licensing requirements</li>
                    <li>• EPA regulations for refrigerant handling</li>
                    <li>• Manufacturer warranty compliance</li>
                  </ul>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition duration-300 text-sm mt-4">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your appliance repair lead generation? Get in touch with our team to schedule your free consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Area (City/State) *</label>
                    <input
                      type="text"
                      name="serviceArea"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Austin, TX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Appliance Types Serviced *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select appliance types</option>
                      <option value="all">All Major Appliances</option>
                      <option value="refrigerators">Refrigerators & Freezers</option>
                      <option value="washers">Washers & Dryers</option>
                      <option value="dishwashers">Dishwashers</option>
                      <option value="ovens">Ovens, Ranges & Cooktops</option>
                      <option value="microwaves">Microwaves</option>
                      <option value="multiple">Multiple Specific Types</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your appliance repair business, goals, and what you're looking for in a lead generation partner..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="contactTerms" className="mr-2" required />
                    <label htmlFor="contactTerms" className="text-sm text-gray-600">
                      I agree to receive communications from CallHero Leads and have read the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <h3 className="font-bold">Address</h3>
                          <p className="text-gray-600">123 Business Avenue, Suite 500<br />Austin, TX 78701</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <h3 className="font-bold">Phone</h3>
                          <p className="text-gray-600">(555) 123-4567</p>
                          <p className="text-gray-600 text-sm">Monday-Friday, 9am-5pm CST</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <h3 className="font-bold">Email</h3>
                          <p className="text-gray-600">info@callheroleads.com</p>
                          <p className="text-gray-600 text-sm">support@callheroleads.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-4">Schedule a Free Appliance Repair Consultation</h3>
                    <p className="text-gray-600 mb-4">Book a 30-minute consultation with one of our appliance repair lead generation specialists to discuss your business needs.</p>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
                      Schedule Now
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 5:00 PM CST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 2:00 PM CST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">After-hours emergencies: support@callheroleads.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-bold mb-3 hover:text-blue-600 cursor-pointer">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">CallHero</div>
              <p className="text-gray-400 mb-4">Performance-based lead generation for appliance repair businesses.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-300">Direct Call Leads</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Pre-Qualified Calls</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Confirmed Appointments</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Appliance Type Filtering</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Brand Specialization</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Industry News</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Free Calculators</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Call Recording Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Data & Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 CallHero Leads. All rights reserved.</p>
            <p className="mt-2 text-sm">Performance-based lead generation for appliance repair businesses in the United States.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
```
