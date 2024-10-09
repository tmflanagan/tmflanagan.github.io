import microshareDevMap from './microshareDevMap.png';

const Maps = () => {
  return (
    <>
      <a href="https://github.com/tmflanagan/server-map">Link to this section's repo</a>
      <br /><br />
      <span>This script is primarily useful for two purposes: first, as a quick reference for how Microshare’s servers relate to each other, and secondly to identify errors in configuration. The config files that this tool parses information from are generally quite large and tracking every connection between different services can be tedious without creating some sort of overall view like this. If changes to the config files need to be made which affect these connections, this tool can be used to verify that the changes made have the desired effects. By pulling this information directly from the config files, this tool can ensure no configuration faults are introduced in complex server clusters.</span>
      <br /><br />
      <span>Microshare’s server config files are structured such that one “ConfigMap” points to the file paths of the executable and config file for every server, and the individual config files contain information such as endpoint URLs, names of Kafka topics, and names of MongoDB collections accessed by a given server. These are structured such that there are two types of servers, which my code calls “ApiElement”s and “StreamElement”s respectively. An ApiElement reads data out of some set of Mongo collections and can make it accessible in some set of Kafka topics, while a StreamElement reads information out of some set of Kafka topics and can be accessed from some number of endpoints.</span>
      <br /><br />
      <span>This means Microshare’s servers can be organized into 5 layers, where each one moves data to the next: Mongo collections, ApiElements, Kafka topics, StreamElements, and API endpoints. On account of this, it makes sense to model these as a tree; ApiElement and StreamElement are subclasses of a TreeElement class which specifies a name, source file path, and a set of input and output TreeElements to model the non-server stages of the tree as well. When using the server map script, the user provides paths to the ConfigMap and every server config they’re interested in. The script will then use the information in the ConfigMap and and config file provided to populate a dict of TreeElements where whether a server is an ApiElement or StreamElement is identified by what labels the data inside uses. All of the inputs and outputs discovered are also added to the dict of TreeEleemnts along the way, and repeated names are used to update the input and output lists of non-server TreeElements. The script then iterates across this dict to organize it into a list of edges in a directed graph, and is plotted through MatPlotLib. Here is the state of Microshare’s development servers at the time of writing:</span>
      <figure>
        <img src={microshareDevMap} />
        <figcaption>StreamElements here color-code their input edges according to the “group” it assigns to a Kafka topic; similar behavior could be added to any TreeElement by adding a method named “colorHandler” to its subclass. The TreeElement class also supports the creation of “invisible” elements which are skipped over when iterating through the graph and drawing edges so any arbitrary tree can be drawn, though this isn’t necessary for the current state of Microshare’s servers.</figcaption>
      </figure><br />
      <span>If your servers follow a similar 5-layer architecture you’ll likely only need to change the config variable names and ConfigMap naming scheme to get this working for you. Otherwise this can still be of use but may require some more tinkering or new TreeElement sublasses, and in that case you should now be equipped to write that.</span>
    </>
  );
};

export default Maps;
