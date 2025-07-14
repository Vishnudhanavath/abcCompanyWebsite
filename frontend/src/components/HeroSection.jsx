
import HeadingDisplay from '../components/HeadingDisplay';
import hero_secontion_img from '../assets/hero_section_img.png';    
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const navigate = useNavigate();
   
  return (
     <section className="hero">
      <div className="hero-content">
        <HeadingDisplay />
        <p className="hero-subheading">
            Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward. 
        </p>
        <button className="hero-button" onClick={() => navigate('/cms')}>Get Started</button>
      </div>
      <div >
        <img src= {hero_secontion_img} alt="Business AI illustration" className='hero-image'/>
      </div>
    </section>
  )
}

export default HeroSection



