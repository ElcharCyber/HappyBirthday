/**
 * OCEAN THEMED BIRTHDAY GREETING - INTERACTIVE JAVASCRIPT
 * Responsive, Dynamic Ocean Transitions, 16+ Photo Gallery, Quiz Kasih Sayang & Sakura (Rossa) Music Player
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. CONFIGURATION & STATE MANAGEMENT
  // =========================================================================
  const state = {
    recipientName: 'Ihza Salma Maulida',
    milestoneText: 'Spesial Hari Kelahiran',
    musicPlaying: false,
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
  const optionsContainer = document.getElementById('options-container');
  const quizFeedbackBox = document.getElementById('quiz-feedback-box');
  const feedbackMessage = document.getElementById('feedback-message');
  const seeCorrectBtn = document.getElementById('see-correct-btn');
  const loveCelebrationContainer = document.getElementById('love-celebration-container');
  const celebrationTitle = document.getElementById('celebration-title');
  const celebrationAnswerText = document.getElementById('celebration-answer-text');
  const celebrationSweetNote = document.getElementById('celebration-sweet-note');
  const quizNextBtn = document.getElementById('quiz-next-btn');

  // Music Player Elements (Sakura - Rossa)
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicStatus = document.getElementById('music-status');
  const sakuraAudio = document.getElementById('sakura-audio');

  // =========================================================================
  // 3. INITIALIZE RECIPIENT INFORMATION (CLEAN, NO EDIT MODAL)
  // =========================================================================
  function initRecipientInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramName = urlParams.get('name');
    const paramMilestone = urlParams.get('milestone');

    if (paramName) {
      state.recipientName = paramName;
    }
    if (paramMilestone) {
      state.milestoneText = paramMilestone;
    }

    // Format current date in Indonesian
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    if (letterCurrentDate) {
      letterCurrentDate.textContent = `${formattedDate} • Hari Penuh Kasih`;
    }

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

  // =========================================================================
  // 4. FLOATING BUBBLES GENERATOR WITH POPPING EFFECT
  // =========================================================================
  const bubblesContainer = document.getElementById('bubbles-container');

  function createBubble() {
    if (!bubblesContainer) return;
    const bubble = document.createElement('div');
    bubble.className = 'ocean-bubble';

    const size = Math.floor(Math.random() * 40) + 18;
    const left = Math.random() * 95;
    const duration = Math.random() * 8 + 7;
    const driftX = (Math.random() - 0.5) * 80;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.setProperty('--drift-x', `${driftX}px`);

    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      popBubble(bubble);
    });

    bubblesContainer.appendChild(bubble);

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

  for (let i = 0; i < 15; i++) {
    setTimeout(createBubble, i * 400);
  }
  setInterval(createBubble, 900);

  // =========================================================================
  // 5. OCEAN WAVE WASH SURGE PAGE TRANSITION
  // =========================================================================
  function triggerOceanTransition(direction) {
    if (state.isTransitioning) return;
    state.isTransitioning = true;

    // Sound effect is independent and always plays!
    playWaveSound();

    if (direction === 'open') {
      transitionText.textContent = 'Menyelam ke Dasar Samudera Penuh Cinta... 🌊';
    } else {
      transitionText.textContent = 'Menyimpan Surat & Kembali Menatap Cakrawala... 🐚';
    }

    oceanOverlay.classList.remove('surge-out');
    oceanOverlay.classList.add('active', 'surge-in');

    setTimeout(() => {
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

      oceanOverlay.classList.remove('surge-in');
      oceanOverlay.classList.add('surge-out');

      setTimeout(() => {
        oceanOverlay.classList.remove('active', 'surge-out');
        state.isTransitioning = false;
      }, 850);

    }, 850);
  }

  if (openLetterBtn) {
    openLetterBtn.addEventListener('click', () => triggerOceanTransition('open'));
  }
  if (bottleContainer) {
    bottleContainer.addEventListener('click', () => triggerOceanTransition('open'));
  }
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

  function closeLightbox() {
    photoModal.classList.remove('active');
    photoModal.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeLightbox);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // =========================================================================
  // 7. INTERACTIVE KASIH SAYANG QUIZ ENGINE
  // =========================================================================
  function renderOptionButtons() {
    if (!optionsContainer) return;
    optionsContainer.innerHTML = `
      <button class="option-btn" id="option-a" data-choice="A" type="button">
        <span class="option-badge">A</span>
        <span class="option-text" id="option-text-a"></span>
      </button>
      <button class="option-btn" id="option-b" data-choice="B" type="button">
        <span class="option-badge">B</span>
        <span class="option-text" id="option-text-b"></span>
      </button>
      <button class="option-btn" id="option-c" data-choice="C" type="button">
        <span class="option-badge">C</span>
        <span class="option-text" id="option-text-c"></span>
      </button>
    `;

    // Re-bind click listeners
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice');
        handleOptionSelect(choice);
      });
    });
  }

  function loadQuestion(index) {
    const qData = QUIZ_QUESTIONS[index];
    if (!qData) return;

    // Reset card states
    quizCard.classList.remove('state-wrong', 'state-correct', 'state-love-reveal');
    quizFeedbackBox.hidden = true;

    // Ensure "Lihat Jawaban Benar" is strictly hidden initially
    seeCorrectBtn.hidden = true;
    seeCorrectBtn.style.display = 'none';

    loveCelebrationContainer.hidden = true;
    loveCelebrationContainer.style.display = 'none';
    quizNextBtn.disabled = true;

    // Update Counter & Heading
    quizStep.textContent = `${index + 1}`;
    questionTitle.textContent = qData.question;
    const totalQuestions = QUIZ_QUESTIONS.length;
    const totalEl = document.querySelector('.counter-total');
    if (totalEl) totalEl.textContent = `/ ${totalQuestions}`;

    // Populate option texts
    const textA = document.getElementById('option-text-a');
    const textB = document.getElementById('option-text-b');
    const textC = document.getElementById('option-text-c');

    qData.options.forEach(opt => {
      if (opt.key === 'A' && textA) textA.textContent = opt.text;
      if (opt.key === 'B' && textB) textB.textContent = opt.text;
      if (opt.key === 'C' && textC) textC.textContent = opt.text;
    });

    // Reset option button state classes
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('selected-wrong', 'selected-correct');
    });
  }

  /**
   * Handle user selection:
   * - IF WRONG:
   *    * Border card soal & jawaban berubah menjadi MERAH
   *    * Muncul tombol "Lihat Jawaban Benar" HANYA saat jawaban salah!
   *    * Sound error dimainkan
   * - IF RIGHT:
   *    * Border card soal & jawaban berubah menjadi HIJAU
   *    * Tombol "Lihat Jawaban Benar" TIDAK MUNCUL sama sekali
   *    * Sound sukacita dimainkan
   */
  function handleOptionSelect(chosenKey) {
    const qData = QUIZ_QUESTIONS[state.quizIndex];
    if (!qData) return;

    const chosenBtn = document.getElementById(`option-${chosenKey.toLowerCase()}`);
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (chosenKey === qData.correctKey) {
      // ================= RIGHT ANSWER =================
      state.quizScore += 1;
      quizCard.classList.remove('state-wrong', 'state-love-reveal');
      quizCard.classList.add('state-correct');

      if (chosenBtn) chosenBtn.classList.add('selected-correct');

      feedbackMessage.className = 'feedback-message success';
      feedbackMessage.textContent = '🎉 Luar biasa! Jawabanmu 100% TEPAT! Hatimu benar-benar peka! 💖';
      quizFeedbackBox.hidden = false;

      // STRICT REQUIREMENT: Tombol "Lihat Jawaban Benar" HANYA muncul saat salah!
      seeCorrectBtn.hidden = true;
      seeCorrectBtn.style.display = 'none';

      loveCelebrationContainer.hidden = true;
      loveCelebrationContainer.style.display = 'none';

      quizNextBtn.disabled = false;
      playCorrectChime();

    } else {
      // ================= WRONG ANSWER =================
      quizCard.classList.remove('state-correct', 'state-love-reveal');
      quizCard.classList.add('state-wrong'); // BORDER CARD BERUBAH MENJADI MERAH

      if (chosenBtn) chosenBtn.classList.add('selected-wrong'); // BORDER JAWABAN BERUBAH MENJADI MERAH

      feedbackMessage.className = 'feedback-message error';
      feedbackMessage.textContent = qData.wrongNote || 'Ups, kurang tepat nih...';
      quizFeedbackBox.hidden = false;

      // STRICT REQUIREMENT: Tombol "Lihat Jawaban Benar" MUNCUL HANYA KETIKA SALAH!
      seeCorrectBtn.hidden = false;
      seeCorrectBtn.style.display = 'inline-flex';

      loveCelebrationContainer.hidden = true;
      loveCelebrationContainer.style.display = 'none';

      playWrongBuzz();
    }
  }

  // When "Lihat Jawaban Benar" is clicked:
  // Memunculkan jawabannya di card quiz dengan animasi perayaan nuansa kasih sayang
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
    seeCorrectBtn.style.display = 'none';

    feedbackMessage.className = 'feedback-message success';
    feedbackMessage.textContent = '✨ Jangan bersedih, inilah jawaban paling berharga buat kamu! ✨';

    showLoveCelebration(qData);
    quizNextBtn.disabled = false;
    playLoveSound();
  });

  function showLoveCelebration(qData) {
    celebrationTitle.textContent = 'Rahasia Terbuka!';
    celebrationAnswerText.innerHTML = `Jawaban Benar adalah: <strong>${escapeHtml(qData.correctText)}</strong>`;
    celebrationSweetNote.textContent = `"${qData.loveNote}"`;
    loveCelebrationContainer.hidden = false;
    loveCelebrationContainer.style.display = 'block';

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
  function onNextQuestionClick() {
    if (state.quizIndex < QUIZ_QUESTIONS.length - 1) {
      state.quizIndex++;
      loadQuestion(state.quizIndex);
    } else {
      showFinalQuizSummary();
    }
  }

  quizNextBtn.addEventListener('click', onNextQuestionClick);

  /**
   * Final Quiz Summary:
   * When user finishes quiz and clicks "Ulangi Kuis Dari Awal",
   * STRICT REQUIREMENT: Redirect kembali ke Soal Pertama (TIDAK reload halaman)!
   */
  function showFinalQuizSummary() {
    quizCard.classList.remove('state-wrong', 'state-correct');
    quizCard.classList.add('state-love-reveal');
    if (quizScoreDisplay) {
      quizScoreDisplay.textContent = 'Skor Cinta: 100% Sempurna! 💖';
    }

    questionTitle.innerHTML = `🏆 Selamat! Kamu Telah Menyelami Seluruh Kuis Kasih Sayang 🌊💖`;
    optionsContainer.innerHTML = `
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
    loveCelebrationContainer.style.display = 'none';

    quizNextBtn.textContent = 'Ulangi Kuis Dari Awal 🔄';
    quizNextBtn.disabled = false;

    // Redirect kembali ke Soal Pertama (TIDAK reload halaman)
    quizNextBtn.onclick = function () {
      state.quizIndex = 0;
      state.quizScore = 0;
      quizNextBtn.textContent = 'Pertanyaan Selanjutnya 🌊';
      quizNextBtn.onclick = null; // Re-use standard event listener

      // Restore option buttons
      renderOptionButtons();

      // Load Question 1
      loadQuestion(0);

      // Smoothly scroll back to the quiz section
      const quizSection = document.getElementById('quiz-section');
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }

  // =========================================================================
  // 8. SAKURA - ROSSA MUSIC PLAYER & DEDICATED CONTROLLER
  // Only controls the song "Sakura" by Rossa.
  // Notification SFX (pop, correct chime, wrong buzz, love) are independent!
  // =========================================================================
  let ytPlayer = null;
  let ytReady = false;

  // Asynchronously inject YouTube Iframe API for official Rossa - Sakura stream
  const ytScript = document.createElement('script');
  ytScript.src = 'https://www.youtube.com/iframe_api';
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(ytScript, firstScript);
  }

  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player('yt-player-frame', {
      height: '1',
      width: '1',
      videoId: 'f46pMb8WZFo', // Official: Rossa - Sakura
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: 'f46pMb8WZFo',
        playsinline: 1
      },
      events: {
        onReady: () => {
          ytReady = true;
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            setMusicPlayingState(true);
          } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            setMusicPlayingState(false);
          }
        }
      }
    });
  };

  function setMusicPlayingState(isPlaying) {
    state.musicPlaying = isPlaying;
    if (musicToggleBtn) {
      if (isPlaying) {
        musicToggleBtn.classList.add('playing');
        if (musicStatus) musicStatus.textContent = 'Jeda Musik ⏸';
      } else {
        musicToggleBtn.classList.remove('playing');
        if (musicStatus) musicStatus.textContent = 'Putar Lagu ▶';
      }
    }
  }

  function toggleSakuraMusic() {
    ensureAudioContext();

    if (state.musicPlaying) {
      // Pause music
      if (sakuraAudio && !sakuraAudio.paused) {
        sakuraAudio.pause();
      }
      if (ytPlayer && ytReady && typeof ytPlayer.pauseVideo === 'function') {
        try { ytPlayer.pauseVideo(); } catch (_) { }
      }
      setMusicPlayingState(false);
    } else {
      // Play music: Try local MP3 first, fallback to YouTube official stream
      if (sakuraAudio) {
        const playPromise = sakuraAudio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setMusicPlayingState(true);
          }).catch(() => {
            // Local file not present -> Play via YouTube Player
            if (ytPlayer && ytReady && typeof ytPlayer.playVideo === 'function') {
              try {
                ytPlayer.playVideo();
                setMusicPlayingState(true);
              } catch (_) { }
            }
          });
          return;
        }
      }

      if (ytPlayer && ytReady && typeof ytPlayer.playVideo === 'function') {
        try {
          ytPlayer.playVideo();
          setMusicPlayingState(true);
        } catch (_) { }
      }
    }
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', toggleSakuraMusic);
  }

  // =========================================================================
  // 9. INDEPENDENT SOUND EFFECTS (ALWAYS ACTIVE)
  // These sound effects are pure Web Audio synthesis and NEVER affected
  // by whether the Sakura music button is on or off.
  // =========================================================================
  let audioCtx = null;

  function ensureAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Bubble pop SFX
  function playPopSound() {
    try {
      ensureAudioContext();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450 + Math.random() * 250, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } catch (_) { }
  }

  // Wave page transition surge SFX
  function playWaveSound() {
    try {
      ensureAudioContext();
      if (!audioCtx) return;
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
    } catch (_) { }
  }

  // Quiz correct answer chime SFX (Always active)
  function playCorrectChime() {
    try {
      ensureAudioContext();
      if (!audioCtx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.1 + 0.38);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.1);
        osc.stop(audioCtx.currentTime + idx * 0.1 + 0.42);
      });
    } catch (_) { }
  }

  // Quiz wrong answer buzz SFX (Always active)
  function playWrongBuzz() {
    try {
      ensureAudioContext();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(105, audioCtx.currentTime + 0.28);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (_) { }
  }

  // Love celebration reveal sound SFX (Always active)
  function playLoveSound() {
    try {
      ensureAudioContext();
      if (!audioCtx) return;
      const notes = [659.25, 783.99, 987.77, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.12 + 0.7);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.12);
        osc.stop(audioCtx.currentTime + idx * 0.12 + 0.75);
      });
    } catch (_) { }
  }

  // Global user gesture listener to unlock audio on first interaction
  window.addEventListener('click', () => {
    ensureAudioContext();
  }, { once: true });

  // =========================================================================
  // 10. STARTUP INITIALIZATION
  // =========================================================================
  initRecipientInfo();
  renderGallery();
  renderOptionButtons();
  loadQuestion(0);
});
