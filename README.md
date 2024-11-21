# 💎 absentSkins.pl

**absentSkins.pl** is a web-based platform for interactive gaming and skin exchange, built using **TypeScript** and **EJS (Embedded JavaScript)**. The project is structured for scalability and clean code, featuring a **Mines game**, Steam login, and a responsive UI designed for gamers.

![Preview](https://cdn.discordapp.com/attachments/1027275122626797630/1309168659377160223/image.png?ex=674099d3&is=673f4853&hm=480e69975a020c59b92194054130ba0d227bef61cf2a6010ed2e6e73ed7e61bd&)

---

## 🌟 Features

- **User-Friendly Interface**: A polished dark theme tailored for a gaming audience.
- **Steam Integration**: Secure login via Steam.
- **Interactive Mines Game**: Play Mines with options for random or manual selections and secure cashouts.
- **Dynamic Feedback**: Real-time gameplay interactions for a seamless experience.
- **Future Plans**: Additional game modes and an advanced exchanger system.

---

## 🛠️ Tech Stack

- **TypeScript**: Ensures type-safe and scalable code.
- **Node.js + Express.js**: Backend server for handling logic and API requests.
- **EJS**: Template engine for rendering dynamic views.
- **CSS**: Custom styling with a modern dark theme.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) v16+
- [Yarn](https://yarnpkg.com/) (or npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xelvor/absentSkins.pl.git
   ```

2. Navigate to the project directory:

   ```bash
   cd absentSkins.pl
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Configure the project:
   Edit the `config.ts` file with your custom values:

   ```typescript
      export const config = {
          mysql: {
              host: '',
              user: '',
              db: '',
              password: ''
          }
      }
   ```

5. Start the development server:

   ```bash
   yarn dev
   ```

6. Open your browser and navigate to:

   ```
   http://localhost:8080
   ```

---

## 📂 Folder Structure

```plaintext
src/
├── controllers/    # Business logic for handling requests
├── public/         # Static files (CSS, images, JS)
├── routes/         # Route definitions for the application
├── utils/          # Utility functions for reusability
├── views/          # EJS templates for dynamic rendering
├── config.ts       # Configuration for app settings (e.g., API keys)
└── index.ts        # Main entry point of the application
```

---

## 🎨 UI Preview

### Header
- **Steam Login**: Button for secure login.
- **Navigation**: Links to `Home`, `Exchanger`, and `Mines`.

### Mines Game
- **Dynamic Grid**: Interactive minesweeper-style grid for gameplay.
- **Controls**: Bet amount, random selection options, and cashout.
- **Feedback**: Real-time visual and textual updates for results.

---

## ✨ Future Enhancements

- **Exchanger System**: Advanced features for skin swapping.
- **Additional Games**: Expansion to include other gaming modes.
- **Mobile Support**: Fully responsive design.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or an issue in the repository.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## ❤️ Acknowledgments

- Thanks to the CS2 community for inspiration.
- UI components and icons provided by [FontAwesome](https://fontawesome.com/).
