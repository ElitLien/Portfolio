import React from 'react'
import "./MyWork.css"
import mywork_data from '../../assets/mywork_data'
import arrow from "../../assets/arrow_icon.svg"

const MyWork = () => {
  const linkToGithub = () => {
    window.open("https://github.com/ElitLien?tab=repositories")
  }

  return (
    <div id='work' className='mywork'>
        <h1 className="mywork-title">My latest work</h1>
        <div className="mywork-container">
            {mywork_data.map((work, ind) => {
              return <div key={ind} className='mywork-project'>
                      <img src={work.photo} alt="" />
                      <h1>{work.name}</h1>
                      <p>{work.description}</p>
                      <p>Technologies: {work.technologies}</p>
                      <div onClick={work.link} className="mywork-project-link">
                        <p>To project</p>
                        <img src={arrow} alt="" />
                      </div>
                    </div>
            })}
        </div>
        <div onClick={linkToGithub} className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default MyWork