import { Link } from "react-router-dom"
import HoverDropdown from "./HoverDropdown"

const Navbar =()=>{
      const internshipChildren = [
            {label:"Server Map", path:"server-map"},
            {label:"JMeter Plots", path:"jmeter-plots"}
      ];
      return (
            <>
                  <div style={{margin:"10px",position:"sticky",}}>
                        <Link to="/" className="nav">Home</Link>
                        <Link to="mqp" className="nav">MQP</Link>
                        <HoverDropdown label="Microshare" path="internship" children={internshipChildren} className="nav"/>
                  </div>
                  <br></br>
            </>
      );
}

export default Navbar;
