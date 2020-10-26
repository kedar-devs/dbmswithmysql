import React, { Component } from 'react';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import img from './john-maravelakis-Vosp2wlY3Bs-unsplash.jpg'
import axios from 'axios';

import styles from './Display.module.css';

const onAdd=(props)=>{
    localStorage.setItem('ID',props.user.SID)
    window.location.replace("update/"+props.user.SID)
}
const ondelete=(props)=>{
    axios.delete('http://localhost:5000/sailor/'+props.user.SID)
    .then(res=>{
        console.log(res.data)
        alert("delete was successful")
      })
    .catch(err=>console.log(err))
    
}
const User=props=>{
        return(
            <div>
                <div className={styles.cardL}>
                <img src={img} variant="top" className={styles.image} alt="couldn't load"/>
                <div className={styles.body}>
                    <div className={styles.title}>SID:{props.user.SID}</div>
                    <div className={styles.subtitle}>Sailors Name:{props.user.SNAME}</div>
                    <div className={styles.subtitle}>Rating:{props.user.RATING}</div>
                    <div className={styles.subtitle}>Age:{props.user.AGE}</div>
                    <div className={styles.box}>
                    <button className={styles.outline} onClick={()=>onAdd(props)}>Update</button>
                    <button  className={styles.outline}  onClick={()=>ondelete(props)}>Delete</button>
                    </div>
                </div>
                </div>
            </div>
        )
    
    
    
}


class DisplayStory extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
        this.state.userlist=this.userlist()
        
    }
    componentDidMount(){
        axios.get('http://localhost:5000/sailor')
        .then(response=>{
            console.log(response.data)
            this.setState({
                user:response.data
            })
            
        })
        .catch(err => console.log(err))
    }
    userlist(){
        console.log('user=',this.state.user)
        return this.state.user.map(currentuser=>{
            console.log(currentuser.SID)
            return<User user={currentuser} key={currentuser.SID}/>
        })
    }
    render() {
        return (
            <Router>
            <div>
                <div className={styles.user}>
                {this.userlist()}
                </div> 
            
            </div>
            </Router>
        )
    }
}

export default DisplayStory
