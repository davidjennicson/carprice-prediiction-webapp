import React from 'react'

function Form() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/forms')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []); 
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [brand, setBrand] = useState('');
  const [carmodel, setCarmodel] = useState('');
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [owner, setOwner] = useState('');
  const[seller,setSeller]=useState('');
  const [purchaseYear, setPurchaseYear] = useState('');
  const [kmDriven, setKmDriven] = useState('');
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

  const handleKmDrivenChange = (event) => {
    setKmDriven(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataframe={"fuel":fuel,"km_driven":kmDriven,"name":carmodel,"owner":owner,"seller_type":sell}
    // do something with the form data
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
      <option value="1">Fourth &amp; Above Owner</option>
      <option value="3">Test Drive Car</option>
    </select>
  </div>

  <div className="col-md-12">
    <label htmlFor="kms-driven">Kms Driven</label>
    <input id="kms-driven" type="number" className='form-control' value={kmDriven} onChange={handleKmDrivenChange}/>
  </div>

 

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Calculate Price</button>
  </div>
</form>

</div>
</div>



</>
  )
}

export default Form