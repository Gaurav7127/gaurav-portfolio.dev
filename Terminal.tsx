import React, { useState, useEffect, useRef } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, GraduationCap, Code, Briefcase, Shield } from 'lucide-react';

interface Command {
  input: string;
  output: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = (
  <div className="space-y-3">
    <div className="text-blue-400">gaurav@portfolio:~$ welcome</div>
    <div className="text-white">Hi, I'm Gaurav, Artificial Intelliogence Student</div>
    <div className="text-white mt-2">Welcome to my interactive portfolio terminal!</div>
    <div className="text-white">Type 'help' to see available commands.</div>
  </div>
);

const hasShownMessage = useRef(false);

useEffect(() => {
  if (!hasShownMessage.current) {
    typeCommand('', welcomeMessage);
    hasShownMessage.current = true;
  }
}, []);

  useEffect(() => {
    // Auto-scroll to bottom when new commands are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const typeCommand = (input: string, output: string | React.ReactNode) => {
    setIsTyping(true);
    setTimeout(() => {
      setCommands(prev => [...prev, { input, output }]);
      setIsTyping(false);
    }, 300);
  };

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    switch (command) {
      case 'help':
        typeCommand(cmd, (
          <div className="space-y-2">
            <div className="text-white font-bold">Available Commands:</div>
            <div className="ml-4 space-y-1 text-white">
              <div><span className="text-green-400">help</span> - Show available commands</div>
              <div><span className="text-green-400">about</span> - About me</div>
              <div><span className="text-green-400">skills</span> - Technical skills</div>
              <div><span className="text-green-400">projects</span> - Recent projects</div>
              <div><span className="text-green-400">experience</span> - Work experience</div>
              <div><span className="text-green-400">education</span> - Educational background</div>
              <div><span className="text-green-400">certifications</span> - Certifications and achievements</div>
              <div><span className="text-green-400">contact</span> - Contact information</div>
              <div><span className="text-green-400">sudo</span> - Access admin features</div>
              <div><span className="text-green-400">clear</span> - Clear terminal</div>
            </div>
          </div>
        ));
        break;
      
      case 'about':
        typeCommand(cmd, (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-400 font-bold">
              <User size={16} />
              About Me
            </div>
            <div className="ml-4 text-white leading-relaxed space-y-2">
              <div>
                Hi, I'm Gaurav — a passionate Artificial Intelligence student from Yashvantrao Chavan Institute of Science,Satara
            I enjoy solving real-world problems using code and AI technologies.
              </div>
              <div>
                I love building innovative solutions and constantly learning new technologies 
                to stay ahead in this ever-evolving field.
              </div>
              <div>
                Currently pursuing my degree while working on exciting projects and 
                gaining hands-on experience in software development.
              </div>
              <div className="text-green-400 mt-3">
                → Always ready for new challenges and opportunities!
              </div>
            </div>
          </div>
        ));
        break;
      
      case 'skills':
        typeCommand(cmd, (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-400 font-bold">
              <Code size={16} />
               Technical Skills
            </div>
            <div className="ml-4 space-y-3 text-white">
              <div>
                <div className="text-green-400 font-semibold">Programming Languages:</div>
                <div className="ml-2">JavaScript, TypeScript, Python, Java, C++</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold">Frontend Technologies:</div>
                <div className="ml-2">React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold">Backend Technologies:</div>
                <div className="ml-2"> Python, Streamlit,Flask, RESTful APIs</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold">Databases:</div>
                <div className="ml-2">MongoDB, MySQL</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold">Tools & Platforms:</div>
                <div className="ml-2">Git, Docker, AWS, VS Code, Figma,Adobe XD</div>
              </div>
            </div>
          </div>
        ));
        break;
      
      case 'projects':
  typeCommand(cmd, (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-green-400 font-bold">
        <Briefcase size={16} />
        Recent Projects
      </div>
      <div className="ml-4 space-y-4 text-white">
        <div className="border-l-2 border-green-400 pl-4">
          <div className="text-green-400 font-semibold">Movie Recommendation System</div>
          <div className="text-gray-400 text-sm mb-1">Python, Pandas, HTML, CSS, TMDb API</div>
          <div>Implemented cosine similarity and TF-IDF vectorization to recommend movies based on user input.
            A content-based filtering system using ML and Python.
          </div>
          <div className="text-green-400 text-sm mt-1">→ Live Demo | GitHub</div>
        </div>
        <div className="border-l-2 border-green-400 pl-4">
          <div className="text-green-400 font-semibold">Weather App</div>
          <div className="text-gray-400 text-sm mb-1">HTML, CSS, JavaScript, React.js, Streamlit, OpenWeatherMap API</div>
          <div>Displays real-time weather data such as temperature, humidity, and weather conditions by city input.
            Responsive design ensures compatibility across desktop and mobile devices.
          </div>
          <div className="text-green-400 text-sm mt-1">→ Live Demo | GitHub</div>
        </div>
      </div>
    </div>
  ));
  break;

      
   case 'experience':
  typeCommand(cmd, (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-green-400 font-bold">
        <Briefcase size={16} />
        Experience
      </div>
      <div className="ml-4 space-y-4 text-white">
        <div className="border-l-2 border-green-400 pl-4">
          <div className="text-green-400 font-semibold">Academic Coursework & Practical Application</div>
          <div className="text-gray-400 text-sm">B.Sc. in Artificial Intelligence – KBP University</div>
          <div className="mt-1">
            • Applied concepts from Data Structures & Algorithms, Programming Languages, and Database Management in hands-on assignments and mini-projects.<br />
            • Collaborated with peers on project work, improving skills in problem-solving, version control (Git), and team coordination.<br />
          
          </div>
        </div>
      </div>
    </div>
  ));
  break;

case 'education':
  typeCommand(cmd, (

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-green-400 font-bold">
          <GraduationCap size={16} />
          Education
        </div>
        <div className="ml-4 space-y-3 text-white">
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-400 font-semibold">Bachelor in Artificial Intelligence</div>
            <div className="text-gray-400">YCIS Karmaveer Bhaurao Patil University</div>
            <div className="text-gray-400 text-sm">2022 - 2026</div>
            <div className="mt-1">CGPA: 9.39/10</div>
            <div className="text-sm mt-1">
              Relevant Coursework: Artificial Intelligence, Data Structures, Algorithms, Database Systems, 
              Software Engineering, Machine Learning.
            </div>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-400 font-semibold">Higher Secondary Education (CLASS XII)</div>
            <div className="text-gray-400">YashvantRao Chavan Institute of Science, Satara, Maharashtra, India</div>
            <div className="text-gray-400 text-sm">2020 - 2022</div>
            <div className="mt-1">Percentage: 64.67% (Science Stream)</div>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-400 font-semibold">Secondary Education (CLASS X)</div>
            <div className="text-gray-400">Bharat English Medium School, Satara, Maharashtra, India</div>
            <div className="text-gray-400 text-sm">2020 - 2021</div>
            <div className="mt-1">Percentage: 87%</div>
          </div>
        </div>
      </div>
    
  ));
  break;


      
      case 'certifications':
  typeCommand(cmd, (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-green-400 font-bold">
        <Award size={16} />
        Certifications & Achievements
      </div>
      <div className="ml-4 space-y-2 text-white text-sm">
        <div className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <div>
            <div>AWS Certified Advanced Networking - Specialty</div>
            <a href="https://www.udemy.com/certificate/UC-1c0cb649-8469-490a-b05f-5397169bc870/" target="_blank" className="text-green-400 underline">View Certificate</a>
            <span className="text-white"> – 2025</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <div>
            <div>Essentials User Experience Design Adobe XD UI UX Design</div>
            <a href="https://www.udemy.com/certificate/UC-2b9f104a-eb09-4782-b848-4dbbe9596557/" target="_blank" className="text-green-400 underline">View Certificate</a>
            <span className="text-white"> – 2025</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <div>
            <div>What is Generative AI?</div>
            <a href="https://www.linkedin.com/learning/certificates/3ade19a67f8e1111b718216fb18ff31902e0b173ee223c3a606a414343450861?trk=share_certificate" target="_blank" className="text-green-400 underline">View Certificate</a>
            <span className="text-white"> – 2025</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <div>
            <div>Deloitte Cyber Job Simulation</div>
            <a href="https://www.theforage.com/simulations/deloitte-au/cyber-c1e3" target="_blank" className="text-green-400 underline">View Certificate</a>
            <span className="text-white"> – 2025</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <div>
            <div>Python Programming</div>
            <a href="https://www.guvi.in/certificate?id=e4196zm950920K7d1D" target="_blank" className="text-green-400 underline">View Certificate</a>
            <span className="text-white"> – 2024</span>
          </div>
        </div>
      </div>
    </div>
  ));
  break;

      case 'contact':
  typeCommand(cmd, (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-green-400 font-bold">
        <Mail size={16} />
        Contact Information
      </div>
      <div className="ml-4 space-y-2 text-white">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-green-400" />
          <span>Email: gauravsingh1752005@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-green-400" />
          <span>Phone: +91 8530042162</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-green-400" />
          <span>Satara, Maharashtra, India</span>
        </div>
        <div className="mt-4 space-y-1 text-white">
          <div className="text-green-400">Social Links:</div>
          <div className="ml-2 space-y-1">
            <div>
              LinkedIn: <a href="https://linkedin.com/in/GauravSingh175" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">GauravSingh175</a>
            </div>
            <div>
              GitHub: <a href="https://github.com/gaurav7127" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">@gaurav7127</a>
            </div>
            <div>
              Portfolio: <a href="https://gaurav-portfolio.dev" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">gaurav-portfolio.dev</a>
            </div>
          </div>
        </div>
        <div className="mt-3 text-green-400">
          💬 Always open to discussing new opportunities and collaborations!
        </div>
      </div>
    </div>
  ));
  break;

      
      case 'sudo':
        typeCommand(cmd, (
          <div className="space-y-2 text-white">
            <div className="flex items-center gap-2 text-red-400">
              <Shield size={16} />
              <span className="font-bold">Access Granted</span>
            </div>
            <div className="ml-4">
              <div className="text-green-400">🔐 Admin Mode Activated</div>
              <div className="mt-2">Hidden commands unlocked:</div>
              <div className="ml-2 space-y-1 text-green-400">
                <div>→ secret - View hidden message</div>
                <div>→ matrix - Enter the matrix</div>
                <div>→ coffee - Current caffeine level</div>
              </div>
            </div>
          </div>
        ));
        break;
      
      case 'secret':
        typeCommand(cmd, (
          <div className="text-white">
            <div className="text-green-400 font-bold">🤫 Secret Message:</div>
            <div className="ml-4 mt-2">
              "The best way to predict the future is to create it." - Peter Drucker
            </div>
            <div className="ml-4 mt-2 text-green-400">
              Keep building, keep learning, keep growing! 🚀
            </div>
          </div>
        ));
        break;
      
      case 'matrix':
        typeCommand(cmd, (
          <div className="text-green-400 font-mono">
            <div>Wake up, Neo...</div>
            <div className="mt-1">The Matrix has you...</div>
            <div className="mt-1">Follow the white rabbit 🐰</div>
            <div className="mt-2 text-white">Just kidding! But seriously, welcome to my portfolio! 😄</div>
          </div>
        ));
        break;
      
      case 'coffee':
        typeCommand(cmd, (
          <div className="text-white">
            <div className="text-green-400">☕ Current Caffeine Status:</div>
            <div className="ml-4 mt-1">
              <div>Level: ████████░░ 80%</div>
              <div className="text-green-400 mt-1">Status: Highly productive and ready to code!</div>
            </div>
          </div>
        ));
        break;
      
      case 'clear':
        setCommands([]);
        return;
      
      case '':
        return;
      
      default:
        typeCommand(cmd, (
          <div className="text-white">
            <div>bash: {cmd}: command not found</div>
            <div className="text-green-400 mt-1">Type 'help' for available commands.</div>
          </div>
        ));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex-1 bg-black text-white font-mono text-xs md:text-sm overflow-hidden">      
      <div 
        ref={terminalRef}
        className="p-4 md:p-6 h-full overflow-y-auto cursor-text"
        onClick={handleTerminalClick}
      >
        <div className="space-y-3">
          {commands.map((command, index) => (
            <div key={index} className="space-y-2">
              {command.input && (
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">gaurav@portfolio:~$</span>
                  <span className="text-white">{command.input}</span>
                </div>
              )}
              <div className="whitespace-pre-wrap">{command.output}</div>
            </div>
          ))}
          
          {!isTyping && (
            <div className="flex items-center gap-2">
              <span className="text-blue-400">gaurav@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none text-white flex-1"
                autoFocus
              />
              <span className="animate-pulse text-white">|</span>
            </div>
          )}
          
          {isTyping && (
            <div className="flex items-center gap-2">
              <span className="text-blue-400">gaurav@portfolio:~$</span>
              <span className="animate-pulse text-white">...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;