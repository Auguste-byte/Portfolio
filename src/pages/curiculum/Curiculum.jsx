import userDatas from "../../data/UserData.jsx";
import userCourses from "../../data/UserCourses.jsx";
import userPath from "../../data/UserPath.jsx";
import "./Curiculum.css"

const curiculum = () => {
    
   return (
    <div className="curiculum-container">
        <div className="left-components">
            <a href="https://github.com/auguste-byte/Portfolio/blob/gh-pages/document/PLEINTEL_CV-2.pdf document/PLEINTEL_CV-2.pdf" style={{ textDecoration: "none", color: "white" }} download>
                Télécharger mon CV
            </a>
            <div className="technologies">
                <h2>Technologies</h2>
                <ul>
                    {userDatas.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="languages">
                <h2>Langues</h2>
                <ul>
                    {userDatas.languages.map((langue, index) => (
                     <li key={index}>{langue.language} {langue.niveau}</li>
                    ))}
                </ul>
            </div>
            <div className="hobby">
                <h2>Hobby</h2>
                <ul>
                    {userDatas.hobby.map((hobby, index) =>(
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="right-components">
            <div className="formation">
                <h1>Formations</h1>
                {userCourses.courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <h2>{course.nom} {course.location}</h2>
                        {Array.isArray(course.specialité) ? (
                            <ul>
                                {course.specialité.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{course.specialité}</p>
                        )}

                        <p>{course.année}</p>
                        <p>{course.précision}</p>
                    </div>
                ))}
            </div>
            
            
            <div className="Parcours Professionnel">
            <h1>Parcours Professionnel</h1>
                {userPath.path.map((path, index) => (
                    <div key={index} className="path-card">
                        <h2>{path.nom} {path.location}</h2>
                        {Array.isArray(path.spécialité) ? (
                            <ul>
                                {path.spécialité.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        ) : (
                            <span>{path.spécialité}</span>
                        )}
                        <p>{path.année}</p>
                        <p>{path.précision}</p>
                    </div>
                ))}
            </div>

        </div>

        
    </div>
)};

export default curiculum;