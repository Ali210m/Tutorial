import Logo from '/logo.svg'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import type { Project } from './components/ProjectCard'
import { ProjectCard } from './components/ProjectCard'
import { SignInModal } from './components/SignInModal'
import { useLanguage } from './contexts/LanguageContext'
import { useState, useEffect } from 'react'
import tr from './i18n/tr.json'
import en from './i18n/en.json'
const heroImage =
	'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80'

const projects: Project[] = [
	{
		title: 'Portfolio Landing',
		description: 'Modern ve statik bir kişisel site. React bileşenleri ile bölümler halinde yapılandırıldı.',
		image:
			'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
		tags: ['React', 'TypeScript', 'CSS Grid'],
		url: '#',
	},
	{
		title: 'Blog Anasayfası',
		description:
			'Yazı kartları, kategori filtreleri ve hero görseli ile tasarlanmış basit bir blog ana sayfası.',
		image:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
		tags: ['Vite', 'Responsive', 'Design'],
		url: '#',
	},
	{
		title: 'UI Kit',
		description:
			'Button, card, badge gibi bileşenlerin bulunduğu mini bir UI paketi. Taslak olarak React bileşenleri.',
		image:
			'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80',
		tags: ['Components', 'Storybook', 'Reusable'],
		url: '#',
	},
]

const translations = { tr, en }

export default function App() {
	const { t, language, setLanguage } = useLanguage()
	const timeline = translations[language].roadmap.timeline
	const pillars = translations[language].about.pillars
	const [isSignInOpen, setSignInOpen] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
	
	useEffect(() => {
		const saved = localStorage.getItem('theme')
		let initialTheme: 'light' | 'dark' = 'light'

	    if (saved === 'light' || saved === 'dark') {
			initialTheme = saved
		}
		// Eğer localStorage'da kayıtlı tema yoksa, varsayılan olarak light mode kullan

		setTheme(initialTheme)
		// Ilk yuklemede de data-theme'u set et
		document.documentElement.setAttribute('data-theme', initialTheme)
   }, [])
	useEffect(() => {
	document.documentElement.setAttribute('data-theme', theme)
	localStorage.setItem('theme', theme)
}, [theme])

	return (
		<>
			<nav className="top-nav">
				<a className="brand" href="#home">
					<img src={Logo} alt="Frontend Journey logo" width={28} height={28} />
					Frontend Journey
				</a>
				<div className="links">
					<a href="#home">{t('nav.home')}</a>
					<a href="#about">{t('nav.about')}</a>
					<a href="#projects">{t('nav.projects')}</a>
					<a href="#roadmap">{t('nav.roadmap')}</a>
					<a href="#contact">{t('nav.contact')}</a>
					<button className="link-button" type="button" onClick={() => setSignInOpen(true)}>
						{t('nav.signin')}
					</button>
					<button 
					className="theme-toggle" 
					type="button" 
					onClick={() => {
						console.log('Toggle clicked, current theme:', theme)
						setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
					}}
					aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
					>
						<span className="theme-toggle-icon">
							{theme === 'dark' ? '🌙' : '☀️'}
						</span>
					
					</button>
					<button
					className="link-button"
					type="button"
					onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
					aria-label="Change language"
					>
						{language === 'tr' ?  '🇹🇷 Türkçe' : '🇺🇸 English'}
					</button>
				</div>
			</nav>

			<Hero
				headline={t('hero.headline')}
				subheadline={t('hero.subheadline')}
				backgroundImage={heroImage}
				links={[
					{ label: t('hero.cta1'), href: '#projects' },
					{ label: t('hero.cta2'), href: '#roadmap' },
				]}
			/>

			<main className="main" id="home">
				<Section id="about" title={t('about.title')} tagline={t('about.tagline')}>
					<div className="about-grid">
						<img
							className="about-photo"
							src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
							alt="Çalışma masası"
						/>
						<div>
							<p>
								{t('about.description')}
							</p>
							<p className="about-pillars">
								{pillars.map((pillar, index) => (
									<span key={index}>{pillar}</span>
								))}
							</p>
						</div>
					</div>
				</Section>

				<Section id="projects" title={t('projects.title')} tagline={t('projects.tagline')}>
					<div className="projects-wrap">
						{projects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</div>
				</Section>

				<Section id="roadmap" title={t('roadmap.title')} tagline={t('roadmap.tagline')}>
					<ol className="timeline">
						{timeline.map((item) => (
							<li key={item.year}>
								<div className="timeline-dot" />
								<div className="timeline-card">
									<h3>{item.year}</h3>
									<p className="timeline-title">{item.title}</p>
									<p>{item.description}</p>
								</div>
							</li>
						))}
					</ol>
				</Section>

				<Section id="contact" title={t('contact.title')} tagline={t('contact.tagline')}>
					<div className="contact-card">
						<p>{t('contact.message')}</p>
						<a className="button" href="mailto:example@example.com">
							{t('contact.button')}
						</a>
						<p className="contact-links">
							<a href="https://github.com">GitHub</a>
							<a href="https://linkedin.com">LinkedIn</a>
							<a href="https://twitter.com">Twitter</a>
						</p>
					</div>
					
					</Section>
			</main>
			<SignInModal open={isSignInOpen} onClose={() => setSignInOpen(false)} />

			<footer className="footer">
				<p>© {new Date().getFullYear()} {t('footer.text')}</p>
			</footer>
		</>
	)
}

