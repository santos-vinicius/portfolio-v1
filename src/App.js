
import Avatar from './assets/images/avatar.png'

function App() {
  return (
    <div className="bg-black flex justify-center items-center h-screen font-inter">
      <div className="px-8 mx-auto flex flex-col justify-center items-center lg:flex-row">
        <section className="mx-8 my-6">
          <img src={Avatar} alt="Vinicius Santos profile" className="w-60" />
        </section>
        <div className="w-1/2">
          <h1 className="text-gray-100 text-3xl font-bold text-center mb-2 lg:text-left">
            Hi, I'm Vinicius Santos!
          </h1>
          <p className="text-gray-100 text-xl text-justify">
            Yeah, I know you should expect to see my portfolio page and I’m working on it!<br></br>
            But if you wanna see what I've been coding, you can always go to my <a href="https://github.com/santos-vinicius/" className="font-bold text-pink cursor-ponter">github profile</a>.
          </p>
          <p className='text-gray-100'>
            ASAP everything will be updated here &#128517;
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;