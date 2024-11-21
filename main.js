// Animasi GSAP untuk Hero Section saat halaman di-refresh
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1.2, ease: "power4.out" });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, ease: "power4.out", delay: 0.2 });
gsap.from("#hero button", { opacity: 0, scale: 0.5, duration: 1, ease: "back.out(1.7)", delay: 0.4 });

// Animasi GSAP untuk Scroll pada Section About
gsap.from("#about h2", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from("#about p", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power4.out",
  delay: 0.2
});

gsap.from("#about .card-skills", {
  scrollTrigger: {
    trigger: "#about .card-skills",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out",
  stagger: 0.3
});

gsap.from("#about .card-drives", {
  scrollTrigger: {
    trigger: "#about .card-drives",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out",
  stagger: 0.3
});








// Fungsi untuk mengirim pesan melalui form kontak
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah form dari submit default

  const sendMessageButton = document.getElementById("sendMessageButton");
  const alertElement = document.getElementById("successAlert");

  // Ganti teks tombol menjadi animasi loading
  sendMessageButton.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg> Sending...
  `;
  sendMessageButton.disabled = true;

  // Simulasi delay 2 detik
  setTimeout(() => {
      // Bersihkan input form
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      // Kembalikan tombol ke teks awal
      sendMessageButton.innerHTML = 'Send message';
      sendMessageButton.disabled = false;

      // Tampilkan alert
      alertElement.classList.remove("hidden");

      // Hilangkan alert setelah 3 detik
      setTimeout(() => {
          alertElement.classList.add("hidden");
      }, 3000);
  }, 2000); // Set 2 detik untuk loading
});

function scroolToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

//alert dari contact form

function handleSubmit(event) {
  event.preventDefault();
}  
  // Show loading spinner
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  const loadingButton = document.getElementById('loadingButton');
  const alertSuccess = document.getElementById('alertSuccess');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide submit button, show loading
    submitButton.classList.add('hidden');
    loadingButton.classList.remove('hidden');
    
    // Simulate sending (3 seconds)
    setTimeout(() => {
      // Hide loading, show submit button
      submitButton.classList.remove('hidden');
      loadingButton.classList.add('hidden');
      
      // Show success alert
      alertSuccess.classList.remove('hidden');
      
      // Hide alert after 3 seconds
      setTimeout(() => {
        alertSuccess.classList.add('hidden');
      }, 3000);
      
      // Reset form
      form.reset();
    }, 3000);
  });