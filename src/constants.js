// Generic constants
export const GITHUB_PROFILE_URL = "https://github.com/Aditya7799"
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/aditya-dalvi/"
export const INSTAGRAM_PROFILE_URL = "https://www.linkedin.com/in/aditya-dalvi/"
export const GOODREADS_PROFILE_URL ="https://www.goodreads.com/user/show/160395128-aditya-dalvi"
export const FIRST_NAME = "Aditya"
export const LAST_NAME = "Dalvi"

// Home Page Related Constants
export const HOME_INTRO = "Hi There!"

export const HOME_INTRODUCTION_1 = <p className="home-about-body">
    Welcome to my website! I'm a <b>computer programmer</b> and <b>research enthusiast</b> with three years of overall technology experience and a passion for software development and Deep learning.
    At <b>Amazon Payments</b> I have dedicated myself to developing customer centric and innovative payment experiences that combine cutting-edge technology with user-centric design.
    Other than coding, I have a proven track record of Designing complex services and resilience engineering. 
    Working at such a large scale at Amazon has taught me to make concious decisions as even a small change in the color of a button can affect Payment Conversions!
</p> 

export const HOME_INTRODUCTION_2 = <p>
    
</p>

export const HOME_TYPEWRITER_STRINGS = ["Software Engineer II","NLP Enthusiast", "FullStack Developer"]

// About page 
// Certifications
export const certificates = [
    {
        course_name:"Neural Networks And Deep Learning",
        specialization:"Deep Learning Specialization",
        img_src:"coursera",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/647QPEFPQ9ZR"
    },
    {
        course_name:"Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        specialization:"Deep Learning Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/647QPEFPQ9ZR",
        img_src:"coursera",
    },
    {
        course_name:"Structuring Machine Learning Projects",
        specialization:"Deep Learning Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/647QPEFPQ9ZR",
        img_src:"coursera",
    },
    {
        course_name:"Convolutional Neural Networks",
        specialization:"Deep Learning Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/647QPEFPQ9ZR",
        img_src:"coursera",
    },
    {
        course_name:"Natural Language Processing with Classification and Vector Spaces",
        specialization:"Natural Language Processing Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/MY59FXP4CAGQ",
        img_src:"coursera",
    },
    {
        course_name:"Natural Language Processing with Probabilistic Models",
        specialization:"Natural Language Processing Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/MY59FXP4CAGQ",
        img_src:"coursera",
    },
    {
        course_name:"Natural Language Processing with Sequence Models",
        specialization:"Natural Language Processing Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/MY59FXP4CAGQ",
        img_src:"coursera",
    },
    {
        course_name:"Natural Language Processing with Attention Models",
        specialization:"Natural Language Processing Specialization",
        certificate:"https://www.coursera.org/account/accomplishments/specialization/certificate/MY59FXP4CAGQ",
        img_src:"coursera",
    }
]
export const about_text = <p style={{ textAlign: "justify" }} className="home-text">
    I am Aditya Dalvi from Bangalore, India. I graduated from <b>National Institute of Technology, Karnataka</b> in 2021 and I am currently working as a Software Development Engineer II at Amazon. 
    <br/>
    <br/>
    Apart from coding, some other things I love doing!
    <ul>
        <li>Trekking</li>
        <li>Reading Books - <a href="/#/goodreads">Goodreads</a> </li>
        <li>Video Games</li>
    </ul>
</p>

//Experience page
// Card Data
export const experience_data = [
    {
      title: "Jun 2023 - Present",
      cardTitle: "Software Development Engineer 2",
      cardSubtitle: "Amazon Pay | Selection and Influencing",
      cardDetailedText:<p>
        As an SDE2 at AmazonPay I have been responsible for a variety of things like designing and developing many critical payment-expereince features and maintaining the operational health of our service. 
        <hr></hr>
        Revamped the OrderSummary Experience on the PaymentSelectionPage for all Amazon India Customers.
        <ul>
            <li>Introduced a new feature where we dynamically calculate the OrderSummary for every change in PaymentMethod </li>
            <li>Designed and Implemented this feature end-to-end. The proposed architecture reduced p90 latencies by 45%</li>
        </ul>
        <hr></hr>
        Owned the resilience improvement track for a Tier1 service used to process payments across India.
        <ul>
            {/* <li></li> */}
        </ul>
        
      </p>
    },
    {
      title: "July 2021 - Jun 2023",
      cardTitle: "Software Development Engineer 1",
      cardSubtitle: "Amazon Pay | Selection and Influencing",
      cardDetailedText:<p>
        Implemented and launched the consent collection framework for token based card saving for Amazon India after RBI COF guidelines.
        <ul>
            <li>Designed, implemented, and launched the expired token renewal framework for Amazon retail business.</li>
            <li>Successfully tokenized over 10 M cards and renewed 230k tokens to date.</li>
            <li> Active Amazon Interviewer</li>
        </ul>
      </p>
        
    },
    {
      title: "April 2020 - Jun 2020",
      cardTitle: "Software Development Intern",
      cardSubtitle: "Amazon Pay | Cards Experience",
      cardDetailedText:
        "Interned with the Cards Amazon Pay team to build a serverless application using AWS Lambda to toggle 3DS vs non‑3DS card transactions.",
    },
    {
      title: "April 2019 -Jun 2019",
      cardTitle: "Intern",
      cardSubtitle: "Capgemini",
      cardDetailedText:
        "Interned at Capgemini under the Singapore‑Power project as a tester. Learnt and applied the fundamentals of testing using the SAP‑ISU and HP‑ALM environments",
    },
  ];

// Footer Data
export const fullName = "Aditya Dalvi"

