import '../assets/css/home.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className='bannerSection'>
       <div className="gridBanner">      
          <div className='textLeft'>
            <h2 className="text-3xl font-bold">Hi, I’m Joey — a .NET & React Developer passionate about building modern, scalable web apps</h2>
            <p>I am a full-stack developer specializing in .NET and React. I enjoy building web apps that are fast, secure, and user-friendly.
            When I’m not coding, you’ll find me at hockey games or fishing.</p>
            <div className='buttonGroup'>
              <Link to="/projects" className="button1">See my work</Link> <Link to="/about" className="button2">Get in Touch</Link>
            </div>
          </div>
          <div className='imageRight'>
            <img src="/images/joey.jpg" alt="Joey" className="w100 mH"/>
          </div>
        </div>     
      </section>

      <section>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Highligths</h2>
          <div className="gridHighlights">
            <div className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">⚡</h3>
              <p>Full-stack web development <br></br> (.NET, React, SQL, Supabase)</p>
            </div>
            <div className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">🎨</h3>
              <p>Clean, user-focused UI/UX</p>
            </div>
            <div className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">🚀</h3>
              <p>Experience with modern deployment & CI/CD</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
