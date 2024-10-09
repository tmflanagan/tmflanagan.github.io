import Maps from "./Server-Map";
import Plots from "./JMeter-Plots";
import Collapsible from "../Collapsible";

const Internship = () => {
  return (
    <>
      <div class="collapsible-title"><h1>Microshare</h1></div>
      <span>My internship at </span>
      <a href="https://microshare.io">Microshare</a>
      <span> required me to develop some tools for internal use which might prove useful for others facing similar problems, so I’ve written the following document to explain their application and how they can most easily be modified for later use. The first of these is a tool that takes server config files and parses data out of them to plot a graph respresenting the overall datastream, the second is a script for identifying statistically significant changes in the latency of a web application. As-is, both contain some elements specific to the work I was doing at Microshare, so the aim of this document is to provide a short, straightforward explanation of how to reconfigure these tools for similar use cases.</span>
      <br /><br />
      <Collapsible title="Server Map">
        <Maps />
      </Collapsible>
      <br /><br />
      <Collapsible title="JMeter Plots">
        <Plots />
      </Collapsible>
    </>
  );
};

export default Internship;
