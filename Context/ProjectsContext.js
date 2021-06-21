import { createContext, useState } from "react";

const ProjectsContext = createContext();
import { createClient } from 'contentful';


const ProjectsProvider = ({ children }) => {

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
      });

      const res = await client.getEntries({ content_type: 'asymetriya' });
      setProjects(res.items);
    } catch (error) {
      console.log(error);
    }
  };
  return <ProjectsContext.Provider value={ {
    getProjects,
    projects
  } }>
    { children }
  </ProjectsContext.Provider>;
};

export default { ProjectsContext, ProjectsProvider };