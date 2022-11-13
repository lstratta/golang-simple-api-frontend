import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './ViewPosts.css'
import Header from '../header/Header';

function ViewPosts ({server_url}) { 

    const [allPosts, setAllPosts] = useState([])

    const getData = async () => {

        await axios.get(`${server_url}/posts`)
            .then( res => {
                setAllPosts(res.data);
            })
    }

    useEffect(() => {
        getData()

    }, [])

    console.log(allPosts)

    function getDate(timestamp) {
        var d = new Date(timestamp*1000);
        let timeStampCon = d.getDate() + '/' + 
            (d.getMonth()) + '/' + 
            d.getFullYear() + " " + 
            d.getHours() + ':' + 
            d.getMinutes();
    
        return timeStampCon;
    };
    

    return (
        <div>

            <Header/>
            {/* Page title */}
            <div className="page-title">
                <h1>All posts</h1>
            </div>

            {/* Data presentation */}
            <div className='container'>
                <div className='row row-col'>
                    <div className='col'>

                    </div>
                    
                    <div className="col-6 text-center">
                    {allPosts && allPosts.map( post => (

                                <div className="m-3 p-8  border rounded" key={post._id}>
                                    <div className='bg-light bg-opacity-25 py-2'>
                                        <h3 className=''>{post.headline}</h3>
                                    </div>
                                    <p className='px-2 pt-2'>{getDate(post.datecreated)}</p>
                                    <p className='px-2'>{post.body}</p>
                                </div>

                        )) 
                    }
                    </div>

                    <div className='col'>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ViewPosts;