## dag-ui
A React based front end to work with dag-server, for displaying graph and paths in DAG(Directed Acyclic Graph) graph

App uses [cytoscape](https://github.com/cytoscape/cytoscape.js) to generate the graph and [react-cytoscapejs](https://github.com/plotly/react-cytoscapejs) react component to render as react component.

![UI](/src/common/ui-image.png)



### Steps to run the UI

1. clone the repository
2. go to repository folder `cd dag-ui`
3. run `npm install`
4. run `npm start`
5. App should automatically open in browser else open a browser and open `http://localhost:3000`
> App by default runs on `port : 3000`

 
## Details

App provides following features

- Post graph to server
- Realtime graph creation based on the json format provided in the Enter Graph field
- Graph Format -> parse and validates the json provided in teh enter graph field.
- Displays graph data from server.
- Specify root node and **Get Path**
- **GET GRAPH** button for getting data from server
- 2 modes for displaying **GRAPH** and **PATH*
- ADD nodes in **(p1,[n1,n2])** format
