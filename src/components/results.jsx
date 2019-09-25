import React, { Component } from 'react';
import axios from 'axios';
import img from '../images/modiji.png';

class Results extends Component {
    constructor(props) {
      super(props);
       
  
      this.state = {
         id:String,
        listData:[]
  
        }
       this.state.id= JSON.parse(localStorage.getItem("selectedid"));
        this.getresults = this.getresults.bind(this);
      
    
      };
      componentDidMount() {
    
    
        this.getresults();
      
        //this.getmyposition();
    
      }
    
     async  getresults() {
      
     
   await     axios.get("https://livescore.sportstarlive.com/api/cricket/current-scorecard/test/"+this.state.id+"/test").then(response=>{
        
 
        this.state.listData.push(response.data);
 
        this.setState({ listData: this.state.listData });
        
         console.log(this.state.listData.length)
        
      alert(this.state.listData)
      })
  
  
  
    }

  
  
  
    render() {
  
  
  
      return (
        <div >{this.state.listData.length>0?(
            <div>
            {this.state.listData.map((a,index)=>(
            
           <section>
  <div className="container py-3">
            <div className="card">
      <div className="row ">
        <div className="col-md-4">
            <br/>
            <br/>
            <br/>
            <br/>
          
           {a.data.map((b)=>
        
                <div>
        <h4 className="card-title">OVERS:{b.Total.overs}
        <br/>
        runs_scored:{b.Total.runs_scored}<br/>
        wickets:{b.Total.wickets}
        </h4> 
          
              
              </div>
           )}
      
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
            <img src={img} />
            </div>
          </div>

        </div>
      </div>

      </div>
            </section>))}</div>):([])}
    </div>  
      );
    }
  
  }
  
  export default Results;
