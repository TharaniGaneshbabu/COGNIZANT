const searchInput = document.getElementById("eventSearch");
const eventCards = document.querySelectorAll(".event-category");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  eventCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Optional: character counter logic (if you're using a textarea with id="message" and span with id="charCount")
const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

if (textarea && charCount) {
  textarea.addEventListener('input', () => {
    charCount.textContent = `${textarea.value.length}/250`;
  });
}
