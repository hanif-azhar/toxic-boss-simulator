# ☠️ Toxic Boss Simulator

> A stress-relief chat app where you face off with a simulated toxic boss — and choose to reply politely, sassily, or go fully unhinged 🔥

---

## 💡 Features

- 💬 Mock chat interface with toxic boss messages
- 😤 Reply choices: Polite 🕊️, Sassy 😏, Unhinged 💥
- 🔁 Backend-powered random logic using tone + category
- 🎧 Optional sound effects on new messages
- 🔥 Burn meter that fills up as the boss nags
- 👀 Typing animation for fake realism

---

## 🛠 Tech Stack

| Frontend | Backend |
|----------|---------|
| React    | Node.js (Express) |
| HTML/CSS | JSON for data |
| Optional: Tailwind or plain styles | No database needed |

---

## 📦 Folder Structure

```
toxic-boss-simulator/
├── toxic-boss-frontend/    # React app
│   └── src/
│       └── ToxicBossSimulator.jsx
├── toxic-boss-backend/     # Node.js backend
│   ├── messages/bossMessages.json
│   ├── replies/replies.json
│   └── server.js
```

---

## 🚀 Local Setup

### 1. Clone this repo
```bash
git clone https://github.com/your-username/toxic-boss-simulator.git
cd toxic-boss-simulator
```

### 2. Run Backend
```bash
cd toxic-boss-backend
npm install
node server.js
```

### 3. Run Frontend (new terminal)
```bash
cd toxic-boss-frontend
npm install
npm start
```

### 4. (Optional) Add Notification Sound
Put `notification.mp3` in:
```
toxic-boss-frontend/public/sounds/
```

---

## 🤯 Future Features

- Unlock secret replies based on burn level
- Customizable bosses (Karen, Greg, etc.)
- Screenshot-to-HR export
- Auto-scroll, reaction emojis, animated stress meter
- Deploy it on Vercel/Render

---

## 💬 Created By
**Hanif Azhar** – Code therapy for the unemployed, overworked, or just unhinged.

---

> Pull requests welcome. Or don't. We’re used to being ignored. 🤡
