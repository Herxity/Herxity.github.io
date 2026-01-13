import { useState, useEffect, useRef } from 'react';
import { processCommand } from '../utils/commandProcessor';
import { ASCII_BANNER, BOOT_SEQUENCE } from '../data/portfolioData';
import './Terminal.css';

const Terminal = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState('/home/ruben');
  const [isBooting, setIsBooting] = useState(true);
  const [theme, setTheme] = useState('monokai');
  const [showGUI, setShowGUI] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const outputEndRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    if (isBooting) {
      let index = 0;
      const bootInterval = setInterval(() => {
        if (index < BOOT_SEQUENCE.length) {
          setOutput(prev => [...prev, { type: 'system', content: BOOT_SEQUENCE[index] }]);
          index++;
        } else {
          clearInterval(bootInterval);
          setIsBooting(false);
          setOutput(prev => [
            ...prev,
            { type: 'banner', content: ASCII_BANNER },
            { type: 'system', content: 'Welcome! Type "help" to see available commands.\n' }
          ]);
        }
      }, 300);
      return () => clearInterval(bootInterval);
    }
  }, [isBooting]);

  // Auto-scroll to bottom
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Focus input when clicking terminal
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    const terminal = terminalRef.current;
    terminal?.addEventListener('click', handleClick);
    return () => terminal?.removeEventListener('click', handleClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add command to output
    setOutput(prev => [...prev, { type: 'command', content: input, path: currentPath }]);

    // Add to history
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    // Process command
    const result = processCommand(input.trim(), currentPath, setCurrentPath, setTheme, setShowGUI);

    if (result.clear) {
      setOutput([]);
    } else if (result.reboot) {
      setOutput([]);
      setIsBooting(true);
    } else {
      setOutput(prev => [...prev, { type: result.type || 'output', content: result.output }]);
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocomplete - you can enhance this
      const commands = ['help', 'about', 'experience', 'projects', 'skills', 'contact', 'clear', 'ls', 'pwd', 'cat', 'tree'];
      const match = commands.find(cmd => cmd.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setOutput([]);
    } else if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      setOutput(prev => [...prev, { type: 'command', content: input + '^C', path: currentPath }]);
      setInput('');
    }
  };

  const renderOutput = (item, index) => {
    switch (item.type) {
      case 'banner':
        return (
          <pre key={index} className="ascii-art">
            {item.content}
          </pre>
        );
      case 'command':
        return (
          <div key={index} className="command-line">
            <span className="prompt">
              <span className="user">ruben@portfolio</span>
              <span className="separator">:</span>
              <span className="path">{item.path}</span>
              <span className="dollar">$</span>
            </span>
            <span className="command-text">{item.content}</span>
          </div>
        );
      case 'system':
        return (
          <div key={index} className="system-message">
            {item.content}
          </div>
        );
      case 'error':
        return (
          <div key={index} className="error-message">
            {item.content}
          </div>
        );
      default:
        return (
          <div key={index} className="output-text">
            {typeof item.content === 'string' ? (
              item.content.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))
            ) : (
              item.content
            )}
          </div>
        );
    }
  };

  if (showGUI) {
    return (
      <div className={`gui-mode theme-${theme}`}>
        <div className="gui-header">
          <h1>Ruben Alias - Portfolio</h1>
          <button onClick={() => setShowGUI(false)} className="terminal-mode-btn">
            Switch to Terminal Mode
          </button>
        </div>
        <div className="gui-content">
          <p>GUI mode coming soon! Use terminal mode for the full experience.</p>
          <p>Type <code>gui</code> in terminal mode to toggle back.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`terminal-container theme-${theme}`} ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">ruben@portfolio: ~</div>
        <div className="terminal-theme-indicator">{theme}</div>
      </div>
      <div className="terminal-body">
        {output.map((item, index) => renderOutput(item, index))}
        {!isBooting && (
          <form onSubmit={handleSubmit} className="input-line">
            <span className="prompt">
              <span className="user">ruben@portfolio</span>
              <span className="separator">:</span>
              <span className="path">{currentPath}</span>
              <span className="dollar">$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
            />
            <span className="cursor">█</span>
          </form>
        )}
        <div ref={outputEndRef} />
      </div>
    </div>
  );
};

export default Terminal;
