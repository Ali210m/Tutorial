import React from 'react'

export interface SectionProps {
	id: string
	title: string
	tagline?: string
	children: React.ReactNode
}

export function Section({ id, title, tagline, children }: SectionProps) {
	return (
		<section id={id} className="section">
			<div className="section-header">
				<span className="section-pill">{title}</span>
				{tagline ? <h2>{tagline}</h2> : null}
			</div>
			<div className="section-content">{children}</div>
		</section>
	)
}


