function depthFirstSearch(graph, startNode, targetNode) {
  let visited = [];
  let path = [];

  if (graph.length === 0) return [];

  // Helper function w/ parameters to pass on
  return dfs(graph, startNode, targetNode, visited, path);
}

function dfs(graph, current_node, target, visited = [], path = []) {
  // Mark current node as visited and add it to path
  visited.push(current_node);
  path.push(current_node);

  // Exit condition: current and target nodes are the same
  if (current_node === target) return [...path];

  let neighbors = graph[current_node] || [];

  for (let i = 0; i < neighbors.length; i++) {
    let neighbor = neighbors[i];

    // Only proceed with a neighbor if it hasn't been looked at
    if (!visited.includes(neighbor)) {
      let result = dfs(graph, neighbor, target, visited, path);

      // Should only have a positive length if it found something
      if (result.length > 0) {
        return result;
      }
    }
  }

  path.pop();
  return [];
}
