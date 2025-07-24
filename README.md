# Evandro Ripka - Personal Portfolio

A modern, fully responsive and animated portfolio website built with **React**, **Vite**, and **TailwindCSS**, showcasing the developer's skills, background, and selected projects. It includes a secure contact form powered by a custom **Node.js mail server** using **Nodemailer**, fully integrated with a live domain (https://evandroripka.dev).

## 🚀 Features

- **React + Vite** for ultra-fast performance and build time
- **TailwindCSS** for rapid and responsive design
- **GSAP** for smooth animations
- **Email form** with backend integration using **Nodemailer** and **Express.js**
- **Production-ready** with Apache, SSL (Certbot), and reverse proxy
- **VPS hosting** and custom domain setup

---

## 🛠️ Project Structure

```bash
/evandroripka
├── public
├── src
│   ├── assets         # Images, logos, icons
│   ├── components     # Reusable React components
│   ├── pages          # Route components (Home, Contact, etc.)
│   ├── data           # Projects, experience, and skills data
│   └── main.jsx       # Vite app entry point
├── mail-server        # Node.js backend for contact form
│   ├── index.js       # Express app with Nodemailer
│   └── .env           # Your mail config (should be ignored by Git)
├── .env
├── .gitignore
├── package.json
└── vite.config.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/evandroripka/evandroripka-portfolio.git
cd evandroripka-portfolio
```

### 2. Install Dependencies (Frontend)

```bash
npm install
```

### 3. Setup Mail Server

Go into the `mail-server/` folder and install dependencies:

```bash
cd mail-server
npm install
```

Create a `.env` file inside `mail-server/` with the following:

```env
EMAIL_HOST=host
EMAIL_PORT=port
EMAIL_USER=mail@yourhost
EMAIL_PASS=your-secure-password
```

Then run the mail server:

```bash
node index.js
```

> ✅ The mail server listens on port `5000`. Ensure Apache is configured with reverse proxy for `/mail-server/send` to `localhost:5000/send`

---

## 🔐 Apache Reverse Proxy Config
Make sure the following lines are present in your Apache virtual host:

```apache
ProxyPass "/mail-server/send" "http://localhost:5000/send"
ProxyPassReverse "/mail-server/send" "http://localhost:5000/send"
```

---

## 🌐 Live Deployment

The portfolio is deployed at: [https://evandroripka.dev](https://evandroripka.dev)

Hosted on a VPS with:
- Apache2
- Let’s Encrypt SSL
- DNS A record pointing to server IP

---

## 💡 Tech Stack

- **React + Vite**
- **TailwindCSS**
- **Node.js + Express + Nodemailer**
- **GSAP** for animations
- **Apache2 + Certbot** for production deployment

---

## 📬 Contact
For collaboration or freelance opportunities:
**Email:** hey@evandroripka.dev

---

## 🧠 License

This project is for personal use and portfolio demonstration. All custom code belongs to [Evandro Ripka](https://github.com/evandroripka).
