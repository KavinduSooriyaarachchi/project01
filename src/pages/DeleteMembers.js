import React from 'react'
import Header from '../components/Header';

// import{BsFillPencilFill,BsFillTrashFill} from "react-icons/bs";


export default function() {
  return (

    <section>

    <Header/>
    <div>

      <table>
          <thead>
              
              <tr>
                 <th>Name</th>
                 <th>ID</th>
                 <th>NIC</th>
                 <th>Email</th>
                 <th>Contact</th>
                 <th>Action</th>
              </tr>
          </thead>              
             
          

          <tbody>
                <tr>
                   <td>Nimal</td>
                   <td>001</td>
                   <td>200018</td>
                   <td>Nimal@gmai.com</td>
                   <td>119</td>
                   {/* <td>
                      <span>
                        <BsFillTrashFill/>
                        <BsFillPencilFill/>
                      </span>
                   </td> */}

                </tr>


          </tbody>
      </table>
    </div>

    </section>

    
  )
}
