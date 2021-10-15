import {Component} from 'react'
import GameNavBar from '../../components/Navs/GameNavBar'

export default class AnimalsPage extends Component{
render (){
    let animals = this.props.animals

            return (
                <>
                <br></br>
                      {GameNavBar()}
                    <div>  
                        <h1>Animals:</h1>
                          {
                              animals.map(animal => 
                              <div  key = {animal.id}>
                                <h2><u> {animal.name}</u></h2> 
                                 <h4>
                                    cost: {animal.cost} <br></br>
                                    requirements: {animal.requirements} <br></br>
                                    produces: {animal.produce}<br></br>
                                    5 heart sell price: {animal.sell_price}<br></br>
                                 
                                 </h4> 
                                 
                                </div>
                              )
                          }  
                    </div>
    
                </>
                )
            }
        }