import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-card">
              <div className="work-card-img">
                <img src={work.w_img} alt={work.w_name} />
              </div>
              <div className="work-card-body">
                <h2 className="work-card-name">{work.w_name}</h2>
                <p className="work-card-stack">{work.w_stack}</p>
                <div className="work-card-actions">
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-github"
                  >
                    GitHub
                  </a>
                  {work.demo && (
                    <a
                      href={work.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-demo"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork
