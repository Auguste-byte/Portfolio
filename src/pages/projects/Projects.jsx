import { useEffect, useState } from "react";
import "./Projects.css"


const projects = () => {
   const [repos, setRepos] = useState([]);

   useEffect(() => {
        fetch("https://api.github.com/users/Auguste-byte/repos")
            .then((res) => res.json())
            .then((data) => setRepos(data))
            .catch((err) => console.error("Erreur de récupération: ", err))
   }, []);

   return (
    <div className="projects-container">
      {repos.map((repo) => (
        <div key={repo.id} className="project-card">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <h3>{repo.name}</h3>
          </a>
          <p>{repo.description || "Pas de description"}</p>
        </div>
      ))}
    </div>
  );

};

export default projects;