import InfiniteMenu from './InfiniteMenu';
import projectData from '../../../../server/data/projects.json';

// Use only same-origin images — no third-party image hosts
const items = projectData.map((project) => ({
    image: project.image ? `/${project.image}` : '/project-placeholder.jpg',
    link: project.deployed || project.github || '#',
    title: project.name,
    description: project.description,
}));

const ProjectsInfiniteMenu: React.FC = () => (
    <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} />
    </div>
);

export default ProjectsInfiniteMenu;