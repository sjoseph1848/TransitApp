function ShoppingTitle(props){
  return (
      <div>
          <h1>{props.title}</h1>
          <h2>Total Number of Items: {props.numItems}</h2>
      </div>

  ) 
}

function ShoppingTotal(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Total Cost of Items: {props.totalCost}</h2>
    </div>
  )
}


function ListItem(props){
  return <li>{props.item}</li>
}

function ShoppingList(props){
  return (
      <div>
          <h3>{props.header}</h3>
          <ol>
              <ListItem item = {props.items[0]}/>
              <ListItem item = {props.items[1]}/>
              <ListItem item = {props.items[2]}/>
          </ol>
      </div>
  )
}



function TranspoApp(props){

  return (
      <div>
          <ShoppingTitle title = "My Shopping List" numItems = "9"/>
          <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>
          <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
          <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
          <ShoppingTotal title = "This is how much ya owe" totalCost = "$56"/>
      </div>
  )
}



ReactDOM.render(
  <TranspoApp/>,
  document.getElementById("root")
)