import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

function Home() {
    const API_URL = 'https://fakestoreapi.com/products'
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    console.log("This is post", posts)

    async function fetchProductData() {
      try {
        setLoading(true)

        const res = await fetch(API_URL)
        const data = await res.json()
        console.log("Data" , data)

        setPosts(data)
      } catch (error) {
        console.log(error)
        setPosts([])
      }

      setLoading(false)
    }

    useEffect( () => {
        fetchProductData()
    }, [])

  return (
    <div className='flex flex-wrap p-12 gap-6'>
      {
        loading ? (<div> Loading.. </div>) :
        posts.length > 0 ? 
        (
            posts.map( (post) => (
                <Product key={post.id} post={post} />

            ))
        ) :
        (
            <div>No Data Found</div>
        )
      }
    </div>
  )
}

export default Home