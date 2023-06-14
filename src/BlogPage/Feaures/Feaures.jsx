import React from 'react';
import './Feaures.css';
import FeaturedAarticles from './featured-articles/Featured-articles';
import LastedArticles from './lasted-articles/Lasted-articles';
import TrendingArticles from './trending-articles/Trending-Articles';
import PopularArticles from './popular-articles/Popular-articles';

const Feaures = () => {
  return (
    <div className='features'>
        <div className="container">

 <ul className="team-list">
        <li className="team-item active">All Topics</li>
        <li className="team-item">For Contractors</li>
        <li className="team-item">Remote Work</li>
        <li className="team-item">Payroll</li>
        <li className="team-item">Compliance</li>
        <li className="team-item">Legal</li>
        <li className="team-item">Resources</li>
     </ul>

{/* --------- Featured articles ---------------   */}

     <h3 className='featured-text'>Featured articles</h3>

    <FeaturedAarticles/>


{/* --------- Latest articles ---------------   */}
    
    <h3 className='latest-text'>Latest articles</h3>

    <LastedArticles/>

   
   {/* --------- Trending articles ---------------   */}
    
   <h3 className='trending-text'>Trending articles</h3>

     <TrendingArticles/>

   
   {/* --------- Most popular articles ---------------   */}

   <h3 className='most-popular-text'>Most popular articles</h3>

   <PopularArticles/>

    </div>

    </div>
  )
}

export default Feaures