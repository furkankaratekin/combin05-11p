import React from 'react'
import clothes from './OutfitCategory/CategoryData'

const OutfitContent = clothes.map((clths) => {
  const {id , img , tarz , ust , alt , ustRenk , altRenk} = clths
  return(
      <div key={id}>
      <img src={img} alt={tarz}></img>
      <h3>{ust}</h3>
      <h3>{alt}</h3>
      <h3>{ustRenk}</h3>
      <h3>{altRenk}</h3>
    </div>
  )
})

export default OutfitContent


/*     <div className="outfit-content grid grid-cols-2 ">
      <div className="left-image lg:col-span-1 xsm:col-span-2 m-20">
        <div className="flex items-center justify-center">
          <img
            src="https://i.pinimg.com/564x/be/66/ac/be66ac085c6f085734b4741406d05132.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="right-content lg:col-span-1 xsm:col-span-2 lg:m-20 md:my-0 xsm:text-center lg:text-start  flex flex-col xsm:gap-4 gap-12">
        <h3 className="lg:text-5xl xsm:text-3xl font-bold">RETRO</h3>
        <p className="lg:text-2xl xsm:text-xl whitespace-nowrap">
          Siyah Tişört Mavi Pantolon
        </p>
      </div>
    </div>
 */

  