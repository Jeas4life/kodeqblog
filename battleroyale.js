// Voting logic
document.addEventListener('DOMContentLoaded', function() {
  const voteForm = document.getElementById('voteForm');
  if (voteForm) {
    // Check if user already voted
    const storedVote = localStorage.getItem('battleRoyaleVote');
    if (storedVote) {
      // Disable form and show message
      voteForm.innerHTML = `<p>Thanks for voting! You voted for <b>${storedVote}</b>.</p>`;
    } else {
      voteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selected = voteForm.querySelector('input[name="vote"]:checked');
        if (selected) {
          localStorage.setItem('battleRoyaleVote', selected.value);
          voteForm.innerHTML = `<p>Thanks for voting! You voted for <b>${selected.value}</b>.</p>`;
        } else {
          alert('Please select a contender before voting!');
        }
      });
    }
  }
});
const overLay = document.getElementById("overLay");
const close = document.querySelector(".close");
const openBtn = document.querySelector(".open");

close.addEventListener("click", () => {
  overLay.style.display = "none";
});

openBtn.addEventListener("click", () => {
  overLay.style.display = "flex";
});
