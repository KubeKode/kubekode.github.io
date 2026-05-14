import React from 'react';
import SandboxTerminal from './SandboxTerminal';

const Sandbox = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Sandbox</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Experience the power of KubeKode with our integrated terminal. Deploy your first
          deployment in seconds.
        </p>

        <SandboxTerminal />
      </div>
    </section>
  );
};

export default Sandbox;
