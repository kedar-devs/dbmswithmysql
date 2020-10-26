import React, { Component } from 'react';
import axios from 'axios';
import logo from './fredrick-filix-U9_pRASawlc-unsplash.jpg';
import styles from "./Additems.module.css"
// import './../css/adding.css'
class AddPaint extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    
    this.warningref=React.createRef()
    this.state = {
      sid:0,
      sname:'' ,
      rating:0,
      age:0
    }
  }
  onChange(e){
    console.log("n here")
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    if(this.state.rating>10){
      this.warningref.current.innerText="rating cannot be greater than 10"
    }
    if(this.state.age<18){
      this.warningref.current.innerText="age cannot be lesser than 18"
    }
    const sailor = {
      SID: this.state.sid,
      SNAME: this.state.sname,
      RATING: this.state.rating,
      AGE:this.state.age
    }
    console.log(sailor)
    axios.post('http://localhost:5000/sailoradd',sailor)
      .then(res =>{ 
        alert('sailor added successfully')
        console.log(res.data)})
      .catch(err =>{ console.log('ERROR:' + err)
        //this.warningref.current.innerText="*Opps not you Sorry! its our fault!Please try again in a while*"
      })
    
  }
  render() {
    
    return (
      <div className={styles.addpage} data-aos="fade-down">
        <img src={logo} alt="savishkar logo" />
             <form  method="post" className={styles.addform}>
                <h2>Add a Sailor</h2>
                <p ref={this.warningref} style={{color:'red'}}></p>
                <input type="number" id="sid" placeholder="SID" name="sid"  onChange={this.onChange} required/>
                <input type="text" id="sname" placeholder="Sailors Name" name="sname" value={this.state.sname} onChange={this.onChange} required/>
                {/* <input type="file" className=""  placeholder="Submit .txt or .docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/> */}
                <input type="number" id="rating" placeholder="Rating" onChange={this.onChange} name="rating"required/>   
                <input type="number" id="age" placeholder="Age" name="age"  onChange={this.onChange} />
                <p style={{color:"yellow"}}>by Kedar devasthali</p>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
                
             </form>            
    </div>
    )
    
    
  }
}

export default AddPaint
      //<div className="container-fluid background1">
      //   <br /><br /><br /><br />
      //   <div className="row back col-md-12">
      //     <div className="col-md-6 col-sm-6 img-pos">
      //       <img src={pic} alt='sorry could not load' className="img-fluid" />
      //     </div>
      //     <div className="col-md-6 col-sm-6 cont-pos">
      //       <form encType="multipart/form-data" action="/paint/add" method="post">
      //         <div className="form-row">
      //           <div className="form-group col-md-6">
      //             <label>Title</label>
      //             <input type="text" className="form-control input" id="title" placeholder="title" name="title" value={this.state.title} onChange={this.onChange} />
      //           </div>
      //           <div className="form-group col-md-6">
      //             <label>painter</label>
      //             <input type="text" className="form-control input" id="painter" placeholder="creator's name" name="painter" value={this.state.painter} onChange={this.onChange} />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <label>Content</label>
      //           <input type="file" className="form-control input" id="content" placeholder="single jpg or png file " name="content"  onChange={this.contentadd} />
      //         </div>
      //         <div className="form-group">
      //           <label>Date</label>
      //           <input type="date" className="form-control input" id="date" placeholder="date" name="date" value={this.state.date} onChange={this.onChange} />
      //         </div>

      //         <button type="submit" className="btn btn-primary">Submit</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>