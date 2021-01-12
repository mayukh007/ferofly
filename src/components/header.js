import "../header.css";
import pic1 from "../pic1.jpg"
import { Parallax, Background } from 'react-parallax';

function Head(){
    
    return(
       <div>
        <div className="container-fluid">
          <div className="heading"><span><h1>Ferofly</h1><p>&mdash;Magnify your journey&mdash;</p></span></div>
          <Parallax bgImage={pic1}bgImageAlt="the cat" strength={600} className="pic1" bgImageStyle={{height: '100%', maxWidth: '100%'}}>
              <div style = {{height:700}}></div>
        
          </Parallax>
           </div>
          <div style={{height:"500px",width:"100%"}} className="row">
              <div className = "form">
                  <form id="sg1">
                      <div style={{display:"inline",marginLeft:"0",marginRight:"40px"}} className="REG_FORM">
                        <label for="">check-in:<input type="date" id="check-in" name="check-in" /></label>
                        
                      </div>
                      <div style={{display:"inline",marginLeft:"50px",marginRight:"50px"}} className="REG_FORM">
                        <label for="check-out">check-out: <input type="date" id="check-out" name="check-out" /></label>
                        
                      </div>
                      <div style={{display:"inline",marginLeft:"30px"}} className="REG_FORM">
                        <label for="adults">adults: <input type="number" id="adults" name="adult" min="1" max="1000" /></label>
                        
                      </div>
                      <div style={{display:"inline"}} className="REG_FORM">
                        <label for="children">Kids<input type="number" id="children" name="children" min="1" max="1000" /></label>
                        
                      </div>
                      <div style={{display:"inline",paddingRight: "10px !important"}} className="REG_FORM">
                      <button class="btn" href="#" type="button">submit</button>
                      </div>
                        
                     
                  </form>
                  
              </div>
          </div>
          </div>
    );
}
export default Head;