// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // import useNavigate
// import "./style.css";

// const MealComponent = () => {
//   const [meals, setMeals] = useState([]);
//   const [meal, setMeal] = useState({name: '', description: '', price: 0, picture: '', quantity: 0, category: ''});
//   const [editId, setEditId] = useState(null);
//   const navigate = useNavigate(); // initialize useNavigate
//   const [isAdmin, setIsAdmin] = useState(false); // add a state to check if user is admin

//   //  //Problems here------------------------------------------------------------------------------------------------------- 
//   useEffect(() => {
//     axios.get('http://localhost:8080/api/auth/check-role')
//       .then(response => {
//         if (response.data.role === 'ROLE_ADMIN') {
//           setIsAdmin(true);
//         }
//       })
//       .catch(error => console.error(error));
//   }, []);

//   // GET request
//   useEffect(() => {
//     axios.get('http://localhost:8080/api/meals')
//       .then(response => setMeals(response.data));
//   }, []);

//   // PUT request
//   const updateMeal = (e) => {
//     e.preventDefault();
//     // if (!isAdmin) return; //Problems here------------------------------------------------------------------------------------------------------- 
//     axios.put(`http://localhost:8080/api/meals/${editId}`, meal)
//       .then(response => setMeals(prevMeals => prevMeals.map(m => m.id === editId ? response.data : m)));
//   };

//   // DELETE request
//   const deleteMeal = (id) => {
//     // if (!isAdmin) return;  //Problems here------------------------------------------------------------------------------------------------------- 
//     axios.delete(`http://localhost:8080/api/meals/${id}`)
//       .then(() => setMeals(prevMeals => prevMeals.filter(m => m.id !== id)));
//   };

//   return (
//     <div className="meal-container">
//       {/* Render your meals here */} 
//       {meals.map((meal) => (
//         <div key={meal.id} className="meal">
//           <div className="meal-image" style={{backgroundImage: `url(${meal.picture})`}}></div>
//           <h2>{meal.name}</h2>
//           <p>{meal.description}</p>
//           <p>Price: {meal.price}</p>
//           <p>Quantity: {meal.quantity}</p>
//           <p>Category: {meal.category}</p>
//           {/* {isAdmin && ( */}
//             <>
//               <button className="meal-button" onClick={() => setEditId(meal.id)}>Edit</button>
//               <button className="meal-button" onClick={() => deleteMeal(meal.id)}>Delete</button>
//             </>
//           {/* )} */}
//         </div>
//       ))}
      
//       {/* {editId && isAdmin && ( */}
//         <form className="meal-form" onSubmit={updateMeal}>
//           <input type="text" className="meal-input" placeholder="Name" onChange={e => setMeal({...meal, name: e.target.value})} />
//           <input type="text" className="meal-input" placeholder="Description" onChange={e => setMeal({...meal, description: e.target.value})} />
//           <input type="number" className="meal-input" placeholder="Price" onChange={e => setMeal({...meal, price: e.target.value})} />
//           <input type="text" className="meal-input" placeholder="Picture URL" onChange={e => setMeal({...meal, picture: e.target.value})} />
//           <input type="number" className="meal-input" placeholder="Quantity" onChange={e => setMeal({...meal, quantity: e.target.value})} />
//           <input type="text" className="meal-input" placeholder="Category" onChange={e => setMeal({...meal, category: e.target.value})} />
//           <button type="submit" className="meal-button">Update</button>
//         </form>
//       {/* )} */}
// {/* 
//       // {isAdmin && ( */} 

//         <button className="meal-button" onClick={() => navigate('/create')}>Create</button>
//       {/* )} */}
//     </div>
//   );
// };

// export default MealComponent;






//Problems here-------------------------------------------------------------------------------------------------------

// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'; // Import useContext
// import { useNavigate } from 'react-router-dom';
// import { LoginContext } from './LoginProvider'; // Import the LoginContext
// import "./style.css";

// const MealComponent = () => {
//     const [meals, setMeals] = useState([]);
//     const [meal, setMeal] = useState({name: '', description: '', price: 0, picture: '', quantity: 0, category: ''});
//     const [editId, setEditId] = useState(null);
//     const navigate = useNavigate();
//     const { userRole } = useContext(LoginContext); // Use the context to get the userRole
  
//     // GET request
//     useEffect(() => {
//       axios.get('http://localhost:8080/api/meals')
//         .then(response => setMeals(response.data));
//     }, []);
  
//     // PUT request
//     const updateMeal = (e) => {
//       e.preventDefault();
//       axios.put(`http://localhost:8080/api/meals/${editId}`, meal)
//         .then(response => setMeals(prevMeals => prevMeals.map(m => m.id === editId ? response.data : m)));
//     };
  
//     // DELETE request
//     const deleteMeal = (id) => {
//       axios.delete(`http://localhost:8080/api/meals/${id}`)
//         .then(() => setMeals(prevMeals => prevMeals.filter(m => m.id !== id)));
//     };
  
//     return (
//       <div className="meal-container">
//         {/* Render your meals here */}
//         {meals.map((meal) => (
//           <div key={meal.id} className="meal">
//             <div className="meal-image" style={{backgroundImage: `url(${meal.picture})`}}></div>
//             <h2>{meal.name}</h2>
//             <p>{meal.description}</p>
//             <p>Price: {meal.price}</p>
//             <p>Quantity: {meal.quantity}</p>
//             <p>Category: {meal.category}</p>
//             {userRole === 'ROLE_ADMIN' && (
//               <>
//                 <button className="meal-button" onClick={() => setEditId(meal.id)}>Edit</button>
//                 <button className="meal-button" onClick={() => deleteMeal(meal.id)}>Delete</button>
//               </>
//             )}
//           </div>
//         ))}
        
        // {editId && userRole === 'ROLE_ADMIN' && (
        //   <form className="meal-form" onSubmit={updateMeal}>
        //     <input type="text" className="meal-input" placeholder="Name" onChange={e => setMeal({...meal, name: e.target.value})} />
        //     <input type="text" className="meal-input" placeholder="Description" onChange={e => setMeal({...meal, description: e.target.value})} />
        //     <input type="number" className="meal-input" placeholder="Price" onChange={e => setMeal({...meal, price: e.target.value})} />
        //     <input type="text" className="meal-input" placeholder="Picture URL" onChange={e => setMeal({...meal, picture: e.target.value})} />
        //     <input type="number" className="meal-input" placeholder="Quantity" onChange={e => setMeal({...meal, quantity: e.target.value})} />
        //     <input type="text" className="meal-input" placeholder="Category" onChange={e => setMeal({...meal, category: e.target.value})} />
        //     <button type="submit" className="meal-button">Update</button>
        //   </form>
        // )}

//         {userRole === 'ROLE_ADMIN' && (
//           <button className="meal-button" onClick={() => navigate('/create')}>Create</button>
//         )}
//       </div>
//     );
// };

// export default MealComponent;

//Problems here----------------------------------------------------------------------







import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const MealComponent = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({ name: '', description: '', price: 0, picture: '', quantity: 0, category: '' });
  const [editId, setEditId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/check-role')
      .then(response => {
        if (response.data.role === 'ROLE_ADMIN') {
          setIsAdmin(true);
        }
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/meals')
      .then(response => setMeals(response.data))
      .catch(error => console.error(error));
  }, []);

  const updateMeal = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/meals/${editId}`, meal)
      .then(response => setMeals(prevMeals => prevMeals.map(m => m.id === editId ? response.data : m)))
      .finally(() => setShowEditModal(false));
  };

  const deleteMeal = (id) => {
    axios.delete(`http://localhost:8080/api/meals/${id}`)
      .then(() => setMeals(prevMeals => prevMeals.filter(m => m.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="meal-container">
      {meals.map((meal) => (
        <div key={meal.id} className="meal">
          <div className="meal-image" style={{ backgroundImage: `url(${meal.picture})` }}></div>
          <h2>{meal.name}</h2>
          <p>{meal.description}</p>
          <p>Price: {meal.price}</p>
          <p>Quantity: {meal.quantity}</p>
          <p>Category: {meal.category}</p>
          {isAdmin && (
  <>
    <button className="meal-button" onClick={() => { setEditId(meal.id); setShowEditModal(true); }}>Edit</button>
    <button className="meal-button" onClick={() => deleteMeal(meal.id)}>Delete</button>
  </>
)}

        </div>
      ))}

      {showEditModal && editId && isAdmin && (
        <div className="modal">
          <form className="meal-form" onSubmit={updateMeal}>
            <input type="text" className="meal-input" placeholder="Name" onChange={e => setMeal({ ...meal, name: e.target.value })} />
            <input type="text" className="meal-input" placeholder="Description" onChange={e => setMeal({ ...meal, description: e.target.value })} />
            <input type="number" className="meal-input" placeholder="Price" onChange={e => setMeal({ ...meal, price: e.target.value })} />
            <input type="text" className="meal-input" placeholder="Picture URL" onChange={e => setMeal({ ...meal, picture: e.target.value })} />
            <input type="number" className="meal-input" placeholder="Quantity" onChange={e => setMeal({ ...meal, quantity: e.target.value })} />
            <input type="text" className="meal-input" placeholder="Category" onChange={e => setMeal({ ...meal, category: e.target.value })} />
            <button type="submit" className="meal-button">Update</button>
          </form>
          <button className="close-modal-button" onClick={() => setShowEditModal(false)}>Close</button>
        </div>
      )}

      {isAdmin && (
        <button className="meal-button" onClick={() => navigate('/create')}>Create</button>
      )}
    </div>
  );
};

export default MealComponent;
