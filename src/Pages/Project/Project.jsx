import '../style.css'
import './project.css'
import home from '../../assets/abt_01.png'

const Project = () => {
  return (
    <div className='container'>
      <h1>Our</h1>
      <h1 className='nxline'>Projects</h1>

<div className="project-container">
        <div className="project-card">
        <div className="project-image">
        <img src={home} alt="" />
        </div>
        <div className="project-content">
          <h2>Sample Project</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="view-more-btn">View More</button>
        </div>
        
      </div>
    </div>

    <div className="project-container">
        <div className="project-card">
        <div className="project-image">
        <img src={home} alt="" />
        </div>
        <div className="project-content">
          <h2>Sample Project 2</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="view-more-btn">View More</button>
        </div>
        
      </div>
    </div>

    <div className="project-container">
        <div className="project-card">
        <div className="project-image">
        <img src={home} alt="" />
        </div>
        <div className="project-content">
          <h2>Sample Project 3</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="view-more-btn">View More</button>
        </div>
        
      </div>

      <div className="pagination">
          <div className="navBtn">
            <div className="n1 n1-color">0 1</div>
            <div className="n1">/</div>
            <div className="n1">05</div>

            <div className="nav-gallery">
              <button className="nav-button">&larr;</button>
              <button className="nav-button">&rarr;</button>
            </div>
          </div>
          </div>
    </div>

    </div>
  );
};

export default Project;
