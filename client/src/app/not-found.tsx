export default function NotFound() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='container-glass flex flex-col items-center justify-center w-full md:w-[80%] lg:w-[50%] px-6 py-10 lg:p-14'>
                <h1 className='text-6xl font-bold'>404</h1>
                <p className='text-2xl'>Page not found</p>
                <p className='text-lg'>The page you are looking for does not exist. All pages are listed in the menu above.</p>
            </div>
        </main>
    );
}