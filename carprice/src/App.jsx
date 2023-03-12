import { useState ,useEffect} from 'react'
import { motion,useScroll } from "framer-motion";
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from  './components/Navbar'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/forms')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []); 
  console.log(data)
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [brand, setBrand] = useState('');
  const [carmodel, setCarmodel] = useState('');
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [owner, setOwner] = useState('');
  const[seller,setSeller]=useState('');
  const [purchaseYear, setPurchaseYear] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [price,setPrice]=useState();
  const handleAttributeChange = (event) => {
    setSelectedAttribute(event.target.value);
    setBrand(selectedAttribute);
  };
    
  
  const handleCarmodelChange = (event) => {
    setCarmodel(event.target.value);
  };

  const handleFuelChange = (event) => {
    setFuel(event.target.value);
  };

  const handleTransmissionChange = (event) => {
    setTransmission(event.target.value);
  };
  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handlePurchaseYearChange = (event) => {
    setPurchaseYear(event.target.value);
  };
  const handleSellerChange=(event)=>{
    setSeller(event.target.value);
  }
  const handleKmDrivenChange = (event) => {
    setKmDriven(event.target.value);
  };
  
  const dataprice="";
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataframe={"fuel":[fuel],"km_driven":kmDriven,"name":carmodel,"owner":owner,"seller_type":seller, "transmission":transmission,"year":purchaseYear }
    // do something with the form data
    fetch('http://127.0.0.1:5000/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dataframe)
})
  .then(response => response.json())
  .then(dataprice => {console.log(dataprice);setPrice(dataprice)})
  .catch(error => console.error(error));
  console.log(dataframe);
console.log(dataprice);


  };
  let brandedcar=[]
  let uniquebrand=[]
 if(selectedAttribute!==null)
 {
  console.log("selected");
  console.log(selectedAttribute);
 brandedcar= data.filter(name =>name.brand===selectedAttribute);
//  console.log(brandedcar)
for (let x of data)
{
  
  if (!uniquebrand.includes(x.brand ))
  {
    uniquebrand.push(x.brand);
  }
}

 }

  return (
    <>
  
<Navbar/>

<div className="stl forma">
 
<motion.svg initial={{opacity:0}} transition={{duration:5}} animate={{opacity:1}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blobx'>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#6A0DAD"/>
  <stop offset="50%" stopColor="#6A0DAD"/>
  <stop offset="50%" stopColor="#1E90FF"/>
  <stop offset="75%" stopColor="#6A0DAD"/>
  <stop offset="100%" stopColor="#1E90FF"/>

    </linearGradient>
  </defs>
		<path fill="url(#gradient)" d="M58.1,-35.1C69.5,-13.9,68.7,12.7,57,34.3C45.3,55.9,22.7,72.5,3.2,70.6C-16.2,68.7,-32.4,48.4,-41.7,28.2C-51,7.9,-53.5,-12.2,-45.4,-31.5C-37.3,-50.9,-18.6,-69.4,2.4,-70.8C23.4,-72.2,46.8,-56.3,58.1,-35.1Z" transform="translate(100 100)">
			<animate attributeName="d" dur="4s" repeatCount="indefinite" values="
				M58.1,-35.1C69.5,-13.9,68.7,12.7,57,34.3C45.3,55.9,22.7,72.5,3.2,70.6C-16.2,68.7,-32.4,48.4,-41.7,28.2C-51,7.9,-53.5,-12.2,-45.4,-31.5C-37.3,-50.9,-18.6,-69.4,2.4,-70.8C23.4,-72.2,46.8,-56.3,58.1,-35.1Z;
				M45.3,-23.1C58.8,-2.7,70.1,22.1,62.1,37.7C54.2,53.3,27.1,59.6,3,57.9C-21.1,56.1,-42.2,46.3,-50,30.9C-57.8,15.4,-52.3,-5.8,-41.7,-24.5C-31.2,-43.2,-15.6,-59.5,0.1,-59.5C15.9,-59.6,31.7,-43.5,45.3,-23.1Z;
				M53.8,-33.4C64.6,-12.2,64.9,12.7,54.1,26.1C43.4,39.6,21.7,41.6,1.6,40.7C-18.6,39.8,-37.1,36,-42.7,25.5C-48.3,15,-41,-2.2,-31.7,-22.5C-22.4,-42.8,-11.2,-66.2,5.1,-69.2C21.5,-72.1,42.9,-54.6,53.8,-33.4Z;
        M41.4,-22C48.5,-11.7,45.4,6.4,36.9,18.8C28.3,31.2,14.1,37.9,-6.6,41.7C-27.3,45.5,-54.7,46.4,-68.7,30.9C-82.8,15.4,-83.5,-16.6,-69.8,-30.8C-56.2,-45,-28.1,-41.3,-5.5,-38.2C17.2,-35,34.3,-32.4,41.4,-22Z;
        M58.1,-35.1C69.5,-13.9,68.7,12.7,57,34.3C45.3,55.9,22.7,72.5,3.2,70.6C-16.2,68.7,-32.4,48.4,-41.7,28.2C-51,7.9,-53.5,-12.2,-45.4,-31.5C-37.3,-50.9,-18.6,-69.4,2.4,-70.8C23.4,-72.2,46.8,-56.3,58.1,-35.1Z;"
			></animate></path></motion.svg>



<div className="container d-flex justify-content-center">
<form className="row g-3" onSubmit={handleSubmit}>
  <h1 className='text-center'>Car details</h1>

  <div className="col-md-6">
    <label htmlFor="brand" className="form-label">Brand</label>
    <select id="brand" className="form-select" value={selectedAttribute} onChange={handleAttributeChange}>
      <option>Choose...</option>
      {uniquebrand.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  </div>

  <div className="col-md-6">
    <label htmlFor="car-model" className="form-label">Car Model</label>
    <select id="car-model" className="form-select" value={carmodel} onChange={handleCarmodelChange} disabled={!selectedAttribute}>
      <option selected>Choose...</option>
      {brandedcar.map(item => (
        <option key={item.encoding} value={item.encoding}>{item.name}</option>
      ))}
    </select>
  </div>

  <div className="col-md-6">
    <label htmlFor="fuel" className="form-label">Fuel</label>
    <select id="fuel" className="form-select" value={fuel} onChange={handleFuelChange}>
      <option selected>Choose...</option>
      <option value="4">Petrol</option>
      <option value="1">Diesel</option>
      <option value="0">CNG</option>
      <option value="3">LPG</option>
      <option value="2">Electric</option>
    </select>
  </div>

  <div className="col-md-6">
    <label htmlFor="transmission" className="form-label">Transmission</label>
    <select id="transmission" className="form-select" value={transmission} onChange={handleTransmissionChange}>
      <option selected>Choose...</option>
      <option value="1">Manual</option>
      <option value="0">Automatic</option>
    </select>
  </div>

  <div className="col-md-6">
    <label htmlFor="purchase-year" className='form-label'>Purchase Year</label>
    <input id="purchase-year" className='form-control' type="number"  value={purchaseYear} onChange={handlePurchaseYearChange}/>
  </div>

  <div className="col-md-6">
    <label htmlFor="owner" className="form-label">Owner</label>
    <select id="owner" className="form-select" value={owner} onChange={handleOwnerChange}>
      <option selected>Choose...</option>
      <option value="0">First Owner</option>
      <option value="2">Second Owner</option>
      <option value="4">Third Owner</option>
      <option value="1">Fourth & Above Owner</option>
      <option value="3">Test Drive Car</option>
    </select>
  </div>

  <div className="col-md-6">
    <label htmlFor="purchase-year" className='form-label'>Kms Driven</label>
    <input id="purchase-year" className='form-control' type="number"  value={kmDriven} onChange={handleKmDrivenChange}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="owner" className="form-label">Seller Type</label>
    <select id="owner" className="form-select" value={seller} onChange={handleSellerChange}>
      <option selected>Choose...</option>
      <option value="1">Individual</option>
      <option value="0">Dealer</option>
      <option value="2">Trustmark Dealer</option>
   
    </select>
  </div>
 

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Calculate Price</button>
  </div>
  <h5><span>Predicted Price:</span><span>{price}</span></h5>
</form>

</div>
</div>



</>
  )
}

export default App
