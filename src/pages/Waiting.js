  import React from 'react'
  import { useState } from 'react'



  export const Waiting = () => {

    const [Room,setRoom]= useState({
      _id:-1,
      status:"waiting"
    });


    function createRoom() {
      return fetch(`http://localhost:4000/prolang/createRoom`, {
        method: "POST",
      }).then((response) => response.json());
    }
    
    function getRandomRoom() {
      return fetch(`http://localhost:4000/prolang/randRoom`).then((response) =>
        response.json()
      );
    }
    async function connectToARoom() {
      const { randroom } = await getRandomRoom();

      if (randroom._id !==-1) {
        setRoom(randroom);
      } else {
        const {newroom} = await createRoom();
        setRoom(newroom); 
      }
    }
    return (
      <div className='h-96 flex flex-col  justify-center items-center'>
          <p>{Room._id}</p>
          <button onClick={connectToARoom}>start/connect</button>
      </div>
    )
  }
