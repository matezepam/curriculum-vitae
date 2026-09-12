import { Header } from './components/Header'
import { ProjectPreview } from './components/ProjectPreview'
import { SectionHeading } from './components/SectionHeading'
import { ToolTile } from './components/ToolTile'
import { content } from './constants/content'
import { profile } from './data/profile'
import { usePreferences } from './hooks/usePreferences'
import { useScrollReveal } from './hooks/useScrollReveal'
import type { ContentLabels } from './constants/content'
import type { Language } from './types'

const Arrow = () => <span aria-hidden="true">↗</span>

type LocalizedSectionProps = {
  language: Language
  labels: ContentLabels
}

type LabelsOnlyProps = {
  labels: ContentLabels
}

function TagList({ items }: { items: string[] }) {
  return <div>{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
}

function Hero({ language, labels }: LocalizedSectionProps) {
  const title = language === 'es'
    ? <>Software listo para <em>producción</em>, con seguridad desde el diseño.</>
    : <>Production-ready software, with <em>security</em> built in from the start.</>
  const summary = language === 'es'
    ? profile.summary
    : 'Full Stack Developer focused on clear, maintainable, people-centered digital products. I combine modern web development with experience in applications, automation, and service architecture.'

  return (
    <section className="hero wrap" id="home" data-reveal>
      <div className="hero-copy">
        <p className="eyebrow"><span></span>{profile.availability[language]}</p>
        <h1>{title}</h1>
        <p className="intro">{summary}</p>
        <div className="hero-actions">
          <a className="button primary" href={profile.github} target="_blank" rel="noreferrer">{labels.viewGitHub} <Arrow /></a>
          <a className="button secondary" href="#contact">{labels.contact}</a>
        </div>
        <dl className="quick-facts">
          <div><dt>{labels.profile}</dt><dd>{profile.role[language]}</dd></div>
          <div><dt>{labels.location}</dt><dd>{profile.location}</dd></div>
          <div><dt>{labels.portfolio}</dt><dd>{labels.publicRepositories}</dd></div>
        </dl>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-ring"></div>
        <img className="portrait" src={profile.avatar} alt={`Profile photo of ${profile.shortName}`} />
        <div className="portrait-note"><strong>Full Stack</strong><span>{labels.portrait}</span></div>
      </div>
    </section>
  )
}

function ValueSection({ language, labels }: LocalizedSectionProps) {
  return (
    <section className="wrap hiring-section" data-reveal>
      <SectionHeading eyebrow={labels.professionalValue} title={labels.valueTitle} compact />
      <div className="hiring-grid">
        {profile.hiringSignals.map((signal, index) => (
          <article className="hiring-card" key={signal.title.es}>
            <span>0{index + 1}</span>
            <h3>{signal.title[language]}</h3>
            <p>{signal.description[language]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection({ language, labels }: LocalizedSectionProps) {
  return (
    <section className="section wrap" id="experience" data-reveal>
      <SectionHeading eyebrow={labels.trajectory} title={labels.experienceTitle} />
      {profile.experience.map((job) => (
        <article className="experience-card" key={job.company}>
          <div className="experience-meta"><p>{job.period}</p><p>{job.location}</p></div>
          <div>
            <p className="company">{job.company}</p>
            <h3>{job.position[language]}</h3>
            <p className="experience-description">{job.description[language]}</p>
            <ul>{job.highlights.map((highlight) => <li key={highlight.es}>{highlight[language]}</li>)}</ul>
          </div>
        </article>
      ))}
    </section>
  )
}

function SkillsSection({ labels }: LabelsOnlyProps) {
  return (
    <section className="section wrap skills-section" data-reveal>
      <SectionHeading eyebrow={labels.technicalStack} title={labels.stackTitle} compact />
      <div className="skill-grid">
        {profile.skills.map((skill) => (
          <article className="skill-card" key={skill.group}>
            <h3>{skill.group}</h3>
            <div className="tool-list">{skill.items.map((item) => <ToolTile name={item} key={item} />)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SecuritySection({ language, labels }: LocalizedSectionProps) {
  return (
    <section className="security-section" data-reveal>
      <div className="wrap security-content">
        <div>
          <p className="eyebrow"><span></span>{labels.professionalFocus}</p>
          <h2>{profile.securityFocus.title[language]}</h2>
          <p>{profile.securityFocus.description[language]}</p>
        </div>
        <ul>{profile.securityFocus.practices.map((practice) => <li key={practice.es}>{practice[language]}</li>)}</ul>
      </div>
    </section>
  )
}

function ProfileDetails({ language, labels }: LocalizedSectionProps) {
  return (
    <section className="section wrap profile-details" data-reveal>
      <article className="detail-card">
        <p className="eyebrow"><span></span>{labels.softSkills}</p>
        <TagList items={profile.softSkills.map((skill) => skill[language])} />
      </article>
      <article className="detail-card">
        <p className="eyebrow"><span></span>{labels.languages}</p>
        <ul className="language-list">
          {profile.languages.map((item) => <li key={item.name.es}><strong>{item.name[language]}</strong><span>{typeof item.level === 'string' ? item.level : item.level[language]}</span></li>)}
        </ul>
      </article>
      <article className="detail-card">
        <p className="eyebrow"><span></span>{labels.learning}</p>
        <TagList items={profile.learning} />
      </article>
    </section>
  )
}

function CredentialsSection({ language, labels }: LocalizedSectionProps) {
  return (
    <section className="section wrap credentials-section" data-reveal>
      <div className="credentials-column">
        <SectionHeading eyebrow={labels.education} title={labels.educationTitle} compact />
        {profile.education.map((item) => <article className="credential-card" key={item.title.es}><h3>{item.title[language]}</h3><p>{item.institution[language]}</p></article>)}
      </div>
      <div className="credentials-column">
        <SectionHeading eyebrow={labels.certifications} title={labels.certificationsTitle} compact />
        {profile.certifications.map((item) => <article className="credential-card" key={item.title.es}><h3>{item.title[language]}</h3><p>{item.issuer[language]}</p></article>)}
      </div>
    </section>
  )
}

function ProjectsSection({ language, labels }: LocalizedSectionProps) {
  return (
    <section className="section wrap" id="projects" data-reveal>
      <div className="section-heading projects-heading">
        <div><p className="eyebrow"><span></span>{labels.projects}</p><h2>{labels.projectsTitle}</h2></div>
        <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">{labels.allRepositories} <Arrow /></a>
      </div>
      <div className="project-grid">
        {profile.projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <ProjectPreview image={project.image} title={project.title} label={labels.preview} />
            <span className="project-number">0{index + 1}</span>
            <h3>{project.title}</h3>
            <p>{project.description[language]}</p>
            <div className="project-footer">
              <TagList items={project.stack} />
              <div className="project-links">
                <a href={project.repository} target="_blank" rel="noreferrer">{labels.code} <Arrow /></a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{labels.demo} <Arrow /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function DownloadsSection({ labels }: LabelsOnlyProps) {
  return (
    <section className="downloads-section" data-reveal>
      <div className="wrap downloads-content">
        <div><p className="eyebrow"><span></span>{labels.downloads}</p><h2>{labels.downloadsTitle}</h2><p>{labels.downloadsCopy}</p></div>
        <div className="download-actions">
          {profile.resumeFiles.map((file) => file.available ? (
            <a className="download-button" href={`${import.meta.env.BASE_URL}${file.href}`} download key={file.format}><span>{file.format}</span><strong>{labels.download}</strong><Arrow /></a>
          ) : (
            <div className="download-button disabled" key={file.format}><span>{file.format}</span><strong>{labels.addFiles}</strong><small>{file.fileName}</small></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ labels }: LabelsOnlyProps) {
  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="wrap contact-content">
        <div><p className="eyebrow"><span></span>{labels.contactEyebrow}</p><h2>{labels.contactTitle}</h2><p>{labels.contactCopy}</p></div>
        <div className="contact-list">
          {profile.contact.map((item) => (
            <a className="contact-item" href={item.href} key={item.label} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="contact-icon">{item.icon}</span><span><small>{item.label}</small><strong>{item.value}</strong></span><Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const { language, theme, toggleLanguage, toggleTheme } = usePreferences()
  const labels = content[language]

  useScrollReveal()

  return (
    <main>
      <Header language={language} onLanguageChange={toggleLanguage} theme={theme} onThemeChange={toggleTheme} labels={labels} />
      <Hero language={language} labels={labels} />
      <section className="trust-strip" data-reveal><div className="wrap trust-items"><span>React & TypeScript</span><i></i><span>Kotlin & Java</span><i></i><span>{language === 'es' ? 'Arquitectura de servicios' : 'Service architecture'}</span><i></i><span>GitHub & CI/CD</span></div></section>
      <ValueSection language={language} labels={labels} />
      <ExperienceSection language={language} labels={labels} />
      <SkillsSection labels={labels} />
      <SecuritySection language={language} labels={labels} />
      <ProfileDetails language={language} labels={labels} />
      <CredentialsSection language={language} labels={labels} />
      <ProjectsSection language={language} labels={labels} />
      <DownloadsSection labels={labels} />
      <ContactSection labels={labels} />
      <footer className="wrap footer" data-reveal><span>© {new Date().getFullYear()} {profile.name}</span><button type="button" onClick={() => window.print()}>{labels.print}</button><a href="#home">{labels.backToTop} ↑</a></footer>
    </main>
  )
}
