import React from 'react'
import { useState } from 'react';

const Blogs = () => {
     const [blogs, setblogs] = useState([
        {title:'Ways to smash UTME', author:"Chioma", id:1},
        {title:'Ways to smash Post UTME', author:"Ella", id:2},
        {title:'Ways to smash School exam', author:"Techgirle", id:3},
     ]); 
  return (
    <div>
        {blogs.map((blog)=>{
            <div className="blog-preview" key={blog.id}>
                <h2 className='text-white'>{blog.title}</h2>
                <p>written by{blog.author}</p>
            </div>
        })}
    </div>
  )
}

export default Blogs