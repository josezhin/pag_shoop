import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Carrusel } from '../components/Carrusel';


function Home() {
  return (
    <div className='p-4'>
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 pb-6">
        <img
          alt="Trainer"
          src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Run with the pack
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Get 20% off
            </span>

            <span className="mt-2 block text-sm">On your next order over $50</span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href=""
          >
            Get Discount
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p>
        </div>
      </section>
      <Carrusel />
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="https://wickedblocks.dev/assets/images/placeholders/squareCard.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Your tagline </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Medium length display headline.</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">See features</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {seccion de contactos} */}
      <div className="rounded-lg border border-gray-100 text-center shadow-xl w-48 h-50 mt-8 ml-4">
        <div className="px-4 py-3">
          <p className="font-medium">Not found your answer?</p>

          <div className="mt-3 space-y-2">
            <a
              className="block rounded-full border border-blue-500 px-6 py-2 text-sm font-medium text-blue-600"
              href=""
            >
              Message us
            </a>
          </div>

          <p className="mt-3 inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-green-700">Chat online</span>
          </p>
        </div>

        <div className="flex justify-center gap-9 border-t border-gray-100 px-4 py-2">
          <a
            href="#"
            className="rounded-full border border-gray-200 p-1.5 text-gray-900"
          >
            <span className="sr-only">Company Facebook</span>
            <FaFacebook size={24} color="#3b5998" />
          </a>

          <a
            href="#"
            className="rounded-full border border-gray-200 p-1.5 text-gray-900"
          >
            <span className="sr-only">Company Instagram</span>
            <FaInstagram size={24} color="#C13584" />
          </a>

          <a
            href="#"
            className="rounded-full border border-gray-200 p-1.5 text-gray-900"
          >
            <span className="sr-only">Company Instagram</span>
            <FaWhatsapp size={24} color="#25D366" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home