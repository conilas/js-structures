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

const baseRecursionOn = (self, left_test, self_node, new_node) => {
  const direction = left_test(new_node, self_node) ? "left" : "right"

  if (!self_node[direction]) return self_node[direction] = new_node

  return self.insert(self_node[direction], new_node)
}

const own_tree = tree(node(1), function(self_node, new_node) {
  if (!self_node) return this.root_node = new_node

  return baseRecursionOn(this, shouldGoLeft, self_node, new_node)
})

//examples

own_tree.insert(own_tree.root_node, node(-5))
own_tree.insert(own_tree.root_node, node(-3))
own_tree.insert(own_tree.root_node, node(10))
