const Home = () => {
  return (
    <>
      <div class="collapsible-title"><h1>Home</h1></div>
      <span>Hello! I've created this page to host some write-ups explaining the project work I've hosted here on </span>
      <a href="https://github.com/tmflanagan" style={{display: 'inline-block'}}>my GitHub</a>
      <span> in order to supply some context for their intended use cases and how to most easily modify them for similar applications.</span>
      <br /><br />
      <span>Effectively, this website is intended to be a kind of explainer for the items I list on my resumé</span>
      <span> and the tools I made to fulfil my obligations at each of my employers.</span>
      <br /><br />
      <span>This website was built with </span>
      <a href="https://react.dev/">react.js</a>
    </>
  );
};

export default Home;
