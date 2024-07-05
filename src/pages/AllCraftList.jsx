import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AllCraftListCard from "./AllCraftListCard";

const AllCraftList = () => {
  const { loading } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  const url ="https://assignment-10-jute-home-decor-server.vercel.app/craft";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, []);

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }

  return (
    <div>
      <>
      <h2 className=" mt-20 mb-6 text-2xl font-bold text-center text-blue-800">
        All Art & Craft Items
      </h2>
      <div className="grid grid-cols-1 gap-10 container mx-auto mt-6 mb-6">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Craft Name</th>
                <th>Price</th>
                <th>Stock Status</th>
              </tr>
            </thead>
            {crafts.map((craft) => (
              <AllCraftListCard key={craft._id} craft={craft}></AllCraftListCard>
            ))}
          </table>
        </div>
      </div>
    </>
    </div>
  );
};

export default AllCraftList;
