'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    adSpend: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-navy">Adcraze</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#results" className="text-navy hover:text-electric transition-colors">Results</a>
              <a href="#process" className="text-navy hover:text-electric transition-colors">How It Works</a>
              <a href="#pricing" className="text-navy hover:text-electric transition-colors">Pricing</a>
              <a href="#contact" className="bg-electric text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-all">
                Get Started
              </a>
            </div>
            <button className="md:hidden text-navy">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-vibrant/20 border border-vibrant text-vibrant px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Performance-Based Advertising
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Stop Wasting Ad Spend. <span className="text-electric">Start Scaling Revenue.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We only win when you win. Get performance-driven advertising that actually grows your business—backed by data, transparency, and real ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="bg-vibrant hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl text-center">
                  Get Free Audit
                </a>
                <a href="#results" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center">
                  See Our Results
                </a>
              </div>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-electric">347%</div>
                  <div className="text-sm text-gray-400">Avg ROAS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric">$18M+</div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric">92%</div>
                  <div className="text-sm text-gray-400">Client Retention</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Monthly Revenue</div>
                      <div className="text-2xl font-bold">+284%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-vibrant rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Cost Per Acquisition</div>
                      <div className="text-2xl font-bold">-62%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Conversion Rate</div>
                      <div className="text-2xl font-bold">+156%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600 mb-4">TRUSTED BY BRANDS THAT DEMAND RESULTS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['E-Commerce', 'SaaS', 'B2B Services', 'Local Business', 'D2C Brands'].map((brand) => (
              <div key={brand} className="text-lg font-semibold text-gray-700">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Tired of Agencies That Drain Your Budget Without Delivering Results?
              </h2>
              <div className="space-y-4">
                {[
                  'Burning through ad spend with nothing to show for it',
                  'Zero transparency into what\'s actually working',
                  'Locked into long contracts with underperforming campaigns',
                  'Fancy reports that don\'t translate to revenue',
                  'Agencies that ghost you when results don\'t materialize'
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-electric to-blue-600 p-8 sm:p-10 rounded-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Here's How We're Different
              </h3>
              <div className="space-y-5">
                {[
                  { title: 'Performance-Based Pricing', desc: 'You only pay when we deliver results. Our success is tied directly to yours.' },
                  { title: 'Real-Time Dashboard Access', desc: 'See exactly where every dollar goes. No smoke and mirrors, just data.' },
                  { title: 'No Long-Term Contracts', desc: 'Month-to-month agreements. We earn your business every single month.' },
                  { title: 'Revenue-Focused Strategy', desc: 'We optimize for what matters: your bottom line, not vanity metrics.' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3 mb-2">
                      <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-blue-100 ml-9">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Real Clients. Real Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We let the numbers do the talking. Here's what happens when you partner with a team that only wins when you win.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'E-Commerce Fashion Brand',
                metric: '427% ROAS',
                detail: '$1.2M revenue in 90 days',
                challenge: 'Struggling with $0.80 ROAS',
                solution: 'Complete campaign restructure + funnel optimization'
              },
              {
                company: 'B2B SaaS Platform',
                metric: '$47 CPL',
                detail: 'Down from $280',
                challenge: 'Lead costs killing profitability',
                solution: 'Audience segmentation + conversion tracking overhaul'
              },
              {
                company: 'Local Service Business',
                metric: '312% Growth',
                detail: '94 qualified leads/month',
                challenge: '8-12 inconsistent leads monthly',
                solution: 'Geo-targeted campaigns + landing page optimization'
              }
            ].map((result, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-vibrant font-semibold text-sm mb-3">{result.company}</div>
                <div className="text-4xl font-bold text-navy mb-2">{result.metric}</div>
                <div className="text-electric font-semibold mb-6">{result.detail}</div>
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Challenge</div>
                    <div className="text-sm text-gray-700">{result.challenge}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Solution</div>
                    <div className="text-sm text-gray-700">{result.solution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No guesswork. No wasted time. Just a systematic approach to scaling your advertising profitably.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Deep Dive Audit',
                desc: 'We analyze your current campaigns, funnel, and market position to identify quick wins and long-term opportunities.',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              },
              {
                step: '02',
                title: 'Strategic Blueprint',
                desc: 'Custom advertising strategy built around your revenue goals, not arbitrary metrics.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              },
              {
                step: '03',
                title: 'Launch & Optimize',
                desc: 'Rapid testing, data-driven adjustments, and continuous optimization to maximize your ROAS.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                step: '04',
                title: 'Scale & Grow',
                desc: 'Once we hit profitability targets, we aggressively scale what works while maintaining efficiency.',
                icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-electric to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-electric/20 absolute -top-4 -right-4">{item.step}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-28 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transparent Pricing. Zero BS.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the model that works for your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$2,500',
                period: '/month',
                ideal: 'Ideal for businesses spending $10-25K/month on ads',
                features: [
                  'Two advertising platforms',
                  'Monthly strategy sessions',
                  'Real-time dashboard access',
                  'Conversion tracking setup',
                  'Monthly performance reports',
                  'Email support'
                ]
              },
              {
                name: 'Growth',
                price: '$5,000',
                period: '/month',
                ideal: 'Best for businesses spending $25-75K/month on ads',
                features: [
                  'Multi-platform campaigns',
                  'Bi-weekly strategy sessions',
                  'Advanced analytics dashboard',
                  'Landing page optimization',
                  'A/B testing & experimentation',
                  'Dedicated account manager',
                  'Priority support'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                ideal: 'For businesses spending $75K+/month on ads',
                features: [
                  'Full-funnel management',
                  'Weekly strategy sessions',
                  'Custom reporting suite',
                  'Creative production support',
                  'Attribution modeling',
                  'Dedicated team',
                  '24/7 support',
                  'Quarterly business reviews'
                ]
              }
            ].map((plan, i) => (
              <div key={i} className={`relative bg-white/5 backdrop-blur p-8 rounded-2xl border ${plan.popular ? 'border-vibrant ring-4 ring-vibrant/20' : 'border-white/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vibrant text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.ideal}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-vibrant hover:bg-orange-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-white/5 backdrop-blur rounded-xl border border-white/20 max-w-3xl mx-auto">
            <p className="text-gray-300 mb-2">
              <span className="font-bold text-white">Performance-Based Option:</span> For qualified businesses, we offer a hybrid model where a portion of our fee is tied to your results.
            </p>
            <p className="text-sm text-gray-400">Talk to us about a custom arrangement that aligns with your goals.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Questions? We've Got Answers.
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What makes Adcraze different from other agencies?',
                a: 'We only win when you win. Unlike traditional agencies that charge retainers regardless of performance, we offer performance-based options and month-to-month contracts. Plus, you get real-time access to all campaign data—no black box.'
              },
              {
                q: 'How quickly can I expect to see results?',
                a: 'Most clients see improvements within 30-45 days. However, significant, sustainable growth typically takes 60-90 days as we test, optimize, and scale what works.'
              },
              {
                q: 'What platforms do you advertise on?',
                a: 'We specialize in Meta (Facebook/Instagram), Google Ads, TikTok, LinkedIn, and YouTube. We recommend platforms based on where your customers actually are, not what\'s trendy.'
              },
              {
                q: 'Do you work with businesses in my industry?',
                a: 'We work with e-commerce brands, SaaS companies, B2B services, local businesses, and D2C brands. If you sell a legitimate product or service, we can help you scale.'
              },
              {
                q: 'What if I\'m already working with another agency?',
                a: 'We can audit your current setup for free and show you exactly what\'s working and what isn\'t. Many of our best clients came to us frustrated with their previous agency.'
              },
              {
                q: 'Is there a minimum ad spend requirement?',
                a: 'Yes. To ensure we can gather enough data and drive meaningful results, we recommend a minimum monthly ad spend of $10,000.'
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg text-navy cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Ready to Scale Your Revenue?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a free advertising audit and custom growth strategy. No obligations, no sales pressure—just honest insights into your opportunity.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Free Advertising Audit</h3>
                    <p className="text-gray-600">We'll analyze your current campaigns and identify opportunities for immediate improvement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Custom Growth Strategy</h3>
                    <p className="text-gray-600">Get a tailored roadmap for scaling your advertising profitably.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">24-Hour Response Time</h3>
                    <p className="text-gray-600">We'll get back to you within one business day with next steps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy to-blue-900 p-8 rounded-2xl shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thanks for reaching out!</h3>
                  <p className="text-gray-300">We'll be in touch within 24 hours to discuss your advertising goals.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="adSpend" className="block text-sm font-semibold text-white mb-2">Monthly Ad Spend *</label>
                    <select
                      id="adSpend"
                      name="adSpend"
                      required
                      value={formData.adSpend}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-electric"
                    >
                      <option value="" className="bg-navy">Select range...</option>
                      <option value="10-25k" className="bg-navy">$10K - $25K</option>
                      <option value="25-50k" className="bg-navy">$25K - $50K</option>
                      <option value="50-100k" className="bg-navy">$50K - $100K</option>
                      <option value="100k+" className="bg-navy">$100K+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Tell us about your goals</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric resize-none"
                      placeholder="What are your biggest advertising challenges right now?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-vibrant hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Get My Free Audit
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-electric to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stop Paying for Ads That Don't Work
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with an agency that's as invested in your success as you are. Let's build something profitable together.
          </p>
          <a href="#contact" className="inline-block bg-vibrant hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Adcraze</div>
              <p className="text-gray-400 text-sm">
                Performance-driven advertising that scales your revenue, not your costs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ad Spend Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Audit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@adcraze.com</li>
                <li>(555) 123-4567</li>
                <li className="pt-4">
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Adcraze. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
