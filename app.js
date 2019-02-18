const vehicles = [
  { type: "car", year: 2013, model: "A", price: 32000 },
  { type: "car", year: 2011, model: "B", price: 4400 },
  { type: "car", year: 2016, model: "B", price: 15500 },
  { type: "truck", year: 2014, model: "D", price: 18000 },
  { type: "truck", year: 2013, model: "E", price: 5200 },
  { type: "convertible", year: 2009, model: "F", price: 2000 },
  { type: "convertible", year: 2010, model: "G", price: 6000 },
  { type: "convertible", year: 2012, model: "H", price: 12500 },
  { type: "convertible", year: 2017, model: "M", price: 50000 }
]

const vehicleTypes = [...new Set(vehicles.map(item => item.type))];
const vehiclePrices = [...new Set(vehicles.map(item => item.price))]

console.log(vehiclePrices);

function TranspoTitle(props){
  return (
      <div>
          <h1>Welcome to React Transportation</h1>
          <h4>The best place to buy vehicles online</h4>
      </div>

  ) 
}

function TranspoOptions(props){
  return (
    <div>
      <p>
      <h2>Choose Option</h2>
    <div>New Only
      <input type="checkbox" id="coding" name="coding" value="coding" checked/>
    </div> 
    </p>
    <label>Select Type</label>
    <select>
          <option value ="All">All</option>
          {props.types.map(item => <option value={item}>{item}</option>)}
    </select>
    </div>
  )
}


function TranspoApp(props){

  return (
      <div>
          <TranspoTitle />
          <TranspoOptions types={vehicleTypes}/>  
      </div>
  )
}



ReactDOM.render(
  <TranspoApp/>,
  document.getElementById("root")
)