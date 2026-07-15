// Simple client-side helpers
function startBreathing(seconds=60) {
  const bubble = document.getElementById('breathing-bubble');
  const timer = document.getElementById('breathing-timer');
  if (!bubble || !timer) return;
  bubble.classList.add('breathe');
  let remaining = seconds;
  timer.textContent = remaining + 's';
  const id = setInterval(() => {
    remaining -= 1;
    timer.textContent = remaining + 's';
    if (remaining <= 0) {
      clearInterval(id);
      bubble.classList.remove('breathe');
      timer.textContent = 'Done';
    }
  }, 1000);
}

function copyCrisisNumber(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent.trim());
  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.remove('hidden');
    setTimeout(()=>toast.classList.add('hidden'), 1800);
  }
}


// --- Confetti ---

function confetti() {
  for (let i=0;i<30;i++) {
    const piece = document.createElement('div');
    piece.style.position = 'fixed';
    piece.style.width = '8px';
    piece.style.height = '8px';
    piece.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
    piece.style.top = '50%';
    piece.style.left = '50%';
    piece.style.transition = 'transform 1s ease-out, opacity 1s';
    piece.style.zIndex = 50;
    document.body.appendChild(piece);
    setTimeout(() => {
      piece.style.transform = `translate(${Math.random()*300-150}px, ${Math.random()*300-150}px)`;
      piece.style.opacity = 0;
    }, 50);
    setTimeout(() => piece.remove(), 1200);
  }
}

// --- FIXED COUNTDOWN LOGIC (Guaranteed Working) ---
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("breathing-start");
    const timer = document.getElementById("breathing-timer");
    const bubble = document.querySelector(".breath-circle");

    if(startBtn && timer && bubble){
        startBtn.addEventListener("click", () => {
            let remaining = 60;
            timer.textContent = remaining + "s";

            const interval = setInterval(() => {
                remaining--;
                if(remaining <= 0){
                    timer.textContent = "Done";
                    bubble.style.transform = "scale(1)";
                    clearInterval(interval);
                } else {
                    timer.textContent = remaining + "s";
                }
            }, 1000);
        });
    }
});
