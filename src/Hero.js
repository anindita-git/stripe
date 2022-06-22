import React from 'react'
import { useGlobalContext } from './ContextAPI'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <div className="hero">
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software
            and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <button className="start-btn">Start now</button>
        </article>
        <article className='hero-img'>
          <img src="https://cdn3.iconfinder.com/data/icons/other-icons/48/iphone-512.png" alt="" />
        </article>
      </div>
    </div>
  )
}

export default Hero