export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-20 md:gap-28 md:p-16 md:py-28 py-10'>
      <div className='hidden md:flex'>
        <div className='container-glass flex flex-col items-center justify-center px-6 py-10 lg:p-14 rotate-[-15deg]'>
          <h1 className='text-4xl lg:text-6xl font-bold'>Welcome</h1>
        </div>
        <div className='container-glass flex flex-col h-fit items-center justify-center p-4 lg:p-8 rotate-[12deg]'>
          <h2 className='text-2xl lg:text-4xl font-semibold'>to</h2>
        </div>
        <div className='container-glass flex flex-col h-fit items-center justify-center p-4 lg:p-8 rotate-[-3deg]'>
          <h2 className='text-2xl lg:text-4xl font-semibold'>my</h2>
        </div>
        <div className='container-glass flex flex-col items-center justify-center px-6 py-10 lg:p-14 rotate-[18deg]'>
          <h1 className='text-4xl lg:text-6xl font-bold'>Website</h1>
        </div>
      </div>
      <div className='container-glass flex flex-col items-center justify-center gap-6 w-full md:w-[90%] lg:w-[70%] px-6 py-10 lg:p-14'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='block md:hidden text-center text-4xl lg:text-6xl font-bold'>Welcome to my website</h1>
          <h2 className='text-2xl lg:text-4xl font-semibold'>Lukas Andersson</h2>
          <p className='text-lg'>
              I am a 19-year-old guy from Stockholm, Sweden. I have just graduated from the Technology program with a focus on information and media technology at Nacka Gymnasium. I have a great interest in technology and programming. I am also interested in music and play several instruments. I am a calm and methodical person who functions well working both in groups, and individually. I am also a creative person who likes to solve problems while also setting goals and structuring the work at task.
            </p>
        </div>
      </div>
    </main>
  );
}