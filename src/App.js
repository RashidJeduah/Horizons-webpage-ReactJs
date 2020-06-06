import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
      <div style= {{width: '100%', height: '100%'}}>
        <div style= {{display: 'flex', width: '100%', height: '80px'}}>
          <div style= {{textAlign:'', width: '33%'}}>
            <img src= 'images/horizonslogo.png' width='200px' height= '60px' style={{padding: '10px 10px 10px 40px',}} />
          </div>
          <div style= {{padding: '10px', textAlign:'center', width: '33%'}}>
            <img src='images/ghana.png' width= '25px' height= '20px' style= {{padding:'5px'}}></img>
            <img src='images/nigeria.png' width= '25px' height= '20px' style= {{padding:'5px'}}></img>
            <img src='images/kenya.png' width= '25px' height= '20px' style= {{padding:'5px'}}></img>
          </div>
          <div style= {{ textAlign:'right', width: '33%', padding:'10px'}}>
            <a href='#' style={{fontSize:'20px', paddingRight:'60px', textDecoration:'none', color:'black'}}>ABOUT US</a>
          </div>
        </div>
        
        <div style={{marginBottom:'120px'}}>
          <img src='images/hohyeong-lee.jpg' width='100%' height='600px'/>
        </div>        
        <div>
          <p style={{textAlign:'center', fontSize:'23px'}}>PLANS</p><br></br>
        </div>
        <div style= {{display: 'flex', justifyContent: 'space-evenly', width: '100%', height: '500px', marginBottom:'100px'}} >
          
          <div style= {{width:'21%',height:'90%', border:'0.5px solid grey', padding:'5px', borderRadius:'4px'}}>
            <img src= 'images/virtual.jpg' width='100%' height='50%'></img><br></br><br/>
            <p style= {{textAlign:'center', fontSize:'25px', lineHeight:'10px'}}>VIRTUAL OFFICES</p>
            <p style= {{textAlign:'center', padding:'8px', fontSize:'15px'}}>
              Our virtual offices allow your business to get our location address, 
              phone services and also you become a member of our community with 
              benefits such as access to our meeting rooms.
            </p>
          </div>
          <div style= {{width:'21%',height:'90%',  border:'0.5px solid grey', padding:'5px', borderRadius:'4px'}}>
            <img src= 'images/customized.jpg' width='100%' height='50%'></img><br></br><br/>
            <p style= {{textAlign:'center', fontSize:'25px', lineHeight:'10px'}}>CUSTOMIZED OFFICES</p>
            <p style= {{textAlign:'center', padding:'8px', fontSize:'15px'}}>
              Our customized offices offer a great location for your business 
              and you can custimize your office to suit your preferences. 
              Also, you become a member of our community with benefits such 
              as access to our meeting rooms.
            </p>
          </div>
          <div style= {{width:'21%',height:'90%',  border:'0.5px solid grey', padding:'5px', borderRadius:'4px'}}>
            <img src= 'images/serviced.jpg' width='100%' height='50%'></img><br></br><br/>
            <p style= {{textAlign:'center', fontSize:'25px', lineHeight:'10px'}}>SERVICED OFFICES</p>
            <p style= {{textAlign:'center', padding:'8px', fontSize:'15px'}}>
              Our customized offices offer a great location for your business 
              and we provide services such as internet, utilities and 
              offers from our partners. Also, you become a member of our
              community with benefits such as access to our meeting rooms.
            </p>
          </div>
          <div style= {{width:'21%',height:'90%',  border:'0.5px solid grey', padding:'5px', borderRadius:'4px'}}>
            <img src= 'images/meetingroom.jpg' width='100%' height='50%'></img><br></br><br/>
            <p style= {{textAlign:'center', fontSize:'25px', lineHeight:'10px'}}>MEETING ROOMS</p>
            <p style= {{textAlign:'center', padding:'8px', fontSize:'15px'}}>
              Our meeting rooms offer a great location for your meeting with your
              clients or business partners. We provide presentation equipment and 
              coffee. Also, you become a member of our community with benefits 
              such as access to our meeting rooms.
            </p>
          </div>
        </div>
        <div style= {{display: 'flex', justifyContent: 'space-evenly', width: '100%', background:'darkblue', paddingTop:'15px'}}>
          <div style={{textAlign: 'center', }}>
            <p style={{color:'gold', paddingRight:'30px', fontSize:'20px', lineHeight:'10px'}}>VISIT US IN KENYA</p>
            <p style={{color:'lightgreen', paddingRight:'30px', lineHeight:'10px'}}>Nairobi, Kenya</p>
            <p style={{color:'white', paddingRight:'30px'}}>
              Belgravia Centre, 14 Riverside drive,<br></br>
              4th floor, Off Riverside Drive<br></br>
              Hanover Centre, 14 Riverside Drive<br></br>
              6th floor, Off Riverside Drive
            </p>
          </div>
          <div style={{textAlign: 'center', }}>
            <p style={{color:'gold', paddingRight:'20px', fontSize:'20px', lineHeight:'10px'}}>VISIT US IN GHANA</p>
            <p style={{color:'lightgreen', paddingRight:'20px', lineHeight:'10px'}}>Accra, Ghana</p>
            <p style={{color:'white', paddingRight:'20px'}}>
              One Airport Square, Airport City<br></br>
              8th Floor
            </p>
          </div>
          <div style={{textAlign: 'center', }}>
            <p style={{color:'gold', paddingRight:'30px', fontSize:'20px', lineHeight:'10px'}}>VISIT US IN NIGERIA</p>
            <p style={{color:'lightgreen', paddingRight:'20px', lineHeight:'10px'}}>Accra, Ghana</p>
            <p style={{color:'white', paddingRight:'20px'}}>
              Sterling Bank Building
            </p>
          </div>
        </div>
      </div>
  );
}

export default App;