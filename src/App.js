
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [data, setdata] = useState([])
  const url = " https://run.mocky.io/v3/55492543-1c03-4b5e-8ff4-28bbd2638780 "
  useEffect(() => {
    axios.get(url).then((res) => {
      // data=res.movies
      console.log(res.data.movies)
      setdata(res.data.movies)
    })
  }, [])
  //  console.log(data)
  return (
    <div >
      {/* // this is header part */}
      <div style={{
        backgroundColor: 'black'
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div style={{
            margin: '1rem',

          }}>
            <input style={{
              padding: '.5rem'
            }} type="text" placeholder="serch something" />
          </div>
          <div style={{
            display: "flex",

          }}>
            <div style={{
              margin: '1rem',
              color: 'white'
            }}>mumbai</div>
            <div style={{
              margin: '1rem',
              color: 'white'
            }}>profile</div>
            <div style={{
              margin: '1rem',
              color: 'white'
            }}> hi abhishek</div>
          </div>
        </div>
        // this is next part
      
      </div>



      <div style={{
        width:'30rem',
        hieght:'5rem',
        padding:'1rem',
        backgroundColor:"aqua",
      
      }}>
          {
            data.map((e,i)=>{
              console.log(e)
              return(
                <div style={{
                  margin:'1rem',
                  // display:"flex",
                  border:'.5rem solid red',
                  padding:'1rem'
                }}>
                  <div >
                    <img src={e.imageUrl} alt='image is not working'/>
                  </div>
                  <div> Name :{e.Name}</div>
                  <div> genre :{e.genre}</div>
                </div>
              )
            })
          }
        </div>

    </div>
  );
}

export default App;
