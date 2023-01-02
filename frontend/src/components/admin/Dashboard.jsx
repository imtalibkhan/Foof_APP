import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,Tooltip,ArcElement, Legend } from "chart.js";


ChartJS.register(Tooltip,ArcElement, Legend )

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "$"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const data = {
    labels:["Preparing","Shipped","Delevered"],
   datasets: [

    {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundcolor: [
          "rgba(159,63,0.1)",
          " rgba(78,63,0.2)",
          "rgba(156,0,0.3)",
        ],
        borderColor: ["rgb(159,63,16)", " rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth:1,
    }
   ]
  };
  return (
    <section className="dashboard">
      <main>
        <article>
          <Box title="Users" value={213}></Box>
          <Box title="Orders" value={213}></Box>

          <Box title="Income" value={213}></Box>
        </article>

        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>
          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
