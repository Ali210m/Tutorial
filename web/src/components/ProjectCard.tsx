import { useLanguage } from '../contexts/LanguageContext'
export interface Project {
	title: string
	description: string
	image: string
	tags: string[]
	url?: string
}

interface ProjectCardProps {
	project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
	const { t } = useLanguage()
	return (
		<article className="project-card">
			<div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
			<div className="project-body">
				<div className="project-header">
					<h3>{project.title}</h3>
					{project.url ? (
						<a className="project-link" href={project.url}>
							{t('projects.viewProject')}
						</a>
					) : null}
				</div>
				<p>{project.description}</p>
				<ul className="tag-list">
					{project.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
			</div>
		</article>
	)
}


