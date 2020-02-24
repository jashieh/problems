/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let graph = buildGraph(numCourses, prerequisites);
    let order = [];
    
    for(let course in graph.graph) {
        let check = dfs(graph.graph, graph.graph[course], order);
        if(check) return [];
    }
    
    return order;
    
};

function dfs(graph, node, order) {
    if(node.visited) return false;    
    if(node.visiting) return true;
    
    node.visiting = true;
    
    for(let prereq of node.prereqs) {
        let temp = dfs(graph,graph[prereq],order);
        if(temp) return true;
    }
    
    
    node.visited = true;
    node.visiting = false;
    order.push(node.val);
    return false;
}

function buildGraph(numCourses, prereqs) {
    let graph = new Graph();
    
    for(let i = 0; i < numCourses; i++) {
        graph.addNode(i);
    }
    
    for(let course of prereqs) {
        graph.addPrereq(course[0],course[1]);
    }
    
    return graph;
}

class Graph {
    constructor() {
        this.graph = {};
    }
    
    addNode(val) {
        this.graph[val] = new Node(val);
    }
    
    addPrereq(node,prereq) {
        this.graph[node].prereqs.push(prereq.toString());
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.visited = false;
        this.visiting = false;
        this.prereqs = [];
    }
    
    
}