
import '../../Pages/Main/Hero.css';
import '../../Pages/Main/Mobile.css';
import heroImage from '../../assets/hero-image.png'
import abt_01 from '../../assets/abt_01.png'
import abt_02 from '../../assets/abt_02.png'
import abt_03 from '../../assets/abt_03.png'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import pro4 from '../../assets/pro4.png'
import pro5 from '../../assets/pro5.png'

const Hero = () => {
  return (
    <div>
      {/* Hero */}
      <div className="grid-container">
        <div className="grid-item grid-left">
          <div className="main-info">
            <h1>PROJECT</h1>
            <h2>Lorum</h2>
            <div className="navigation">
              <button className="nav-button">&larr;</button>
              <button className="nav-button">&rarr;</button>
            </div>
            <div className="navBtn">
              <div className="n1">0 1</div>
              <div className="n1">/</div>
              <div className="n1">02</div>
            </div>
          </div>
        </div>
        <div className="grid-item grid-right">
          <div className="hero-card">
            <img src={heroImage} alt="main" className="main-image" />
            <button className="hero-view-btn">VIEW ABOUT &rarr;</button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about-container">
        <div className="about-card">
          <div className="about-image">
            <div className='about-img-01'>
              <img src={abt_01} />
              <img src={abt_03} />
            </div>
            <div className='about-img-02'>
              <img src={abt_02} />
            </div>
          </div>
          <div className="about-content">
            <h2>About</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.</p>
            <button className="btn-read-more">Read More &rarr;</button>
          </div>

        </div>
      </div>

      {/* Morefocus */}
      <div className="focus-container">
        <h1>Main Focus/Mission Statement</h1>
        <div className="focus-card">
          <div className="focus-image">
            <div className='focus-img-01'>
              <h1>1</h1>
            </div>
            <div className='focus-img-02'>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed efficitur,
                lectus et facilisis placerat.
              </p>
            </div>
          </div>
          <div className="focus-image">
            <div className='focus-img-01'>
              <h1>2</h1>
            </div>
            <div className='focus-img-02'>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed efficitur,
                lectus et facilisis placerat.
              </p>
            </div>
          </div>

        </div>
      </div>

     {/* our project */}

<div className="proj-container">
  <h1>Our Projects</h1>
  <div className="proj-card">
    <div className="proj-card-1">
      <div className="proj-image">
        {/* <img src={pro1} /> */}
        <div className="img-card">
          <div className="img_cover">
            <h1>Sample </h1>
            <h1>Project</h1>
            <p>Read More   &rarr;</p>
          </div>
        </div>
      </div>
      <div className="proj-image">
        <img src={pro2} alt="Project 2" />
      </div>
    </div>
    <div className="proj-card-2">
      <div className="square">
      <div className="proj-image square">
        <img src={pro3} alt="Project 3" />
      </div>
      </div>
      <div className="rectangle">
      <div className="proj-image rectangle">
        <img src={pro4} alt="Project 4" />
      </div>
      </div>
      <div className="rectangle">
      <div className="proj-image rectangle">
        <img src={pro5} alt="Project 5" />
      </div>
      </div>
    </div>
    <div className="proj-card-3">
      <button type="button">View more &rarr;</button>
    </div>
  </div>
</div>


      {/* contact us */}
      <div className="about-container">
        <div className="about-card">
          <div className="about-image">
            <div className='about-img-01'>
              <img src={abt_01} />
              <img src={abt_03} />
            </div>
            <div className='about-img-02'>
              <img src={abt_02} />
            </div>
          </div>
          <div className="about-content">
            <h2>About</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.</p>
            <button className="btn-read-more">Read More &rarr;</button>
          </div>

        </div>
      </div>

      {/* new */}
      {/* <div class="container">
        <div class="form-container">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Name" required>
                <input type="text" placeholder="Phone Number" required>
                <input type="email" placeholder="E-mail" required>
                <input type="text" placeholder="Interested In">
                <textarea placeholder="Message" required></textarea>
                <button type="submit">SEND EMAIL</button>
            </form>
        </div>
        <div class="image-container">
            <img src="path_to_your_image/Screenshot (3).png" alt="Contact Image">
        </div>
    </div> */}
    </div>
  )
}

export default Hero