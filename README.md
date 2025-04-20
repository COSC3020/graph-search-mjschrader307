# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.

---

Answer:

I think the worst-case scenario for this algorithm is if the graph is a linked-list sort of graph, where every recursive call is processing one less node and edge. I also think that in every scenario where more than one node is visited, that is what's happening at every recursive call: one less node and edge are left for further processing. In the worst case, every edge and node are visited once, so the end complexity is $\Theta(|V| + |E|)$

---

I used ChatGPT to help me get started with writing up a test suite for my function; however, I did not really understand what was going on, so I ditched most of it. I referred to old test code to figure out how to import my function, and I put together my own set of test cases and evaluation functions to process things iteratively. There was some small debugging with the test logic that I got help with, too.

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**