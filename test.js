const fs = require("fs");
eval(fs.readFileSync("code.js") + "");

const test = {
  // Example graph from lecture slides
  G1: {
    Graph: [[1, 2, 5], [4], [3, 5], [], [6], []],
    Tests: [
      {
        start: 0,
        end: 4,
        path_exists: true,
        same_start_end: false,
      },
      {
        start: 4,
        end: 4,
        path_exists: true,
        same_start_end: true,
      },
      {
        start: 6,
        end: 5,
        path_exists: false,
        same_start_end: false,
      },
    ],
  },
  // One-node graph
  G2: {
    Graph: [[]],
    Tests: [
      {
        start: 0,
        end: 0,
        path_exists: true,
        same_start_end: true,
      },
      {
        start: 0,
        end: 4,
        path_exists: false,
        same_start_end: false,
      },
    ],
  },
  // Linked-list-sort-of-graph
  G3: {
    Graph: [[1], [2], [3], [4]],
    Tests: [
      {
        start: 0,
        end: 4,
        path_exists: true,
        same_start_end: false,
      },
      {
        start: 2,
        end: 2,
        path_exists: true,
        same_start_end: true,
      },
      {
        start: 4,
        end: 5,
        path_exists: false,
        same_start_end: false,
      },
    ],
  },
  // Two disjoint graphs (example from lecture with D and E stranded)
  G4: {
    Graph: [[1, 2, 5], [], [5], [4], [], [6], []],
    Tests: [
      {
        start: 0,
        end: 1,
        path_exists: true,
        same_start_end: false,
      },
      {
        start: 1,
        end: 4,
        path_exists: false,
        same_start_end: false,
      },
    ],
  },
};

function validatePath(graph, path = [], startNode, targetNode) {
  if (path.length === 0) return false;
  
  if (path[0] !== startNode || path[path.length - 1] !== targetNode) {
    return false;
  }

  for (let i = 0; i < path.length - 1; i++) {
    // If path[i + 1] is not in path[i], not valid
    if (!graph[path[i]].includes(path[i + 1])) {
      return false;
    }
  }

  return true;
}

function testFxn() {
  const graphs = Object.values(test); // Get both key and value for helpful error messages

  for (let i = 0; i < graphs.length; i++) {
    const graph = graphs[i]["Graph"];
    const tests = graphs[i]["Tests"];

    for (let j = 0; j < tests.length; j++) {
      const start = tests[j]["start"];
      const end = tests[j]["end"];
      const path_exists = tests[j]["path_exists"];
      const same_start_end = tests[j]["same_start_end"];

      const path = depthFirstSearch(graph, start, end);

      // Validate path
      if (path_exists) {
        if (path.length === 0) {
          throw new Error("Expected a path, got none.");
        }
        if (!validatePath(graph, path, start, end)) {
          throw new Error("Invalid path returned");
        }
      } else {
        if (path.length > 0) {
          throw new Error("Path was returned, none expected");
        }
      }

      // Validate same start and end
      if (same_start_end) {
        if (path.length !== 1 || path[0] !== start) {
          throw new Error("Same start and end expected, got differing ones");
        }
      }
    }
  }
}


testFxn();
