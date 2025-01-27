import React from "react";
import styles from "@/app/resume/page.module.css";

export default function Resume() {
  return (
    <div className={styles.profile_container}>
  {/* Contact Information */}
  <div className={styles.profile_header}>
    <h1 className={styles.profile_name}>Karina Lee</h1>
    <p>Portland, Oregon | (503) 432 - 3954 | Email: klee396@calpoly.edu</p>
    <p>
      <a href="https://www.linkedin.com/in/karina-lee-12kl/" className={styles.profile_link}>LinkedIn</a> 
     
        
       
    </p>
  </div>

  {/* Education */}
  <section className={styles.profile_section}>
    <h2 className={styles.profile_section_title}>Education</h2>
    <div className={styles.profile_item}>
      <p>
        <strong>California Polytechnic State University</strong> - San Luis Obispo, CA
      </p>
      <p>Expected June 2027</p>
      <p>Bachelor of Science in Computer Engineering | GPA: 3.81 / 4.00 </p>
      <p>
        Coursework: Assembly Language and Computer Design, Digital Design, Data Structures, 
        Project-Based OOP, Circuits I & II, Systems Programming, Physics & Calculus 
      </p>
      <p>
        Societies & Activities: SWE (Society of Women’s Engineering), WISH (Women Involved in Software/Hardware), Member of Alpha Phi Omega (Professional Community Service Fraternity), Member of CSA (Chinese Student Association)

      </p>
    </div>
  </section>

  {/* Experience */}
  <section className={styles.profile_section}>
    <h2 className={styles.profile_section_title}><strong>Experience</strong></h2>

    <div className={styles.profile_item}>
      <p><strong>California Polytechnic State University - IT Department</strong> - San Luis Obispo, CA</p>
      <p> IT Specialist Cilent Services (Oct 2024 - Current)</p>
      <ul>
        <li>Facilitated office hours to supports&apos; students understanding of Object-Oriented Programming conceptsTroubleshoot hardware and software issues for the Administration/President’s Office.</li>
        <li>Strong proficiency in debugging operating systems, Windows and macOS</li>
      </ul>
    </div>
    
    <div className={styles.profile_item}>
      <p><strong>Hack4Impact</strong> - Software Developer (Sept 2024 - Current)</p>
      <p>Programming Languages: HTML, CSS, Next.js, MongoDB, Git, React</p>
      <ul>
        <li>Collaborating in a team of 16 to engage in creating webpages for small nonprofit businesses</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Cal Poly Prototype Vehicle Laboratory</strong> - Low Voltage Team Member (Oct 2024 – Current)</p>
      <p>Languages: CANBUS, C++</p>
      <ul>
        <li>Implemented a CAN bus communication system using Arduino for precise control timing to coordinate with the 3 contractors</li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Computer Engineering Department at California Polytechnic State University</strong> - San Luis Obispo, CA</p>
      <p>Student Lab Technician Support (Oct 2024 - Current)</p>
      <ul>
        <li>Assist students and faculty in troubleshooting lab resources, e.g multimeters, FPGA boards</li>
        <li>Contribute to the organization of the department by proactively assisting in day-to-day tasks </li>
      </ul>
    </div>

    <div className={styles.profile_item}>
      <p><strong>Central Bethany Laurel Parc Senior Living</strong> - Portland, OR</p>
      <p>Food Server (Sept 2022 - Current)</p>
      <ul>
        <li>Serving food and drinks to satisfy the seniors and attending to their needs through personalized service </li>
        <li>Organizing the dining area and coordinating with other servers and chefs</li>
      </ul>
    </div>
  </section>

  
  {/* Skills */}
  <section className={styles.profile_section}>
    <h2 className={styles.profile_section_title}>Skills</h2>
    <div className={styles.profile_item}>
      <p>Programming Languages: Java, Python, System Verilog, HTML, CSS, RISC-V Assembly, Digital Multimeter</p>
      <p>Languages: English, Chinese</p>
    </div>
  </section>
</div>



  );
}