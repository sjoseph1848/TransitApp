function TranspoTitle(props){
  return (
      <div>
          <h1>Welcome to React Transportation</h1>
          <h4>The best place to buy vehicles online</h4>
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
          <TranspoTitle />
          <ShoppingTotal/>
          <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>

          <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
          <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
          
      </div>
  )
}



ReactDOM.render(
  <TranspoApp/>,
  document.getElementById("root")
)