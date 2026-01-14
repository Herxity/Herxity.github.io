# 🚀 Ruben Alias - Interactive Terminal Portfolio

A modern, interactive portfolio website designed as a fully functional terminal emulator. Built with React and Vite, this portfolio combines the nostalgic aesthetics of command-line interfaces with modern web technologies to create an engaging and memorable user experience.

## ✨ Features

### 🖥️ Terminal Emulation
- **Fully Interactive CLI**: Real command-line interface with working commands
- **Command History**: Navigate through previous commands with ↑/↓ arrow keys
- **Tab Completion**: Auto-complete commands by pressing Tab
- **Keyboard Shortcuts**: Ctrl+L to clear, Ctrl+C to cancel
- **Boot Sequence**: Realistic system boot animation on page load
- **Blinking Cursor**: Authentic terminal cursor animation

### 🎨 Themes
Multiple color schemes inspired by popular terminal themes:
- **Monokai** (Default): Classic dark theme with vibrant syntax highlighting
- **Matrix**: Green-on-black hacker aesthetic
- **Dracula**: Popular purple and cyan color scheme
- **Cyberpunk**: Neon-inspired futuristic theme

Change themes with: `theme <name>`

### 📋 Available Commands

#### Navigation & File System
```bash
ls [path]              # List directory contents
cd <directory>         # Change directory
pwd                    # Print working directory
cat <file>             # Display file contents
tree [path]            # Show directory tree structure
```

#### Portfolio Commands
```bash
about                  # Display information about Ruben
experience             # Show work experience (formatted as git log)
projects               # List all projects
run <project>          # Execute/view project details
skills                 # Display technical skills (tree format)
contact                # Show contact information
resume                 # View resume summary
```

#### Fun & Interactive
```bash
help                   # Show all available commands
clear                  # Clear the terminal
whoami                 # Display current user
neofetch               # System information
cowsay <message>       # Make a cow say something
matrix                 # Enter the Matrix...
konami                 # Try the Konami code!
sudo rm -rf /          # Don't try this at home... (Easter egg)
theme <name>           # Change color theme
gui                    # Toggle GUI mode
```

### 🎮 Easter Eggs
Discover hidden surprises! Try these commands:
- `sudo rm -rf /` - AI safety protocols activate!
- `matrix` - Follow the white rabbit
- `konami` - ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA
- `test` - Run the test suite

### 📱 Mobile Responsive
- Adaptive layout for all screen sizes
- Touch-friendly interface
- Optimized font sizes for mobile devices
- Full functionality on smartphones and tablets

### ♿ Accessibility
- Screen reader compatible
- Keyboard navigation support
- Good contrast ratios across all themes
- Optional GUI mode toggle for traditional navigation
- Respects `prefers-reduced-motion` for animations

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 7.x
- **Styling**: Custom CSS with multiple themes
- **Fonts**: Fira Code & JetBrains Mono (monospace with ligatures)
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Herxity/Herxity.github.io.git
cd Herxity.github.io/portfolio-terminal
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Option 1: Manual Deployment

1. **Build the project**
```bash
npm run build
```

2. **Copy build files to repository root**
```bash
# From the portfolio-terminal directory
cp -r dist/* ../
cd ..
```

3. **Commit and push**
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

4. **Enable GitHub Pages**
- Go to repository Settings → Pages
- Set Source to "Deploy from a branch"
- Select `main` branch and `/ (root)` folder
- Save

### Option 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: |
          cd portfolio-terminal
          npm ci

      - name: Build
        run: |
          cd portfolio-terminal
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./portfolio-terminal/dist
```

## 📁 Project Structure

```
portfolio-terminal/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Terminal.jsx    # Main terminal component
│   │   └── Terminal.css    # Terminal styling
│   ├── data/
│   │   └── portfolioData.js # All portfolio content
│   ├── utils/
│   │   └── commandProcessor.js # Command parsing logic
│   ├── App.jsx             # Root component
│   ├── App.css             # App styling
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding New Commands

Edit `src/utils/commandProcessor.js`:

```javascript
case 'mycommand':
  return { output: 'Your custom output here!' };
```

### Updating Portfolio Content

Edit `src/data/portfolioData.js`:
- `ABOUT_ME` - Personal information
- `EXPERIENCE` - Work history
- `PROJECTS` - Portfolio projects
- `SKILLS` - Technical skills
- `EASTER_EGGS` - Hidden commands

### Creating New Themes

Add theme to `src/components/Terminal.css`:

```css
.theme-mytheme {
  background: #yourcolor;
  /* Add your color scheme */
}
```

Update theme list in command processor.

## 🎯 Key Features Explained

### Boot Sequence
The portfolio starts with a realistic boot animation, simulating a system startup sequence. This creates an immersive experience right from page load.

### Command Processing
The command processor uses a switch-case structure to parse commands and return formatted outputs. It maintains state for current path, command history, and theme preferences.

### File System Simulation
The portfolio simulates a Unix-like file system structure where:
- Projects are "executables"
- Information is stored in "text files"
- Experience is formatted as "git log"
- Skills are displayed as a "directory tree"

### Responsive Design
CSS media queries ensure the terminal adapts to different screen sizes:
- Large screens: Full terminal experience
- Tablets: Adjusted font sizes and spacing
- Mobile: Optimized layout with touch targets

## 💡 Design Philosophy

This portfolio was designed with three core principles:

1. **Memorable**: Stand out with a unique terminal interface
2. **Interactive**: Engage visitors with hands-on exploration
3. **Professional**: Demonstrate technical skills through implementation

The terminal aesthetic pays homage to the command-line tools developers use daily while showcasing modern web development capabilities.

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### GitHub Pages Not Updating
- Check GitHub Actions tab for deployment status
- Clear browser cache
- Wait 5-10 minutes for DNS propagation

## 📧 Contact

- **Email**: ruben.alias715@gmail.com
- **GitHub**: [github.com/Herxity](https://github.com/Herxity)
- **LinkedIn**: [linkedin.com/in/ruben-alias](https://linkedin.com/in/ruben-alias)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by classic terminal emulators and retro computing
- Font: Fira Code and JetBrains Mono
- Color schemes inspired by Monokai, Dracula, and Matrix

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] File upload simulation
- [ ] Interactive code editor
- [ ] Real-time typing test
- [ ] Connect Four or other terminal games
- [ ] Full VIM mode
- [ ] Command aliases
- [ ] Shell scripting support
- [ ] Download resume as PDF

---

**Made with ❤️ by Ruben Alias**

Type `help` in the terminal to explore all available commands!
