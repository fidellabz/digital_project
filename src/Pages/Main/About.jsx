
import '../Main/About.css'
import abt_01 from '../../assets/abt_01.png'
import abt_02 from '../../assets/abt_02.png'
import abt_03 from '../../assets/abt_03.png'

const About = () => {
  return (
    <div className="about-container">

      <div className="grid-item grid-left">
        <div className='about-img-01'>
            <img src={abt_01} />
            <img src={abt_03} />
        </div>
        <div className='about-img-02'>
        <img src={abt_02} />
        </div>
        </div>
      <div className="about-grid-right">
      <h1>About</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining 
        essentially unchanged.
      </p>
      <button className="view-main">Read More &rarr;</button>
        </div>
    </div>
  )
}

export default About