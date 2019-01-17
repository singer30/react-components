class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      bold: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

//   changeToBold() {
//     this.state({
//       bold: false
//     });
//   }

  onMouseover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={style} 
        onClick={this.onListItemClick.bind(this)} 
        onMouseEnter={this.onMouseover.bind(this)} 
        onMouseLeave={this.onMouseover.bind(this)} 
      >{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.grocery.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList grocery={['food', 'moar food', 'too full', 'no more food please']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
