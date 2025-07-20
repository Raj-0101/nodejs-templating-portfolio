const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("portfoliopage", {
        name: "Raj Bhilare",
    skills: ["HTML", "CSS", "JavaScript", "Java", "Node.js", "EJS", "Docker", "SQL", "Python"],
    interests: ["Game Development", "Backend Systems", "Sorting Algorithms", "Full Stack Development"],
    recentTasks: [
      "Debugged Simon Says game logic",
      "Explored multithreading in Java",
      "Integrated JSON with EJS templates"
    ]
  });
});
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
