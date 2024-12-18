import React, { useEffect, useState } from 'react'
// import './Home.css'
import heroImg from '../assets/header_img.png'
// import heroImg from '/banner-image1.png'
import { FaArrowRight, FaComment, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { food_list, menu_list } from '../assets/assets';
import { MdMenuBook } from 'react-icons/md';

function Home() {

  const [filteredFoods, setFilteredFoods] = useState(food_list)

  const [selectedCategory, setSelectedCategory] = useState('Salad')

  useEffect(
    () => {
      console.log(selectedCategory)
      setFilteredFoods(() => {
        const filteredFoodItems = food_list.filter((item) => {
          return item.category == selectedCategory
        })
        return [...filteredFoodItems]
      })
    }, [selectedCategory]
  )

  const reviews = [
    { name: "Hafsa", review: "The food is delicious, especially the biryani! Highly recommend it.", rating: 5 },
    { name: "Yusuf Zaid", review: "Great atmosphere and the kebabs are perfectly cooked. Sunnah vibes!", rating: 4 },
    { name: "Zainab ", review: "Loved the grilled options! Authentic and flavorful.", rating: 5 },
    { name: "Samira", review: "The service was amazing, and the dates were fresh and sweet.", rating: 4 },
    { name: "Salman", review: "An excellent dining experience, Mandi was perfect.", rating: 5 },
  ];

  return (
    <main className=' her-container mb-10 '>

      <div className=' sm:h-auto h-52 relative my-10 rounded-2xl md:rounded-3xl overflow-hidden '>
        <div className=' bg-black/10 absolute h-full w-full top-0 left-0' />
        <img src={heroImg} alt="hero-image" className=' sm:h-auto h-full object-cover w-full' />
        <div className=' inside-img absolute top-0 left-0 flex flex-col justify-evenly h-full text-white p-[4vw] md:p-[5vw]'>
          <h2 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none'>Order your <br /> favourite food here</h2>
          <p className=' hidden sm:block lg:w-[70%] text-xs lg:text-sm lg:leading-normal leading-none'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
          <Link to='/menu' className=' flex items-center justify-between gap-1 w-40 md:hover:w-48 transition-all px-4 py-2 text-xl bg-white text-stone-500 rounded-full '>View Menu<FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="explore-menu flex flex-col gap-5">
        <h2 className=' text-3xl font-medium'>Explore our menu</h2>
        <p className=' text-md text-stone-500 lg:w-[80%]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

        <div className=' flex justify-center items-center'>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-lg md:text-2xl px-4 py-2 mt-4 font-medium text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 my-2 md:my-5 "
          >
            <MdMenuBook className="text-2xl md:text-3xl" />
            Explore Menu
          </Link>
        </div>

        <div className=' pb-10 border-b-2 border-stone-300'>

          <div className='flex justify-around overflow-x-scroll no-scrollbar snap-x '>

            {menu_list.map((item, index) => {
              return (
                <div key={index} className=' mx-2 snap-center cursor-pointer p-4 flex flex-col items-center gap-2 min-w-32 '>
                  <img onClick={() => setSelectedCategory(item.menu_name)} src={item.menu_image} alt="food-img" className={` h-24 w-24 object-cover ${selectedCategory == item.menu_name && 'ring-4'} hover:ring-4 hover:p-2 p-1  ring-pink-500 rounded-full transition-all`} />
                  <h3 className=' text-lg text-stone-600'>{item.menu_name}</h3>
                </div>
              )
            })}

          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 my-2">
            {filteredFoods && filteredFoods.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="shadow-box min-w-[200px] max-w-[250px] sm:max-w-full sm:min-w-[250px] md:min-w-0 flex-shrink-0 md:flex-shrink p-4 border rounded-lg shadow-md transition-shadow duration-300 bg-white snap-center"
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
            })}
          </div>

        </div>

      </div>


      <div className="p-6 bg-transparent">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 bg-white bg-opacity-80 shadow-md rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-3">
                <FaComment className="text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
              </div>
              <p className="text-gray-700 mt-2">{review.review}</p>

              {/* Star Rating */}
              <div className="flex mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}

export default Home