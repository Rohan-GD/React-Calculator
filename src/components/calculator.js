import React, {Component} from 'react'

class Calculator extends Component
{
  constructor()
  {
    super()
    this.state ={
      no1 : 0,
      no2 : 0,
      temp: 0
    }
    //  bool = 'true'
    this.HandleClickAdd = this.HandleClickAdd.bind(this);
    this.HandleClickSub = this.HandleClickSub.bind(this);
    this.HandleClickMulti = this.HandleClickMulti.bind(this);
    this.HandleClickDiv = this.HandleClickDiv.bind(this);
    this.HandleChange1 = this.HandleChange1.bind(this);
    this.HandleChange2 = this.HandleChange2.bind(this);
  }

  HandleClickAdd()
  {
    this.setState({
      temp: this.state.no1 + this.state.no2
    })
  }
  HandleClickSub()
  {
    this.setState({
      temp: this.state.no1 - this.state.no2
    })
  }
  HandleClickMulti()
  {
    this.setState({
      temp: this.state.no1*this.state.no2
    })
  }
  HandleClickDiv()
  {
    this.setState({
      temp: this.state.no1/this.state.no2
    })
  }

  HandleChange1(e){
    this.setState({no1: Number(e.target.value)})
  }

  HandleChange2(e){
    this.setState({no2: Number(e.target.value)})
  }



 render(){
   return(
     <div class="page"> 
     <section class="screen">
       <div class="display">
       {this.state.temp}
       </div>
         <form class= "input">
           <label>Enter number 1<br/>
           <input  id="number1" value = {this.state.no1}  onChange= {this.HandleChange1}/> 
           </label><br/>
           <label>Enter number 2<br/>
           <input id="number2" value = {this.state.no2}  onChange= {this.HandleChange2}/> 
           </label>
          </form>
      </section>
     <section class="buttons">
       <button onClick={this.HandleClickAdd} class = "addbtn">+</button>
       <button onClick={this.HandleClickSub} class = "subbtn">-</button>
       <button onClick={this.HandleClickMulti} class = "multibtn">x</button>
       <button onClick={this.HandleClickDiv} class = "divbtn">÷</button>
     </section>
     </div>
   )
 }
} 
export default Calculator