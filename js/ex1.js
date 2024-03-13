//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
  var nodes = document.body.childNodes;

  nodes.forEach((node) => {

    console.log(node);

  });
}

bodyNodes();