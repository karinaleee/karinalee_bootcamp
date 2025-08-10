import React from "react";
import styles from "@/app/resume/page.module.css";
import Footer from "@/components/footer/footer";

export default function Resume() {
  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };

  return (
    <div className={styles.profile_container}>
      {/* Header */}
      <div className={styles.profile_header}>
        <h1 className={styles.profile_name}>KARINA A. LEE</h1>
        <p className={styles.profile_contact}>
          (503) 432‑3954 • kkarina.lee05@gmail.com • 
          <a
            href="https://www.linkedin.com/in/karinaalee"
            className={styles.profile_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/karinaalee
          </a>
        </p>
      </div>

      {/* Education */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>EDUCATION</h2>
        <div className={styles.profile_item} style={{ width: "100%" }}>
          <div style={rowStyle}>
            <strong>
              California Polytechnic State University – College of Engineering
            </strong>
            <span>San Luis Obispo, CA</span>
          </div>
          <div style={rowStyle}>
            <span>Bachelor of Science in Computer Engineering – GPA 3.71</span>
            <span>June 2027</span>
          </div>
          <p>
            Relevant Coursework: Computer Hardware Architecture & Design, Data
            Structures, Object-Oriented Programming, Electrical & Electronic
            Circuits, Computer Design & Assembly Language, Systems Programming,
            Digital Logic Design
          </p>
          <p>
            Activities & Societies: Alpha Phi Omega, Chinese Student Association
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>EXPERIENCES</h2>

        {[
          {
            title: "IT Support Intern",
            org: "O’Connor Construction Management, Inc.",
            loc: "Irvine, CA",
            date: "June 2025 – Sept 2025",
            bullets: [
              "Documented technical processes and policies, audited access controls, and maintained accurate inventory records",
            ],
          },
          {
            title: "Software Developer",
            org: "Hack4Impact",
            loc: "San Luis Obispo, CA",
            date: "Oct 2024 – Present",
            bullets: [
              "Developing a full‑stack application for Octagon Barn using TypeScript, React, and Next.js",
              "Constructing the frontend with React and TypeScript, enabling user authentication and document management",
              "Implementing an administrative dashboard and integrated API calls for user notifications",
            ],
          },
          {
            title: "IT Student Assistant – Client Services",
            org: "Information Technology Services at California Polytechnic State University",
            loc: "San Luis Obispo, CA",
            date: "Oct 2024 – Present",
            bullets: [
              "Troubleshot 100+ hardware and software computers for the Administration/President’s Office",
              "Strong proficiency in debugging operating systems, Windows and macOS",
              "Delivered excellent, respectful customer service to support faculty and students",
            ],
          },
          {
            title: "Low Voltage Team Member",
            org: "Cal Poly Prototype Vehicles Laboratory",
            loc: "San Luis Obispo, CA",
            date: "Oct 2024 – Present",
            bullets: [
              "Designed and implemented a Controller Area Network (CAN) bus communication system using Arduino and C++",
              "Collaborated with multidisciplinary teams to advance the vehicle’s performance and efficiency",
            ],
          },
          {
            title: "Student Facilities / Lab Technician Support",
            org: "Computer Engineering Department at California Polytechnic State University",
            loc: "San Luis Obispo, CA",
            date: "Oct 2024 – Present",
            bullets: [
              "Assisted students and faculty in troubleshooting lab resources, such as multimeters and FPGA boards",
              "Maintained and organized lab facilities, ensuring resource accessibility and functionality for students",
            ],
          },
          {
            title: "Food Server",
            org: "Laurel Parc Central Bethany Senior Living",
            loc: "Portland, OR",
            date: "Sept 2022 – May 2025",
            bullets: [
              "Served food and drinks to satisfy seniors and attended to their needs through personalized service",
              "Organized the dining area and coordinated with other servers and chefs",
            ],
          },
        ].map((exp) => (
          <div
            key={exp.title}
            className={styles.profile_item}
            style={{ width: "100%" }}
          >
            <div style={rowStyle}>
              <strong>{exp.title}</strong>
              <span>{exp.loc}</span>
            </div>
            <div style={rowStyle}>
              <em>{exp.org}</em>
              <span>{exp.date}</span>
            </div>
            <ul>
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>PROJECTS</h2>
        <div className={styles.profile_item} style={{ width: "100%" }}>
          <div style={rowStyle}>
            <strong>RISC‑V Otter MCU</strong>
            <span>San Luis Obispo, CA</span>
          </div>
          <div style={rowStyle}>
            <em>Computer Architecture</em>
            <span>Dec 2024</span>
          </div>
          <ul>
            <li>
              Designed a simple RISC‑V processor using SystemVerilog with
              integrated ALU, Decoder, FSM, and Interrupts
            </li>
            <li>
              Integrated pipelining of the Otter with hazard and forwarding
              detection
            </li>
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>LEADERSHIP</h2>
        {[
          {
            title: "Connections Chair",
            org: "Society of Women Engineers",
            loc: "San Luis Obispo, CA",
            date: "May 2025 – Present",
            bullets: [
              "Planned and organized diversity‑focused events to promote inclusion in academic and professional spaces",
            ],
          },
          {
            title: "Diversity & Outreach Officer",
            org: "Women in Software/Hardware",
            loc: "San Luis Obispo, CA",
            date: "May 2025 – Present",
            bullets: [
              "Organized outreach events and built partnerships with schools and campus programs to support underrepresented students",
            ],
          },
        ].map((lead) => (
          <div
            key={lead.title}
            className={styles.profile_item}
            style={{ width: "100%" }}
          >
            <div style={rowStyle}>
              <strong>{lead.title}</strong>
              <span>{lead.loc}</span>
            </div>
            <div style={rowStyle}>
              <em>{lead.org}</em>
              <span>{lead.date}</span>
            </div>
            <ul>
              {lead.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className={styles.profile_section}>
        <h2 className={styles.profile_section_title}>SKILLS</h2>
        <div className={styles.profile_item} style={{ width: "100%" }}>
          <p>
            Technical Skills: Python, Java, C++, SystemVerilog, Verilog, RISC‑V
            Assembly Language, MongoDB, Vercel, React, JavaScript, LTSpice, HTML
            & CSS, Next.js, KiCAD, FSM Design
          </p>
          <p>
            Test Equipment: Digital Multimeter, Source Meter, Function
            Generator, Oscilloscope
          </p>
          <p>Languages: Chinese (Conversational Proficiency)</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
