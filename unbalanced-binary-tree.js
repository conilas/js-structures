const node = (self, left, right) => ({
  self,
  left,
  right
})

const tree = (root_node, insert) => ({
  root_node, 
  insert 
})

const shouldGoLeft = (_new, old) => _new.self < old.self

const own_tree = tree(node(1), function(self_node, new_node) {
  if (!self_node) return this.root_node = new_node

  if (shouldGoLeft(new_node, self_node)) { //must recurse to the left
    if (!self_node.left) return self_node.left = new_node //if no left, put left

    return this.insert(self_node.left, new_node)
  }

  //from this point on, we must go right!
  if (!self_node.right) return self_node.right = new_node

  return this.insert(self_node.right, new_node)
})
