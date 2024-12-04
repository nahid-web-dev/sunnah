import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdRestaurantMenu } from 'react-icons/md'
import { food_categories, food_list } from '../assets/assets'

function Menu() {
  return (
    <div className=' my-10'>

      <div className=' relative w-full h-52 sm:h-[70vh] rounded-3xl overflow-hidden '>
        <img src="/menu-page-banner.png" alt="hero_image" className=' object-cover h-full w-full  ' />
        <div className=' absolute h-full w-full top-0 left-0 ' />

        <div className='  text-white absolute top-0 left-0 px-[4vw] py-3 w-[70%] h-[60%] flex flex-col justify-end gap-6 items-center bg-black/40 rounded-2xl backdrop-blur-sm '>
          <div className=' flex items-center gap-2 backdrop-blur-sm px-2 md:px-4 rounded-lg md:rounded-2xl overflow-hidden bg-white/60 sm:py-2'>
            <img src="/logo.png" alt="logo" className=' md:w-20 md:h-20 sm:h-16 sm:w-16 h-12 w-12 p-1 sm:p-0  rounded-full object-cover' />
            <h2 className=' md:text-5xl sm:text-2xl text-xl text-pink-600 sm:drop-shadow-[1px_1px_2px_rgba(0,0,0,1)]'>Cuisine</h2>
          </div>
          <h2 className=' drop-shadow-[1px_1px_2px_rgba(55,55,55,1)] text-lg sm:text-2xl md:text-4xl lg:text-6xl font-serif ' aria-label="We believe in Quality!">We believe in Quality!</h2>
        </div>

        <div className='  text-white absolute bottom-0 right-0 px-[4vw] h-[40%] w-[45%] rounded-2xl flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm '>
          <div className=' text-2xl md:text-4xl flex gap-[3vw] -rotate-12 text-orange-400 '>
            <MdRestaurantMenu />
            <MdRestaurantMenu />
          </div>
          <div className=' flex text-xl md:text-3xl gap-[3vw] -rotate-12 text-pink-500 '>
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>

      <div className=' md:my-10 my-5'>

        {/* {food_categories &&
          food_categories.map((category, idx) => {
            return (
              <div key={idx} className="my-8">
                <h2 className="sm:text-4xl text-2xl text-slate-700 md:my-6 underline font-bold">
                  {category}:
                </h2>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                  {food_list &&
                    food_list.map((item, idx) => {
                      if (category.includes(item.category)) {
                        return (
                          <div
                            key={idx}
                            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="mt-4">
                              <h3 className="text-lg font-bold text-slate-800">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {item.description}
                              </p>
                              <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-semibold text-pink-600">
                                  ${item.price}
                                </span>
                                <button className="px-4 py-2 bg-pink-500 text-white text-sm font-semibold rounded-lg hover:bg-pink-600 transition duration-300">
                                  Order Now
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              </div>
            );
          })} */}


        {
          food_categories &&
          food_categories.map((category, idx) => {
            return (
              <div key={idx} className="my-8">
                <h2 className="sm:text-4xl text-2xl text-slate-700 my-4 sm:my-6 md:my-10 underline font-bold">
                  {category}:
                </h2>
                {/* Scrollable container for smaller devices */}
                <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
                  {food_list &&
                    food_list.map((item, idx) => {
                      if (category.includes(item.category)) {
                        return (
                          <div
                            key={idx}
                            className="shadow-box min-w-[200px] max-w-[250px] sm:max-w-full sm:min-w-[250px] md:min-w-0 flex-shrink-0 md:flex-shrink p-4 border rounded-lg bg-white snap-center"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                            />
                            <div className="mt-4">
                              <h3 className="text-sm sm:text-lg font-bold text-slate-800">
                                {item.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                {item.description}
                              </p>
                              <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm sm:text-lg font-semibold text-pink-600">
                                  ${item.price}
                                </span>
                                <button className="px-3 py-2 sm:px-4 bg-pink-500 text-white text-xs sm:text-sm font-semibold rounded-lg sm:hover:bg-pink-600 transition duration-300">
                                  Order Now
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              </div>
            );
          })
        }

      </div>

    </div >
  )
}

export default Menu