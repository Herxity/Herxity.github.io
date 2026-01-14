// Portfolio data for Ruben Alias

export const ASCII_BANNER = `
██████╗ ██╗   ██╗██████╗ ███████╗███╗   ██╗     █████╗ ██╗     ██╗ █████╗ ███████╗
██╔══██╗██║   ██║██╔══██╗██╔════╝████╗  ██║    ██╔══██╗██║     ██║██╔══██╗██╔════╝
██████╔╝██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ███████║██║     ██║███████║███████╗
██╔══██╗██║   ██║██╔══██╗██╔══╝  ██║╚██╗██║    ██╔══██║██║     ██║██╔══██║╚════██║
██║  ██║╚██████╔╝██████╔╝███████╗██║ ╚████║    ██║  ██║███████╗██║██║  ██║███████║
╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═╝╚══════╝
`;

export const BOOT_SEQUENCE = [
  'Initializing portfolio system...',
  'Loading neural networks... [OK]',
  'Mounting file systems... [OK]',
  'Starting Docker daemon... [OK]',
  'Calibrating computer vision modules... [OK]',
  'Connecting to GitHub... [OK]',
  'System ready. Type "help" for available commands.',
  ''
];

export const ABOUT_ME = {
  name: 'Ruben Alias',
  title: 'Hardware Research & Design Engineer | Full-Stack Developer',
  email: 'ruben.alias715@gmail.com',
  location: 'Atlanta, GA',
  github: 'https://github.com/Herxity',
  linkedin: 'https://linkedin.com/in/ruben-alias',
  education: {
    school: 'Rutgers University - School of Engineering',
    degree: 'BS Electrical and Computer Engineering',
    gpa: '3.8 (Dean\'s List)',
    dates: 'Sep 2021 - May 2025',
    location: 'New Brunswick, NJ'
  },
  bio: `Computer/AI Engineer passionate about building intelligent systems at the intersection
of hardware and software. Currently prototyping cutting-edge hardware solutions at Delta Air Lines,
with experience in computer vision at the New York Yankees, mobile development at Rutgers, and
robotics research at WINLAB.

Specializing in ML/AI systems, computer vision, full-stack development, and embedded systems.
Love working on challenging problems from low-level FPGA design to high-level neural networks.`
};

export const EXPERIENCE = [
  {
    company: 'Delta Air Lines',
    role: 'Hardware Research and Design Engineer Intern',
    location: 'Atlanta, GA',
    dates: 'Jan 2025 – Present',
    branch: 'main',
    description: [
      '⚡ Leveraging embedded SoC\'s to prototype and iterate on components utilizing NFC, UART, I2C, Bluetooth, and SPI',
      '🖥️  Implementing mock server-side software systems for effective testing and quality assurance',
      '🤖 Maintaining up-to-date knowledge of research and development of LLMs and RAGs for use in prototypes'
    ]
  },
  {
    company: 'Rutgers OIT',
    role: 'Application Developer',
    location: 'New Brunswick, NJ',
    dates: 'Oct 2022 – Present',
    branch: 'main',
    description: [
      '📱 Launched the myRutgers mobile app using Flutter, enhancing UX for 70,000+ students and faculty',
      '🚌 Implemented real-time generation of bus route visualizations based on external APIs',
      '⚙️  Optimized logging of user interactions by batching, decreasing API load by 80%',
      '👥 Collaborated with a team of 3 developers on service migration of transit API data handlers'
    ]
  },
  {
    company: 'New York Yankees',
    role: 'Quantitative Analysis Associate',
    location: 'Bronx, NY',
    dates: 'May 2024 – Aug 2024',
    branch: 'computer-vision',
    description: [
      '⚾ Designed classification pipeline using YOLOv8 achieving 93% per-video accuracy',
      '🎯 Trained YOLOv8 keypoint detection model for tracking bat and home plate (mAP50: .84 and .96)',
      '🚀 Effectively automated feature extraction for future computer vision tools'
    ]
  },
  {
    company: 'WINLAB',
    role: 'Computer Vision Intern',
    location: 'New Brunswick, NJ',
    dates: 'Jun 2023 – Aug 2023',
    branch: 'robotics',
    description: [
      '🤖 Constructed a CNN for autonomous navigation within custom-built ROS architecture',
      '💾 Deployed on NVIDIA Jetson Nano for real-time edge computing and inference',
      '⚡ Achieved low-power operation on robotic system'
    ]
  }
];

export const PROJECTS = {
  'data-royale': {
    name: 'AI Model Assessment Platform (Data Royale)',
    type: 'executable',
    language: 'Node.js, Docker, Python',
    github: 'https://github.com/Herxity/SWE2024',
    description: [
      '🏆 Led 11 engineers to build a backend application for hosting ML competitions',
      '🐳 Engineered containerized system to deploy multiple models with Docker via REST API',
      '🔄 Established CI/CD practices with Jest for test-driven development',
      '💰 Integrated Stripe billing system with dynamic pricing based on resource consumption',
      '🔐 Automated API token issuance and validation per-user',
      '📊 Provides automated assessment and metrics recording for ML algorithms'
    ],
    technologies: ['Docker', 'Node.js', 'REST API', 'Jest', 'Stripe', 'ML']
  },
  'bat-tracker': {
    name: 'AI Batter Keypoint Detection Tool',
    type: 'executable',
    language: 'Python, YOLOv8',
    description: [
      '⚾ Leveraged YOLOv8 keypoint model for automated tracking',
      '🎯 Achieved 86% mean average precision (mAP)',
      '⚡ Optimized GPU resource utilization via multithreading in Python',
      '📈 Lowered test times by 75% through parallel processing',
      '🏟️  Developed for New York Yankees baseball analytics'
    ],
    technologies: ['YOLOv8', 'Python', 'Computer Vision', 'GPU Computing', 'Multithreading']
  },
  'myrutgers': {
    name: 'MyRutgers Mobile Application',
    type: 'executable',
    language: 'Flutter, Dart',
    description: [
      '📱 Production mobile app serving 70,000+ students and faculty',
      '🚌 Implemented real-time bus route visualization from external APIs',
      '🛡️  Developed UI components for handling failed API request edge cases',
      '📊 Optimized user interaction logging, reducing API load by 80%',
      '✨ Significantly improved user experience with real-time updates'
    ],
    technologies: ['Flutter', 'Dart', 'Mobile Development', 'REST APIs']
  },
  'super-resolution': {
    name: 'AI Graphics Upscaler Model',
    type: 'executable',
    language: 'Python, PyTorch',
    description: [
      '🖼️  Developed super-resolution tool in PyTorch',
      '📈 30% increase in visual similarity (SSIM)',
      '🚀 90% increase in signal quality (PSNR)',
      '🎬 Significantly improved visual quality of low-resolution video frames',
      '🧠 Deep learning-based approach for image enhancement'
    ],
    technologies: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Image Processing']
  },
  'mandelbrot-cuda': {
    name: 'CUDA Mandelbrot Set Generator',
    type: 'executable',
    language: 'CUDA, C++',
    description: [
      '⚡ Leveraged high-performance CUDA code for parallel processing',
      '🚀 1,100% throughput increase over multithreaded CPU execution',
      '⏱️  Reduced computation time from 17 seconds to 1.6 seconds',
      '🎨 Real-time fractal visualization',
      '💻 Demonstrates GPU parallel computing capabilities'
    ],
    technologies: ['CUDA', 'C++', 'GPU Computing', 'Parallel Processing']
  },
  'action-classifier': {
    name: 'Multimodal Action Classifier',
    type: 'executable',
    language: 'Python, PyTorch',
    description: [
      '🤖 Real-time multimodal AI classification model for user actions',
      '📊 Processes time-series sensor data from smartphones',
      '🎯 Achieved 96% accuracy for motion recognition',
      '⚡ Runs in real-time on Flask server with devices on LAN',
      '🧪 Tested LSTM, Transformer Encoder, and Deep CNN architectures',
      '📱 Multi-sensor fusion from smartphone IMU data'
    ],
    technologies: ['PyTorch', 'Flask', 'LSTM', 'Transformers', 'CNN', 'Sensor Fusion']
  },
  'grisc-cpu': {
    name: 'GRISC Microprocessor (FPGA)',
    type: 'executable',
    language: 'VHDL',
    github: 'https://github.com/Herxity/Herxity.github.io/blob/main/Embedded%20Systems%20Lab%205.pdf',
    description: [
      '💾 Developed complete low-level system architecture',
      '🔧 Designed ALU, registers, memory, FSM, UART and VGA I/O',
      '⚡ Optimized performance via efficient pipelining',
      '📈 Increased CPU throughput through pipeline optimization',
      '🎮 Deployed on Zybo Zynq-7 interfacing with VGA and UART',
      '💻 Accepts GRISC assembly instructions'
    ],
    technologies: ['VHDL', 'FPGA', 'Xilinx Vivado', 'Digital Design', 'Computer Architecture']
  },
  'self-driving-car': {
    name: 'Self-Driving Car',
    type: 'executable',
    language: 'Python, ROS',
    description: [
      '🚗 Collaborated with team of 10 to build autonomous driving platform',
      '🤖 Implemented pure pursuit algorithm for path following',
      '🧠 Experimented with AI solutions for autonomous navigation',
      '📡 Developed robotic platform for testing driving algorithms',
      '🎯 Achieved basic self-driving capabilities'
    ],
    technologies: ['Python', 'ROS', 'Robotics', 'Control Systems', 'Computer Vision']
  }
};

export const SKILLS = {
  'Software Development': {
    icon: '💻',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'C#', 'SQL', 'Git', 'Linux']
  },
  'AI & Machine Learning': {
    icon: '🤖',
    items: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Neural Networks', 'YOLOv8', 'CNNs', 'Transformers', 'LSTM']
  },
  'Hardware & Embedded': {
    icon: '⚡',
    items: ['SystemVerilog', 'VHDL', 'FPGA', 'Microcontrollers', 'Soldering', 'Digital Systems', 'DSP']
  },
  'DevOps & Cloud': {
    icon: '🚀',
    items: ['Docker', 'CI/CD', 'REST APIs', 'Git', 'Testing (Jest)']
  },
  'High Performance Computing': {
    icon: '⚙️',
    items: ['CUDA', 'OpenMP', 'GPU Programming', 'Parallel Processing', 'Multithreading']
  },
  'Mobile & Web': {
    icon: '📱',
    items: ['Flutter', 'React', 'Node.js', 'Flask', 'Mobile Development']
  },
  'Robotics': {
    icon: '🤖',
    items: ['ROS', 'Autonomous Navigation', 'Sensor Fusion', 'Control Systems']
  }
};

export const FILE_SYSTEM = {
  '/': {
    type: 'directory',
    contents: ['home', 'usr', 'etc', 'var']
  },
  '/home': {
    type: 'directory',
    contents: ['ruben']
  },
  '/home/ruben': {
    type: 'directory',
    contents: ['about.txt', 'skills.txt', 'contact.txt', 'projects', 'experience']
  },
  '/home/ruben/about.txt': {
    type: 'file',
    content: ABOUT_ME
  },
  '/home/ruben/contact.txt': {
    type: 'file',
    content: {
      email: 'ruben.alias715@gmail.com',
      github: 'https://github.com/Herxity',
      linkedin: 'https://linkedin.com/in/ruben-alias',
      location: 'Atlanta, GA'
    }
  },
  '/home/ruben/projects': {
    type: 'directory',
    contents: Object.keys(PROJECTS)
  },
  '/home/ruben/experience': {
    type: 'directory',
    contents: ['delta.sh', 'rutgers.sh', 'yankees.sh', 'winlab.sh']
  }
};

export const HELP_TEXT = `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 Navigation & Files:
  ls [path]              List directory contents
  cd <directory>         Change directory
  pwd                    Print working directory
  cat <file>             Display file contents
  tree [path]            Show directory tree structure

📊 Portfolio Commands:
  about                  Display information about me
  experience             Show my work experience (git log style)
  projects               List all projects
  run <project>          Execute/view project details
  skills                 Display technical skills
  contact                Show contact information
  resume                 View my resume

🎮 Fun Stuff:
  help                   Show this help message
  clear                  Clear the terminal
  whoami                 Display current user
  neofetch               System information
  cowsay <message>       Make a cow say something
  matrix                 Enter the Matrix...
  konami                 Try the Konami code!
  sudo rm -rf /          Don't try this at home...

🎨 Customization:
  theme <name>           Change color theme (matrix/dracula/monokai)
  gui                    Toggle GUI mode

⌨️  Keyboard Shortcuts:
  Tab                    Auto-complete commands
  ↑/↓                    Navigate command history
  Ctrl+L                 Clear terminal
  Ctrl+C                 Cancel current command

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 Tip: Try typing "run data-royale" or "experience" to see what I've built!
`;

export const EASTER_EGGS = {
  'sudo rm -rf /': [
    'Nice try! 😏',
    '',
    '⚠️  Permission denied: Preventing destruction of portfolio.',
    'The AI safety protocols kicked in!',
    '',
    'Fun fact: I actually built AI safety mechanisms at Delta Air Lines.'
  ],
  'matrix': [
    'Entering the Matrix...',
    '01010111 01100101 01101100 01100011 01101111 01101101 01100101',
    '',
    'Wake up, Neo...',
    'The portfolio has you...',
    'Follow the white rabbit to /home/ruben/projects',
    '',
    '(Type any key to exit the Matrix)'
  ],
  'konami': [
    '🎮 KONAMI CODE ACTIVATED! 🎮',
    '',
    '⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️',
    '',
    '✨ Achievement Unlocked: Found the secret!',
    '🚀 You now have: Unlimited GPU resources!*',
    '',
    '* (Not really, but nice job finding this!)'
  ],
  'test': [
    'Running test suite...',
    '',
    '✓ Portfolio loaded successfully',
    '✓ All neural networks initialized',
    '✓ Computer vision models: ONLINE',
    '✓ Docker containers: RUNNING',
    '✓ Coolness factor: MAXIMUM',
    '',
    'All tests passed! 🎉'
  ]
};

export const COWSAY = (message) => `
 ${'_'.repeat(message.length + 2)}
< ${message} >
 ${'-'.repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;

export const NEOFETCH = `
                    ruben@portfolio
    ██████████      ─────────────────
  ██          ██    OS: Portfolio Linux
 ██            ██   Host: GitHub Pages
██   ██    ██   ██  Kernel: React 18.3.1
██              ██  Uptime: ${new Date().toLocaleDateString()}
██   ██████████ ██  Shell: node.js
██              ██  Resolution: Responsive
 ██            ██   Terminal: Web Terminal
  ██          ██    CPU: Your Browser
    ██████████      GPU: WebGL 2.0
                    Memory: Infinite Loops
`;
