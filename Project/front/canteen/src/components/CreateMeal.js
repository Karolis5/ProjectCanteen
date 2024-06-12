// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// const CreateMeal = () => {
//   const [meal, setMeal] = useState({
//     name: "",
//     description: "",
//     price: 0,
//     picture: "",
//     quantity: 0,
//     category: "",
//   });
//   const navigate = useNavigate();

//   const createMeal = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/api/meals", meal).then((response) => {
//       console.log(response.data);
//       navigate("/");
//     });
//   };

//   return (
    
//     <form className="meal-form" onSubmit={createMeal}>
//       <h2 className="create-text">Add a meal.</h2>
//       <input
//         type="text"
//         className="meal-input"
//         placeholder="Name"
//         onChange={(e) => setMeal({ ...meal, name: e.target.value })}
//       />
//       <input
//         type="text"
//         className="meal-input"
//         placeholder="Description"
//         onChange={(e) => setMeal({ ...meal, description: e.target.value })}
//       />
//       <input
//         type="number"
//         className="meal-input"
//         placeholder="Price"
//         onChange={(e) => setMeal({ ...meal, price: e.target.value })}
//       />
//       <input
//         type="text"
//         className="meal-input"
//         placeholder="Picture URL"
//         onChange={(e) => setMeal({ ...meal, picture: e.target.value })}
//       />
//       <input
//         type="number"
//         className="meal-input"
//         placeholder="Quantity"
//         onChange={(e) => setMeal({ ...meal, quantity: e.target.value })}
//       />
//       <input
//         type="text"
//         className="meal-input"
//         placeholder="Category"
//         onChange={(e) => setMeal({ ...meal, category: e.target.value })}
//       />
//       <button type="submit" className="meal-button">
//         Create
//       </button>
//     </form>
//   );
// };

// export default CreateMeal;




import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CreateMeal = () => {
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    quantity: 0,
    category: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
 
    axios.get('http://localhost:8080/api/auth/check-role')
      .then(response => {
        if (response.data.role === 'ROLE_ADMIN') {
          setIsAdmin(true);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const createMeal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/meals", meal)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch(error => console.error("There was an error creating the meal!", error));
  };


  return(
    <form className="meal-form" onSubmit={createMeal}>
      <h2 className="create-text">Add a meal.</h2>
      <input
        type="text"
        className="meal-input"
        placeholder="Name"
        value={meal.name}
        onChange={(e) => setMeal({ ...meal, name: e.target.value })}
      />
      <input
        type="text"
        className="meal-input"
        placeholder="Description"
        value={meal.description}
        onChange={(e) => setMeal({ ...meal, description: e.target.value })}
      />
      <input
        type="number"
        className="meal-input"
        placeholder="Price"
        value={meal.price}
        onChange={(e) => setMeal({ ...meal, price: Number(e.target.value) })}
      />
      <input
        type="text"
        className="meal-input"
        placeholder="Picture URL"
        value={meal.picture}
        onChange={(e) => setMeal({ ...meal, picture: e.target.value })}
      />
      <input
        type="number"
        className="meal-input"
        placeholder="Quantity"
        value={meal.quantity}
        onChange={(e) => setMeal({ ...meal, quantity: Number(e.target.value) })}
      />
      <input
        type="text"
        className="meal-input"
        placeholder="Category"
        value={meal.category}
        onChange={(e) => setMeal({ ...meal, category: e.target.value })}
      />
      <button type="submit" className="meal-button">
        Create
      </button>
    </form>
  )
};

export default CreateMeal;
