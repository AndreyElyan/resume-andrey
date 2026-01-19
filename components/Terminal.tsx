import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: string | JSX.Element;
  isError?: boolean;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "",
      output: (
        <span>
          Welcome to Andrey&apos;s Terminal v1.0.0
          <br />
          Type <span className="text-green-400">help</span> to see available
          commands.
          <br />
          <br />
        </span>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<
    string,
    { description: string; action: (args?: string[]) => string | JSX.Element }
  > = {
    help: {
      description: "Show available commands",
      action: () => (
        <div className="space-y-1">
          <p className="text-yellow-400 mb-2">Available commands:</p>
          {Object.entries(commands).map(([cmd, { description }]) => (
            <p key={cmd}>
              <span className="text-green-400 w-24 inline-block">{cmd}</span>
              <span className="text-gray-400">- {description}</span>
            </p>
          ))}
        </div>
      ),
    },
    about: {
      description: "Learn about Andrey",
      action: () => (
        <div className="space-y-2">
          <p className="text-cyan-400">👋 Hey! I&apos;m Andrey Elyan</p>
          <p className="text-gray-300">
            Senior Software Engineer with 8+ years of experience.
          </p>
          <p className="text-gray-300">
            I build scalable systems with Node.js, TypeScript, NestJS, and AWS.
          </p>
          <p className="text-gray-300">
            Currently working at Grupo Boticário on RFID solutions.
          </p>
        </div>
      ),
    },
    skills: {
      description: "List technical skills",
      action: (args) => {
        const skillCategories: Record<string, string[]> = {
          backend: ["Node.js", "NestJS", "TypeScript", "Express", "GraphQL"],
          frontend: ["React", "Next.js", "React Native", "TailwindCSS"],
          cloud: ["AWS Lambda", "S3", "DynamoDB", "EKS", "Docker", "K8s"],
          database: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
        };

        if (args && args[0] && skillCategories[args[0]]) {
          return (
            <div>
              <p className="text-yellow-400 mb-1">
                {args[0].toUpperCase()} Skills:
              </p>
              <p className="text-green-400">
                {skillCategories[args[0]].join(" | ")}
              </p>
            </div>
          );
        }

        return (
          <div className="space-y-2">
            <p className="text-yellow-400">
              Skills by category (use: skills [category]):
            </p>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <p key={category}>
                <span className="text-cyan-400 w-20 inline-block">
                  {category}:
                </span>
                <span className="text-gray-300">{skills.slice(0, 3).join(", ")}...</span>
              </p>
            ))}
          </div>
        );
      },
    },
    contact: {
      description: "Get contact information",
      action: () => (
        <div className="space-y-1">
          <p className="text-yellow-400 mb-2">📬 Contact Info:</p>
          <p>
            <span className="text-cyan-400">Email:</span>{" "}
            <a
              href="mailto:andreyelyan.contato@gmail.com"
              className="text-blue-400 hover:underline"
            >
              andreyelyan.contato@gmail.com
            </a>
          </p>
          <p>
            <span className="text-cyan-400">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/5551985809513"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              +55 51 98580-9513
            </a>
          </p>
          <p>
            <span className="text-cyan-400">GitHub:</span>{" "}
            <a
              href="https://github.com/AndreyElyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/AndreyElyan
            </a>
          </p>
          <p>
            <span className="text-cyan-400">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/andrey-elyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/andrey-elyan
            </a>
          </p>
        </div>
      ),
    },
    projects: {
      description: "Show featured projects",
      action: () => (
        <div className="space-y-2">
          <p className="text-yellow-400 mb-2">🚀 Featured Projects:</p>
          <p>
            <span className="text-green-400">GB Rastreio</span>
            <span className="text-gray-400">
              {" "}
              - RFID platform processing 15M+ tags/month
            </span>
          </p>
          <p>
            <span className="text-green-400">Self-Checkout</span>
            <span className="text-gray-400">
              {" "}
              - RFID retail solution for 4000+ stores
            </span>
          </p>
          <p>
            <span className="text-green-400">Omni Sale</span>
            <span className="text-gray-400">
              {" "}
              - Omnichannel platform with React Native
            </span>
          </p>
        </div>
      ),
    },
    "sudo hire": {
      description: "Try to hire Andrey",
      action: () => (
        <div className="space-y-1">
          <p className="text-green-400">
            ✨ sudo hire andrey --position=&quot;awesome role&quot;
          </p>
          <p className="text-yellow-400">Processing...</p>
          <p className="text-cyan-400">
            🎉 Great choice! Let&apos;s talk! Send me a message:
          </p>
          <p>
            <span className="text-gray-400">📧</span>{" "}
            <a
              href="mailto:andreyelyan.contato@gmail.com"
              className="text-blue-400 hover:underline"
            >
              andreyelyan.contato@gmail.com
            </a>
          </p>
          <p>
            <span className="text-gray-400">📱</span>{" "}
            <a
              href="https://wa.me/5551985809513"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              WhatsApp: +55 51 98580-9513
            </a>
          </p>
        </div>
      ),
    },
    clear: {
      description: "Clear terminal",
      action: () => {
        setTimeout(() => {
          setHistory([
            {
              command: "",
              output: (
                <span>
                  Terminal cleared. Type <span className="text-green-400">help</span> for
                  commands.
                  <br />
                  <br />
                </span>
              ),
            },
          ]);
        }, 0);
        return "";
      },
    },
    whoami: {
      description: "Who is visiting?",
      action: () => "guest@andrey-portfolio ~ You're an awesome visitor! 🎉",
    },
    date: {
      description: "Show current date",
      action: () => new Date().toString(),
    },
    echo: {
      description: "Echo a message",
      action: (args) => args?.join(" ") || "",
    },
    coffee: {
      description: "Get some coffee",
      action: () => (
        <div>
          <p>☕ Brewing coffee...</p>
          <p className="text-yellow-400">
            Here&apos;s your mass, fellow developer!
          </p>
          <pre className="text-amber-600 text-xs mt-2">
            {`
    ( (
     ) )
  ........
  |      |]
  \\      /
   '----'
            `}
          </pre>
        </div>
      ),
    },
    matrix: {
      description: "Enter the Matrix",
      action: () => (
        <div className="text-green-400">
          <p>Wake up, Neo...</p>
          <p>The Matrix has you...</p>
          <p>Follow the white rabbit. 🐰</p>
          <p className="text-gray-500 text-xs mt-2">
            (Matrix mode coming soon...)
          </p>
        </div>
      ),
    },
    exit: {
      description: "Close terminal",
      action: () => {
        setTimeout(() => onClose(), 500);
        return "Goodbye! 👋 Closing terminal...";
      },
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(" ");
    const mainCommand = parts[0];
    const args = parts.slice(1);

    // Check for sudo hire specifically
    if (trimmedCmd.startsWith("sudo hire")) {
      return commands["sudo hire"].action();
    }

    if (trimmedCmd === "") {
      return "";
    }

    if (commands[mainCommand]) {
      return commands[mainCommand].action(args);
    }

    return (
      <span className="text-red-400">
        Command not found: {mainCommand}. Type{" "}
        <span className="text-green-400">help</span> for available commands.
      </span>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = executeCommand(input);
    setHistory((prev) => [...prev, { command: input, output }]);
    setCommandHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-20 right-4 md:right-8 w-[95vw] md:w-[600px] h-[400px] bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 z-50 overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <TerminalIcon size={16} className="text-green-400" />
              <span className="text-sm text-gray-300 font-mono">
                andrey@portfolio:~
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-700 rounded transition-colors"
              >
                <Minus size={14} className="text-gray-400" />
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:bg-red-500/20 rounded transition-colors"
              >
                <X size={14} className="text-gray-400 hover:text-red-400" />
              </button>
            </div>
          </div>

          {/* Terminal content */}
          <div
            ref={terminalRef}
            className="h-[calc(100%-80px)] overflow-y-auto p-4 font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="mb-2">
                {item.command && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">guest@andrey</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-500">$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                <div className="text-gray-300 ml-0 mt-1">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800/50 border-t border-gray-700"
          >
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="text-green-400">guest@andrey</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Floating button to open terminal
export const TerminalButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:right-8 p-4 bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg border border-gray-700 z-40 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <TerminalIcon
        size={24}
        className="text-green-400 group-hover:text-green-300 transition-colors"
      />
      <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Open Terminal
      </span>
    </motion.button>
  );
};

export default Terminal;
