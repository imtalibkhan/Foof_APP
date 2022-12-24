import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>shipping</h1>

        <form>
          <div>
            <label htmlFor="">H.No</label>
            <input type="text" placeholder="Enter house Number" />
          </div>

          <div>
            <label htmlFor="">City</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div>
            <label htmlFor="">Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode}>{i.name}</option>
                ))}
              {/* <option value="">India</option> */}
            </select>
          </div>

          <div>
            
            <label>State</label>
            <select>

              <option value="">State</option>
            
              {State &&
                State.getStatesOfCountry("US").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
                
              {/* <option value="">Maharashtra</option> */}
            </select>
          </div>

          <div>
            <label htmlFor="">PinCode</label>
            <input type="text" placeholder="Enter Pincode" />
          </div>

          <div>
            <label htmlFor="">Mob.No</label>
            <input type="text" placeholder="Enter phone No" />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
