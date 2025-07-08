# Profile-app-Section2

A modern profile showcase built with **React Native** and **Expo Router**. This app displays user profile and course-related information, fully optimized for both **dark** and **light** themes with smooth transitions and elegant design.

## ✨ Features

* 👤 Personal profile with avatar, education, and interests
* 📘 Course overview: **Hybrid Mobile Application Programming (IN405109)**
* 👨‍🏫 Instructor information section
* 🔗 Social contacts (Facebook, GitHub, LinkedIn) with icon and link support
* 🌗 Theme toggle (Dark / Light) powered by **Context API**
* 🎨 Beautiful animated cards with scaling on press (like hover)
* 📱 Mobile-responsive layout built for real-world usage

## 🛠️ Tech Stack

* React Native
* Expo
* Expo Router
* React Native Vector Icons
* Context API
* Animated API

## 🚀 Getting Started

### Prerequisites

* Node.js
* Expo CLI: `npm install -g expo-cli`

### Installation

```bash
npm install
```

### Run the App

```bash
npx expo start
```

Scan the QR code using Expo Go or run on an Android/iOS emulator.

## 📁 Project Structure

```
Profile-app-Section2/
├── app/
│   ├── index.jsx              # Home (Profile) Screen
│   ├── about.jsx              # About the Course Page
│   └── _layout.js             # Navigation Layout with ThemeProvider
├── components/
│   └── ThemeToggle.jsx        # Theme toggle button in header
├── context/
│   └── ThemeContext.js        # Theme context and hook
├── assets/
│   ├── image/
│   │   ├── profile.jpg        # Profile image
│   │   └── teacher.jpg        # Instructor image
├── package.json
└── README.md
```

## 👤 Author

**Pathipat Mattra**

* 🌐 Facebook: [Pathipat Mattra](https://facebook.com/pathipat.mattra)
* 💻 GitHub: [pathipat11](https://github.com/pathipat11)
* 💼 LinkedIn: [Pathipat Mattra](https://linkedin.com/in/viixl)

---

Crafted with 💙 for the course *Hybrid Mobile Application Programming* (IN405109) at Khon Kaen University.
