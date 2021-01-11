import './App.css';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name : "Kimchi",
    image: 
      "https://image.edaily.co.kr/images/photo/files/NP/S/2018/11/PS18112701515.jpg",
    rating : 4.9
  },
  {
    id:2,
    name : "Samgyeopsal",
    image: 
      "https://www.amnews.co.kr/news/photo/202002/40812_28549_4253.jpg",
    rating : 4.8
  },
  {
    id:3,
    name : "Bibimbap",
    image: 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu2cGmVhJAfa_F4xOS-b42mUw7Rk5fNHD1A&usqp=CAU",
    rating : 4.5
  },
  {
    id:4,
    name : "Doncasu",
    image: 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQ1sRF2VgJwm20ITNrOo277dmYML94bHsvg&usqp=CAU",
    rating : 4.2
  },
]

function Food({ name, picture, rating }) {
  return <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0 </h4>
      <img src={picture} alt={name}/>
    </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};

function App() {
  return (
    <div>
        <h1>Hello</h1>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
          ))}
    </div>
  );
}

export default App;
