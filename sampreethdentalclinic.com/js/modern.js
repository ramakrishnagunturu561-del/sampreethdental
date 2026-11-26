/**
 * Sampreeth Dental Clinic - Modern Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Navbar Scroll Style
  const mainNav = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav?.classList.add('nav-scrolled');
    } else {
      mainNav?.classList.remove('nav-scrolled');
    }
  });

  // 3. Before & After Interactive Comparison Sliders
  document.querySelectorAll('.ba-container').forEach(container => {
    const slider = container.querySelector('.ba-slider');
    const overlay = container.querySelector('.ba-overlay');
    let isDragging = false;

    const moveSlider = (clientX) => {
      const rect = container.getBoundingClientRect();
      let pos = (clientX - rect.left) / rect.width;
      if (pos < 0) pos = 0;
      if (pos > 1) pos = 1;
      const percentage = pos * 100;
      slider.style.left = `${percentage}%`;
      overlay.style.width = `${percentage}%`;
    };

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      moveSlider(e.clientX);
    });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      moveSlider(e.clientX);
    });

    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      moveSlider(e.touches[0].clientX);
    });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      moveSlider(e.touches[0].clientX);
    });
  });

  // 4. Certificate Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = el.getAttribute('href') || el.getAttribute('data-img');
      const caption = el.getAttribute('data-caption') || '';
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.closest('.lightbox-close')) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 5. Appointment Booking Modal & Form Handling with WhatsApp Quick Book
  const appointmentModal = document.getElementById('appointment-modal');

  // Synchronize and dynamically populate all doctor dropdowns from SAMPREETH_DOCTORS
  const populateDoctorDropdowns = () => {
    if (typeof SAMPREETH_DOCTORS === 'undefined' || !Array.isArray(SAMPREETH_DOCTORS)) return;

    document.querySelectorAll('select[name="doctor_name"]').forEach(select => {
      const currentValue = select.value;
      // Preserve first "Any Available" if present, or create clean options list
      select.innerHTML = '';
      
      const defaultOption = document.createElement('option');
      defaultOption.value = 'Any Available Specialist';
      defaultOption.textContent = 'Any Available Specialist Doctor';
      select.appendChild(defaultOption);

      SAMPREETH_DOCTORS.forEach(doc => {
        const opt = document.createElement('option');
        opt.value = `${doc.name} (${doc.badge})`;
        opt.textContent = doc.dropdownLabel || `${doc.name} – ${doc.badge}`;
        select.appendChild(opt);
      });

      if (currentValue && select.querySelector(`option[value="${currentValue}"]`)) {
        select.value = currentValue;
      }
    });
  };

  populateDoctorDropdowns();

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (appointmentModal) {
        // If button specifies a doctor, pre-select it
        const targetDoctor = btn.getAttribute('data-doctor');
        if (targetDoctor) {
          const doctorSelect = appointmentModal.querySelector('select[name="doctor_name"]');
          if (doctorSelect) {
            for (let i = 0; i < doctorSelect.options.length; i++) {
              if (doctorSelect.options[i].value.includes(targetDoctor) || doctorSelect.options[i].text.includes(targetDoctor)) {
                doctorSelect.selectedIndex = i;
                break;
              }
            }
          }
        }
        appointmentModal.classList.remove('hidden');
      }
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (appointmentModal) appointmentModal.classList.add('hidden');
    });
  });

  // Handle Booking Submissions & WhatsApp Dispatch
  const bookingForms = document.querySelectorAll('.booking-form');
  bookingForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="patient_name"]')?.value || 'Patient';
      const phone = form.querySelector('[name="patient_phone"]')?.value || '';
      const doctor = form.querySelector('[name="doctor_name"]')?.value || 'Any Available Doctor';
      const service = form.querySelector('[name="service_type"]')?.value || 'Consultation';
      const date = form.querySelector('[name="appointment_date"]')?.value || 'Preferred Date';
      const time = form.querySelector('[name="appointment_time"]')?.value || 'Preferred Time';
      const message = form.querySelector('[name="patient_notes"]')?.value || '';

      const waText = encodeURIComponent(
        `Hello Sampreeth Dental Clinic! 🦷\nI would like to book an appointment.\n\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `🩺 Doctor: ${doctor}\n` +
        `🦷 Treatment: ${service}\n` +
        `📅 Date: ${date} (${time})\n` +
        (message ? `📝 Notes: ${message}` : '')
      );

      // Open WhatsApp directly to clinic phone +917995605888
      window.open(`https://wa.me/917995605888?text=${waText}`, '_blank');

      alert(`Thank you, ${name}! Your appointment details are ready. Opening WhatsApp to confirm with our clinic reception directly.`);
      form.reset();
      if (appointmentModal) appointmentModal.classList.add('hidden');
    });
  });

  // 6. Gallery Filter Tabs (on gallery.html)
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-sky-600', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-slate-100', 'text-slate-700'));
      btn.classList.add('active', 'bg-sky-600', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-700');

      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 7. Hero Interactive Carousel Controller - Automatic & Continuous
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const prevHeroBtn = document.getElementById('hero-prev-btn');
  const nextHeroBtn = document.getElementById('hero-next-btn');

  if (heroSlides.length > 0) {
    let currentSlide = 0;
    let slideTimer = null;
    const SLIDE_DURATION = 3500; // 3.5 seconds for visible auto-sliding

    const activateSlide = (index) => {
      heroSlides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      heroDots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('bg-teal-600', 'w-8');
          dot.classList.remove('bg-slate-300', 'w-3');
        } else {
          dot.classList.remove('bg-teal-600', 'w-8');
          dot.classList.add('bg-slate-300', 'w-3');
        }
      });

      currentSlide = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentSlide + 1) % heroSlides.length;
      activateSlide(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      activateSlide(prevIndex);
    };

    const startInterval = () => {
      if (slideTimer) clearInterval(slideTimer);
      slideTimer = setInterval(nextSlide, SLIDE_DURATION);
    };

    const resetInterval = () => {
      if (slideTimer) clearInterval(slideTimer);
      startInterval();
    };

    // Manual navigation controls
    nextHeroBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetInterval();
    });

    prevHeroBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetInterval();
    });

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        activateSlide(i);
        resetInterval();
      });
    });

    // Start auto slide immediately on page load
    startInterval();

    // Restart timer when window regains focus to ensure it keeps running
    window.addEventListener('focus', startInterval);

    // Touch swipe support for mobile
    const sliderContainer = document.getElementById('hero-slideshow-container');
    let touchStartX = 0;
    let touchEndX = 0;
    sliderContainer?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer?.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 40) {
        nextSlide();
        resetInterval();
      } else if (touchEndX - touchStartX > 40) {
        prevSlide();
        resetInterval();
      }
    }, { passive: true });

    activateSlide(0);
    startInterval();
  }

  // 8. Universal Email Click Handler & Toast Notification
  const clinicEmail = 'drnadellaneelima@gmail.com';

  const showToast = (text) => {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-teal-400 text-base"></i> <span>${text}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  window.copyClinicEmail = () => {
    navigator.clipboard?.writeText(clinicEmail).then(() => {
      showToast(`Email copied: ${clinicEmail}`);
    }).catch(() => {
      showToast(`Clinic Email: ${clinicEmail}`);
    });
  };

  const emailModal = document.getElementById('email-action-modal');

  document.querySelectorAll('a[href^="mailto:"], .email-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      // Copy email to clipboard immediately
      navigator.clipboard?.writeText(clinicEmail);

      // Open email modal or direct fallback
      if (emailModal) {
        emailModal.classList.remove('hidden');
      } else {
        // Direct option popup or fallback to Gmail Web
        const openGmail = confirm(`Sampreeth Dental Clinic Email:\n${clinicEmail}\n\nEmail address copied to clipboard!\n\nClick OK to open Gmail in your browser, or Cancel to open your default mail app.`);
        if (openGmail) {
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(clinicEmail)}&su=${encodeURIComponent('Inquiry: Sampreeth Dental Clinic Vijayawada')}`, '_blank');
        } else {
          window.location.href = `mailto:${clinicEmail}`;
        }
      }
      showToast(`Email copied: ${clinicEmail}`);
    });
  });

  // Email action modal button handlers
  document.querySelectorAll('[data-open-gmail]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(clinicEmail)}&su=${encodeURIComponent('Inquiry: Sampreeth Dental Clinic Vijayawada')}`, '_blank');
      if (emailModal) emailModal.classList.add('hidden');
    });
  });

  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.copyClinicEmail();
      if (emailModal) emailModal.classList.add('hidden');
    });
  });

  document.querySelectorAll('[data-close-email-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (emailModal) emailModal.classList.add('hidden');
    });
  });

  if (emailModal) {
    emailModal.addEventListener('click', (e) => {
      if (e.target === emailModal) emailModal.classList.add('hidden');
    });
  }
});
