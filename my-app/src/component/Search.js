import React, { Component } from 'react';
import axios from 'axios';
import logo from './fredrick-filix-U9_pRASawlc-unsplash.jpg';
import styles from "./Additems.module.css"
// import './../css/adding.css'
class Search extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.contentadd=this.contentadd.bind(this)
    this.warningref=React.createRef()
    this.state = {
      sid:0,
      sname:'' ,
      rating:0,
      age:0,
      arrivel:false,
      sailor:[]

    }
  }
  contentadd= async e=>{
    this.setState({
      content:e.target.files[0]
    })
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(this.state.sid)
    axios.get('http://localhost:5000/sailor/'+this.state.sid)
      .then(res =>{ 
        console.log(res.data)
        const sailor=res.data
        console.log(sailor)
        this.setState({
            sailor:res.data,
            arrivel:true
        })
        this.state.sailor.map(sailor =>{alert("searched sailor found with id:"+sailor.SID+' name:'+sailor.SNAME+' of Age'+sailor.AGE+' with Rating'+sailor.RATING);})
        
        
    
    })
      .catch(err =>{ console.log('ERROR:' + err)
        this.warningref.current.innerText="*No Sailor Exist*"
      })
    
  }
  render() {
    
    
    return (
      <div className={styles.addpage} data-aos="fade-down">
        <img src={logo} alt="savishkar logo" />
             <form  method="post" className={styles.addform}>
                <h2>Finding a Sailor</h2>
                <p ref={this.warningref} ></p>
                <input type="number" id="sid" placeholder="SID" name="sid" value={this.state.title} onChange={this.onChange} required/>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
                {this.state.arrivel?this.state.sailor.map(sailor=>{return(<div className="text-center" style={{color:'white'}}>
                    <h2>Details of the sailor are as follors</h2>
                    <h4>SID:{sailor.SID}</h4>
                    <h5>SNAME:{sailor.SNAME}</h5>
                    <h5>Rating:{sailor.RATING}</h5>
                    <h5>Age:{sailor.AGE}</h5>
                </div>)}):<div style={{color:'red'}}>No Sailor Found</div>}
                <p style={{color:"yellow"}}>by Kedar devasthali</p>
             </form>            
    </div>
    )
    
    
  }
}
export default Search