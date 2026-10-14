/**
 * OCEAN THEMED BIRTHDAY GREETING - INTERACTIVE JAVASCRIPT
 * Responsive, Dynamic Ocean Transitions, 16+ Photo Gallery, Quiz Kasih Sayang & Ambient Audio
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. CONFIGURATION & STATE MANAGEMENT
  // =========================================================================
  const state = {
    recipientName: 'Adinda Cantik',
    milestoneText: 'Spesial Hari Kelahiran',
    audioPlaying: false,
    quizIndex: 0,
    quizScore: 0,
    isTransitioning: false,
  };

  // 16 Curated High Quality Ocean & Sweet Memories Photos
  // (User can easily swap these URLs or add local image paths)
  const GALLERY_PHOTOS = [
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      title: 'Pantai Impian Kita',
      caption: 'Langkah kaki di pasir hangat, deburan ombak yang menenangkan jiwa.',
      badge: 'Memori #1 🏖️'
    },
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
      title: 'Gradasi Biru Samudera',
      caption: 'Sebening hatimu yang selalu memberi kesejukan bagi siapa pun di dekatmu.',
      badge: 'Memori #2 🌊'
    },
    {
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
      title: 'Senja di Tepian Laut',
      caption: 'Cahaya jingga keemasan yang mengingatkanku pada kehangatan tawamu.',
      badge: 'Memori #3 🌅'
    },
    {
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      title: 'Taman Koral Penuh Warna',
      caption: 'Dunia menjadi jauh lebih berwarna dan penuh keajaiban sejak kamu ada.',
      badge: 'Memori #4 🪸'
    },
    {
      url: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
      title: 'Kilau Mutiara Alami',
      caption: 'Mutiara paling indah yang tersimpan rapi dengan segenap kemurniannya.',
      badge: 'Memori #5 🐚'
    },
    {
      url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80',
      title: 'Cakrawala Tak Terbatas',
      caption: 'Sebesar itu pula doa dan harapan baikku untuk masa depanmu yang cerah.',
      badge: 'Memori #6 ✨'
    },
    {
      url: 'https://images.unsplash.com/photo-1520116468418-095984ab1726?auto=format&fit=crop&w=800&q=80',
      title: 'Ombak Keteguhan',
      caption: 'Kamu adalah sosok kuat yang selalu tabah dan bangkit mengarungi badai apa pun.',
      badge: 'Memori #7 🌊'
    },
    {
      url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      title: 'Petualangan Menjelajah',
      caption: 'Setiap perjalanan bersamamu selalu melahirkan tawa dan cerita tak terlupakan.',
      badge: 'Memori #8 🚗'
    },
    {
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      title: 'Kedamaian Pesisir',
      caption: 'Di tengah riuhnya dunia, berbincang denganmu selalu membawaku pulang.',
      badge: 'Memori #9 🌿'
    },
    {
      url: 'https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80',
      title: 'Pena & Surat Rahasia',
      caption: 'Kata-kata ini kutulis khusus untuk merayakan kehadiran manusia paling manis.',
      badge: 'Memori #10 💌'
    },
    {
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80',
      title: 'Matahari Terbit Bahagia',
      caption: 'Fajar baru untuk usiamu yang baru, semoga hari-harimu dipenuhi sukacita.',
      badge: 'Memori #11 🌄'
    },
    {
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
      title: 'Kesejukan Air Jernih',
      caption: 'Melihat senyummu terasa seperti meminum air segar di hari yang terik.',
      badge: 'Memori #12 💧'
    },
    {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      title: 'Perahu Penyeberang Impian',
      caption: 'Semoga setiap cita-citamu segera berlabuh di dermaga keberhasilan.',
      badge: 'Memori #13 ⛵'
    },
    {
      url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      title: 'Bintang Malam Pesisir',
      caption: 'Kelap-kelip ribuan bintang di langit pantai adalah saksi doa-doa tulus untukmu.',
      badge: 'Memori #14 🌌'
    },
    {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      title: 'Momen Manis Tak Terganti',
      caption: 'Waktu boleh terus mengalir, namun kenangan bersamamu abadi tersimpan.',
      badge: 'Memori #15 📷'
    },
    {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
      title: 'Dermaga Harapan Cinta',
      caption: 'Selamat ulang tahun sekali lagi, teruslah bersinar dan berbahagia selalu!',
      badge: 'Memori #16 💖'
    }
  ];

  // Interactive Quiz Questions Data
  const QUIZ_QUESTIONS = [
    {
      question: 'Di antara semua tempat di dunia, pemandangan mana yang paling indah menurut samudera raya?',
      options: [
        { key: 'A', text: 'Matahari terbenam di ufuk barat lautan' },
        { key: 'B', text: 'Senyuman manis kamu saat sedang bahagia' },
        { key: 'C', text: 'Kilauan cahaya bulan di atas permukaan air laut' }
      ],
      correctKey: 'B',
      correctText: 'B. Senyuman manis kamu saat sedang bahagia',
      wrongNote: 'Kurang tepat sedikit nih! Jawaban sebenarnya jauh lebih manis daripada itu...',
      loveNote: 'Karena ribuan panorama alam di bumi pun tak akan ada yang bisa menandingi indahnya senyuman tulusmu. Tetaplah tersenyum manis ya! 💖✨'
    },
    {
      question: 'Kalau kita terdampar berdua di sebuah pulau kelapa terpencil di tengah lautan, apa yang pertama bakal kita lakuin?',
      options: [
        { key: 'A', text: 'Bikin istana pasir sambil cerita panjang tanpa henti' },
        { key: 'B', text: 'Panik nyari sinyal HP dan bingung' },
        { key: 'C', text: 'Berenang nyari ikan hiu buat selfie' }
      ],
      correctKey: 'A',
      correctText: 'A. Bikin istana pasir sambil cerita panjang tanpa henti',
      wrongNote: 'Hayo salah pilih! Coba ingat-ingat momen santai kita...',
      loveNote: 'Karena bersamamu, tempat terpencil pun berubah menjadi istana terindah di dunia, penuh obrolan hangat dan tawa lepas! 🏝️💕'
    },
    {
      question: 'Hal apa dari dirimu yang paling bikin orang-orang di sekitarmu selalu merasa nyaman?',
      options: [
        { key: 'A', text: 'Koleksi baju kamu yang banyak' },
        { key: 'B', text: 'Suara notifikasi HP kamu' },
        { key: 'C', text: 'Hati kamu yang tulus, pengertian, dan penuh perhatian' }
      ],
      correctKey: 'C',
      correctText: 'C. Hati kamu yang tulus, pengertian, dan penuh perhatian',
      wrongNote: 'Eits, bukan yang itu! Pikirkan kebaikan terdalam dirimu...',
      loveNote: 'Kebaikan dan ketulusan hatimu adalah mutiara langka. Jangan pernah lelah menjadi orang baik yang sehangat ini ya! 🌸✨'
    },
    {
      question: 'Apa harapan terbesar samudera untuk kamu di hari ulang tahun yang sangat spesial ini?',
      options: [
        { key: 'A', text: 'Bisa makan es krim tiap menit tanpa kenyang' },
        { key: 'B', text: 'Selalu sehat, dilimpahi bahagia, dan tercapai semua impianmu' },
        { key: 'C', text: 'Bisa terbang ke planet Mars sendirian' }
      ],
      correctKey: 'B',
      correctText: 'B. Selalu sehat, dilimpahi bahagia, dan tercapai semua impianmu',
      wrongNote: 'Hehe salah tebak! Harapan ini begitu tulus dari lubuk hati...',
      loveNote: 'Semoga setiap tetes kebaikan yang kamu beri berbalik menjadi berkah berlimpah untuk hidupmu. Selamat ulang tahun sayang! 🎂🌊💙'
    }
  ];

  // =========================================================================
  // 2. DOM ELEMENTS SELECTION
  // =========================================================================
  const landingPage = document.getElementById('landing-page');
  const mainPage = document.getElementById('main-page');
  const oceanOverlay = document.getElementById('ocean-transition-overlay');
  const transitionText = document.getElementById('transition-text');
  
  const openLetterBtn = document.getElementById('open-letter-btn');
  const closeLetterBtn = document.getElementById('close-letter-btn');
  const bottleContainer = document.getElementById('bottle-container');

  const displayRecipientName = document.getElementById('display-recipient-name');
  const landingMilestoneText = document.getElementById('landing-milestone-text');
  const headerNameTag = document.getElementById('header-name-tag');
  const recipientNameInlines = document.querySelectorAll('.recipient-name-inline');
  const letterCurrentDate = document.getElementById('letter-current-date');

  // Edit Name Modal Elements
  const editNameBtn = document.getElementById('edit-name-btn');
  const nameModal = document.getElementById('name-modal');
  const nameModalClose = document.getElementById('name-modal-close');
  const nameModalBackdrop = document.getElementById('name-modal-backdrop');
  const nameInput = document.getElementById('name-input');
  const milestoneInput = document.getElementById('milestone-input');
  const saveNameBtn = document.getElementById('save-name-btn');

  // Gallery Elements
  const abstractGallery = document.getElementById('abstract-gallery');
  const photoModal = document.getElementById('photo-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  // Quiz Elements
  const quizCard = document.getElementById('quiz-card');
  const quizStep = document.getElementById('quiz-step');
  const quizScoreDisplay = document.getElementById('quiz-score');
  const questionTitle = document.getElementById('question-title');
  const optionBtns = [
    document.getElementById('option-a'),
    document.getElementById('option-b'),
    document.getElementById('option-c')
  ];
  const optionTexts = {
    A: document.getElementById('option-text-a'),
    B: document.getElementById('option-text-b'),
    C: document.getElementById('option-text-c')
  };
  const quizFeedbackBox = document.getElementById('quiz-feedback-box');
  const feedbackMessage = document.getElementById('feedback-message');
  const seeCorrectBtn = document.getElementById('see-correct-btn');
  const loveCelebrationContainer = document.getElementById('love-celebration-container');
  const celebrationTitle = document.getElementById('celebration-title');
  const celebrationAnswerText = document.getElementById('celebration-answer-text');
  const celebrationSweetNote = document.getElementById('celebration-sweet-note');
  const quizNextBtn = document.getElementById('quiz-next-btn');

  // Audio Toggle Element
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');
  const audioText = document.getElementById('audio-text');

  // =========================================================================
  // 3. INITIALIZE NAME & METADATA
  // =========================================================================
  function initRecipientInfo() {
    // Check URL search parameters e.g., ?name=Clarissa&milestone=Happy+20th+Birthday
    const urlParams = new URLSearchParams(window.location.search);
    const paramName = urlParams.get('name');
    const paramMilestone = urlParams.get('milestone');
    const savedName = localStorage.getItem('ocean_bday_name');
    const savedMilestone = localStorage.getItem('ocean_bday_milestone');

    if (paramName) {
      state.recipientName = paramName;
    } else if (savedName) {
      state.recipientName = savedName;
    }

    if (paramMilestone) {
      state.milestoneText = paramMilestone;
    } else if (savedMilestone) {
      state.milestoneText = savedMilestone;
    }

    // Format current date in Indonesian
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    if (letterCurrentDate) {
      letterCurrentDate.textContent = `${formattedDate} • Hari Penuh Kasih`;
    }

    applyRecipientInfo();
  }

  function applyRecipientInfo() {
    if (displayRecipientName) displayRecipientName.textContent = state.recipientName;
    if (landingMilestoneText) landingMilestoneText.textContent = state.milestoneText;
    if (headerNameTag) headerNameTag.innerHTML = `Untuk: <strong>${escapeHtml(state.recipientName)}</strong>`;
    recipientNameInlines.forEach(el => {
      el.textContent = state.recipientName;
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

  // Name customization modal logic
  editNameBtn.addEventListener('click', () => {
    nameInput.value = state.recipientName;
    milestoneInput.value = state.milestoneText;
    nameModal.classList.add('active');
    nameModal.setAttribute('aria-hidden', 'false');
  });

  function closeNameModal() {
    nameModal.classList.remove('active');
    nameModal.setAttribute('aria-hidden', 'true');
  }

  nameModalClose.addEventListener('click', closeNameModal);
  nameModalBackdrop.addEventListener('click', closeNameModal);

  saveNameBtn.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    const newMilestone = milestoneInput.value.trim();
    if (newName) {
      state.recipientName = newName;
      localStorage.setItem('ocean_bday_name', newName);
    }
    if (newMilestone) {
      state.milestoneText = newMilestone;
      localStorage.setItem('ocean_bday_milestone', newMilestone);
    }
    applyRecipientInfo();
    closeNameModal();
  });

  // =========================================================================
  // 4. FLOATING BUBBLES GENERATOR WITH POPPING EFFECT
  // =========================================================================
  const bubblesContainer = document.getElementById('bubbles-container');

  function createBubble() {
    if (!bubblesContainer) return;
    const bubble = document.createElement('div');
    bubble.className = 'ocean-bubble';

    // Randomize dimensions (18px - 58px)
    const size = Math.floor(Math.random() * 40) + 18;
    const left = Math.random() * 95; // 0 - 95vw
    const duration = Math.random() * 8 + 7; // 7s - 15s
    const driftX = (Math.random() - 0.5) * 80; // -40px to +40px

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.setProperty('--drift-x', `${driftX}px`);

    // Interactive popping on click or touch
    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      popBubble(bubble);
    });

    bubblesContainer.appendChild(bubble);

    // Auto remove when animation finishes
    setTimeout(() => {
      if (bubble.parentElement) bubble.remove();
    }, duration * 1000);
  }

  function popBubble(bubble) {
    bubble.style.transform = 'scale(1.8)';
    bubble.style.opacity = '0';
    playPopSound();
    setTimeout(() => {
      if (bubble.parentElement) bubble.remove();
    }, 200);
  }

  // Generate initial bubbles and recurring stream
  for (let i = 0; i < 15; i++) {
    setTimeout(createBubble, i * 400);
  }
  setInterval(createBubble, 900);

  // =========================================================================
  // 5. OCEAN WAVE WASH SURGE PAGE TRANSITION
  // =========================================================================
  /**
   * Smoothly navigates between landing page and main page with full-screen ocean wave sweep
   * @param {'open' | 'close'} direction
   */
  function triggerOceanTransition(direction) {
    if (state.isTransitioning) return;
    state.isTransitioning = true;

    // Play splash chime sound
    playWaveSound();

    if (direction === 'open') {
      transitionText.textContent = 'Menyelam ke Dasar Samudera Penuh Cinta... 🌊';
    } else {
      transitionText.textContent = 'Menyimpan Surat & Kembali Menatap Cakrawala... 🐚';
    }

    // Phase 1: Waves surge UP to cover entire screen
    oceanOverlay.classList.remove('surge-out');
    oceanOverlay.classList.add('active', 'surge-in');

    setTimeout(() => {
      // Phase 2: Screen is submerged! Swap views behind the water curtain
      if (direction === 'open') {
        landingPage.classList.remove('active');
        landingPage.setAttribute('hidden', '');
        mainPage.removeAttribute('hidden');
        mainPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        mainPage.classList.remove('active');
        mainPage.setAttribute('hidden', '');
        landingPage.removeAttribute('hidden');
        landingPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Phase 3: Waves surge OUT to reveal the newly loaded page!
      oceanOverlay.classList.remove('surge-in');
      oceanOverlay.classList.add('surge-out');

      setTimeout(() => {
        oceanOverlay.classList.remove('active', 'surge-out');
        state.isTransitioning = false;
      }, 850);

    }, 850);
  }

  // Open letter actions
  if (openLetterBtn) {
    openLetterBtn.addEventListener('click', () => triggerOceanTransition('open'));
  }
  if (bottleContainer) {
    bottleContainer.addEventListener('click', () => triggerOceanTransition('open'));
  }

  // Close letter action (returns to landing page as requested)
  if (closeLetterBtn) {
    closeLetterBtn.addEventListener('click', () => triggerOceanTransition('close'));
  }

  // =========================================================================
  // 6. RENDER 16+ ABSTRACT SCATTERED POLAROID GALLERY
  // =========================================================================
  function renderGallery() {
    if (!abstractGallery) return;
    abstractGallery.innerHTML = '';

    GALLERY_PHOTOS.forEach((photo, index) => {
      const card = document.createElement('article');
      card.className = 'photo-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Lihat foto: ${photo.title}`);

      card.innerHTML = `
        <div class="photo-img-wrap">
          <img src="${photo.url}" alt="${photo.title}" class="photo-img" loading="lazy">
          <span class="photo-badge-tag">${photo.badge}</span>
        </div>
        <div class="photo-info">
          <h4 class="photo-title">${escapeHtml(photo.title)}</h4>
          <p class="photo-caption">${escapeHtml(photo.caption)}</p>
        </div>
      `;

      // Open Lightbox Modal on click or enter key
      const openModal = () => {
        modalImg.src = photo.url;
        modalBadge.textContent = photo.badge;
        modalTitle.textContent = photo.title;
        modalDesc.textContent = photo.caption;
        photoModal.classList.add('active');
        photoModal.setAttribute('aria-hidden', 'false');
      };

      card.addEventListener('click', openModal);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal();
        }
      });

      abstractGallery.appendChild(card);
    });
  }

  // Lightbox close event handlers
  function closeLightbox() {
    photoModal.classList.remove('active');
    photoModal.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeLightbox);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeNameModal();
    }
  });

  // =========================================================================
  // 7. INTERACTIVE KASIH SAYANG QUIZ ENGINE
  // =========================================================================
  function loadQuestion(index) {
    const qData = QUIZ_QUESTIONS[index];
    if (!qData) return;

    // Reset card states
    quizCard.classList.remove('state-wrong', 'state-correct', 'state-love-reveal');
    quizFeedbackBox.hidden = true;
    seeCorrectBtn.hidden = true;
    loveCelebrationContainer.hidden = true;
    quizNextBtn.disabled = true;

    // Reset option buttons
    optionBtns.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('selected-wrong', 'selected-correct');
    });

    // Populate question and options
    quizStep.textContent = `${index + 1}`;
    questionTitle.textContent = qData.question;

    qData.options.forEach(opt => {
      if (optionTexts[opt.key]) {
        optionTexts[opt.key].textContent = opt.text;
      }
    });

    // Update Counter / Progress
    const totalQuestions = QUIZ_QUESTIONS.length;
    document.querySelector('.counter-total').textContent = `/ ${totalQuestions}`;
  }

  /**
   * Handle user selection:
   * - If WRONG:
   *    * Quiz card border turns RED (state-wrong)
   *    * Option chosen border turns RED (selected-wrong)
   *    * Shows "Lihat Jawaban Benar" button
   * - If RIGHT:
   *    * Quiz card border turns GREEN (state-correct)
   *    * Option chosen border turns GREEN (selected-correct)
   *    * Celebrates!
   */
  function handleOptionSelect(chosenKey) {
    const qData = QUIZ_QUESTIONS[state.quizIndex];
    if (!qData) return;

    const chosenBtn = document.getElementById(`option-${chosenKey.toLowerCase()}`);

    // Disable all options once answered
    optionBtns.forEach(btn => btn.disabled = true);

    if (chosenKey === qData.correctKey) {
      // ================= RIGHT ANSWER =================
      state.quizScore += 1;
      quizCard.classList.remove('state-wrong', 'state-love-reveal');
      quizCard.classList.add('state-correct');

      if (chosenBtn) chosenBtn.classList.add('selected-correct');

      feedbackMessage.className = 'feedback-message success';
      feedbackMessage.textContent = '🎉 Luar biasa! Jawabanmu 100% TEPAT! Hatimu benar-benar peka! 💖';
      quizFeedbackBox.hidden = false;
      seeCorrectBtn.hidden = true;

      // Reveal sweet celebration card directly
      showLoveCelebration(qData, true);
      quizNextBtn.disabled = false;
      playCorrectChime();

    } else {
      // ================= WRONG ANSWER =================
      quizCard.classList.remove('state-correct', 'state-love-reveal');
      quizCard.classList.add('state-wrong'); // BORDER TURNS RED AS REQUESTED

      if (chosenBtn) chosenBtn.classList.add('selected-wrong'); // BORDER TURNS RED

      feedbackMessage.className = 'feedback-message error';
      feedbackMessage.textContent = qData.wrongNote || 'Ups, kurang tepat nih...';
      quizFeedbackBox.hidden = false;

      // Show "Lihat Jawaban Benar" button as specifically requested!
      seeCorrectBtn.hidden = false;
      playWrongBuzz();
    }
  }

  // Attach click listeners to options A, B, C
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-choice');
      handleOptionSelect(choice);
    });
  });

  // When "Lihat Jawaban Benar" is clicked:
  // Memunculkan jawabannya di card quiz dengan animasi perayaan dengan nuansa kasih sayang
  seeCorrectBtn.addEventListener('click', () => {
    const qData = QUIZ_QUESTIONS[state.quizIndex];
    if (!qData) return;

    // Highlight the correct option in green
    const correctBtn = document.getElementById(`option-${qData.correctKey.toLowerCase()}`);
    if (correctBtn) correctBtn.classList.add('selected-correct');

    // Switch card border from Red to Love Pink glowing aura
    quizCard.classList.remove('state-wrong');
    quizCard.classList.add('state-love-reveal');

    // Hide see button, reveal loving celebration
    seeCorrectBtn.hidden = true;
    feedbackMessage.className = 'feedback-message success';
    feedbackMessage.textContent = '✨ Jangan bersedih, inilah jawaban paling berharga buat kamu! ✨';

    showLoveCelebration(qData, false);
    quizNextBtn.disabled = false;
    playLoveSound();
  });

  function showLoveCelebration(qData, isOriginallyCorrect) {
    celebrationTitle.textContent = isOriginallyCorrect ? 'Jawaban Sempurna!' : 'Rahasia Terbuka!';
    celebrationAnswerText.innerHTML = `Jawaban Benar adalah: <strong>${escapeHtml(qData.correctText)}</strong>`;
    celebrationSweetNote.textContent = `"${qData.loveNote}"`;
    loveCelebrationContainer.hidden = false;

    // Trigger love hearts animation burst
    const decor = document.querySelector('.love-burst-decor');
    if (decor) {
      decor.innerHTML = `
        <span class="love-particle lp-1">💖</span>
        <span class="love-particle lp-2">💕</span>
        <span class="love-particle lp-3">✨</span>
        <span class="love-particle lp-4">🫧</span>
        <span class="love-particle lp-5">🌸</span>
        <span class="love-particle lp-6">💝</span>
      `;
    }
  }

  // Next Question Button
  quizNextBtn.addEventListener('click', () => {
    if (state.quizIndex < QUIZ_QUESTIONS.length - 1) {
      state.quizIndex++;
      loadQuestion(state.quizIndex);
    } else {
      // Quiz Finished - Show Victory Celebration
      showFinalQuizSummary();
    }
  });

  function showFinalQuizSummary() {
    quizCard.classList.remove('state-wrong', 'state-correct');
    quizCard.classList.add('state-love-reveal');
    quizHeaderHide();

    questionTitle.innerHTML = `🏆 Selamat! Kamu Telah Menyelami Seluruh Kuis Kasih Sayang 🌊💖`;
    document.getElementById('options-container').innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <p style="font-size: 1.25rem; color: #caf0f8; margin-bottom: 15px;">
          Terima kasih sudah menyelesaikan kuis rahasia ini dengan penuh senyuman!
        </p>
        <div style="font-family: var(--font-handwriting); font-size: 1.8rem; color: #ffb3c1; line-height: 1.5;">
          "Bagiku, kamu selalu bernilai 100% sempurna dengan segala keunikan dan kehangatan yang kamu punya. Tetaplah menjadi dirimu sendiri ya!"
        </div>
      </div>
    `;

    quizFeedbackBox.hidden = true;
    loveCelebrationContainer.hidden = true;
    quizNextBtn.textContent = 'Ulangi Kuis Dari Awal 🔄';
    quizNextBtn.disabled = false;
    quizNextBtn.onclick = () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      location.reload();
    };
  }

  function quizHeaderHide() {
    if (quizScoreDisplay) {
      quizScoreDisplay.textContent = 'Skor Cinta: 100% Sempurna! 💖';
    }
  }

  // =========================================================================
  // 8. SOOTHING OCEAN AMBIENT AUDIO SYNTHESIZER (WEB AUDIO API)
  // No external files needed: pure realistic ocean waves + gentle melody chime!
  // =========================================================================
  let audioCtx = null;
  let waveGain = null;
  let noiseNode = null;
  let melodyInterval = null;

  function initAudio() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // Ocean Wave Noise Generator (Filtered Pinkish Noise)
    const bufferSize = audioCtx.sampleRate * 3;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // boost
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    // Filter to simulate muffled underwater waves
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, audioCtx.currentTime);

    // Wave swell modulation (LFO)
    const lfo = audioCtx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime); // 8-second wave swells
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(200, audioCtx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();

    waveGain = audioCtx.createGain();
    waveGain.gain.setValueAtTime(0.001, audioCtx.currentTime);

    noiseNode.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(audioCtx.destination);
    noiseNode.start();
  }

  // Soft chimes for ocean atmosphere
  const CHIME_FREQS = [523.25, 659.25, 783.99, 1046.50, 1174.66, 1318.51]; // C5, E5, G5, C6, D6, E6
  function playGentleChime() {
    if (!audioCtx || !state.audioPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const freq = CHIME_FREQS[Math.floor(Math.random() * CHIME_FREQS.length)];

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.0);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 3.2);
  }

  function toggleAudio() {
    if (!state.audioPlaying) {
      initAudio();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      waveGain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);
      state.audioPlaying = true;
      audioToggleBtn.classList.add('playing');
      audioText.textContent = 'Matikan Melodi';

      melodyInterval = setInterval(playGentleChime, 3200);
      playGentleChime();
    } else {
      if (waveGain) {
        waveGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      }
      clearInterval(melodyInterval);
      state.audioPlaying = false;
      audioToggleBtn.classList.remove('playing');
      audioText.textContent = 'Nyalakan Melodi';
    }
  }

  audioToggleBtn.addEventListener('click', toggleAudio);

  // Micro Sound Effects
  function playPopSound() {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450 + Math.random() * 300, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (_) {}
  }

  function playWaveSound() {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(440, audioCtx.currentTime + 0.5);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (_) {}
  }

  function playCorrectChime() {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.1);
        osc.stop(audioCtx.currentTime + idx * 0.1 + 0.45);
      });
    } catch (_) {}
  }

  function playWrongBuzz() {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.32);
    } catch (_) {}
  }

  function playLoveSound() {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const notes = [659.25, 783.99, 987.77, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.12 + 0.8);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.12);
        osc.stop(audioCtx.currentTime + idx * 0.12 + 0.85);
      });
    } catch (_) {}
  }

  // =========================================================================
  // 9. STARTUP SEQUENCE
  // =========================================================================
  initRecipientInfo();
  renderGallery();
  loadQuestion(0);
});
