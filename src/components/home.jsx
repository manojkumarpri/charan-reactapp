import React, { Component } from 'react';
import axios from 'axios';
import img from '../images/modiji.png';

class Home extends Component {
    constructor(props) {
      super(props);
       
  
      this.state = {
       
        listData1:{},
        listData:[]
  
        }
        this.get = this.get.bind(this);
        this.addteam=this.addteam.bind(this);
        alert("haii");
    
      };
      componentDidMount() {
    
    
        this.get();
      
        //this.getmyposition();
    
      }
    
     async  get() {
      
     
   await     axios.get("https://livescore.sportstarlive.com/api/cricket/fixtures/C1m/widget").then(response=>{
        
 
         this.state.listData.push(response.data)
 
        this.setState({ listData: this.state.listData });
        
         
       
      alert(this.state.listData)
      })
  
  
  
    }
addteam(id){
    localStorage.setItem('selectedid',JSON.stringify(id));

    this.props.history.push('/results'+"/"+id);
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
          
           
        
                <div>
        <h4 className="card-title">{a.data.results[0].away_team[0].team_full_name} VS {a.data.results[0].home_team[0].team_full_name}</h4> 
          
              <button  className="btn btn-primary" type="button" onClick={() => this.addteam(a.data.results[0].fixture_id)}>View Results</button>
              </div>
      
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
  
  export default Home;
