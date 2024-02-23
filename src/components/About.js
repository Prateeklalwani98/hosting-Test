import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AboutPage() {
  const [allItms, updateAllItms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseInv = await axios.get(
          "https://ys-im-server-fhfw.onrender.com/products"
        );
        const data = Object.entries(responseInv.data);
        updateAllItms(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <table>
        <tbody>
          {allItms.map(([product, quantity], index) => (
            <tr key={index}>
              <td>{product}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// export default function AboutPage() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("/api/items")
//       .then((res) => res.json())
//       .then((data) => setItems(data));
//   }, []);

//   function renderItems() {
//     return items.map((item, i) => {
//       return (
//         <div key={i}>
//           <h3>{item.name}</h3>
//           <h4>Price: {item.price}</h4>
//         </div>
//       );
//     });
//   }
//   return (
//     <div>
//       <h2>About Page</h2>
//       {renderItems()}
//     </div>
//   );
// }
