import React from 'react';

const Community = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-dark-700/50 border border-white/5 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for the Community
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join 50,000+ cloud-native engineers sharing knowledge, debugging clusters,
              and building the future of the web.
            </p>

            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold text-brand-blue">53k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Engineers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-green">1.2M</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Labs Deployed</div>
              </div>
            </div>

            <a
              href="https://discord.gg/kubekode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
            </a>
          </div>

          <div className="bg-dark-600/50 border border-white/5 rounded-xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-blue/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
              "The hands-on labs on KubeKode helped me clear my CKA in just 3 weeks. The real-world scenarios are unmatched."
            </p>
            <p className="text-xs text-gray-500">@dev_sarah_k8</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
