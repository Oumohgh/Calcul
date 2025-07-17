
🧮 calc_project



🎨 A modern, responsive web calculator built with HTML, CSS (Flexbox/Grid) and Vanilla JavaScript.

🚀 Demo
🎯 See Live Demo (link to live preview if deployed)

📖 About The Project
This is a simple web calculator designed to perform basic arithmetic operations:

➕ Addition

➖ Subtraction

✖️ Multiplication

➗ Division

It features a responsive UI, handles basic errors, and uses clean, modular JavaScript logic.

🛠 Built With
🔧 Feature	💻 Technology
🏗 Structure	HTML5
🎨 Styling	CSS3 (Flexbox & Grid)
⚙ Functionality	JavaScript

📁 Project Structure
bash
Copier
Modifier
calc_project/
├── index.html       # Calculator UI
├── styles.css       # Responsive styling
└── main.js          # Core logic and interactions
✨ Features
✅ Clean, minimal interface
✅ Responsive design (desktop 💻 & mobile 📱)
✅ Error handling for:

Division by zero 🛑

Invalid operations
✅ Clear (C) button to reset the calculator

🎨 Design Highlights (CSS)
CSS Grid: Aligns buttons in a neat grid.

Flexbox: Used for layout and centering.

Buttons styled with hover & active states for a modern feel.

Mobile-friendly with fluid resizing.

🧠 Logic Highlights (JavaScript)
Modular functions:

appendNumber() → Appends clicked numbers

chooseOperation() → Handles operator logic

compute() → Performs the calculation

clear() → Resets display and state

Handles all interactions via addEventListener.

📸 Preview
lua
Copier
Modifier
 ----------------------
|        12 + 7        |   ← Display
 ----------------------
|  7  |  8  |  9  |  / |
|  4  |  5  |  6  |  * |
|  1  |  2  |  3  |  - |
|  0  |  C  |  =  |  + |
🛠 Getting Started
📥 Clone the repository:
bash
Copier
Modifier
git clone https://github.com/<your-username>/calc_project.git
cd calc_project
▶️ Open in browser:
Open index.html in your favorite browser.

🏆 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License
Distributed under the MIT License. See LICENSE for more information.

⭐ Bonus Ideas
⌨️ Support for keyboard input.

🌗 Dark mode / Light mode toggle.

📜 Operation history.

