import React from 'react'
import Image from 'next/image'
import {BsCodeSlash, BsLayoutWtf, BsUiRadios} from 'react-icons/bs';


function Skills() {
  return (
    <div className='w-full text-white intro'>
        <div className='text-center pt-[40px]'>
            <h1 className='text-4xl'>FIRMA / IMPRESSUM</h1>
        </div>
        <div className='py-[20px] grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center sm:m-12 m-2'>
          <div className='text-center items-center rounded-lg m-auto p-5 hvr-grow'>
            <div>
              <h2 className='text-3xl py-[10px] font-semibold'>Service rund um die 
              Uhr</h2>
              <ul className='text-xl'>
                <li className='py-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </li>
              </ul>
            </div>
          </div>
          <div className='text-center items-center rounded-lg m-auto p-5 hvr-grow'>
            <div>
              <h2 className='text-3xl py-[10px] font-semibold'>Dienstleistungen zum kleinen Preis</h2>
              <ul className='text-xl'>
                <li className='py-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </li>
              </ul>
            </div>
          </div>
          <div className='text-center items-center rounded-lg m-auto p-5 hvr-grow'>
            <div>
              <h2 className='text-3xl py-[10px] font-semibold'>Unsere 
              Geschäftszeiten</h2>
              <ul className='text-xl'>
                <li className='py-2'>Mo - Fr  9:00 - 17:00 Uhr</li>
                <li className='py-2'>Samstag  9:00 - 17:00 Uhr</li>
                <li className='py-2'>Sonntag  9:00 - 19:00 Uhr</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='py-[20px] grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center sm:m-12 m-2'>
          <div className='text-center items-center rounded-lg m-auto p-5 hvr-grow'>
            <div>
              <h2 className='text-3xl py-[10px] font-semibold'>Effizienz</h2>
              <ul className='text-xl'>
                <li className='py-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
              </ul>
            </div>
          </div>
          <div className='text-center items-center rounded-lg m-auto p-5 hvr-grow'>
            <div>
              <h2 className='text-3xl py-[10px] font-semibold'>Diskretion</h2>
              <ul className='text-xl'>
                <li className='py-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
              </ul>
            </div>
          </div>
          <div className='text-center items-center rounded-lg m-auto p-5 hvr-grow'>
            <div>
              <h2 className='text-3xl py-[10px] font-semibold'>Seriosität</h2>
              <ul className='text-xl'>
                <li className='py-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
              </ul>
            </div>
          </div>
        </div>

    </div>
    
    
  )
}

export default Skills