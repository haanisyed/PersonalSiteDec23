AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Summer Student",
    cardImage: "assets/images/experience-page/HealthCanada_Logo.gif",
    place: "Health Canada / UOttawa",
    time: "(Sept 2023 - March 2024)",
    desp: "<li>Collaboratively developed bioinformatics django-based web application for genomic data management.</li>",
  },
  {
    title: "IT Support Staff",
    cardImage: "assets/images/experience-page/queens_logo.png",
    place: "Queen's University IT Services",
    time: "(Sept 2023 - March 2024)",
    desp: "<li>Assisted clients from 50+ departments with hardware, software, and operating systems like Windows, Mac OS, and Linux effectively troubleshooting diverse platforms.</li> <li>Leveraged Azure, PowerShell, database management to conduct MFA setups and password resets.</li>",
  },
  {
    title: "Undergraduate Research Assistant",
    cardImage: "assets/images/experience-page/QUPsych.png",
    place: "Language and Cognition Lab (Queen's University)",
    time: "(Sept 2023 - March 2024)",
    desp: "<li>Designed Qualtrics programs to assist partnering institutes in Bulgaria.</li> <li> Actively participated in discussions by presenting and discussing latest literature in AI and cognitive science.</li>",
  },
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/cac_logo.png",
    place: "Centre for Advanced Computing",
    time: "(June 2023 - Sept 2023)",
    desp: "<li>Created healthcare web applications using PowerBI, Dash, Plotly, Next.js, and React.js consistently adjusting to meet client needs.</li><li>Supported 50+ participants with Jupyter Notebooks exercises of NumPy, Pandas, Seaborn, NLTK, and scikit-learn at Compute Ontario's 2023 Summer School Text Mining Workshop.</li>",
  },
  {
    title: "Summer Research Assistant",
    cardImage: "assets/images/experience-page/QUPsych.png",
    place: "Language and Cognition Lab (Queen's University)",
    time: "(May 2023 - Aug 2023)",
    desp: "<li>Designed Python and JavaScript experiments in PsychoPy, jsPsych, Psychojs, Lab.js, Pavlovia, and GitLab.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);









