import React from 'react';


export default function End() {
  return (
    <section className="/end relative bg-cover bg-center flex flex-col justify-center items-center text-white py-10 px-4 sm:px-8 md:px-16" 
    style={{ backgroundImage: 'url(\'./images/end-bg.png\')', minHeight: 'calc(100vh - 200px)' }}>
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif text-center mb-6">
        My Journey {`Doesn’t`} Stop Here
      </h2>
      <h3 className="text-lg sm:text-xl md:text-2xl text-zinc-400 text-center mb-12">
        Get in touch and {`let’s`} create something amazing together.
      </h3>

      {/* Email Section */}
      <div className="flex flex-col items-center">
        <a
          href="mailto:chaudharyanjali6300@gmail.com"
          className="flex items-center bg-transparent text-white p-3 sm:px-6 text-sm sm:text-lg  hover:underline hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
        >
          <img src='https://upload.wikimedia.org/wikipedia/commons/3/39/Google_Mail.svg' alt='mail' height='30px' width='30px' className='mx-4' />
          chaudharyanjali6300@gmail.com
        </a>
      </div>
    </section>
  );
}
