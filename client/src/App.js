import React from 'react';
import  axios from './config/axios'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      students:[]
    }
  }

  componentDidMount(){
    axios.get('/students')
         .then((response)=>{
           const students=response.data
           this.setState({students})
         })
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.students.map((students) =>{
            return <li key={students.id}>{students.name}</li>
          })}

        </ul>

      </div>
    )

    
  }
}

export default App;
