import React from "react";

const OrderDetail = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order details</h1>
        <div>
          <h1>shippinkg</h1>
          <p>
            <b>Address</b>
            {"fgkui 56ghg kjkjhk"}
          </p>
        </div>

        <div>
          <h1>contact</h1>
          <p>
            <b>Name</b>
            {"Abutaliib"}
          </p>
          <p>
            <b>phone</b>
            {"6678687887"}
          </p>
        </div>

        <div>
          <h1>status</h1>
          <p>
            <b>order status</b>
            {"geting ready"}
          </p>
          <p>
            <b>placed at</b>
            {"23-4-5-6"}
          </p>
          <p>
            <b>delever at</b>
            {"23-4-5-7"}
          </p>
        </div>

        <div>
          <h1>payments</h1>
          <p>
            <b>payments mehtod</b>
            {"online"}
          </p>
          <p>
            <b>payments reference</b> #{"asdfasadfa"}
          </p>
          <p>
            <b>paid at</b>
            {"23-4-5-7"}
          </p>
        </div>

        <div>
          <h1>amount</h1>
          <p>
            <b>items total</b>
            {9876}
          </p>

          <p>
            <b>shipping charge</b>
            {200}
          </p>

          <p>
            <b>taxl</b>
            {765}
          </p>

          <p>
            <b>total</b>
            {200 + 765 + 9876}
          </p>
        </div>

        <article className="abcd">
          <h1>Ordered Items</h1>

          <div className="dahi">
            <h4>cheese burger</h4>

            <div className="dahi">
              <span>{12}</span> X<span>{232}</span> X
            </div>
          </div>


          <div className="dahi">
            <h4> veg cheese burger</h4>

            <div className="dahi">
              <span>{10}</span> X<span>{500}</span> X
            </div>
          </div >

          <div className="dahi">
            <h4>burger frise</h4>

            <div className="dahi">
              <span>{10}</span> X<span>{1800}</span> X
            </div>
          </div>

          <div className="dahi">
            <h4 style={{fontWeight:800}}>Sub total</h4>
            <div style={{fontWeight:800}} >{2132}</div>
          </div>

          
        </article>
      </main>
    </section>
  );
};

export default OrderDetail;
