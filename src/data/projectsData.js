import blogsite from "../assets/svg/projects/image.png";
import pharms from "../assets/svg/projects/bw.png";
import snake from "../assets/svg/projects/snake.svg";
import rainfall from "../assets/svg/projects/rainfall.svg";
import vr from "../assets/svg/projects/robot-assistant.png";
import antenna from "../assets/svg/projects/antenna.png"

export const projectsData = [
    {
        id: 11,
        projectName: "Medical Chatbot",
        projectDesc:
            "An intelligent chatbot that predicts diseases and provides precautionary advice based on user-reported symptoms",
        tags: ["ReactJS", "TailwindCSS", "JavaScript", "Python"],
        code: "https://github.com/Bhargavram882/Medical_chatbot",
        demo: "https://docs.google.com/presentation/d/1NX6ss460Y3zMX6BvA_2eKpmeldE93F1D/edit#slide=id.p9",
        image: vr,
    },
    {
        id: 10,
        projectName: "Fitness Workout website",        
        projectDesc:
            "A fitness website that helps users discover workout routines tailored to different body parts with video tutorials and exercise details",
        tags: ["React", "Material Ui", "Bootstrap", "Firebase"],
        code: "https://github.com/Bhargavram882/Fitness-workout-website",
        demo: "fitness-club-daily.netlify.app",
        image: blogsite,
    },
    {
        id: 9,
        projectName: "HydroMetLab",
        projectDesc:
            "This project is Done in collabaration with IIT Roorkee, A Web-based Tool for obtaining the design rainfall from the Intensity-Duration-Frequency Curves .",
        tags: ["React", "Bootstrap", "Firebase"],
        code: "",
        demo: "http://hydrometlab.in/",
        image: rainfall,
    },
    {
        id: 8,
        projectName: "Image Colorization of Black and White Images",
        projectDesc:
            "Developed a deep learning model to automatically colorize black-and-white images using pre-trained CNNs and OpenCV",
        tags: ["Python", "CV", "Matplotlib"],
        code: "https://github.com/Bhargavram882/Image-Colorization.git",
        demo: "https://github.com/Bhargavram882/Image-Colorization.git",
        image: pharms,
    },
    
    {
        id: 1,
        projectName: "Snake Game",
        projectDesc:
            "This is snake game app made with python, Tkinter and Turtle. This game has good UI and UX",
        tags: ["Python", "TkInter", "Turtle"],
        code: "https://github.com/bannu0snake/snake-game",
        demo: "https://github.com/bannu0snake/snake-game",
        image: snake,
    },
     {
        id: 2,
        projectName: "Real-Time Audio Anomaly Detection",
        projectDesc:
            "Developed a self-supervised audio anomaly detection system using BYOL and machine learning to identify abnormal sounds in real time",
        tags: ["Audio Processing", "Self-Supervised Learning", "Anomaly Detection"],
        code: "https://github.com/Bhargavram882/audio-ssl-anomaly-detection",
        demo: "https://github.com/Bhargavram882/audio-ssl-anomaly-detection",
        image: antenna,
    },
    
    
];


