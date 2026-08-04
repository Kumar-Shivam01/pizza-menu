import './App.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}
function Header(){
  return(
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
    
  )
}
function Menu(){
  return (
    <main className="menu">
    <h2>Our menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    </main>
  )
}
function Footer(){
  //const hour = new Date().getHours();
  //const openHour = 12, closeHour = 22;
 // hour >= openHour && hour <= closeHour ? alert("we are currently open!"):alert("Sorry we are closed!")

  return(
    <footer className="footer">{new Date().toLocaleDateString()} We are currently open!</footer>
  )

  
}
function Pizza(){
  return (
    <div className='pizza'>
    <h3>Focaccia</h3>
    <img src="pizzas/focaccia.jpg" alt="pizza focaccia" />
    <p>Bread with italian olive oil and rosemary</p>
    </div>
  
  )
 }
export default App
