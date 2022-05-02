const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;

  }
  root() {
    return this.rootNode;
  }

  _add_r(root, node){
    if(node.data<root.data){
      if(root.left === null){
        root.left = node;
      } else {
        this._add_r(root.left, node);
      }
    } else {
      if(root.right === null){
        root.right = node;
      } else {
        this._add_r(root.right, node);
      }
    }
  }

  add(data) {
    let node = new Node(data);

    if(this.rootNode===null)
      this.rootNode = node;
    else{
      this._add_r(this.rootNode,node);
    }
  }

  has(data) {
    if(this.find(data)===null)
      return false
    return true
  }

  find(data, node=this.rootNode) {
    if(node===null)
      return null;
    else if(data<node.data)
      return this.find(data, node.left)
    else if(data>node.data)
      return this.find(data, node.right)
    else
      return node;
  }



  remove(data) {
    this.root = this._remove_r(data, this.root);
    
  }
  _remove_r(data, node) {
    if(node===null) return null;
    if(data<node.data){
      node.left = _remove_r(data, node.left);
      return node;
    } else if(data>node.data) {
      node.right = _remove_r(data, node.right);
      return node;
    } else {
      if(node.left===null&&node.right===null){
        node = null;
        return node;
      }
      if(node.left===null){
        node = node.right;
        return node;
      } else if(node.right===null){
        node=node.left;
        return node;
      }
    }
  }
  min() {
    return this._min_r(this.rootNode);
  }
  _min_r(node){
    if(node.left===null)
      return node;
    else
      this._min_r(node.left)
  }
  max() {
    return this._max_r(this.rootNode);
  }
  _max_r(node){
    if(node.right===null)
      return node;
    else
      this._max_r(node.right);
  }
}

module.exports = {
  BinarySearchTree
};