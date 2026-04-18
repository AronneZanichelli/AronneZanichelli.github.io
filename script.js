const translations = {
  en: {
    nav: { home: 'Home', editing: 'Editing', featured: 'Featured Projects' },
    toc: {
      title: 'On this page',
      home: 'Intro',
      about: 'About',
      availability: 'Availability',
      skills: 'Skills',
      portfolio: 'Portfolio',
      timeline: 'Timeline',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      positioning: 'Junior Developer with creative and AI-oriented skills.',
      subtitle: 'I build practical digital experiences by combining development fundamentals, visual communication, and strategic content thinking.',
      ctaProjects: 'View Featured Projects',
      ctaCv: 'Download CV',
      ctaContact: 'Contact'
    },
    about: {
      title: 'About Me',
      bio: 'I am Aronne Zanichelli, an IT graduate in Computer Science and Telecommunications. I grew up with technology and I enjoy turning digital passion into real, useful work. My profile blends development fundamentals with visual communication and social content execution.',
      goalTitle: 'Professional Goal',
      goalText: 'I want to enter the world of video games and interactive technologies, including VR-oriented experiences. I am looking for junior opportunities in web/game development where I can combine programming, creativity, and fast learning.',
      valueTitle: 'What I bring to a team',
      valueOne: 'Technical + creative mindset: code with attention to communication and UX.',
      valueTwo: 'Operational autonomy in execution and delivery.',
      valueThree: 'Problem-solving attitude and strong motivation for junior growth paths.'
    },
    availability: {
      title: 'Availability',
      text: 'Based in Italy (Europe/Rome timezone). Open to junior opportunities, internships, and collaborative projects in web development or game development, with remote or hybrid setup. Driving license B and own vehicle.'
    },
    skills: {
      title: 'Technical Skills',
      html: 'HTML and CSS for responsive interfaces (solid foundations)',
      java: 'Java for object-oriented projects',
      cpp: 'C++ foundations for logic and performance',
      python: 'Python (beginner level, currently building fundamentals)',
      sql: 'SQL and relational database fundamentals',
      creative: 'DaVinci Resolve, Office Suite, Adobe Suite (basic/intermediate)'
    },
    softSkills: {
      title: 'Soft Skills',
      one: 'Problem solving',
      two: 'Fast learning mindset',
      three: 'Teamwork and communication',
      four: 'Creative discipline and reliability'
    },
    languages: {
      title: 'Languages',
      it: 'Italian — Native',
      en: 'English — Intermediate (B2)',
      es: 'Spanish — Basic (A1)'
    },
    portfolio: {
      title: 'Portfolio',
      p1Title: 'Portfolio Website',
      p1Status: 'Live',
      p1Desc: 'Bilingual static site (EN/IT) with CV download, contact form, GA4 analytics, dark/light mode and this portfolio section.',
      p1Stack: 'HTML · CSS · JS · GitHub Pages · Formspree · GA4',
      p2Title: 'Labelbike — Social Media & Content',
      p2Status: 'In progress',
      p2Desc: 'AI-based social media management for an artisan 3D resin motorcycle sticker brand. Strategy, moodboards, short-form editing and carousel posts for Instagram and TikTok.',
      p2Stack: 'Social Strategy · AI Content · Canva · DaVinci Resolve',
      p3Title: 'EU4 Assistant + Bot',
      p3Status: 'In progress',
      p3Desc: 'Python desktop companion for Europa Universalis IV — real-time save parsing, AI decision engine, three bot modes. M10 complete, standalone .exe.',
      p3Stack: 'Python · PyQt6 · watchdog · pyautogui · PyInstaller',
      p4Title: 'UNDERGENESIS',
      p4Status: 'In progress',
      p4Desc: 'Procedural evolutionary sandbox in Godot 4. Guide a species from pre-civilization to building and managing a complex fantasy civilization. Emergent evolution, 13 biomes, isometric rendering with LOD.',
      p4Stack: 'Godot 4.6 · GDScript · Procedural Generation · Isometric 2D',
      linkLive: '↗ Live',
      linkRepo: 'GitHub',
      linkDetail: 'Details →'
    },
    timeline: {
      title: 'Education & Experience',
      educationDate: '2019-2025',
      educationTitle: "IT Diploma - Istituto Superiore Statale S. D'Arzo",
      educationDesc: 'Technical diploma in computer science and telecommunications.',
      conadDate: 'May 2021 - Sep 2021',
      conadTitle: 'Cashier / Warehouse Assistant - Conad',
      conadDesc: 'Managed cashier operations, shelf restocking, and warehouse organization with operational autonomy.',
      sinegoDate: 'Sep 2021 - Aug 2022',
      sinegoTitle: 'Public Relations Assistant - Sinego Srl',
      sinegoDesc: 'Front-facing communication support and relationship management in customer-facing activities.',
      optimaDate: 'May 2024 - Jul 2025',
      optimaTitle: 'Commercial Consultant - Optima Spa',
      optimaDesc: 'Consulting for telecom services targeted to both private clients and businesses.',
      currentDate: 'Current',
      currentTitle: 'IFTS Graphic Technician & AI-based Social Media Manager',
      currentDesc: 'Training path combining visual design, media strategy, and AI-oriented digital workflows.'
    },
    cv: {
      title: 'Curriculum Vitae',
      description: 'Preview and download my CV in English or Italian.',
    },
    contact: {
      title: 'Contact',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      send: 'Send message',
      success: 'Thanks! Your message was sent successfully.',
      error: 'Please complete all fields with a valid email.'
    },
    footer: { language: 'Language: English' },
    feat: {
      pageTitle: 'Featured Projects',
      pageIntro: 'Selected projects — problem, solution, stack, result.',
      toc: { p1: 'Portfolio Site', p2: 'Labelbike', p3: 'EU4 Assistant', p4: 'Game Dev' },
      label: { problem: 'Problem', solution: 'Solution', stack: 'Stack', result: 'Result' },
      linkSite: '↗ Live site',
      linkEditing: 'Editing archive →',
      p1: {
        title: 'Portfolio Website',
        status: 'Live',
        problem: 'Build a bilingual, professional online presence targeting junior dev and creative roles.',
        solution: 'Designed and built a fully static bilingual site (EN/IT) from scratch — language toggle, dark/light theme, GA4 analytics, Formspree contact form, CV download, and a portfolio section.',
        result: 'Live personal site with full SEO setup, conversion tracking and modular content sections ready to grow.'
      },
      p2: {
        title: 'Labelbike — Social Media & Content',
        status: 'In progress',
        problem: 'An artisan 3D resin motorcycle sticker brand looking to establish a consistent digital identity and a structured content strategy across social channels.',
        solution: 'AI-based social media strategy covering moodboards, short-form video editing, carousel post packaging and caption writing for Instagram and TikTok.',
        result: 'Ongoing content production as part of an IFTS Project Work. Visual identity defined, first posts published.'
      },
      p3: {
        title: 'EU4 Assistant + Bot',
        status: 'In progress',
        problem: 'Europa Universalis IV has no external API — the only data source is the autosave file, stored in a proprietary recursive text format.',
        solution: 'Python desktop companion (PyQt6) that parses EU4 Clausewitz save files in real time, extracts a typed game-state snapshot, and runs an AI decision engine. Three modes: Advisor (pure recommendations), Semi-bot (single confirmed action), Full-bot (autonomous within configurable guardrails). Packaged as a standalone Windows .exe via PyInstaller.',
        result: 'M10 complete — live file watcher pipeline, custom Clausewitz parser, military/colonial/economy advisor, full-bot with pause gate for critical actions, Windows .exe shipped via GitHub Actions CI.'
      },
      p4: {
        title: 'UNDERGENESIS',
        status: 'In progress',
        problem: 'Design a game that makes biological evolution feel real and impactful — where species identity shapes every economic, military, and architectural decision a civilization makes.',
        solution: 'Procedural evolutionary sandbox in Godot 4.6 Mono. The player guides a proto-human species from solo survival to building a full civilization. Evolution is emergent: mutations are driven by biome, activity, climate, and population biology — not by a skill tree. A "Three Keys" system ties construction to stolen knowledge (schemas), geology (materials), and dominant mutation (efficiency). World generated with 6-layer fBm noise across 13 biomes, isometric rendering v5 with 3-level LOD, 10 evolution traits, deterministic resource spawning, and slot-based save system.',
        result: 'Core systems complete: procedural world (13 biomes), isometric renderer v5 (LOD + edge blending + animated water), day/night cycle, sky and particle layers, player action/survival, 10 emergent mutations, 6-recipe crafting system, creature AI (4 archetypes), save/load, full HUD suite, civilization population system. In active development.'
      }
    },
    edit: {
      pageTitle: 'Editing Works',
      pageIntro: 'Content production and post-production portfolio, organised by client and project type.',
      comingSoon: 'Coming soon',
      freelanceTitle: 'Freelance',
      freelanceDesc: 'Client projects — video editing, post-production and content strategy.',
      personalTitle: 'Personal',
      personalDesc: 'Personal experiments and independent creative projects.',
      lb: {
        status: 'In progress',
        cardDesc: 'YouTube, Instagram, TikTok, LinkedIn — full post-production pipeline.',
        desc: 'Ongoing collaboration for an artisan 3D resin motorcycle sticker brand based in Italy. AI-based content strategy, short-form video editing and post packaging.',
        postprod: {
          label: 'Post-production scope: ',
          text: 'Full pipeline handled end-to-end — editing, upload, titles, descriptions, keyword research, custom thumbnails, timestamps, and multilingual translation across 9 languages via a custom AI agent.'
        },
        comingSoon: 'Content in production — check back soon.'
      }
    },
    lb: {
      backToEditing: 'Back to Editing',
      status: 'In progress',
      desc: 'Ongoing collaboration for an artisan 3D resin motorcycle sticker brand based in Italy.',
      postprod: {
        label: 'Post-production scope: ',
        text: 'Full pipeline handled end-to-end — editing, upload, titles, descriptions, keyword research, custom thumbnails, timestamps, and multilingual translation across 9 languages via a custom AI agent.'
      },
      comingSoon: 'Content in production — check back soon.'
    }
  },
  it: {
    nav: { home: 'Home', editing: 'Editing', featured: 'Featured Projects' },
    toc: {
      title: 'In questa pagina',
      home: 'Intro',
      about: 'Chi sono',
      availability: 'Disponibilità',
      skills: 'Competenze',
      portfolio: 'Portfolio',
      timeline: 'Timeline',
      cv: 'CV',
      contact: 'Contatti'
    },
    hero: {
      positioning: 'Junior Developer con competenze creative e AI-oriented.',
      subtitle: 'Realizzo esperienze digitali pratiche unendo basi di sviluppo, comunicazione visiva e pensiero strategico sui contenuti.',
      ctaProjects: 'Vedi Featured Projects',
      ctaCv: 'Scarica CV',
      ctaContact: 'Contattami'
    },
    about: {
      title: 'Chi sono',
      bio: 'Sono Aronne Zanichelli, diplomato in Informatica e Telecomunicazioni. Sono cresciuto con la tecnologia e mi piace trasformare la passione digitale in lavoro reale e utile. Il mio profilo unisce basi di sviluppo, comunicazione visiva e produzione contenuti social.',
      goalTitle: 'Obiettivo professionale',
      goalText: 'Voglio entrare nel mondo dei videogiochi e delle tecnologie interattive, con una visione che include anche la realtà virtuale. Cerco opportunità junior in web/game development dove unire programmazione, creatività e crescita rapida.',
      valueTitle: 'Cosa porto in un team',
      valueOne: 'Mentalità tecnica + creativa: codice con attenzione a comunicazione e UX.',
      valueTwo: "Autonomia operativa nell'esecuzione e nella consegna.",
      valueThree: 'Approccio al problem solving e forte motivazione in percorsi junior.'
    },
    availability: {
      title: 'Disponibilità',
      text: 'Base in Italia (fuso Europe/Rome). Disponibile per opportunità junior, stage e collaborazioni in web development o game development, in remoto o ibrido. Patente B e automunito.'
    },
    skills: {
      title: 'Competenze tecniche',
      html: 'HTML e CSS per interfacce responsive (basi solide)',
      java: 'Java per progetti orientati agli oggetti',
      cpp: 'Basi di C++ per logica e performance',
      python: 'Python (livello iniziale, sto consolidando i fondamentali)',
      sql: 'SQL e fondamenti di database relazionali',
      creative: 'DaVinci Resolve, Pacchetto Office, Pacchetto Adobe (base/intermedio)'
    },
    softSkills: {
      title: 'Soft Skills',
      one: 'Problem solving',
      two: 'Apprendimento rapido',
      three: 'Teamwork e comunicazione',
      four: 'Disciplina creativa e affidabilità'
    },
    languages: {
      title: 'Lingue',
      it: 'Italiano — Madrelingua',
      en: 'Inglese — Intermedio (B2)',
      es: 'Spagnolo — Base (A1)'
    },
    portfolio: {
      title: 'Portfolio',
      p1Title: 'Sito Portfolio',
      p1Status: 'Live',
      p1Desc: 'Sito statico bilingue (IT/EN) con download CV, form contatti, analytics GA4, modalità dark/light e questa stessa sezione portfolio.',
      p1Stack: 'HTML · CSS · JS · GitHub Pages · Formspree · GA4',
      p2Title: 'Labelbike — Social Media & Content',
      p2Status: 'In corso',
      p2Desc: 'Gestione social media AI-based per brand artigianale di adesivi in resina 3D per moto. Strategia, moodboard, editing short-form e post packaging in formato carosello per Instagram e TikTok.',
      p2Stack: 'Social Strategy · AI Content · Canva · DaVinci Resolve',
      p3Title: 'EU4 Assistant + Bot',
      p3Status: 'In corso',
      p3Desc: 'Companion Python desktop per Europa Universalis IV — parsing save in tempo reale, decision engine AI, tre modalità bot. M10 completo, .exe standalone.',
      p3Stack: 'Python · PyQt6 · watchdog · pyautogui · PyInstaller',
      p4Title: 'UNDERGENESIS',
      p4Status: 'In corso',
      p4Desc: 'Sandbox evolutivo procedurale in Godot 4. Guidi una specie dalla pre-civiltà fino alla costruzione di una civiltà fantasy complessa. Evoluzione emergente, 13 biomi, rendering isometrico con LOD.',
      p4Stack: 'Godot 4.6 · GDScript · Generazione Procedurale · Isometrico 2D',
      linkLive: '↗ Live',
      linkRepo: 'GitHub',
      linkDetail: 'Dettagli →'
    },
    timeline: {
      title: 'Formazione ed esperienza',
      educationDate: '2019-2025',
      educationTitle: "Diploma IT - Istituto Superiore Statale S. D'Arzo",
      educationDesc: 'Diploma tecnico in Informatica e Telecomunicazioni.',
      conadDate: 'Mag 2021 - Set 2021',
      conadTitle: 'Cassiere / Magazziniere - Conad',
      conadDesc: 'Gestione cassa, rifornimento scaffali e organizzazione magazzino in autonomia.',
      sinegoDate: 'Set 2021 - Ago 2022',
      sinegoTitle: 'Addetto alle Pubbliche Relazioni - Sinego Srl',
      sinegoDesc: 'Supporto nella comunicazione front-facing e gestione relazionale con il pubblico.',
      optimaDate: 'Mag 2024 - Lug 2025',
      optimaTitle: 'Consulente Commerciale - Optima Spa',
      optimaDesc: 'Consulenza su servizi di telecomunicazione rivolta ad aziende e privati.',
      currentDate: 'Attuale',
      currentTitle: 'IFTS Tecnico Grafico & Social Media Manager AI-based',
      currentDesc: "Percorso che integra design visivo, strategia media e workflow digitali orientati all'AI."
    },
    cv: {
      title: 'Download CV',
      description: "Anteprima del CV qui sotto. Usa il bottone Scarica CV in alto per salvarne una copia."
    },
    contact: {
      title: 'Contatti',
      formName: 'Nome',
      formEmail: 'Email',
      formMessage: 'Messaggio',
      send: 'Invia messaggio',
      success: 'Grazie! Il messaggio è stato inviato con successo.',
      error: 'Compila tutti i campi con una email valida.'
    },
    footer: { language: 'Lingua: Italiano' },
    feat: {
      pageTitle: 'Featured Projects',
      pageIntro: 'Progetti selezionati — problema, soluzione, stack, risultato.',
      toc: { p1: 'Sito Portfolio', p2: 'Labelbike', p3: 'EU4 Assistant', p4: 'Game Dev' },
      label: { problem: 'Problema', solution: 'Soluzione', stack: 'Stack', result: 'Risultato' },
      linkSite: '↗ Sito live',
      linkEditing: 'Archivio editing →',
      p1: {
        title: 'Sito Portfolio',
        status: 'Live',
        problem: 'Costruire una presenza online bilingue e professionale per posizioni junior dev e creative.',
        solution: 'Progettato e sviluppato un sito statico bilingue (IT/EN) da zero — toggle lingua, tema dark/light, GA4, form Formspree, download CV e sezione portfolio.',
        result: 'Sito live con setup SEO completo, tracciamento conversioni e sezioni di contenuto modulari pronte a crescere.'
      },
      p2: {
        title: 'Labelbike — Social Media & Content',
        status: 'In corso',
        problem: 'Brand artigianale di adesivi in resina 3D per moto, alla ricerca di un\'identità digitale solida e di una strategia contenuti social strutturata e continuativa.',
        solution: 'Strategia social AI-based: moodboard, editing video short-form, packaging caroselli e scrittura caption per Instagram e TikTok.',
        result: 'Produzione contenuti in corso come Project Work IFTS. Identità visiva definita, primi post pubblicati.'
      },
      p3: {
        title: 'EU4 Assistant + Bot',
        status: 'In corso',
        problem: 'Europa Universalis IV non ha API esterne — l\'unica fonte dati è il file di salvataggio automatico, in un formato testuale ricorsivo proprietario.',
        solution: 'Companion Python desktop (PyQt6) che fa parsing dei save file EU4 in tempo reale, estrae uno snapshot tipizzato dello stato di gioco e applica un decision engine AI. Tre modalità: Advisor (raccomandazioni pure), Semi-bot (singola azione confermata), Full-bot (autonomo entro guardrail configurabili). Distribuito come .exe Windows standalone via PyInstaller.',
        result: 'M10 completato — pipeline file watcher live, parser Clausewitz custom, advisor militare/coloniale/economia, full-bot con pause gate su azioni critiche, .exe Windows generato via GitHub Actions CI.'
      },
      p4: {
        title: 'UNDERGENESIS',
        status: 'In corso',
        problem: 'Progettare un gioco dove l\'evoluzione biologica sia reale e impattante — in cui l\'identità della specie determini ogni scelta economica, militare e architettonica della civiltà.',
        solution: 'Sandbox evolutivo procedurale in Godot 4.6 Mono. Il giocatore guida una specie proto-umana dalla sopravvivenza solitaria alla costruzione di una civiltà complessa. L\'evoluzione è emergente: le mutazioni dipendono da bioma, attività, clima e biologia della popolazione — non da un albero delle abilità. Il sistema "Tre Chiavi" lega la costruzione a schemi rubati (conoscenza), geologia (materiale) e mutazione dominante (efficienza). Mondo generato con noise fBm a 6 layer su 13 biomi, rendering isometrico v5 con LOD a 3 livelli, 10 trait evolutivi, spawn deterministico delle risorse e sistema di salvataggio slot-based.',
        result: 'Sistemi core completati: mondo procedurale (13 biomi), renderer isometrico v5 (LOD + edge blending + acqua animata), ciclo giorno/notte, layer cielo e particelle, player action/survival, 10 mutazioni emergenti, crafting 6 ricette, creature AI (4 archetipi), save/load, HUD completo, sistema popolazione civiltà. In sviluppo attivo.'
      }
    },
    edit: {
      pageTitle: 'Editing Works',
      pageIntro: 'Portfolio di produzione contenuti e post-produzione, organizzato per cliente e tipo di progetto.',
      comingSoon: 'Coming soon',
      freelanceTitle: 'Freelance',
      freelanceDesc: 'Progetti per clienti — editing video, post-produzione e content strategy.',
      personalTitle: 'Lavori Personali',
      personalDesc: 'Esperimenti personali e progetti creativi indipendenti.',
      lb: {
        status: 'In corso',
        cardDesc: 'YouTube, Instagram, TikTok, LinkedIn — pipeline di post-produzione completa.',
        desc: 'Collaborazione in corso per un brand artigianale italiano di adesivi in resina 3D per moto. Strategia AI-based, editing video short-form e packaging post.',
        postprod: {
          label: 'Scope post-produzione: ',
          text: 'Pipeline gestita interamente — editing, upload, titoli, descrizioni, keyword research, thumbnail personalizzate, timestamp e traduzione in 9 lingue tramite un agente AI custom.'
        },
        comingSoon: 'Contenuto in produzione — torna presto.'
      }
    },
    lb: {
      backToEditing: 'Torna a Editing',
      status: 'In corso',
      desc: 'Collaborazione in corso per un brand artigianale italiano di adesivi in resina 3D per moto.',
      postprod: {
        label: 'Scope post-produzione: ',
        text: 'Pipeline gestita interamente — editing, upload, titoli, descrizioni, keyword research, thumbnail personalizzate, timestamp e traduzione in 9 lingue tramite un agente AI custom.'
      },
      comingSoon: 'Contenuto in produzione — torna presto.'
    }
  }
};

const getValueByPath = (obj, path) => path.split('.').reduce((acc, key) => acc?.[key], obj);

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : 'en';
  document.documentElement.lang = safeLang;
  localStorage.setItem('lang', safeLang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getValueByPath(translations[safeLang], key);
    if (value) el.textContent = value;
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === safeLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  const heroCvBtn = document.getElementById('heroCvDownload');
  if (heroCvBtn) heroCvBtn.href = `assets/cv-${safeLang}.pdf`;

  const cvImg = document.getElementById('cv-img');
  if (cvImg) {
    cvImg.src = `assets/cv-${safeLang}.webp`;
    cvImg.alt = safeLang === 'it' ? 'Anteprima CV' : 'CV Preview';
  }
}

function setupTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('light', savedTheme === 'light');
  toggle.textContent = savedTheme === 'light' ? '☀︎' : '☾';
  toggle.setAttribute('aria-pressed', String(savedTheme === 'light'));
  toggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☀︎' : '☾';
    toggle.setAttribute('aria-pressed', String(isLight));
  });
}

function setupMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const lang = localStorage.getItem('lang') || 'en';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailValid || !message) {
      feedback.textContent = translations[lang].contact.error;
      return;
    }
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (response.ok) {
        if (typeof window.gtag === 'function') window.gtag('event', 'submit_contact_form_success');
        feedback.textContent = translations[lang].contact.success;
        form.reset();
      } else {
        if (typeof window.gtag === 'function') window.gtag('event', 'submit_contact_form_error');
        feedback.textContent = translations[lang].contact.error;
      }
    } catch {
      feedback.textContent = translations[lang].contact.error;
    }
  });
}

function setupAnalyticsEvents() {
  const track = (eventName, params = {}) => {
    if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
  };
  document.getElementById('viewFeaturedCta')?.addEventListener('click', () => track('click_cta', { cta: 'view_featured_projects' }));
  document.getElementById('heroCvDownload')?.addEventListener('click', () => {
    const lang = localStorage.getItem('lang') || 'en';
    track('download_cv', { language: lang });
  });
  document.getElementById('linkedinLink')?.addEventListener('click', () => track('click_social', { platform: 'linkedin' }));
  document.getElementById('githubLink')?.addEventListener('click', () => track('click_social', { platform: 'github' }));
  document.getElementById('instagramLink')?.addEventListener('click', () => track('click_social', { platform: 'instagram' }));
  document.getElementById('emailLink')?.addEventListener('click', () => track('click_email'));
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      track('switch_language', { language: btn.dataset.lang });
      applyLanguage(btn.dataset.lang);
    });
  });
}

function init() {
  const preferredLang = localStorage.getItem('lang') || 'en';
  applyLanguage(preferredLang);
  setupTheme();
  setupMenu();
  setupContactForm();
  setupAnalyticsEvents();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
