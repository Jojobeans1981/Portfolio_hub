import React from "react";
// import myImage from "../img/prof-pic.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", percentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          percentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          percentage: "85%",
          value: "85"
        },
  
      ],
      about_me: [
  {
    id: "first-p-about",
    content:
      "I am a self-driven, highly motivated, constant and life-long learner. My passion lies in designing and building highly scalable, accessible applications and websites for today's business and strategic needs. I am a graduate of Lambda School's online full-stack web development and technical interviewing program. I am well versed in Express, React, Python, and Node.js. As well as frameworks like Nextjs, bootstrap, and I continue to explore their potential daily. My projects reflect my growth and evolution as a developer—take a look around, and if my work resonates with you, feel free to click the links to my resume, GitHub, and LinkedIn profiles. I am open to work and actively pursuing opportunities."
  },
  {
    id: "second-p-about",
    content:
      "With a background in full-stack web development, I have honed skills in both the frontend and backend of modern web applications. I thrive on solving complex challenges and transforming ideas into tangible, user-friendly digital experiences. My journey has been fueled by curiosity and a desire to push the boundaries of what's possible with technology. From building responsive interfaces to creating efficient and secure APIs, I aim to deliver products that meet both the technical requirements and business goals. I am excited about the future of web development and eager to contribute to innovative projects that have a meaningful impact."
  },
  {
    id: "third-p-about",
    content:
      "I am passionate about creating accessible, inclusive applications that are easy to use and scale efficiently. My approach to development prioritizes clean code, attention to detail, and continuous improvement. I believe that a great developer never stops learning, and I apply this mindset in every project I undertake. Whether it's exploring new technologies or refining my skills with the tools I already use, I am always looking for ways to improve and deliver better results. Collaboration and communication are essential to my work ethic, and I thrive in environments where teamwork and innovation are encouraged."
  }
]

    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
