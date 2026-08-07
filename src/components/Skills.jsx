import { motion } from "framer-motion";

function Skills() {

const technicalSkills = [
  { name: "HTML & CSS", percentage: 95 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 90 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Node.js", percentage: 70 },
  { name: "MongoDB", percentage: 70 },
  { name: "Express.js", percentage: 70 },
];


const creativeSkills = [
  "Graphic Design",
  "UI Design",
  "Presentation Design",
  "Visual Creativity"
];


const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Project Presentation",
  "Continuous Learning"
];


const languages = [
  { name: "Somali", level: "Native" },
  { name: "Arabic", level: "Fluent" },
  { name: "English", level: "Intermediate" }
];


return (

<section
id="skills"
className="
py-20
px-6
bg-white
dark:bg-black
text-black
dark:text-white
"
>

<div className="max-w-6xl mx-auto">


<h2
className="
text-3xl
sm:text-4xl
font-bold
text-center
mb-14
text-gradient
"
>
Skills & Expertise
</h2>



{/* Technical Skills */}

<h3 className="text-2xl font-bold mb-8">
💻 Technical Skills
</h3>


<div className="grid md:grid-cols-2 gap-6">


{technicalSkills.map((skill,index)=>(

<motion.div

key={skill.name}

initial={{opacity:0, y:30}}

whileInView={{opacity:1, y:0}}

transition={{duration:0.5, delay:index*0.1}}

viewport={{once:true}}

className="
p-5
rounded-2xl
bg-gray-50
dark:bg-gray-900
border
border-gray-200
dark:border-white/10
hover:-translate-y-2
transition
shadow-sm
"

>


<div className="flex justify-between mb-3">

<span className="font-semibold">
{skill.name}
</span>


<span className="text-purple-500">
{skill.percentage}%
</span>

</div>



<div
className="
w-full
h-2.5
rounded-full
bg-gray-200
dark:bg-gray-700
overflow-hidden
"
>


<motion.div

initial={{width:0}}

whileInView={{width:`${skill.percentage}%`}}

transition={{duration:1}}

viewport={{once:true}}

className="
h-full
rounded-full
bg-gradient-to-r
from-purple-500
to-pink-500
"

/>


</div>


</motion.div>


))}


</div>





{/* Creative Skills */}

<div className="mt-16">


<h3 className="text-2xl font-bold mb-6">
🎨 Creative Skills
</h3>


<div className="flex flex-wrap gap-4">


{creativeSkills.map(skill=>(

<span

key={skill}

className="
px-5
py-3
rounded-full
bg-purple-500/10
border
border-purple-400/30
text-purple-600
dark:text-purple-300
hover:scale-105
transition
"

>

{skill}

</span>

))}


</div>


</div>







{/* Soft Skills */}

<div className="mt-16">


<h3 className="text-2xl font-bold mb-6">
🚀 Soft Skills
</h3>


<div className="flex flex-wrap gap-4">


{softSkills.map(skill=>(

<span

key={skill}

className="
px-5
py-3
rounded-full
bg-gray-100
dark:bg-gray-900
border
border-gray-200
dark:border-white/10
hover:scale-105
transition
"

>

{skill}

</span>


))}


</div>

</div>







{/* Languages */}

<div className="mt-16">


<h3 className="text-2xl font-bold mb-8">
🌍 Languages
</h3>


<div className="grid sm:grid-cols-3 gap-6">


{languages.map(lang=>(

<div

key={lang.name}

className="
text-center
p-6
rounded-2xl
bg-gray-50
dark:bg-gray-900
border
border-gray-200
dark:border-white/10
hover:-translate-y-2
transition
"

>


<h4 className="text-xl font-bold">
{lang.name}
</h4>


<p className="
mt-2
text-gray-600
dark:text-gray-400
">

{lang.level}

</p>


</div>

))}


</div>


</div>


</div>


</section>

);

}

export default Skills;