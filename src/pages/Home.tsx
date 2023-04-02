import Background from '../assets/images/whiskey.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-scroll'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-60 font-semibold text-black rounded'>Welcome! Speak Easy, Drink Heavy!</h3>
        </div>
    </div>
  )
}

export default Home
