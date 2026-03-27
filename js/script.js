const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

// يبدأ Dark Mode تلقائيًا
document.body.classList.add("dark");
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

// Toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Dynamic Greeting Feature
const greetBtn = document.getElementById("greetBtn");
const visitorNameInput = document.getElementById("visitorName");
const greetingMessage = document.getElementById("greetingMessage");

if (greetBtn && visitorNameInput && greetingMessage) {
  greetBtn.addEventListener("click", () => {
    const nameStr = visitorNameInput.value.trim();
    const currentHour = new Date().getHours();
    
    let timeGreeting = "Good evening";
    if (currentHour < 12) {
      timeGreeting = "Good morning";
    } else if (currentHour < 18) {
      timeGreeting = "Good afternoon";
    }

    if (nameStr) {
      greetingMessage.textContent = `${timeGreeting}, ${nameStr}! Welcome to my portfolio.`;
    } else {
      greetingMessage.textContent = `${timeGreeting}! Welcome to my portfolio.`;
    }
  });

  // Also trigger greeting on Enter key
  visitorNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      greetBtn.click();
    }
  });
}
// Fetch Random Quote from Public API
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function fetchQuote() {
  if (!quoteText || !quoteAuthor) return;
  
  try {
    // Show loading state
    quoteText.textContent = "Loading quote...";
    quoteText.style.color = "var(--text-color, #333)";
    quoteAuthor.textContent = "";
    
    // Fetch data from dummyjson's public API
    const response = await fetch("https://dummyjson.com/quotes/random");
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Update the UI with fetched data
    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `- ${data.author}`;
    
  } catch (error) {
    // Show friendly error message
    quoteText.textContent = "Oops! We couldn't fetch a quote right now. Please check your internet connection and try again.";
    quoteText.style.color = "#dc3545"; // Error red color
    quoteAuthor.textContent = "";
    console.error("Error fetching quote from API:", error);
  }
}

// Initial fetch when the page loads
if (quoteText) {
  fetchQuote();
}

// Add event listener to the button to fetch a new quote
if (newQuoteBtn) {
  newQuoteBtn.addEventListener("click", fetchQuote);
}

// =============================
// Contact Form Validation
// =============================
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccessMessage = document.getElementById("formSuccessMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default submission
    
    let isValid = true;
    
    // Reset errors and styles
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    contactName.classList.remove("input-error");
    contactEmail.classList.remove("input-error");
    contactMessage.classList.remove("input-error");
    if (formSuccessMessage) formSuccessMessage.style.display = "none";
    
    // Validate Name
    if (contactName.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      contactName.classList.add("input-error");
      isValid = false;
    }
    
    // Validate Email
    const emailValue = contactEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
      emailError.textContent = "Please enter your email.";
      contactEmail.classList.add("input-error");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      contactEmail.classList.add("input-error");
      isValid = false;
    }
    
    // Validate Message
    if (contactMessage.value.trim() === "") {
      messageError.textContent = "Please enter your message.";
      contactMessage.classList.add("input-error");
      isValid = false;
    }
    
    // If form is valid, simulate a successful submission
    if (isValid) {
      if (formSuccessMessage) {
        formSuccessMessage.style.display = "block";
      }
      contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        if (formSuccessMessage) formSuccessMessage.style.display = "none";
      }, 5000);
    }
  });

  // Clear errors on input
  [contactName, contactEmail, contactMessage].forEach(input => {
    input.addEventListener("input", function() {
      this.classList.remove("input-error");
      const errorSpanId = this.id.replace("contact", "").toLowerCase() + "Error";
      const errorSpan = document.getElementById(errorSpanId);
      if (errorSpan) errorSpan.textContent = "";
    });
  });
}
