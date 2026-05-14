import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-dark-600/60 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-300 font-mono uppercase tracking-wider">
            v3.0 Infrastructure Update Live
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Master Kubernetes,{' '}
          <span className="text-brand-blue">DevOps</span> & Cloud
          <br />Engineering
        </h1>

        <div className="bg-dark-700/80 border border-white/10 rounded-lg px-4 py-3 inline-block mb-8 font-mono text-sm text-gray-300">
          <span className="text-green-400">$</span> kubekode init --real-world-experience
          <br />
          <span className="text-gray-500">&gt; Deploying enterprise-grade architectures via interactive cloud labs.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/courses"
            className="bg-brand-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Start Learning
          </Link>
          <Link
            to="/labs"
            className="bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Explore Labs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
