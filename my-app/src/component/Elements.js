import React, { Component } from 'react';
import axios from 'axios';
import logo from './fredrick-filix-U9_pRASawlc-unsplash.jpg';
import styles from "./Additems.module.css"
class Elements extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        
        this.warningref=React.createRef()
        this.state = {
          //SID:0,
          sname:'' ,
          rating:0,
          age:0
        }
      }
      onChange(e){
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault()
        const sailor = {
          SNAME: this.state.sname,
          RATING: this.state.rating,
          AGE:this.state.age
        }
        var id=localStorage.getItem('ID')
        console.log(this.props.match.params.id)
        axios.patch('http://localhost:5000/sailor/'+id, sailor)
          .then(res =>{ 
            alert('update was successful')
            console.log(res.data)})
          .catch(err =>{ console.log('ERROR:' + err)
            this.warningref.current.innerText="*Opps not you Sorry! its our fault!Please try again in a while*"
          })
        
      }
      render() {
        
        return (
          <div className={styles.addpage} data-aos="fade-down">
            <img src={logo} alt="savishkar logo" />
                 <form   method="post" className={styles.addform}>
                    <h2>Update a Sailor</h2>
                    <p ref={this.warningref} ></p>
                    <input type="text" id="sname" placeholder="Sailors Name" name="sname" value={this.state.sname} onChange={this.onChange} required/>
                    {/* <input type="file" className=""  placeholder="Submit .txt or .docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/> */}
                    <input type="number" placeholder="Rating" onChange={this.onChange} name="rating" id="rating" required/>   
                    <input type="number" id="age" placeholder="Age" name="age" value={this.state.age} onChange={this.onChange} />
                    <button type="submit" onClick={this.onSubmit}>Submit</button>
                    <p style={{color:"yellow"}}>by Kedar devasthali</p>
                 </form>            
        </div>
        )
        
        
      }
    }
    

export default Elements
