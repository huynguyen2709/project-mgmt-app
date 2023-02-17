import ProjectCard from './ProjectCard';
import { useGetProjects } from '../queries/useGetProjects';

export default function Projects() {
  const { loading, error, data } = useGetProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
