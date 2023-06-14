import React from 'react';
import Feaures from './Feaures/Feaures';
import Footer from '../AboutPage/Footer/Footer';

const BlogPage = () => {
  return (
    <div className='blog-page'>
     <h2 className='blog-title'>Blog</h2>
     <p className='blog-text'>Discover articles and insights from our expert team. </p>
      <Feaures/>
      <Footer/>
    </div>
  )
}

export default BlogPage