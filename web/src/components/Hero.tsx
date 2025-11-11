interface HeroLink {
	label: string
	href: string
}

interface HeroProps {
	headline: string
	subheadline: string
	links: HeroLink[]
	backgroundImage: string
}

export function Hero({ headline, subheadline, links, backgroundImage }: HeroProps) {
	return (
		<header className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="hero-overlay" />
			<div className="hero-content">
				<p className="hero-eyebrow">Frontend Öğreniyorum</p>
				<h1>{headline}</h1>
				<p className="hero-subheadline">{subheadline}</p>
				<div className="hero-links">
					{links.map((link) => (
						<a key={link.href} href={link.href} className="button">
							{link.label}
						</a>
					))}
				</div>
			</div>
		</header>
	)
}


