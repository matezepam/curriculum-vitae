type ProjectPreviewProps = {
  image: string
  title: string
  label: string
}

export function ProjectPreview({ image, title, label }: ProjectPreviewProps) {
  return <div className="project-preview"><img src={`${import.meta.env.BASE_URL}${image}`} alt={`${label} ${title}`} /></div>
}
