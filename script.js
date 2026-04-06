// NAV TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

    // Close menu on mobile
    nav.classList.remove("active");
  });
});


// ACTIVE LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// FORM VALIDATION
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("message").value.trim();

  if (!name || !email || !text) {
    message.textContent = "Please fill all fields!";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    message.textContent = "Invalid email!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Message sent!";
  message.style.color = "green";

  form.reset();
});


// DYNAMIC PROJECTS
const projects = [
  { title: "Portfolio Website", desc: "HTML, CSS, JS project" },
  { title: "Student System", desc: "C programming project" },
  { title: "Figma UI Design", desc: "Modern UI design" }
];

const container = document.getElementById("project-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  container.appendChild(card);
});


// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});


// BUTTON ACTIONS
document.getElementById("contactBtn").onclick = () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("publicationsBtn").onclick = () => {
  alert("Publications coming soon!");
};