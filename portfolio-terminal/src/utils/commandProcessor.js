import {
  ABOUT_ME,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  HELP_TEXT,
  EASTER_EGGS,
  COWSAY,
  NEOFETCH
} from '../data/portfolioData';

export const processCommand = (input, currentPath, setCurrentPath, setTheme, setShowGUI) => {
  const [command, ...args] = input.split(' ');
  const arg = args.join(' ');

  switch (command.toLowerCase()) {
    case 'help':
      return { output: HELP_TEXT };

    case 'clear':
    case 'cls':
      return { clear: true };

    case 'reboot':
      return { reboot: true };

    case 'about':
      return { output: formatAbout() };

    case 'experience':
    case 'exp':
      return { output: formatExperience() };

    case 'projects':
      return { output: formatProjects() };

    case 'run':
    case 'execute':
      if (!arg) {
        return { output: 'Usage: run <project-name>\nTry: run data-royale', type: 'error' };
      }
      return { output: formatProjectDetails(arg) };

    case 'skills':
      return { output: formatSkills() };

    case 'contact':
      return { output: formatContact() };

    case 'resume':
      return { output: formatResume() };

    case 'ls':
      return { output: listDirectory(arg || currentPath) };

    case 'pwd':
      return { output: currentPath };

    case 'cd':
      if (!arg || arg === '~') {
        setCurrentPath('/home/ruben');
        return { output: '' };
      }
      const newPath = resolvePath(currentPath, arg);
      if (isValidPath(newPath)) {
        setCurrentPath(newPath);
        return { output: '' };
      }
      return { output: `cd: ${arg}: No such file or directory`, type: 'error' };

    case 'cat':
      if (!arg) {
        return { output: 'cat: missing file operand', type: 'error' };
      }
      return { output: catFile(arg, currentPath) };

    case 'tree':
      return { output: formatTree(arg || currentPath) };

    case 'whoami':
      return { output: 'ruben' };

    case 'neofetch':
      return { output: NEOFETCH };

    case 'cowsay':
      if (!arg) {
        return { output: COWSAY('Moo! Type something after cowsay!') };
      }
      return { output: COWSAY(arg) };

    case 'theme':
      if (!arg) {
        return { output: 'Available themes: matrix, dracula, monokai, cyberpunk\nUsage: theme <name>' };
      }
      const validThemes = ['matrix', 'dracula', 'monokai', 'cyberpunk'];
      if (validThemes.includes(arg.toLowerCase())) {
        setTheme(arg.toLowerCase());
        return { output: `Theme changed to: ${arg}` };
      }
      return { output: `Theme "${arg}" not found. Available: matrix, dracula, monokai, cyberpunk`, type: 'error' };

    case 'gui':
      setShowGUI(prev => !prev);
      return { output: 'Toggling GUI mode...' };

    case 'sudo':
      if (args[0] === 'rm' && args[1] === '-rf' && args[2] === '/') {
        return { output: EASTER_EGGS['sudo rm -rf /'].join('\n') };
      }
      return { output: 'Nice try! This command is restricted. 😏' };

    case 'matrix':
      return { output: EASTER_EGGS.matrix.join('\n') };

    case 'konami':
      return { output: EASTER_EGGS.konami.join('\n') };

    case 'test':
      return { output: EASTER_EGGS.test.join('\n') };

    case 'echo':
      return { output: arg };

    case 'date':
      return { output: new Date().toString() };

    case 'history':
      return { output: 'Command history feature enabled! Use ↑/↓ arrows.' };

    default:
      return {
        output: `Command not found: ${command}\nType 'help' for available commands.`,
        type: 'error'
      };
  }
};

const formatAbout = () => {
  const { name, title, email, location, education, bio } = ABOUT_ME;
  return `
╔═══════════════════════════════════════════════════════════════════════╗
║                              ABOUT ME                                 ║
╚═══════════════════════════════════════════════════════════════════════╝

👤 ${name}
💼 ${title}
📧 ${email}
📍 ${location}

🎓 EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ${education.school}
  ${education.degree}
  GPA: ${education.gpa}
  ${education.dates}

📝 BIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${bio}

💡 Try: 'experience' to see where I've worked
💡 Try: 'projects' to see what I've built
💡 Try: 'skills' to see my technical skills
`;
};

const formatExperience = () => {
  let output = `
╔═══════════════════════════════════════════════════════════════════════╗
║                         WORK EXPERIENCE                               ║
║                    (Formatted as git log)                             ║
╚═══════════════════════════════════════════════════════════════════════╝

`;

  EXPERIENCE.forEach((exp, index) => {
    const hash = Math.random().toString(36).substr(2, 7);
    output += `\x1b[33mcommit ${hash}${index === 0 ? ' \x1b[32m(HEAD -> main)\x1b[0m' : ''}\x1b[0m
Author: Ruben Alias <ruben.alias715@gmail.com>
Date:   ${exp.dates}
Branch: ${exp.branch}

    ${exp.role} @ ${exp.company}
    Location: ${exp.location}

${exp.description.map(d => `    ${d}`).join('\n')}

`;
  });

  output += `\n💡 Tip: Type 'projects' to see what I've built!\n`;
  return output;
};

const formatProjects = () => {
  let output = `
╔═══════════════════════════════════════════════════════════════════════╗
║                            MY PROJECTS                                ║
╚═══════════════════════════════════════════════════════════════════════╝

`;

  Object.keys(PROJECTS).forEach((key) => {
    const project = PROJECTS[key];
    output += `📦 ${key}\n`;
    output += `   ${project.name}\n`;
    output += `   Type: ${project.type} | Language: ${project.language}\n\n`;
  });

  output += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 To see project details, type: run <project-name>
   Example: run data-royale

Available projects:
${Object.keys(PROJECTS).map(k => `  • ${k}`).join('\n')}
`;

  return output;
};

const formatProjectDetails = (projectKey) => {
  const project = PROJECTS[projectKey.toLowerCase()];

  if (!project) {
    return `Project "${projectKey}" not found.\n\nAvailable projects:\n${Object.keys(PROJECTS).map(k => `  • ${k}`).join('\n')}`;
  }

  let output = `
╔═══════════════════════════════════════════════════════════════════════╗
║  EXECUTING: ${project.name.padEnd(55)} ║
╚═══════════════════════════════════════════════════════════════════════╝

`;

  output += `📋 Project: ${project.name}\n`;
  output += `💻 Type: ${project.type}\n`;
  output += `🔧 Language: ${project.language}\n`;

  if (project.github) {
    output += `🔗 GitHub: ${project.github}\n`;
  }

  output += `\n✨ FEATURES & ACHIEVEMENTS\n`;
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  project.description.forEach(desc => {
    output += `${desc}\n`;
  });

  output += `\n🛠️  TECHNOLOGIES USED\n`;
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  output += project.technologies.map(tech => `  • ${tech}`).join('\n');

  output += `\n\n✅ Execution completed successfully!\n`;

  return output;
};

const formatSkills = () => {
  let output = `
╔═══════════════════════════════════════════════════════════════════════╗
║                          TECHNICAL SKILLS                             ║
║                      (Formatted as tree)                              ║
╚═══════════════════════════════════════════════════════════════════════╝

/skills
`;

  const categories = Object.keys(SKILLS);
  categories.forEach((category, catIndex) => {
    const isLast = catIndex === categories.length - 1;
    const prefix = isLast ? '└──' : '├──';
    output += `${prefix} ${SKILLS[category].icon} ${category}\n`;

    const items = SKILLS[category].items;
    items.forEach((item, itemIndex) => {
      const isLastItem = itemIndex === items.length - 1;
      const itemPrefix = isLast ? '    ' : '│   ';
      const itemBranch = isLastItem ? '└──' : '├──';
      output += `${itemPrefix}${itemBranch} ${item}\n`;
    });
  });

  output += `\n💡 These are just the highlights! I'm always learning new technologies.\n`;
  return output;
};

const formatContact = () => {
  const { email, github, linkedin, location } = ABOUT_ME;
  return `
╔═══════════════════════════════════════════════════════════════════════╗
║                          CONTACT INFO                                 ║
╚═══════════════════════════════════════════════════════════════════════╝

📧 Email:    ${email}
🔗 GitHub:   ${github}
💼 LinkedIn: ${linkedin}
📍 Location: ${location}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Feel free to reach out! I'm always interested in discussing:
   • AI/ML projects and research
   • Computer vision applications
   • Embedded systems and hardware design
   • Full-stack development opportunities
   • Open source collaboration

🚀 Available for: Full-time positions, consulting, and collaborations
`;
};

const formatResume = () => {
  return `
╔═══════════════════════════════════════════════════════════════════════╗
║                         RUBEN ALIAS - RESUME                          ║
╚═══════════════════════════════════════════════════════════════════════╝

Quick Links:
  • about      - Personal info and education
  • experience - Work history
  • projects   - Portfolio projects
  • skills     - Technical skills
  • contact    - Get in touch

📄 For a downloadable PDF resume, please email me at:
   ruben.alias715@gmail.com

💡 Tip: Try 'run <project-name>' to see detailed project information!
`;
};

const listDirectory = (path) => {
  // Simplified ls - you can enhance this
  if (path.includes('projects')) {
    return Object.keys(PROJECTS).join('\n');
  }
  if (path.includes('experience')) {
    return 'delta.sh\nrutgers.sh\nyankees.sh\nwinlab.sh';
  }
  return 'about.txt\nskills.txt\ncontact.txt\nprojects/\nexperience/';
};

const catFile = (filename, currentPath) => {
  if (filename === 'about.txt' || filename.includes('about')) {
    return formatAbout();
  }
  if (filename === 'contact.txt' || filename.includes('contact')) {
    return formatContact();
  }
  return `cat: ${filename}: No such file or directory`;
};

const formatTree = (path) => {
  return `
/home/ruben
├── about.txt
├── contact.txt
├── skills.txt
├── projects/
│   ├── data-royale
│   ├── bat-tracker
│   ├── myrutgers
│   ├── super-resolution
│   ├── mandelbrot-cuda
│   ├── action-classifier
│   ├── grisc-cpu
│   └── self-driving-car
└── experience/
    ├── delta.sh
    ├── rutgers.sh
    ├── yankees.sh
    └── winlab.sh

💡 Try: run <project-name> to execute a project
`;
};

const resolvePath = (currentPath, targetPath) => {
  if (targetPath.startsWith('/')) return targetPath;
  if (targetPath === '..') {
    const parts = currentPath.split('/').filter(Boolean);
    parts.pop();
    return '/' + parts.join('/') || '/';
  }
  return currentPath + '/' + targetPath;
};

const isValidPath = (path) => {
  const validPaths = [
    '/',
    '/home',
    '/home/ruben',
    '/home/ruben/projects',
    '/home/ruben/experience'
  ];
  return validPaths.includes(path);
};
