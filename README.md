# 🐱 Cat Gallery

A simple and lightweight **Cat Gallery** website built with **HTML, CSS, JavaScript**.

Browse through a collection of cat images using the **Previous** and **Next** buttons. The gallery loops continuously, so reaching last image takes you back to the first one. 

## 🌐 Live Demo

**Github Pages:**
https://dakugaming7487.github.io/cat-gallery/

## ✨ Features 

- 🐱 Displays a collection of 15 cat images
- ◀️ Previous image navigation
- ▶️ Next image navigation
- 🔄 Loops first to last then starts over from first
- 📱 Responsive viewport setup
- ⚡ Lightweight and fast
- 🎨 Simple and clean interface
- 📦 No external libraries or frameworks

## 🛠️ Buit with

- **HTML5** - Page Structure
- **CSS3** - Styling and layout
- **JavaScript** - Image navigation and gallery logic

## 📁 Project Structure

```text
cat-gallery/
├── images/
│   ├── cat1.jpeg
│   ├── cat2.jpeg
│   ├── cat3.jpeg
│   ├── ...
│   └── cat15.jpeg
├── index.html
├── style.css
├── script.js
├── LICENSE
└── README.md
```

## 🚀 How It Works

The website stores the paths of all cat images in a JavaScript array.

The `currentImage` variable keeps track of which image is currently being displayed.

When the **Next** button is clicked, the gallery moves to the next image.

When the **Previous** button is clicked, the gallery moves to the previous image.

The gallery loops around automatically:

- Clicking **Next** on the last image returns to the first image.
- Clicking **Previous** on the first image goes to the last image.

## 💻 Run Locally

Clone the repository:

    git clone https://github.com/dakugaming7487/cat-gallery.git

Enter the project directory:

    cd cat-gallery

Then open `index.html` in your browser.

You can also use a local development server such as VS Code Live Server.

## 📸 Screenshots

![Cat Gallery Screenshot](screenshots/homepage.png)

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

## 👨‍💻 Author

Made by **Daku Gaming**
