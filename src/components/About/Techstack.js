import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiR,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiAdobe,
  SiFigma,
  SiWindows,
  SiLinux,
} from "react-icons/si";
import { FaApple } from "react-icons/fa"; // Importing FaApple for macOS

function Techstack() {
  const techItems = [
    { name: "HTML5", icon: <DiHtml5 style={{ color: "#E44D26" }} /> },
    { name: "CSS3", icon: <DiCss3 style={{ color: "#1572B6" }} /> },
    { name: "C++", icon: <CgCPlusPlus style={{ color: "#00599C" }} /> },
    { name: "Java", icon: <DiJava style={{ color: "#007396" }} /> },
    { name: "JavaScript", icon: <DiJavascript1 style={{ color: "#F7DF1E" }} /> },
    { name: "Python", icon: <DiPython style={{ color: "#3776AB" }} /> },
    { name: "R", icon: <SiR style={{ color: "#276DC3" }} /> },
    { name: "React", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{ width: '50%' }} /> },
    { name: "Django", icon: <SiDjango style={{ color: "#092E20" }} /> },
    { name: "Flask", icon: <SiFlask style={{ color: "#FFFFFF" }} /> },
    { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} /> },
    { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
    { name: "MongoDB", icon: <DiMongodb style={{ color: "#47A248" }} /> },
    { name: "Pandas", icon: <SiPandas style={{ color: "#150458" }} /> },
    { name: "TensorFlow", icon: <SiTensorflow style={{ color: "#FF6F00" }} /> },
    { name: "Keras", icon: <SiKeras style={{ color: "#D00000" }} /> },
    { name: "PyTorch", icon: <SiPytorch style={{ color: "#EE4C2C" }} /> },
    { name: "Windows", icon: <SiWindows style={{ color: "#0078D6" }} /> },
    { name: "Linux", icon: <SiLinux style={{ color: "#FCC624" }} /> },
    { name: "macOS", icon: <FaApple style={{ color: "#FFFFFF" }} /> },
    { name: "Git", icon: <DiGit style={{ color: "#F05032" }} /> },
    { name: "Visual Studio Code", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg" alt="VS Code" style={{ width: '50%' }} /> },
    { name: "Jupyter Notebook", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" alt="Jupyter" style={{ width: '50%' }} /> },
    { name: "Google Colab", icon: <img src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="Google Colab" style={{ width: '50%' }} /> },
    { name: "Excel", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Excel_Logo_%282013-2019%29.svg" alt="Excel" style={{ width: '50%' }} /> },
    { name: "MATLAB", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Matlab_Vibes.gif" alt="MATLAB" style={{ width: '50%' }} /> },
    { name: "Power BI", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" style={{ width: '50%' }} /> },
    { name: "Adobe", icon: <SiAdobe style={{ color: "#FF0000" }} /> },
    { name: "Figma", icon: <SiFigma style={{ color: "#F24E1E" }} /> }, // Changed size to 50%
  ];

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techItems.map((item, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index} style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            {item.icon}
            <div style={{ marginTop: '10px', fontFamily: 'Times New Roman', fontSize: '12px' }}>{item.name}</div> {/* Updated style here */}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
