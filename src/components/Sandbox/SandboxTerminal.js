import React, { useState, useRef, useEffect, useCallback } from 'react';

const COMMANDS = {
  help: {
    output: [
      { type: 'info', text: 'Available commands:' },
      { type: 'text', text: '' },
      { type: 'cmd', text: '  kubectl get pods            - List running pods' },
      { type: 'cmd', text: '  kubectl get svc             - List services' },
      { type: 'cmd', text: '  kubectl get deployments     - List deployments' },
      { type: 'cmd', text: '  kubectl apply -f deployment.yaml  - Deploy nginx' },
      { type: 'cmd', text: '  kubectl describe pod web-app-v2-f98  - Pod details' },
      { type: 'cmd', text: '  kubectl logs web-app-v2-f98 - View pod logs' },
      { type: 'cmd', text: '  clear                       - Clear terminal' },
      { type: 'cmd', text: '  help                        - Show this message' },
    ],
  },
  'kubectl get pods': {
    delay: 500,
    output: [
      { type: 'header', text: 'NAME                  READY   STATUS    RESTARTS   AGE' },
      { type: 'row', text: 'web-app-v2-f98        1/1     Running   0          2m' },
      { type: 'row', text: 'nginx-deployment      1/1     Running   0          45s' },
    ],
  },
  'kubectl get pods --all-namespaces': {
    delay: 600,
    output: [
      { type: 'header', text: 'NAMESPACE     NAME                  READY   STATUS    RESTARTS   AGE' },
      { type: 'row', text: 'kube-system   coredns-95db4         1/1     Running   0          10d' },
      { type: 'row', text: 'default       web-app-v2-f98        1/1     Running   0          2m' },
      { type: 'row', text: 'default       nginx-deployment      1/1     Running   0          45s' },
    ],
  },
  'kubectl get svc': {
    delay: 450,
    output: [
      { type: 'header', text: 'NAME            TYPE        CLUSTER-IP      PORT(S)    AGE' },
      { type: 'row', text: 'kubernetes      ClusterIP   10.96.0.1       443/TCP    10d' },
      { type: 'row', text: 'nginx-service   ClusterIP   10.96.12.20     80/TCP     45s' },
    ],
  },
  'kubectl get deployments': {
    delay: 500,
    output: [
      { type: 'header', text: 'NAME               READY   UP-TO-DATE   AVAILABLE   AGE' },
      { type: 'row', text: 'nginx-deployment   1/1     1            1           45s' },
      { type: 'row', text: 'web-app-v2         1/1     1            1           2m' },
    ],
  },
  'kubectl apply -f deployment.yaml': {
    delay: 700,
    output: [
      { type: 'success', text: 'deployment.apps/nginx-deployment created' },
      { type: 'success', text: 'service/nginx-service created' },
    ],
  },
  'kubectl describe pod web-app-v2-f98': {
    delay: 600,
    output: [
      { type: 'label', text: 'Name:         web-app-v2-f98' },
      { type: 'label', text: 'Namespace:    default' },
      { type: 'label', text: 'Status:       Running' },
      { type: 'label', text: 'Node:         kubekode-demo-node' },
      { type: 'text', text: '' },
      { type: 'label', text: 'Containers:' },
      { type: 'text', text: '  web-app:' },
      { type: 'text', text: '    Image:    kubekode/web-app:v2' },
      { type: 'text', text: '    Port:     8080/TCP' },
      { type: 'text', text: '' },
      { type: 'label', text: 'Events:' },
      { type: 'event', text: '  Successfully pulled image "kubekode/web-app:v2"' },
      { type: 'event', text: '  Created container web-app' },
      { type: 'event', text: '  Started container web-app' },
    ],
  },
  'kubectl logs web-app-v2-f98': {
    delay: 550,
    output: [
      { type: 'log-info', text: '[INFO] Starting KubeKode sample app...' },
      { type: 'log-info', text: '[INFO] Connected to service nginx-service' },
      { type: 'log-info', text: '[INFO] GET /health 200 OK' },
      { type: 'log-info', text: '[INFO] Application running on port 8080' },
    ],
  },
};

const INITIAL_LINES = [
  { type: 'prompt', text: 'kubectl get pods --all-namespaces' },
  { type: 'header', text: 'NAMESPACE     NAME                  READY   STATUS    RESTARTS   AGE' },
  { type: 'row', text: 'kube-system   coredns-95db4         1/1     Running   0          10d' },
  { type: 'row', text: 'default       web-app-v2-f98        1/1     Running   0          2m' },
  { type: 'text', text: '' },
  { type: 'prompt', text: 'kubectl apply -f deployment.yaml' },
  { type: 'success', text: 'deployment.apps/nginx-deployment created' },
  { type: 'success', text: 'service/nginx-service created' },
];

const QUICK_COMMANDS = [
  { label: 'Get Pods', command: 'kubectl get pods' },
  { label: 'Apply Deployment', command: 'kubectl apply -f deployment.yaml' },
  { label: 'Get Services', command: 'kubectl get svc' },
  { label: 'View Logs', command: 'kubectl logs web-app-v2-f98' },
  { label: 'Clear', command: 'clear' },
];

const LineRenderer = ({ line }) => {
  switch (line.type) {
    case 'prompt':
      return (
        <div className="flex gap-2">
          <span className="text-green-400 select-none">$</span>
          <span className="text-white">{line.text}</span>
        </div>
      );
    case 'header':
      return <div className="text-gray-500 text-xs">{line.text}</div>;
    case 'row':
      return <div className="text-gray-300 text-xs">{line.text}</div>;
    case 'success':
      return <div className="text-cyan-400 text-xs">{line.text}</div>;
    case 'info':
      return <div className="text-blue-400 text-xs">{line.text}</div>;
    case 'cmd':
      return <div className="text-gray-300 text-xs">{line.text}</div>;
    case 'label':
      return <div className="text-yellow-300/80 text-xs">{line.text}</div>;
    case 'event':
      return <div className="text-green-300/70 text-xs">{line.text}</div>;
    case 'log-info':
      return <div className="text-emerald-400/80 text-xs">{line.text}</div>;
    case 'error':
      return <div className="text-red-400 text-xs">{line.text}</div>;
    case 'loading':
      return <div className="text-gray-500 text-xs animate-pulse">{line.text}</div>;
    case 'text':
    default:
      return <div className="text-gray-400 text-xs">{line.text}</div>;
  }
};

const SandboxTerminal = () => {
  const [lines, setLines] = useState(INITIAL_LINES);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const executeCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    setLines((prev) => [...prev, { type: 'prompt', text: cmd }]);

    const matched = COMMANDS[trimmed];
    if (!matched) {
      setIsProcessing(true);
      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: 'error', text: `command not found in demo sandbox. Type 'help' to see available commands.` },
        ]);
        setIsProcessing(false);
      }, 300);
      return;
    }

    const delay = matched.delay || 200;
    setIsProcessing(true);
    setLines((prev) => [...prev, { type: 'loading', text: 'executing...' }]);

    setTimeout(() => {
      setLines((prev) => {
        const withoutLoading = prev.filter((l) => l.type !== 'loading');
        return [...withoutLoading, ...matched.output];
      });
      setIsProcessing(false);
    }, delay);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;
    executeCommand(input.trim());
    setInput('');
  };

  const handleChipClick = (command) => {
    if (isProcessing) return;
    setInput('');
    executeCommand(command);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full">
      <div className="relative bg-[#0c1222] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[11px] font-mono text-gray-500 ml-2">kube-shell-v2.0</span>
          </div>
          <span className="text-[10px] text-gray-600 bg-dark-600/50 px-2 py-0.5 rounded border border-white/5">
            Simulated environment
          </span>
        </div>

        <div
          ref={terminalRef}
          className="p-5 font-mono text-sm h-[340px] overflow-y-auto space-y-1 cursor-text"
          onClick={focusInput}
        >
          {lines.map((line, i) => (
            <LineRenderer key={i} line={line} />
          ))}

          <form onSubmit={handleSubmit} className="flex gap-2 items-center mt-1">
            <span className="text-green-400 select-none text-sm">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isProcessing}
              className="flex-1 bg-transparent text-white text-sm outline-none caret-green-400 placeholder-gray-600 disabled:opacity-50"
              placeholder={isProcessing ? '' : 'Type a command...'}
              autoComplete="off"
              spellCheck="false"
            />
            {!isProcessing && (
              <span className="w-2 h-4 bg-green-400 animate-pulse rounded-sm" />
            )}
          </form>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {QUICK_COMMANDS.map((chip) => (
          <button
            key={chip.label}
            onClick={() => handleChipClick(chip.command)}
            disabled={isProcessing}
            className="px-3 py-1.5 text-xs font-medium bg-dark-600/80 border border-white/[0.08] rounded-lg text-gray-400 hover:text-white hover:border-brand-blue/40 hover:bg-dark-500/80 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {chip.label}
          </button>
        ))}
      </div>

      <p className="text-center text-[11px] text-gray-600 mt-3">
        Frontend demo only &middot; No real cluster connected
      </p>
    </div>
  );
};

export default SandboxTerminal;
