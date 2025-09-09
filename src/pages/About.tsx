import '../assets/css/about.css';
import { useState, useEffect } from "react";

const images = [
  "/images/joey.jpg",
  "/images/joey2.jpg",
  "/images/joey3.jpg",
  "/images/joey4.jpg",
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);

      // Wait for flip animation to finish before swapping image
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFlipped(false); // reset flip after updating
      }, 1200); // must match CSS transition
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="p-6">
        <h1 className="text-3xl font-bold">More about me</h1>
        <div className='gridAbout'>

          <div className='textLeft2'>
            <p>I am a passionate <span>full-stack developer</span> who loves building <span>clean, efficient, and creative digital solutions.</span></p>
            <p>I specialize in crafting modern web applications using <span>.Net, React, Vite, TypeScript, Node.js and Wordpress</span>, with <span>backend</span> experience in <span>Supabase, MySQL, and Python</span>. My focus is on creating smooth user experiences and solving problems with clean, scalable code. I use <span>CSS</span> or <span>SCSS</span> to style my projects</p>
            <p>I am located in Québec so my main language is <span>French</span> but I can speak and understand <span>English</span> pretty well.</p>
            <p>Beyond coding, I’m a big hockey fan, love discovering new fishing areas, and enjoy learning about anything that sparks curiosity. This mix of creativity and problem-solving inspires how I approach technology.</p>
            <p>I’m currently open to exciting opportunities — whether it’s <span>freelance</span> projects, <span>full-time</span> roles, or <span>collaborations</span>. If you’re looking for someone who blends technical skills with curiosity and creativity, <span>let’s connect!</span></p>        
            <p>You can contact me with this email address: <a href='mailto:joeymillaire19@hotmail.com'>joeymillaire19@hotmail.com</a></p>
          </div>   

    <div className="carousel">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face">
          <img src={images[current]} alt="carousel" />
        </div>
      </div>
    </div>

        </div>
      </div> 
    </section>

  );
}