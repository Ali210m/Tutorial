import Logo from '/logo.svg'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import type { Project } from './components/ProjectCard'
import { ProjectCard } from './components/ProjectCard'
import { SignIn } from './components/SignIn'
import { useState } from 'react'
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

const timeline = [
	{ year: '2024', title: 'HTML & CSS', description: 'Temel semantik etiketler, responsive tasarım.' },
	{ year: '2025', title: 'React + TypeScript', description: 'Bileşenler, hook’lar, type güvenliği.' },
	{ year: '2026', title: 'Fullstack Planı', description: 'API, veritabanı, deploy senaryoları.' },
]

export default function App() {
	const [isSignInOpen, setSignInOpen] = useState(false)
	return (
		<>
			<nav className="top-nav">
				<a className="brand" href="#home">
					<img src={Logo} alt="Frontend Journey logo" width={28} height={28} />
					Frontend Journey
				</a>
				<div className="links">
					<a href="#home">Ana Sayfa</a>
					<a href="#about">Ben Kimim?</a>
					<a href="#projects">Projeler</a>
					<a href="#roadmap">Yol Haritası</a>
					<a href="#contact">İletişim</a>
					<a href="#signin">Giriş</a>
				</div>
			</nav>

			<Hero
				headline="React + TypeScript ile güçlü arayüzler"
				subheadline="Statik bir temel üzerinden bileşen yapısını, tip güvenliğini ve modern tasarım prensiplerini öğreniyorum."
				backgroundImage={heroImage}
				links={[
					{ label: 'Projelerimi Gör', href: '#projects' },
					{ label: 'Yol Haritası', href: '#roadmap' },
				]}
			/>

			<main className="main" id="home">
				<Section id="about" title="HAKKIMDA" tagline="Modern web geliştiricisi olma yolculuğum">
					<div className="about-grid">
						<img
							className="about-photo"
							src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
							alt="Çalışma masası"
						/>
						<div>
							<p>
								Frontend öğrenmeye yeni başlayan ama tasarım ve kullanıcı deneyimini çok önemseyen bir
								geliştiriciyim. React ve TypeScript ile bileşen mantığını kavrayıp tekrar kullanılabilir
								yapılar kurmayı hedefliyorum.
							</p>
							<p className="about-pillars">
								<span>UI Tasarım</span>
								<span>React Hook’ları</span>
								<span>TypeScript Tipleri</span>
								<span>Responsive CSS</span>
							</p>
						</div>
					</div>
				</Section>

				<Section id="projects" title="PROJELER" tagline="Öğrenirken oluşturduğum örnek arayüzler">
					<div className="projects-wrap">
						{projects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</div>
				</Section>

				<Section id="roadmap" title="YOL HARİTASI" tagline="Öğrenme planım">
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

				<Section id="contact" title="İLETİŞİM" tagline="Beraber öğrenelim">
					<div className="contact-card">
						<p>Frontend öğrenirken bana ulaşmak istersen:</p>
						<a className="button" href="mailto:example@example.com">
							E-posta Gönder
						</a>
						<p className="contact-links">
							<a href="https://github.com">GitHub</a>
							<a href="https://linkedin.com">LinkedIn</a>
							<a href="https://twitter.com">Twitter</a>
						</p>
					</div>
					
					</Section>
			</main>

			<footer className="footer">
				<p>© {new Date().getFullYear()} Frontend Journey — React + TSX</p>
			</footer>
		</>
	)
}

