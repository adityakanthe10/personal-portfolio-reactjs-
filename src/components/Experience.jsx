import {EXPERIENCES} from "../index.js"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
            {EXPERIENCES.map((experience,index)=>{
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                    <div className="w-full lg:2-1/4"></div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Experience