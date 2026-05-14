import React from 'react';

const trustedLogos = [
  { name: 'Google Cloud', color: '#4285F4' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Terraform', color: '#7B42BC' },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Learning Paths',
    description: 'From Zero to Certified Kubernetes Administrator (CKA). Structured curriculums designed by industry veterans at FAANG companies.',
    tags: ['Beginner', 'Intermediate', 'Advanced'],
    badge: 'Guided',
    span: 'col-span-1',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Hands-on Labs',
    description: 'Real clusters. Real outages. No simulators. Practice in an environment that mimics production traffic.',
    meta: { label: 'Uptime', value: '99.9%' },
    span: 'col-span-1',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Tutor',
    description: 'Your personal cloud architect. Get instant feedback on your YAML manifests and terraform plans.',
    code: 'AI: "Your Pod lacks resources.limits. Consider..."',
    span: 'col-span-1',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Infrastructure Registry',
    description: 'A curated library of ready-to-deploy cloud-native patterns for AWS, GCP, and Azure.',
    hasImage: true,
    span: 'col-span-1',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-8">
            Powering the next generation of cloud architects
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-10 h-10 rounded-full bg-dark-600 flex items-center justify-center"
                title={logo.name}
              >
                <div
                  className="w-4 h-4 rounded-full opacity-60"
                  style={{ backgroundColor: logo.color }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-700/50 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-dark-600 rounded-xl">
                  {feature.icon}
                </div>
                {feature.badge && (
                  <span className="text-xs font-medium bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {feature.tags && (
                <div className="flex gap-2 flex-wrap">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-dark-600 border border-white/10 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {feature.meta && (
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{feature.meta.label}</span>
                  <span className="text-sm font-mono font-bold text-brand-blue">{feature.meta.value}</span>
                </div>
              )}

              {feature.code && (
                <div className="mt-2 bg-dark-900/60 rounded-lg px-4 py-2 font-mono text-xs text-gray-400">
                  {feature.code}
                </div>
              )}

              {feature.hasImage && (
                <div className="mt-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg h-16 flex items-center justify-center">
                  <div className="flex gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-8 bg-brand-blue/30 rounded" style={{ height: `${20 + Math.random() * 20}px` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
