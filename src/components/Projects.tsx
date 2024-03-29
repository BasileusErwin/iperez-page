import { ProjectGithubResponse } from '../App';
import { Icons, IconsColor } from '../enums';

interface ProjectsProps {
  projects: ProjectGithubResponse[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const getLanguageIcon = (language: string): string => Icons[language as keyof typeof Icons];
  const getLanguageColor = (language: string): string => IconsColor[language as keyof typeof IconsColor];

  return (
    <div className="grid md:grid-cols-2 gap-1 sm:grid-cols-1">
      {projects.map((project) => (
        <div className="p-1 rounded m-2">
          <h3 className="text-lg mb-1">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow"
            >
              {project.name} <i className="fa fa-external-link text-xs" />
            </a>
          </h3>
          <p className="text-sm mb-1">
            <i className="fa fa-star text-yellow" /> {project.stargazers_count}
          </p>
          <p className="text-sm mb-1">
            Language:{' '}
            <i
              className={`nf ${getLanguageIcon(project.language)} ${getLanguageColor(
                project.language,
              )} text-lg`}
            />{' '}
            {project.language}
          </p>
          {project.description ? <p className="text-xs">{project.description}</p> : ''}
        </div>
      ))}
    </div>
  );
};

export default Projects;
