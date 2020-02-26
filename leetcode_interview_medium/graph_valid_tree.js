/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(edges.length === 0 && n === 1) return true;
    let graph = new Graph(edges).graph;
    let visited = {};

    if(dfs(graph,graph[Object.keys(graph)[0]],visited,-1)) {
        return false;
    }
    
    for (let i = 0; i < n; i++) {
        if (!(i in visited)) {
            return false;
        }
    }
    return true;
};

function dfs(graph,node,visited,parent) {
    if(!node) return false;
    visited[node.val] = true;
    for(let child of node.children) {
        if(!(child in visited)) {
            if(dfs(graph,graph[child], visited, node.val)) return true;
        } else {
            if(child !== parent) {
                return true;
            }
        }
    }
    return false;
}

class Graph {
    constructor(arr) {
        this.graph = this.buildGraph(arr);
    }
    
    buildGraph(arr) {
        let graph = {};
        for(let pairs of arr) {
            if(!(pairs[0] in graph))  {
                graph[pairs[0]] = new Node(pairs[0]);
            } 
            graph[pairs[0]].addChild(pairs[1]);
            if(!(pairs[1] in graph))  {
                graph[pairs[1]] = new Node(pairs[1]);
            }
            graph[pairs[1]].addChild(pairs[0]);
        }
        return graph;
    }
    
}

class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
    
    addChild(val) {
        this.children.push(val);
    }
}