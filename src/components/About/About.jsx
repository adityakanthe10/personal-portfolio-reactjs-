import aboutImage from "../../assets/about.jpg"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className=" w-[500px] h-[500px] rounded-3xl object-contain"src={aboutImage} alt="about" />
            </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-xl py-6 tracking-wide">I am a dedicated and versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. With hands-on experience in both frontend and backend development. I excel at creating seamless user experiences and efficient server-side logic. My portfolio includes diverse projects like a course selling website with JWT authentication and a fully functional online food delivery platform. I am dedicated to continuous learning and currently enhancing my skills through the #100DaysOfCode challenge. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About