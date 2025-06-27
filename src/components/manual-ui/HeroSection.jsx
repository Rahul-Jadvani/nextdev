import Squares from '@/blocks/Backgrounds/Squares/Squares'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative h-[100vh] w-[100vw]'>
      <Squares
        speed={0.9}
        squareSize={50}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="darkgrey"
        hoverFillColor="#ab00ff"
      />
    </div>
  );
}

export default HeroSection