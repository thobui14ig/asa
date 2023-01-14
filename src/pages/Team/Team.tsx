import React from "react";
import Members from "./components/Members";
import Projects from "./components/Projects";
import useTeam from "./modules/useTeam";
import './team.scss';

const Team: React.FC  = ()=> {
    const { handleAddProject, data, navigate } = useTeam()

    return(
        <div className="team">
            <div className="content">
                <Members/>
                <Projects handleAddProject={handleAddProject} data={data} navigate={navigate}/>

            </div>

        </div>
        
    )
}

export default Team
