import Image from "next/image";
import style1 from "./page.module.css";


export default function Home() {
  return (
    <div>
      
      
      <main className={style1.info_section}>
        <h1 className={style1.title}> Welcome!</h1>
          <div>
          <img className={style1.portrait} src='' alt="portrait" style={{ width: '400px', height: 'auto' }}/>
          </div>
        <p className={style1.about_me}>
        Hello! My name is Karina Lee and I am a second year computer 
        engineering major. I was born in Colorado, but grew up in Portland, Oregon. 
        I love going to the gym and hanging out with my friends. And I enjoy finding 
        new music to listen to. 
        </p>
           
      </main>
      <footer>

      </footer>
    </div>
  );
}