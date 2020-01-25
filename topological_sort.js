function topologicalSort(jobs, deps) {
    // Write your code here.
      let jobGraph = buildGraph(jobs,deps);
      let order = [];
      let keys = Object.values(jobGraph.graph);
      
      while(keys.length) {
          let node = keys.pop();
          let cycleCheck = dfs(node,order,jobGraph);
          
          if(cycleCheck) return [];		
      }
      
      return order;
  }
  
  function buildGraph(jobs, deps) {
      let graph = new Graph(jobs);
      
      for(let i = 0; i < deps.length;i++) {
          graph.addPrereq(deps[i][1], deps[i][0]);
      }
      
      return graph;
  }
  
  function dfs(node, order, graph) {
      if(node.visited) return false;
      if(node.visiting) return true;
      
      node.visiting = true;
      for(let prereq of node.prereqs) {
          let pre = graph.getNode(prereq);
          let temp = dfs(pre, order, graph);
          if(temp) return true;
      }
      
      node.visited = true;
      node.visiting = false;
      
      order.push(node.job);
      
      return false;
  }
  
  class Graph {
      constructor(jobs) {
          this.graph = {};
          
          for(let job of jobs) {
              this.addJob(job);
          }
      }
      
      addJob(job) {
          this.graph[job] = new Node(job);
      }
      
      addPrereq(job, prereq) {
          this.graph[job].prereqs.push(prereq);	
      }
      
      getNode(node) {
          return this.graph[node];
      }
  }
  
  class Node {
      constructor(job) {
          this.job = job;
          this.prereqs = [];
          this.visited = false;
          this.visiting = false;
      }
  }
  
  // Do not edit the line below.
  exports.topologicalSort = topologicalSort;
  