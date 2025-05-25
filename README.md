----
# 🧳 WeTour – AI-Powered Travel Experience Platform

**WeTour** is a full-stack travel website designed to deliver curated tour packages across India with a modern UI and an integrated chatbot. Users can explore top destinations, browse services, and interact with an intelligent travel assistant to enhance their journey planning.
---

## 🌟 Features

- 🗺️ Interactive, responsive travel website for Indian destinations
- 💬 Chatbot integrated using deep learning (PyTorch + NLP)
- 📦 Tour packages and services for top cities (Goa, Kashmir, Rajasthan, etc.)
- 🧑‍💻 Clean backend with Flask handling chatbot interaction
- 📂 Well-organized structure with modular Python files and front-end assets

---

## 🛠️ Tech Stack

| Frontend        | Backend           | ML/NLP Engine         |
|-----------------|-------------------|------------------------|
| HTML5, CSS3, Bootstrap, JS | Flask (Python), REST APIs | PyTorch, NLTK, FuzzyWuzzy |

---

## 🧠 Chatbot Overview

- Built using intents (JSON format)
- Tokenized and stemmed via `nltk_utils.py`
- Trained with a simple neural net and saved model (`data.pth`)
- Interacts with users via chat interface on the website

---

## 📁 Project Structure

```

WeTour/
├── templates/             # HTML templates (Flask)
├── static/                # CSS, JS, and image files
├── standalone-frontend/   # Raw front-end version (optional)
├── app.py                 # Flask entry point
├── chat.py                # Handles real-time chatbot queries
├── train.py               # Trains the NLP chatbot
├── model.py               # Neural net model
├── intents.json           # User intents and responses
├── data.pth               # Trained PyTorch model
├── nltk\_utils.py          # NLP processing utils
└── requirements.txt       # Required Python packages

````

---

## 🚀 Getting Started

### Clone the repo:
```bash
git clone https://github.com/sunoy2004/WeTour.git
cd WeTour
````

### Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate   # For Linux/macOS
venv\Scripts\activate      # For Windows
```

### Install dependencies:

```bash
pip install -r requirements.txt
```

### Train the chatbot (if needed):

```bash
python train.py
```

### Run the Flask server:

```bash
python app.py
```

Open your browser at `http://127.0.0.1:5000` 🚀

---

## 📷 Screenshots

> 📸 Homepage, Chatbot Popup, Tour Package Listings, Testimonials, and More!

![image](https://github.com/user-attachments/assets/7985e858-33fe-4849-88b9-59cc7a747179)

---

## 💡 Future Enhancements

* 🌐 Deploy on Render or Heroku
* 💬 Integrate multilingual support in chatbot
* 📊 User analytics dashboard
* 🔒 Login/auth for personalized packages

---

## 🙌 Credits

* Developed by **Team**
* Inspired by Indian tourism, real-world travel needs, and conversational UX

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.

```

