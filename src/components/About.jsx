import aboutImage from "../assets/about.jpg"
import {ABOUT_TEXT} from "../index.js"
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
            <div className="flex items-center justif-center">
                <img className="rounded-2xl"src={aboutImage} alt="about" />
            </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-xl py-6">{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About