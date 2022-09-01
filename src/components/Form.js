import './Form.css';
function Form(){
    return(
    <form>
    <label>Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label>Age</label>
    <input type="text" id="lname" name="lastname" placeholder="Age"/>

    
  
    <input type="submit" value="Submit"/>
  </form>
  ); 
}
export default Form;