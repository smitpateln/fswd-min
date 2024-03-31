import React from 'react'
import Cookies from 'js-cookie'
const GetCookie = () => {
  alert(Cookies.get("jwt"));
};
export default function Classroom() {

  return (
    <div className='classroom'>
      <nav>
       <ul>
        <li>home</li>
        <li>classroom</li>
       </ul>
      </nav>
      <div className='slide'>room1</div>
      <div className='slide'>room2</div>
      <main>classroom details</main>
      <button onClick={GetCookie}>Get Cookie</button>

      </div>
      
      
  )
}
