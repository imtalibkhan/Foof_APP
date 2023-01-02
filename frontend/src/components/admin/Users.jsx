import React from 'react'
// import { Link } from 'react-router-dom'
// import {AiOutlineEye} from "react-icons/ai"
import me from "../../assets/favico.png";

const Users = () => {

  const arr= [1,2,3,4]
  return (
    <section className="tableclass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User id</th>
              <th>Name</th>
              <th>photo</th>
              <th>Role</th>
              <th>Since</th>
              
            </tr>
          </thead>

          <tbody>
            {

            
           arr.map(i=>(

            <tr key={i}>
                <td>#jsfdkoi</td>
                <td>khan</td>
                <td>
                  <img src={me} alt="User" />
                </td>
                <td>admin</td>
                <td>{"24-4-1234"}</td>
                

            </tr>
           ))
}
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default Users