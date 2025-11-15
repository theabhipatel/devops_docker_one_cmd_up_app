# 🚀 One-Command Next.js Deployment on Any Server
This project provides a **fully automated**, production-ready CI/CD setup for deploying a Next.js application (with Domain and Auto SSL) to any ubuntu server (I will use EC2 instance) using **Docker, Docker Compose, Nginx, SSL (Certbot)**, and **GitHub Actions**.

Just **push your code to the `production` branch** — your server will automatically install everything, configure itself, and deploy the updated application.


Checkout App (vercel) [TheAbhiPatel V1.55](https://theabhipatel-v1-55.vercel.app/)

<img width="1887" height="925" alt="image" src="https://github.com/user-attachments/assets/62bdd14a-366a-4868-a77c-c167fc50c62b" />



---

# ✨ What This Setup Does

### ✅ 1. First-Time Server Setup (Fully Automatic)
If your EC2 server is empty, the GitHub Action will automatically:

- Install Docker & Docker Compose  
- Clone your repository  
- Create the `.env` file using GitHub Secrets  
- Build all Docker containers  
- Start your full application stack  
- Configure Nginx + Certbot for SSL  

---

### ✅ 2. Auto-Update on Every Push
If the application already exists on the server:

- Fetches the latest `production` branch  
- Hard resets to ensure clean sync  
- Recreates `.env` from GitHub Secrets  
- Rebuilds the Docker containers  
- Restarts the application with minimal downtime  
- Cleans unused Docker images  

---

### ✅ 3. Zero Manual SSH Work  
Everything is fully handled by **GitHub Actions**.

---

# 🧑‍💻 What You Need To Do Manually (Only Once)

You only need to do a few simple steps. Everything else is automated.

### ✔ 1. Clone this repository  
Update the application code or keep it as-is for testing.
```sh
git clone https://github.com/theabhipatel/devops_docker_one_cmd_up_app.git
```

### ✔ 2. Create a new SSH key pair ([more](#-ssh-key-setup))

### ✔ 3. Create an Ubuntu VPS or AWS EC2 instance  

### ✔ 4. Add your SSH public key to the server ([more](#-ssh-key-setup))

### ✔ 5. Point your domain to your server  
Add an “A Record” in DNS:

```
yourdomain.com → <EC2_PUBLIC_IP>
www.yourdomain.com → <EC2_PUBLIC_IP>
```

### ✔ 6. Create your `.env` file using `.env.example` file ([more](#-environment-variables-env-setup))

### ✔ 7. Add GitHub Secrets ([more](#-required-github-secrets))

### ✔ 8. Use the `production` Branch for Deployment

Create a `production` branch and push your code to it (or merge from `main/master`).
Every push to `production` triggers the GitHub Actions workflow and deploys your app automatically.

That’s it. 🎉  
Your app gets deployed in under **2 minutes** with minimal manual work.

---

# 📦 Project Structure

```
/project-root
  ├── docker-compose.yml
  ├── Dockerfile
  ├── install-docker.sh
  ├── nginx/
  │   └── entrypoint.sh
  │   └── templates/
  │       └── http.template
  │       └── https.template
  ├── certbot/
  │   └── init.sh
  ├── .github/
  │   └── workflows/
  │       └── deploy.yml
  ├── .env.example
  ├──  Application code...
```

---

# 🔧 Environment Variables (`.env` Setup)

Before deploying, create a `.env` file locally using `.env.example` file or the template below:

```
DOMAIN=domain.com
DOMAINS=domain.com,www.domain.com
EMAIL=abhi@gmail.com
```

Then:

1. Copy the content of your `.env` file  
2. Go to GitHub → Repository → **Settings → Secrets → Actions**  
3. Create a secret named:

```
ENV_FILE
```

4. Paste your `.env` content  

---

# 🔐 Required GitHub Secrets

| Secret Name | Description |
|-------------|-------------|
| **EC2_HOST** | Public IP of your EC2 instance |
| **EC2_USER** | Server username (`ubuntu` or `ec2-user`) |
| **EC2_SSH_KEY** | Private SSH key to connect to EC2 |
| **ENV_FILE** | Content of your `.env` file |

---

# 🔑 SSH Key Setup

Generate a new SSH key:

```sh
ssh-keygen -t ed25519 -C "github-deploy" -f ./my-ec2-key
```

Then:

- Add `my-ec2-key.pub` → EC2: `~/.ssh/authorized_keys`
- Add `my-ec2-key` → GitHub Secret: `EC2_SSH_KEY`

---

# 🚀 How Deployment Works

### Push to `production` → GitHub Action runs:


```
Push to production →
    GitHub Action triggers →
        Build Docker image →
            IF fails: Stop the process
            ELSE: Continue the process
        SSH into EC2 →
            IF project does not exist:
                install Docker
                clone repository
                create .env
                start containers
            ELSE:
                fetch latest code
                reset files
                update .env
                rebuild containers
                restart app
```

Everything happens automatically.

---

# 🎉 Final Result

You get a **production-ready**, automated deployment system using:

- Docker  
- Docker Compose  
- Nginx  
- Certbot (SSL)  
- GitHub Actions  
- EC2 (or any Ubuntu VPS)

Write code → Push(production) → Your app goes live.  
That's it. 💯


### built by :
<span style="font-weight:600; font-size:56px; color:#ecac0a;">
  TheAbhiPatel
</span>

[Portfolio](https://www.theabhipatel.com) | 
[LinkedIn](https://www.linkedin.com/in/theabhipatel)

