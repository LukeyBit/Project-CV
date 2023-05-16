import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center gap-4 container-glass p-12 pb-14'>
        <h1 className='text-6xl font-bold'>Lukas Andersson</h1>
        <h2 className='text-4xl font-semibold'>Curriculum Vitae</h2>
        <article className='flex flex-col gap-2 w-[70%]'>
          <div>
            <h3 className='text-2xl font-semibold'>Professional Ambitions</h3>
            <p className='text-lg'>To gain experience and learn about the working world. To contribute to a positive work environment and help the workplace achieve its goals.</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Skills</h3>
            <p className='text-lg'>
              Works well with others, takes instructions and adapts to different types of tasks. Calm and methodical with the ability to set goals and work independently. Creative and problem-solving with the ability to drive, develop, and lead group work. Attentive and socially adaptable in different situations and contexts. Appreciates clear communication.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Competence</h3>
            <p className='text-lg'>
              Experienced in information and media technology at high school level. Experienced in troubleshooting and problem-solving in technical contexts and have experience with various operating systems such as Windows, Linux, and Mac OS. Studied web development and programming in Java and Python at high school level and have experience with several programming and coding languages such as HTML, CSS, JavaScript, and JQuery. Is proficient in building full stack web applications using frameworks such as React, NextJS, NodeJS, ExpressJS and Python Flask. Experience with different types of databases such as SQL and MongoDB. Also experienced with code editing tools such as Sublime Text 3, Visual Studio Code, and Intellij IDEA. Experienced in web design in WordPress. Also experienced in live streaming and recording of video and programs such as Open Broadcast Software and related equipment. Experienced in video and image editing using Adobe Photoshop, Illustrator, InDesign, DaVinci Resolve 16, Inkscape, and Gimp. Experienced in music production in Ableton Live 10, GarageBand, and Audacity. Also experienced with technical equipment related to sound and image. Quick learner of new systems and their use in various tasks.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Work Experience</h3>
            <ul className='list-disc list-inside pl-6'>
              <li className='text-lg'>Front desk agent at Nobis Hotel Stockholm since 2022.</li>
              <li className='text-lg'>Administrative work for the Swedish Publishers Association, managing nominated books for the August Prize.</li>
              <li className='text-lg'>Graphic design work for the Catholic Forum/Saint Eugenia Parish since 2021.</li>
              <li className='text-lg'>Two-week internship at ICA Maxi Värmdö in 8th grade and three-day internship in 7th grade.</li>
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Education</h3>
            <ul className='list-disc list-inside pl-6'>
              <li className='text-lg'>Current: Technology program with a focus on information and media technology at Nacka Gymnasium, 2019-2023</li>
              <li className='text-lg'>Music profile at Viktor Rydberg School, Vasastan, 2017-2020</li>
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Interests</h3>
            <p className='text-lg'>
              Outside of studying, I dedicate my time to training and health, music, and spending time with friends. I have a great interest in music and play electric bass, drums, piano, and sing. I also enjoy spending time in nature and exercising outdoors in the forest, as well as training at the gym.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
