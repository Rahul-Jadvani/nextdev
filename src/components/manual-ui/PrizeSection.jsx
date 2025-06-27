import DotGrid from '@/blocks/Backgrounds/DotGrid/DotGrid'
import PixelCard from '@/blocks/Components/PixelCard/PixelCard'
import React from 'react'

const prizes = [
  {
    place: "1st place",
    amount: "₹1,00,000",
    content: (
      <div className="prizes-image relative w-full h-40">
        <div className="cover-img u--abs u--center">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a0e_prize-1-diamond.svg" loading="lazy" alt="diamond" className="cover w-20 h-20" />
          <div className="star size-3 prize-1-1 absolute top-0 left-0">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
          <div className="star size-1 prize-1-2 absolute bottom-0 right-0">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
        </div>
        <div className="cover-img u--abs">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a07_prize-1-coin-bottom.svg" loading="lazy" alt="coin bottom" className="cover w-24 h-12 absolute left-0 bottom-0" />
        </div>
        <div className="cover-img u--abs u--center">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a0a_prize-1-coin-top.svg" loading="lazy" alt="coin top" className="cover w-20 h-10 absolute right-4 top-4" />
          <div className="star size-2 prize-1-3 absolute top-2 right-8">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
          <div className="star size-1 prize-1-4 absolute bottom-2 left-8">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
        </div>
        <div className="cover-img u--abs">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a0c_prize-1-bills.svg" loading="lazy" alt="bills" className="cover w-24 h-12 absolute right-0 bottom-0" />
        </div>
      </div>
    )
  },
  {
    place: "2nd place",
    amount: "₹50,000",
    content: (
      <div className="prizes-image relative w-full h-40">
        <div className="cover-img u--abs">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a0b_prize-3-bottom.svg" loading="lazy" alt="3rd bottom" className="cover w-20 h-10 absolute left-0 bottom-0" />
        </div>
        <div className="cover-img u--abs u--center">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a1e_prize-30-middle.svg" loading="lazy" alt="3rd middle" className="cover w-20 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="star size-2 prize-3-3 absolute top-2 left-8">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
        </div>
        <div className="cover-img u--abs u--center">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a0d_prize-3-top.svg" loading="lazy" alt="3rd top" className="cover w-20 h-10 absolute right-4 top-4" />
          <div className="star size-3 prize-3-1 absolute top-0 right-0">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
          <div className="star size-1 absolute bottom-2 left-8">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
        </div>
      </div>
    )
  },
  {
    place: "3rd place",
    amount: "₹10,000",
    content: (
      <div className="prizes-image relative w-full h-40">
        <div className="cover-img u--abs">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a1f_prize-4-bottom.svg" loading="lazy" alt="4th bottom" className="cover w-20 h-10 absolute left-0 bottom-0" />
        </div>
        <div className="cover-img u--abs u--center">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a1c_prize-4-middle.svg" loading="lazy" alt="4th middle" className="cover w-20 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="star size-3 prize-4-1 absolute top-2 left-8">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
          <div className="star size-1 prize-4-2 absolute bottom-2 right-8">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
        </div>
        <div className="cover-img u--abs u--center">
          <img src="https://cdn.prod.website-files.com/67acdc4f394bcf4f3e3669b6/67acdc4f394bcf4f3e366a20_prize-4-top.svg" loading="lazy" alt="4th top" className="cover w-20 h-10 absolute right-4 top-4" />
          <div className="star size-1 prize-4-3 absolute top-0 right-0">
            <img src="/images/starry.png" alt="star glow" className="star-image" />
          </div>
        </div>
      </div>
    )
  },

];

const PrizeSection = () => {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-300 via-indigo-600 to-blue-900 z-0">
        <DotGrid
          dotSize={5}
          gap={24}
          baseColor="#ffffff"
          activeColor="#0000ff"
          proximity={120}
          shockRadius={300}
          shockStrength={5}
          resistance={750}
          returnDuration={1.0}
        />
      </div>
      <div className="relative z-10 flex flex-col gap-8 lg:gap-12 lg:flex-row justify-evenly items-center py-10 bg-transparent w-full">
        {prizes.map((prize) => (
          <PixelCard
            key={prize.place}
            variant={'default'}
            className="border-black border-4 flex flex-col items-center justify-center backdrop-blur-xs relative"
          >
            <h2 className="absolute border-b-2 w-full top-0 text-4xl font-extrabold mb-2 p-4 text-center backdrop-blur-md">{prize.place}</h2>
            {/* <div className="relative w-60 h-48 mb-4 mt-8 flex items-center justify-center">
              {prize.content}
            </div> */}
            <p className="absolute bottom-1/4 p-6 w-full text-4xl font-bold text-center">{prize.amount}</p>
          </PixelCard>
        ))}
      </div>
    </div>
  )
}

export default PrizeSection