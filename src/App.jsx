import { useState, useEffect, useRef } from 'react'
import './App.css'

const t = {
  fr: {
    nav: ['À propos', 'Projets', 'Compétences', 'Services', 'Avis', 'Contact'],
    aboutTitle: 'À propos',
    aboutBio: 'Développeur Web & Mobile basé en Martinique, je conçois des applications sur mesure qui répondent à de vrais besoins. Autodidacte, passionné par les nouvelles technologies, je couvre tout le spectre — du design à la mise en ligne.',
    aboutDetail1: 'Spécialisé Flutter pour le mobile et React pour le web',
    aboutDetail2: 'Basé en Martinique, disponible à distance partout',
    aboutDetail3: 'De l\'idée au produit fini — seul interlocuteur',
    heroRole: 'Développeur Web & Mobile',
    heroSub: 'Je crée des applications mobiles et des sites web sur mesure — de l\'idée au produit fini.',
    heroBtn: 'Me contacter',
    heroBtn2: 'Voir mes projets',
    heroCV: 'Télécharger CV',
    projectsTitle: 'Mes Projets',
    projectsSubtitle: 'Des projets concrets, du code propre, des solutions qui marchent.',
    skillsTitle: 'Compétences',
    servicesTitle: 'Services & Tarifs',
    servicesSub: 'Des prestations claires, des tarifs transparents. Chaque projet est unique — ces prix sont indicatifs.',
    servicesCta: 'Demander un devis',
    servicesFrom: 'À partir de',
    servicesIncludes: 'Inclus :',
    contactTitle: 'Travaillons ensemble',
    contactSub: 'Vous avez un projet ? Une idée ? Contactez-moi.',
    contactPhone: 'Appeler',
    contactMsg: 'WhatsApp',
    contactMail: 'Envoyer un mail',
    viewProject: 'Voir le projet →',
    mobileOnly: 'App mobile',
    available: 'Disponible pour des missions',
    mobileApp: 'App Mobile',
    webApp: 'App Web',
    website: 'Site Web',
    reviewsTitle: 'Avis & Commentaires',
    reviewsSub: 'Vous avez travaillé avec moi ? Laissez un avis.',
    reviewName: 'Prénom', reviewMsg: 'Votre message',
    reviewSend: 'Publier', reviewSending: 'Publication...',
    reviewSuccess: '✓ Avis publié, merci !',
    reviewEmpty: 'Soyez le premier à laisser un avis !',
    formTitle: 'Envoyer un message',
    formName: 'Nom', formEmail: 'Email', formSubject: 'Sujet', formMessage: 'Message',
    formSend: 'Envoyer', formSending: 'Envoi...', formSuccess: '✓ Message envoyé ! Je réponds sous 24h.',
    formNamePh: 'Jean Dupont', formEmailPh: 'jean@exemple.com',
    formSubjectPh: 'Demande de devis', formMsgPh: 'Décrivez votre projet...',
    footer: 'Fait avec ❤️ par Audric Cinna',
  },
  en: {
    nav: ['About', 'Projects', 'Skills', 'Services', 'Reviews', 'Contact'],
    aboutTitle: 'About me',
    aboutBio: 'Web & Mobile developer based in Martinique, I build custom apps that solve real problems. Self-taught, passionate about technology, I cover the full stack — from design to deployment.',
    aboutDetail1: 'Specialized in Flutter for mobile and React for web',
    aboutDetail2: 'Based in Martinique, available remotely worldwide',
    aboutDetail3: 'From idea to finished product — single point of contact',
    heroRole: 'Web & Mobile Developer',
    heroSub: 'I build custom mobile apps and websites — from idea to finished product.',
    heroBtn: 'Contact me',
    heroBtn2: 'See my work',
    heroCV: 'Download CV',
    projectsTitle: 'My Projects',
    projectsSubtitle: 'Real projects, clean code, solutions that work.',
    skillsTitle: 'Skills',
    servicesTitle: 'Services & Pricing',
    servicesSub: 'Clear services, transparent pricing. Every project is unique — these prices are indicative.',
    servicesCta: 'Request a quote',
    servicesFrom: 'Starting at',
    servicesIncludes: 'Includes:',
    contactTitle: 'Let\'s work together',
    contactSub: 'Got a project or an idea? Get in touch.',
    contactPhone: 'Call',
    contactMsg: 'WhatsApp',
    contactMail: 'Send an email',
    viewProject: 'View project →',
    mobileOnly: 'Mobile app',
    available: 'Available for projects',
    mobileApp: 'Mobile App',
    webApp: 'Web App',
    website: 'Website',
    reviewsTitle: 'Reviews',
    reviewsSub: 'Worked with me? Leave a review.',
    reviewName: 'First name', reviewMsg: 'Your message',
    reviewSend: 'Post', reviewSending: 'Posting...',
    reviewSuccess: '✓ Review posted, thank you!',
    reviewEmpty: 'Be the first to leave a review!',
    formTitle: 'Send a message',
    formName: 'Name', formEmail: 'Email', formSubject: 'Subject', formMessage: 'Message',
    formSend: 'Send', formSending: 'Sending...', formSuccess: "✓ Message sent! I'll reply within 24h.",
    formNamePh: 'John Doe', formEmailPh: 'john@example.com',
    formSubjectPh: 'Quote request', formMsgPh: 'Describe your project...',
    footer: 'Made with ❤️ by Audric Cinna',
  }
}

const testimonials = [
  {
    name: 'Sarah M.', initials: 'SM',
    role: { fr: 'Gérante de salon', en: 'Salon Manager' },
    company: "Créol'Hair",
    text: {
      fr: "Audric a livré notre site en une semaine. Design soigné, responsive, formulaire de réservation — exactement ce qu'on voulait. Nos clientes adorent.",
      en: "Audric delivered our website in one week. Clean design, responsive, booking form — exactly what we wanted. Our clients love it.",
    },
  },
  {
    name: 'Marc D.', initials: 'MD',
    role: { fr: 'Restaurateur', en: 'Restaurant Owner' },
    company: 'Le Flamboyant',
    text: {
      fr: "Site magnifique pour notre restaurant. Le panneau de gestion des disponibilités est très pratique au quotidien. Très professionnel et réactif.",
      en: "Beautiful website for our restaurant. The availability management panel is very practical daily. Very professional and responsive.",
    },
  },
  {
    name: 'Kevin T.', initials: 'KT',
    role: { fr: 'Entrepreneur', en: 'Entrepreneur' },
    company: 'Startup 972',
    text: {
      fr: "Pour notre app mobile Flutter, Audric a livré en avance sur le planning. Code propre, bonne communication. Je recommande sans hésiter.",
      en: "For our Flutter mobile app, Audric delivered ahead of schedule. Clean code, great communication. I recommend without hesitation.",
    },
  },
]

const projects = [
  {
    name: "Créol'Hair",
    emoji: '✂️',
    type: { fr: 'Site Vitrine', en: 'Business Website' },
    color: '#C9A96E',
    url: 'https://coiffeur-vitrine.vercel.app',
    desc: {
      fr: 'Site vitrine pour un salon de coiffure martiniquais. Prestations et tarifs, galerie de réalisations, équipe, formulaire de réservation.',
      en: 'Showcase website for a Martinique hair salon. Services & pricing, gallery, team and booking form.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Le Flamboyant',
    emoji: '🍽️',
    type: { fr: 'Site Vitrine', en: 'Business Website' },
    color: '#C9A96E',
    url: 'https://restaurant-vitrine.vercel.app',
    desc: {
      fr: 'Site vitrine restaurant gastronomique martiniquais. Carte interactive par onglets, galerie photo, formulaire de réservation et panneau de gestion des disponibilités du jour.',
      en: 'Fine dining restaurant showcase. Tabbed interactive menu, photo gallery, reservation form and daily availability management panel.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Audi R8 V10 — 3D',
    emoji: '🚗',
    type: { fr: 'Site Vitrine', en: 'Business Website' },
    color: '#B71C1C',
    url: 'https://audi-rs8-site-1xzshwghl-emilecinna-dotcoms-projects.vercel.app',
    desc: {
      fr: 'Site vitrine immersif avec modèle 3D interactif d\'une Audi R8 V10. Rotation temps réel, animations, expérience cinématique.',
      en: 'Immersive showcase with interactive 3D Audi R8 V10 model. Real-time rotation, animations, cinematic experience.'
    },
    tech: ['HTML', 'CSS', 'JavaScript', '3D / WebGL'],
  },
  {
    name: 'Convoy PTT',
    emoji: '🚗',
    type: { fr: 'App Mobile', en: 'Mobile App' },
    color: '#FF5722',
    url: null,
    desc: {
      fr: 'Application talkie-walkie PTT pour convois de voitures. GPS en temps réel, carte 3D interactive, marqueurs personnalisés par membre.',
      en: 'PTT walkie-talkie app for car convoys. Real-time GPS, interactive 3D map, custom marker per member.'
    },
    tech: ['Flutter', 'Dart', 'Supabase', 'Mapbox', 'LiveKit'],
  },
  {
    name: 'Simulateur Fiscal',
    emoji: '💰',
    type: { fr: 'App Web', en: 'Web App' },
    color: '#388E3C',
    url: 'https://tax-calculator-dusky-ten.vercel.app',
    desc: {
      fr: 'Simulateur de cotisations sociales pour auto-entrepreneurs français. Calcul en temps réel, visualisation des charges, export PDF.',
      en: 'Social contributions simulator for French self-employed workers. Real-time calculation, charges breakdown, PDF export.'
    },
    tech: ['React', 'Vite', 'shadcn/ui', 'JavaScript'],
  },
  {
    name: 'Apprendre le Japonais',
    emoji: '🇯🇵',
    type: { fr: 'Site Web', en: 'Website' },
    color: '#C62828',
    url: 'https://japanese-learning-five.vercel.app',
    desc: {
      fr: 'Site complet pour apprendre le japonais depuis le français. Hiragana, katakana, kanji, vocabulaire, grammaire et flashcards interactives.',
      en: 'Full Japanese learning website in French. Hiragana, katakana, kanji, vocabulary, grammar and interactive flashcards.'
    },
    tech: ['React', 'Vite', 'CSS', 'JavaScript'],
  },
  {
    name: 'Apprendre l\'Espagnol',
    emoji: '🇪🇸',
    type: { fr: 'Site Web', en: 'Website' },
    color: '#F9A825',
    url: 'https://spanish-learning-beta.vercel.app',
    desc: {
      fr: 'Site d\'apprentissage de l\'espagnol depuis le français. Prononciation, conjugaison, vocabulaire, grammaire et système de flashcards.',
      en: 'Spanish learning website in French. Pronunciation, conjugation, vocabulary, grammar and flashcard system.'
    },
    tech: ['React', 'Vite', 'CSS', 'JavaScript'],
  },
  {
    name: 'BTS Électrotechnique',
    emoji: '⚡',
    type: { fr: 'Site Web', en: 'Website' },
    color: '#1976D2',
    url: 'https://bts-electrotechnique.vercel.app',
    desc: {
      fr: 'Site de révision pour le BTS Électrotechnique. Cours complets, annales 2022–2024, quiz interactifs et fiches de révision.',
      en: 'Revision website for the BTS Électrotechnique exam. Full lessons, past papers 2022–2024, interactive quizzes and revision sheets.'
    },
    tech: ['React', 'Vite', 'CSS', 'JavaScript'],
  },
]

const services = [
  {
    icon: '🌐',
    name: { fr: 'Site Vitrine', en: 'Business Website' },
    desc: { fr: 'Un site professionnel pour présenter votre activité, attirer des clients et être visible sur Google.', en: 'A professional website to showcase your business and attract customers.' },
    price: '350€',
    includes: {
      fr: ['Design sur mesure', 'Responsive mobile', 'Formulaire de contact', 'Mise en ligne incluse'],
      en: ['Custom design', 'Mobile responsive', 'Contact form', 'Deployment included'],
    },
    popular: false,
    color: '#56CFE1',
  },
  {
    icon: '⚙️',
    name: { fr: 'Application Web', en: 'Web Application' },
    desc: { fr: 'Une app web complète avec base de données, authentification et tableau de bord — pour automatiser ou gérer votre activité.', en: 'A full web app with database, auth and dashboard — to automate or manage your business.' },
    price: '800€',
    includes: {
      fr: ['Interface React moderne', 'Base de données', 'Authentification', 'Tableau de bord', 'Déploiement inclus'],
      en: ['Modern React UI', 'Database', 'Authentication', 'Dashboard', 'Deployment included'],
    },
    popular: true,
    color: '#7C6FCD',
  },
  {
    icon: '📱',
    name: { fr: 'Application Mobile', en: 'Mobile App' },
    desc: { fr: 'Une app iOS & Android native en Flutter — notifications, GPS, audio, temps réel. Tout est possible.', en: 'A native iOS & Android Flutter app — push notifications, GPS, audio, real-time. Anything is possible.' },
    price: '1 200€',
    includes: {
      fr: ['iOS + Android', 'Design natif', 'Notifications push', 'Backend inclus', 'Publication stores'],
      en: ['iOS + Android', 'Native design', 'Push notifications', 'Backend included', 'Store publishing'],
    },
    popular: false,
    color: '#FF6B6B',
  },
  {
    icon: '🔧',
    name: { fr: 'Maintenance & Évolution', en: 'Maintenance & Updates' },
    desc: { fr: 'Votre site ou app évolue avec vous. Corrections, nouvelles fonctionnalités, mises à jour régulières.', en: 'Your site or app evolves with you. Bug fixes, new features, regular updates.' },
    price: '80€/mois',
    includes: {
      fr: ['Corrections de bugs', 'Mises à jour sécurité', 'Petites évolutions', 'Support WhatsApp'],
      en: ['Bug fixes', 'Security updates', 'Small evolutions', 'WhatsApp support'],
    },
    popular: false,
    color: '#4ADE80',
  },
]

const skills = [
  { name: 'Flutter', icon: '📱', level: 90 },
  { name: 'Dart', icon: '🎯', level: 88 },
  { name: 'React', icon: '⚛️', level: 92 },
  { name: 'JavaScript', icon: '🟨', level: 90 },
  { name: 'HTML / CSS', icon: '🎨', level: 95 },
  { name: 'Vite', icon: '⚡', level: 85 },
  { name: 'Supabase', icon: '🗄️', level: 80 },
  { name: 'Mapbox', icon: '🗺️', level: 78 },
  { name: 'LiveKit', icon: '🎙️', level: 75 },
  { name: 'Git', icon: '🔀', level: 85 },
]

export default function App() {
  const [lang, setLang] = useState('fr')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [statNums, setStatNums] = useState({ p: 0, t: 0, c: 0 })
  const [formSent, setFormSent] = useState(false)
  const [formSending, setFormSending] = useState(false)
  const [reviews, setReviews] = useState([])
  const [reviewName, setReviewName] = useState('')
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewMsg, setReviewMsg] = useState('')
  const [reviewSent, setReviewSent] = useState(false)
  const [reviewSending, setReviewSending] = useState(false)

  const SB_URL = import.meta.env.VITE_SUPABASE_URL
  const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

  useEffect(() => {
    if (!SB_URL || !SB_KEY) return
    fetch(`${SB_URL}/rest/v1/portfolio_reviews?approved=eq.true&order=created_at.desc`, {
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }
    }).then(r => r.json()).then(setReviews).catch(() => {})
  }, [])
  const statsRef = useRef(null)
  const statsAnimated = useRef(false)
  const l = t[lang]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transitioning')
    setTheme(t => t === 'dark' ? 'light' : 'dark')
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 350)
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setShowScrollTop(y > 400)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (y / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsAnimated.current) {
        statsAnimated.current = true
        ;[['p', 9], ['t', 10], ['c', 100]].forEach(([key, end]) => {
          let cur = 0
          const iv = setInterval(() => {
            cur = Math.min(cur + end / 40, end)
            setStatNums(prev => ({ ...prev, [key]: Math.floor(cur) }))
            if (cur >= end) clearInterval(iv)
          }, 25)
        })
      }
    }, { threshold: 0.8 })
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    if (!SB_URL || !SB_KEY || !reviewName.trim() || !reviewMsg.trim()) return
    setReviewSending(true)
    try {
      const res = await fetch(`${SB_URL}/rest/v1/portfolio_reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify({ name: reviewName.trim(), rating: reviewRating, message: reviewMsg.trim() }),
      })
      if (res.ok) {
        const [newReview] = await res.json()
        setReviews(prev => [newReview, ...prev])
        setReviewName(''); setReviewMsg(''); setReviewRating(5); setReviewSent(true)
        setTimeout(() => setReviewSent(false), 4000)
      }
    } catch {}
    setReviewSending(false)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormSending(true)
    const f = e.target
    try {
      const res = await fetch('https://formsubmit.co/ajax/Emile.cinna@icloud.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: f.name.value,
          email: f.email.value,
          _subject: f.subject.value,
          message: f.message.value,
        }),
      })
      if (res.ok) setFormSent(true)
      else throw new Error()
    } catch {
      alert(lang === 'fr' ? 'Erreur réseau. Contactez-moi par WhatsApp.' : 'Network error. Contact me via WhatsApp.')
    }
    setFormSending(false)
  }

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    const timer = setTimeout(() => els.forEach(el => observer.observe(el)), 150)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])

  return (
    <div className="app">
      {/* Barre de progression */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <span className="nav__logo">AC</span>
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {l.nav.map((item, i) => (
            <a key={i} href={`#${['about','projects','skills','services','reviews','contact'][i]}`}
              className="nav__link"
              onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
        <div className="nav__right">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Changer de thème">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="lang-btn" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
            {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
          <button className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {menuOpen && <div className="nav__overlay" onClick={() => setMenuOpen(false)} />}

      {/* HERO */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__dot" />
            {l.available}
          </div>
          <h1 className="hero__name">Audric <span className="hero__name--accent">Cinna</span></h1>
          <p className="hero__role">{l.heroRole}</p>
          <p className="hero__sub">{l.heroSub}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">{l.heroBtn}</a>
            <a href="#projects" className="btn btn--ghost">{l.heroBtn2}</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="CV_Audric_Cinna.pdf" className="btn btn--ghost">
              📄 {l.heroCV}
            </a>
          </div>
          <div className="hero__stats" ref={statsRef}>
            <div className="stat"><span className="stat__num">{statNums.p}+</span><span className="stat__label">{lang === 'fr' ? 'Projets' : 'Projects'}</span></div>
            <div className="stat__sep" />
            <div className="stat"><span className="stat__num">{statNums.t}+</span><span className="stat__label">{lang === 'fr' ? 'Technologies' : 'Technologies'}</span></div>
            <div className="stat__sep" />
            <div className="stat"><span className="stat__num">{statNums.c}%</span><span className="stat__label">{lang === 'fr' ? 'Sur mesure' : 'Custom built'}</span></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--alt reveal" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__photo">
              <img src="/logo.png" alt="Audric Cinna" className="about__avatar" />
            </div>
            <div className="about__content">
              <h2 className="section__title" style={{ textAlign: 'left', marginBottom: 16 }}>{l.aboutTitle}</h2>
              <p className="about__bio">{l.aboutBio}</p>
              <ul className="about__list">
                <li><span className="about__check">→</span>{l.aboutDetail1}</li>
                <li><span className="about__check">→</span>{l.aboutDetail2}</li>
                <li><span className="about__check">→</span>{l.aboutDetail3}</li>
              </ul>
              <a href="#contact" className="btn btn--primary" style={{ marginTop: 8 }}>{l.heroBtn}</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section reveal" id="projects">
        <div className="container">
          <h2 className="section__title">{l.projectsTitle}</h2>
          <p className="section__sub">{l.projectsSubtitle}</p>
          <div className="projects__grid">
            {projects.map((p, i) => (
              <div className="project-card" key={i} style={{ '--card-color': p.color }}>
                <div className="project-card__top">
                  <span className="project-card__emoji">{p.emoji}</span>
                  <span className="project-card__type">{p.type[lang]}</span>
                </div>
                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__desc">{p.desc[lang]}</p>
                <div className="project-card__techs">
                  {p.tech.map((tech, j) => (
                    <span className="tech-tag" key={j}>{tech}</span>
                  ))}
                </div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    {l.viewProject}
                  </a>
                ) : (
                  <span className="project-card__mobile">{l.mobileOnly}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section--alt reveal" id="skills">
        <div className="container">
          <h2 className="section__title">{l.skillsTitle}</h2>
          <div className="skills__grid">
            {skills.map((s, i) => (
              <div className="skill-card" key={i}>
                <span className="skill-card__icon">{s.icon}</span>
                <span className="skill-card__name">{s.name}</span>
                <div className="skill-card__bar">
                  <div className="skill-card__fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="section reveal" id="reviews">
        <div className="container">
          <h2 className="section__title">{l.reviewsTitle}</h2>
          <p className="section__sub">{l.reviewsSub}</p>
          <div className="reviews__layout">

            {/* Formulaire */}
            <form className="review-form" onSubmit={handleReviewSubmit}>
              <div className="form-field">
                <label>{l.reviewName}</label>
                <input value={reviewName} onChange={e => setReviewName(e.target.value)}
                  placeholder="Jean D." required maxLength={40} />
              </div>
              <div className="form-field">
                <label>{lang === 'fr' ? 'Note' : 'Rating'}</label>
                <div className="star-picker">
                  {[1,2,3,4,5].map(n => (
                    <button type="button" key={n}
                      className={`star-btn ${n <= reviewRating ? 'star-btn--on' : ''}`}
                      onClick={() => setReviewRating(n)}>★</button>
                  ))}
                </div>
              </div>
              <div className="form-field">
                <label>{l.reviewMsg}</label>
                <textarea value={reviewMsg} onChange={e => setReviewMsg(e.target.value)}
                  rows="4" placeholder={lang === 'fr' ? 'Décrivez votre expérience...' : 'Describe your experience...'}
                  required maxLength={400} />
              </div>
              {reviewSent
                ? <div className="review-success">{l.reviewSuccess}</div>
                : <button type="submit" className="btn btn--primary form__submit" disabled={reviewSending || !SB_URL}>
                    {reviewSending ? l.reviewSending : `★ ${l.reviewSend}`}
                  </button>
              }
            </form>

            {/* Liste des avis */}
            <div className="reviews__list">
              {reviews.length === 0
                ? <div className="reviews__empty">{l.reviewEmpty}</div>
                : reviews.map(r => (
                  <div className="review-card" key={r.id}>
                    <div className="review-card__header">
                      <div className="review-card__avatar">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="review-card__name">{r.name}</div>
                        <div className="review-card__stars">
                          {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                        </div>
                      </div>
                      <div className="review-card__date">
                        {new Date(r.created_at).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day:'numeric', month:'short', year:'numeric' })}
                      </div>
                    </div>
                    <p className="review-card__msg">{r.message}</p>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section reveal" id="services">
        <div className="container">
          <h2 className="section__title">{l.servicesTitle}</h2>
          <p className="section__sub">{l.servicesSub}</p>
          <div className="services__grid">
            {services.map((s, i) => (
              <div className={`service-card ${s.popular ? 'service-card--popular' : ''}`} key={i} style={{ '--svc-color': s.color }}>
                {s.popular && <div className="service-card__badge">⭐ {lang === 'fr' ? 'Populaire' : 'Popular'}</div>}
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__name">{s.name[lang]}</h3>
                <p className="service-card__desc">{s.desc[lang]}</p>
                <div className="service-card__price">
                  <span className="service-card__from">{l.servicesFrom}</span>
                  <span className="service-card__amount">{s.price}</span>
                </div>
                <ul className="service-card__list">
                  {s.includes[lang].map((item, j) => (
                    <li key={j}><span className="service-card__check">✓</span>{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn--service">{l.servicesCta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--alt reveal" id="contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__box">
              <div className="contact__glow" />
              <h2 className="section__title" style={{ textAlign: 'left', marginBottom: 12 }}>{l.contactTitle}</h2>
              <p className="section__sub" style={{ textAlign: 'left', marginLeft: 0, marginBottom: 28 }}>{l.contactSub}</p>
              <div className="contact__actions" style={{ justifyContent: 'flex-start' }}>
                <a href="tel:0696822463" className="btn btn--primary">
                  📞 {l.contactPhone} — 06 96 82 24 63
                </a>
                <a href="https://wa.me/596696822463" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                  💬 {l.contactMsg}
                </a>
                <a href="mailto:Emile.cinna@icloud.com" className="btn btn--ghost">
                  ✉️ {l.contactMail}
                </a>
              </div>
            </div>

            {formSent ? (
              <div className="form__success">{l.formSuccess}</div>
            ) : (
              <form className="contact__form" onSubmit={handleFormSubmit} noValidate>
                <h3 className="form__title">{l.formTitle}</h3>
                <div className="form-row">
                  <div className="form-field">
                    <label>{l.formName}</label>
                    <input name="name" type="text" placeholder={l.formNamePh} required />
                  </div>
                  <div className="form-field">
                    <label>{l.formEmail}</label>
                    <input name="email" type="email" placeholder={l.formEmailPh} required />
                  </div>
                </div>
                <div className="form-field">
                  <label>{l.formSubject}</label>
                  <input name="subject" type="text" placeholder={l.formSubjectPh} required />
                </div>
                <div className="form-field">
                  <label>{l.formMessage}</label>
                  <textarea name="message" rows="5" placeholder={l.formMsgPh} required />
                </div>
                <button type="submit" className="btn btn--primary form__submit" disabled={formSending}>
                  {formSending ? l.formSending : `✉️ ${l.formSend}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bouton retour en haut */}
      <button
        className={`scroll-top ${showScrollTop ? 'scroll-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Retour en haut"
      >↑</button>

      <footer className="footer">
        <div className="footer__links">
          <a href="mailto:Emile.cinna@icloud.com" className="footer__link">Emile.cinna@icloud.com</a>
          <span className="footer__sep">·</span>
          <a href="https://github.com/Emilecinna-dotcom" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <span className="footer__sep">·</span>
          <a href="https://wa.me/596696822463" target="_blank" rel="noopener noreferrer" className="footer__link">WhatsApp</a>
        </div>
        <p className="footer__copy">{l.footer}</p>
      </footer>
    </div>
  )
}
