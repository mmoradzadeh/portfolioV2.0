import InfiniteMenu from './InfiniteMenu';
import projectData from '../../../../server/data/projects.json';

const items = projectData.map((project) => ({
    image: project.image || 'https://via.placeholder.com/300x300?text=No+Image',
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