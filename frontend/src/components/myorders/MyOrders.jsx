import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai"

const MyOrders = () => {

    const arr= [1,2,3,4,5];
    
  return (
    <section className="tableclass">
      <main>
        <table>
          <thead>
            <tr>
              <th>order id</th>
              <th>status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment method</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {

            
           arr.map(i=>(

            <tr key={i}>
                <td>#jsfdkoi</td>
                <td>Processing</td>
                <td>23</td>
                <td>{12345}</td>
                <td>Cod</td>
                <td> <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                    </Link> 
                    </td>

            </tr>
           ))
}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
