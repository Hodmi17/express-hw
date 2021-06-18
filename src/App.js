import React, {Component} from 'react'
import axios from 'axios'
import TodoComponent from './TodoComponent';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[]
    }
  }
  componentDidMount(){
    console.log("something");
    axios.get('https://jsonplaceholder.typicode.com/posts')
    axios.get('http://localhost:3003/',{
      headers:{
        'Access-Control-Allow-Origin': '*'

      }
    })
    .then(res => {
      this.setState({todos: res.data})
    })
   
  
}

render(){
  let items = this.state.todos.map(el =>{
    let li = (<TodoComponent userId={el.userId} id={el.id} title={el.title} body={el.body}/>);
    return li;
  
  })
  console.log('li', items);
  console.log("STATE", this.state);
  return(
    <div>
     <ol>
       {items}
       </ol>
    </div>

    )
  }
}
export default App;
