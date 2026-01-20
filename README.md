# 🎯 DailyTyping

A web-based typing practice app to improve speed and accuracy through consistent daily practice and real-time feedback.

## ✨ Features

### 🎯 **Smart Practice Modes**
- **Multiple Datasets** - English word lists (200, 1K, 5K, 10K), programming languages (JavaScript, Python, Rust, etc.), quotes, and commonly misspelled words
- **Infinite Scrolling** - Seamless text generation for uninterrupted practice
- **Error Highlighting** - Visual feedback on mistakes
- **Backspace Support** - Word and character-level corrections

### 📊 **Real-Time Analytics**
- **WPM Tracking** - Live words per minute calculation
- **Accuracy Metrics** - Instant error detection and feedback
- **Per-Key Statistics** - Identify your weak spots with heatmap visualization
- **Speed Classification** - Fast, normal, and slow key indicators

### 🎨 **Beautiful Themes**
- **Cyberpunk Dark** - Eye-friendly soft cyan with pink highlights
- **Cyberpunk Light** - Vibrant purple with modern aesthetics
- **Glass Nature** - Soothing green theme for focused practice
- **Midnight Void** - Pure black and white minimalism

### 🎵 **Immersive Sound Effects**
- **Mechanical Keyboard Sounds** - NK Creams (Linear), Otemu Browns (Tactile), Holy Pandas (Tactile)
- **Error Feedback** - Audio cues for mistakes
- **Toggle On/Off** - Practice in silence when needed

### ⚡ **PWA Support**
- **Offline Mode** - Works without internet after initial load
- **Installable** - Add to home screen on mobile and desktop
- **Fast Performance** - Optimized with service workers and caching

### 🎮 **Enhanced UX**
- **Dynamic Island UI** - Beautiful expandable settings panel
- **Keyboard Shortcuts** - `Enter` to reset/change dataset
- **Glassmorphism Design** - Modern, premium aesthetic
- **Responsive Layout** - Works seamlessly across all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamhitya/dailytyping.git
   cd dailytyping
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: [Next.js 15.4](https://nextjs.org/) - React framework with SSR and SSG
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [SCSS Modules](https://sass-lang.com/) - Scoped and modular styles
- **State Management**: [Immer](https://immerjs.github.io/immer/) - Immutable state updates
- **Audio**: [Howler.js](https://howlerjs.com/) - Cross-browser audio library
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa) - Progressive Web App support
- **Testing**: [Jest](https://jestjs.io/) - JavaScript testing framework

## 🎮 Usage

1. **Start Typing** - Click "Start Typing" or simply start typing to begin
2. **Change Dataset** - Press `Enter` or click the dataset selector
3. **Toggle Theme** - Click the sun/moon icon in the navigation
4. **Enable Sounds** - Click the sound icon to toggle keyboard sounds
5. **View Stats** - Check real-time WPM, accuracy, and per-key statistics

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run linting
npm run lint
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint |
| `npm run prettier` | Format code with Prettier |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Inspired by modern typing practice applications
- Built with ❤️ for the typing community
- Special thanks to all contributors

[![Contributors](https://contrib.rocks/image?repo=iamhitya/DailyTyping)](https://github.com/iamhitya/DailyTyping/graphs/contributors)

## 📧 Support

If you have any questions or need help, feel free to reach out through:
- Open an issue on GitHub
