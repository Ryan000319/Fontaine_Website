// confirmation.js

const NavbarComponent = {
  template: `
       <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="styles/icons/logo.png" alt="Genshin Impact Logo" class="img-fluid">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="history.html">History & Lore</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="characters.html">Characters</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="music.html">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form.html">Form</a>
                    </li>
                </ul>
                <button class="btn btn-outline-light" @click="toggleLoginModal">Log In</button>
            </div>
        </div>
    </nav>
  `,
    
     methods: {
        toggleLoginModal() {
          // Implement logic to show/toggle login modal here
          console.log('Login modal toggled!'); // Placeholder 
        }
      } 
};

// Define the Footer component
const FooterComponent = {
  template: `
    <footer class="footer bg-dark text-light py-5">
        <div class="container">
            <!-- Social Media Buttons -->
            <div class="social-media mb-4">
                <a href="https://www.facebook.com/Genshinimpact" class="btn btn-outline-light btn-social mx-1">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/GenshinImpact" class="btn btn-outline-light btn-social mx-1">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.reddit.com/r/Genshin_Impact" class="btn btn-outline-light btn-social mx-1">
                    <i class="fab fa-reddit-alien"></i>
                </a>
                <a href="https://www.youtube.com/c/GenshinImpact" class="btn btn-outline-light btn-social mx-1">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>

            <!-- Genshin Logo -->
            <div class="footer-logo mb-3">
                <img src="styles/icons/logo.png" alt="Genshin Impact Logo" class="img-fluid">
            </div>

            <!-- Copyright Notice -->
            <div class="copyright">
                <p>&copy; 2024 Genshin Impact. All rights reserved.</p>
            </div>
        </div>
    </footer>
  `
};

const app = Vue.createApp({
  data() {
    return {
      // Change localStorage to sessionStorage
    userDetails: JSON.parse(sessionStorage.getItem('formData')) || {}

    };
  },
  methods: {
    submitToDatabase() {
      fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userDetails)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();  // We proceed to parse the JSON only if the response was ok.
      })
      .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully!');
        sessionStorage.removeItem('formData');  // Clear local storage after submission
        window.location.href = 'index.html';  // Redirect or update UI post submission
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit data. ' + error.message);
      });
    }
  },
  mounted() {
    console.log('User Details loaded:', this.userDetails);
  }
});

app.component('navbar-component', NavbarComponent);
app.component('footer-component', FooterComponent);

app.mount('#app');
