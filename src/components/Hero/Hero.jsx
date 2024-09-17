
import profilePic from "../../assets/Profile.png"
import {motion} from "framer-motion"

const container = (delay) =>({
    hidden: {x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})
const Hero = () => {
  return (
    <div className="h-screen mt-20 border-b border-neutral-900 pb-4">
        <div className="flex flex-wrap justify-items-center items-center">
            <div className="w-full h-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-20 ">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className ="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                    Aditya Kanthe
                </motion.h1>
                <motion.span 
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                className="bg-gradient-to-r from-pink-300 vias-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                <motion.p 
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-wide text-sm text-justify">I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like HTML, CSS, ReactJS and as well as in back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-3">
            <div className="flex justify-center ">
                <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}} src={profilePic} alt="Aditya Profile" className="w-[350px] h-[350px] object-contain shadow-neon "
                 />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero