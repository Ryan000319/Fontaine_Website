
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
        name: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        postcode: '',
        subject: '',
        category: '',
        enquiry: '',
        formSubmitted: false, // to track the form submission status
       
        
        
        isPlaying: false,
        
      welcomeMessage: 'Welcome to Fontaine!',
      
      cards: [
        {
            title: 'History',
            description: "Learn about the Fontaine's History and Lore.",
            image: 'styles/images/history7.jpg',
            showDescription: false,
            link: 'history.html',
        },
          
        {
            title: 'Characters',
            description: 'Meet Interesting Heroes and Villains of Fontaine.',
            image: 'styles/images/history.jpg',
            showDescription: false,
            link: 'characters.html',
        },
          
        {
            title: 'Music',
            description: 'Serenade with the local music of Fontaine.',
            image: 'styles/images/history5.jpeg',
            showDescription: false,
            link: 'music.html',
        },
          
        {
            title: 'Form',
            description: 'Sign up to learn more about Fontaine.',
            image: 'styles/images/form.jpeg',
            showDescription: false,
            link: 'form.html',
        },
          
      ],
        
        characters: [
        {
            name: 'Furina: Hydro Archon',
            quote: 'The "Regina of All Waters, Kindreds, Peoples and Laws" is deeply loved by her people.',
            description: "Flamboyant and imprudent, Furina lives for the thrill of the courtroom, often speaking in a manner peppered with bravado and drama. She is impatient and has a childlike temper, and she will occasionally make judgments that she doesn't mean.",
            image: 'styles/images/Characters/Furina.png',
            youtubeLink: 'EN79SfbcvIE',
        },
            
        {
          name: 'Neuvillette: Iudex',
            quote: 'The Chief Justice of Fontaine, known as the Iudex, is renowned for his unassailable impartiality.',
          description: "Neuvillette is the Iudex of Fontaine, and the leader of the Marechaussee Phantom. While Neuvillette upholds the rules of the court with utmost reverence, he is quite aloof when dealing with human emotions and often distances himself from the public eye.",
          image: 'styles/images/Characters/Neuvillette.png',
          youtubeLink: 'v2QSNQXRSkE',
        },
            
        {
          name: 'Arlecchino: Harbinger',
            quote: '"The Knave," Fourth of the Fatui Harbingers. Revered as "Father" by the children of the House of the Hearth.',
          description: "As one of the Eleven Fatui Harbingers, Arlecchino is, unlike most Harbingers, likely unloyal to the Tsaritsa. She is working to achieve her goals by acquiring the Gnoses on her behalf. She handles Fatui matters with utmost importance and comes off as graceful and cordial.",
          image: 'styles/images/Characters/Arlecchino.png',
          youtubeLink: 'TnYFVP3c_bs',
        },
            
        {   
          name: 'Chiori: The Tailor',
            quote: 'A frank and outspoken fashion designer whose unique sense of style always puts her at the forefront of Fontainian trends.',
          description: "Chiori is a famous fashion designer from Inazuma who is currently running Chioriya Boutique in Fontaine and is one of the Komaniya Express's regular customers. She left Inazuma when the Vision Hunt Decree and Sakoku Decree was enacted and has not returned since.",
          image: 'styles/images/Characters/Chiori.png',
          youtubeLink: '6wK90KANTyI',
        }
        
        ],
        
        currentTrackIndex: 0,
        tracks: [
            { name: 'City of Mellifluous Glory', video: 'styles/videos/main4.mp4', audio: 'styles/audios/main.mp3' },
            { name: 'Que le vent soit doux', video: 'styles/videos/track_4.mp4', audio: 'styles/audios/track_2.mp3' },
            { name: 'Leisurely Days in Fontaine', video: 'styles/videos/track_1.mp4', audio: 'styles/audios/track_3.mp3' },
          ],
        
        isPlaying: false,
        volume: 25,
        currentTime: 0,
        duration: 0,
        
        touchedFields: {
            name: false,
            lastName: false,
            username: false,
            password: false,
            confirmPassword: false,
            phoneNumber: false,
            email: false,
            postcode: false,
        },
        
        userDetails: {
            name: '',
            lastName: '',
            username: '',
            phoneNumber: '',
            email: '',
            streetAddress: '',
            city: '',
            subject: '',
            category: '',
            enquiry: ''
        },
        
        
        
        
        
        nameError: '',
        lastNameError: '',
        usernameError: '',
        passwordError: '',
        confirmPasswordError: '',
        phoneNumberError: '',
        emailError: '',
        postcodeError: '',
        
        videoPlayer: null,
        audioPlayer: null,
        
    };
  },
    
    components: {
        'navbar-component': NavbarComponent,
        'footer-component': FooterComponent
    },

    computed: {
    isValid() {
      return this.validateName() &&
             this.validateLastName() &&
             this.validateUsername() &&
             this.validatePassword() &&
             this.validateConfirmPassword() &&
             this.validatePhoneNumber() &&
             this.validateEmail() &&
             this.validatePostcode();
    },
        
    isFormInvalid() {
        return !this.isValid;
    }
  },
    

    
  methods: {
    togglePlayPause() {
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.volume = 0.1; // Set volume to 10%
            this.isPlaying = !this.isPlaying;
            this.isPlaying ? bgMusic.play() : bgMusic.pause();
        } else {
            console.error("Background music element not found!");
        }
    },
      
    navigateTo(url) {
        window.location.href = url;
    },
      
    showDescription(card) {
        this.cards.forEach(c => { if (c !== card) c.showDescription = false; });
        card.showDescription = !card.showDescription;
    },
    hideDescription(card) {
        card.showDescription = false;
    },
      
    // Method to go to the previous slide
    prevSlide() {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        } else {
            this.activeIndex = this.slides.length - 1;
        }
    },
    // Method to go to the next slide
    nextSlide() {
        if (this.activeIndex < this.slides.length - 1) {
            this.activeIndex++;
        } else {
            this.activeIndex = 0;
        }
    },
    // Method to set a slide as active
    setActive(index) {
        this.activeIndex = index;
    },
    
     togglePlay() {
        const audio = this.$refs.audioPlayer;
        if (this.isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        this.isPlaying = !this.isPlaying;
        // Ensure the video background always plays
        this.$refs.videoPlayer.play();
    },

    previousTrack() {
        if (this.currentTrackIndex > 0) {
            this.currentTrackIndex--;
        } else {
            this.currentTrackIndex = this.tracks.length - 1;
        }
        this.updateTrack();
    },

    nextTrack() {
        if (this.currentTrackIndex < this.tracks.length - 1) {
            this.currentTrackIndex++;
        } else {
            this.currentTrackIndex = 0;
        }
        this.updateTrack();
    },

    changeVolume(event) {
        const audio = this.$refs.audioPlayer;
        audio.volume = event.target.value / 100;
    },

    updateTrack() {
        const audio = this.$refs.audioPlayer;
        const video = this.$refs.videoPlayer;
        video.src = this.tracks[this.currentTrackIndex].video;
        audio.src = this.tracks[this.currentTrackIndex].audio;
        if (this.isPlaying) {
            audio.play();
            video.play(); // Ensure the video is also set to play
        }
    },

    updateProgress() {
        const audio = this.$refs.audioPlayer;
        this.duration = audio.duration;
        this.currentTime = audio.currentTime;
    },
      
    validateName() {
        this.touchedFields.name = true;
        if (this.name) {
            const regex = /^[A-Za-z]+$/;
            if (!regex.test(this.name)) {
                this.nameError = 'Please enter a valid name (letters only).';
                return false;
            } else {
                this.nameError = '';
                return true;
            }
        } else {
            this.nameError = '';
            return true;
        }
    },

    validateLastName() {
        this.touchedFields.lastName = true;
        if (this.lastName) {
            const regex = /^[A-Za-z]+$/;
            if (!regex.test(this.lastName)) {
                this.lastNameError = 'Please enter a valid last name (letters only).';
                return false;
            } else {
                this.lastNameError = '';
                return true;
            }
        } else {
            this.lastNameError = '';
            return true;
        }
    },

    validateUsername() {
        this.touchedFields.username = true;
        if (this.username) {
            this.usernameError = this.username.length >= 3 ? '' : 'Username must be at least 3 characters long.';
            return this.username.length >= 3;
        } else {
            this.usernameError = '';
            return true;
        }
    },

    validatePassword() {
        this.touchedFields.password = true;
        if (this.password) {
            const regex = /[#$%^&*]+/;
            const isValid = this.password.length >= 8 && regex.test(this.password);
            this.passwordError = isValid ? '' : 'Password must be at least 8 characters long and include special characters (#,$,%,^,&,*).';
            return isValid;
        } else {
            this.passwordError = '';
            return true;
        }
    },

    validateConfirmPassword() {
        this.touchedFields.confirmPassword = true;
        if (this.confirmPassword) {
            const isValid = this.password === this.confirmPassword;
            this.confirmPasswordError = isValid ? '' : 'Passwords must match.';
            return isValid;
        } else {
            this.confirmPasswordError = '';
            return true;
        }
    },

    validatePhoneNumber() {
        this.touchedFields.phoneNumber = true;
        if (this.phoneNumber) {
            const regex = /^01\d{8}$/;
            const isValid = regex.test(this.phoneNumber);
            this.phoneNumberError = isValid ? '' : 'Phone number must start with 01 and be 10 digits long.';
            return isValid;
        } else {
            this.phoneNumberError = '';
            return true;
        }
    },

    validateEmail() {
        this.touchedFields.email = true;
        if (this.email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = regex.test(this.email);
            this.emailError = isValid ? '' : 'Please enter a valid email address.';
            return isValid;
        } else {
            this.emailError = '';
            return true;
        }
    },

    validatePostcode() {
        this.touchedFields.postcode = true;
        if (this.postcode) {
            const regex = /^\d{4}$/;
            const isValid = regex.test(this.postcode);
            this.postcodeError = isValid ? '' : 'Postcode must be exactly 4 numeric digits.';
            return isValid;
        } else {
            this.postcodeError = '';
            return true;
        }
    },

    validateForm() {
        Object.keys(this.touchedFields).forEach(key => this.touchedFields[key] = true);
        this.formSubmitted = true;
        if (this.isValid) {
            console.log('Form is valid, preparing to submit...');
            this.submitForm();  // Call submitForm here after validation passes
        } else {
            alert('Please correct the errors before submitting.');
        }
    },
    
  fetchFormData() {
        // Fetch data passed from form.html or session/local storage
        this.userDetails = JSON.parse(localStorage.getItem('formData'));
    },
      
      
    submitForm() {
      const formData = {
        name: this.name,
        lastName: this.lastName,
        username: this.username,
        phoneNumber: this.phoneNumber,
        email: this.email,
        streetAddress: this.streetAddress,
        city: this.city,
        subject: this.subject,
        category: this.category,
        enquiry: this.enquiry
      };

      // Storing data in sessionStorage
      console.log('Saving data to session storage:', formData);
      // Change localStorage to sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'confirmation.html';  // Redirect to confirmation page

    },

      

    
    
    mounted() {
        this.userDetails = JSON.parse(sessionStorage.getItem('formData')) || {};
        console.log('User Details loaded on confirmation page:', this.userDetails);
        
        // Ensure video is playing on load
    this.videoPlayer = this.$refs.videoPlayer;
    this.audioPlayer = this.$refs.audioPlayer;

    if (this.videoPlayer && this.audioPlayer) {
      this.videoPlayer.play();
      this.audioPlayer.addEventListener('loadedmetadata', this.updateProgress);
      this.audioPlayer.addEventListener('timeupdate', this.updateProgress);
    } else {
      console.error("Video or Audio elements not found!");
    }
    
    
  }
}
      
});

// Register components globally
app.component('navbar-component', NavbarComponent);
app.component('footer-component', FooterComponent);


app.mount('#app');
