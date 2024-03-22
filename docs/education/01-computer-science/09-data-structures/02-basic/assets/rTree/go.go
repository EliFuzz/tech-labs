package main

import (
	"math"
)

type RTreeNode struct {
	IsLeaf       bool
	Children     []point
	BoundingBox  *BoundingBox
}

type BoundingBox struct {
	MinX, MinY, MaxX, MaxY float64
}

type point struct {
	X, Y float64
}

type RTree struct {
	Root         *RTreeNode
	MaxChildren  int
}

func NewRTreeNode(isLeaf bool) *RTreeNode {
	return &RTreeNode{
		IsLeaf: isLeaf,
		Children: make([]point, 0),
		BoundingBox: nil,
	}
}

func NewBoundingBox(minX, minY, maxX, maxY float64) *BoundingBox {
	return &BoundingBox{
		MinX: minX,
		MinY: minY,
		MaxX: maxX,
		MaxY: maxY,
	}
}

func NewRTree(maxChildren int) *RTree {
	root := NewRTreeNode(true)
	return &RTree{
		Root:        root,
		MaxChildren: maxChildren,
	}
}

func (tree *RTree) Insert(point point) {
	tree.insertRecursive(tree.Root, point)
}

func (tree *RTree) insertRecursive(node *RTreeNode, point point) {
	if node.IsLeaf {
		node.Children = append(node.Children, point)
		if len(node.Children) > tree.MaxChildren {
			tree.split(node)
		}
	} else {
		minIncrease := math.Inf(1)
		var bestChild *RTreeNode

		for _, child := range node.Children {
			childBBox := calculateBoundingBox(child)
			expandedBBox := calculateExpandedBoundingBox(childBBox, point)
			increase := calculateAreaIncrease(childBBox, expandedBBox)

			if increase < minIncrease {
				minIncrease = increase
				bestChild = &child
			}
		}

		tree.insertRecursive(bestChild, point)
	}
}

func calculateAreaIncrease(oldBBox, newBBox *BoundingBox) float64 {
	oldArea := (oldBBox.MaxX - oldBBox.MinX) * (oldBBox.MaxY - oldBBox.MinY)
	newArea := (newBBox.MaxX - newBBox.MinX) * (newBBox.MaxY - newBBox.MinY)
	return newArea - oldArea
}

func calculateExpandedBoundingBox(oldBBox *BoundingBox, point point) *BoundingBox {
	newMinX := math.Min(oldBBox.MinX, point.X)
	newMinY := math.Min(oldBBox.MinY, point.Y)
	newMaxX := math.Max(oldBBox.MaxX, point.X)
	newMaxY := math.Max(oldBBox.MaxY, point.Y)
	return NewBoundingBox(newMinX, newMinY, newMaxX, newMaxY)
}

func (tree *RTree) split(node *RTreeNode) {
	splitPoint := len(node.Children) / 2
	newNode := NewRTreeNode(node.IsLeaf)
	newNode.Children = append(newNode.Children, node.Children[splitPoint:]...)
	node.Children = node.Children[:splitPoint]

	node.BoundingBox = calculateBoundingBox(node.Children)
	newNode.BoundingBox = calculateBoundingBox(newNode.Children)

	if node == tree.Root {
		newRoot := NewRTreeNode(false)
		newRoot.Children = append(newRoot.Children, node, newNode)
		newRoot.BoundingBox = calculateBoundingBox(newRoot.Children)
		tree.Root = newRoot
	}
}

func (tree *RTree) Delete(point point) {
	tree.deleteRecursive(tree.Root, point)
}

func (tree *RTree) deleteRecursive(node *RTreeNode, point point) {
	if node.IsLeaf {
		var newChildren []point
		for _, p := range node.Children {
			if p != point {
				newChildren = append(newChildren, p)
			}
		}
		node.Children = newChildren
	} else {
		for _, child := range node.Children {
			childBBox := calculateBoundingBox(child)
			if pointInBoundingBox(point, childBBox) {
				tree.deleteRecursive(&child, point)
				break
			}
		}
		node.BoundingBox = calculateBoundingBox(node.Children)
	}
}

func (tree *RTree) Search(queryBBox *BoundingBox) []point {
	result := make([]point, 0)
	tree.searchRecursive(tree.Root, queryBBox, &result)
	return result
}

func (tree *RTree) searchRecursive(node *RTreeNode, queryBBox *BoundingBox, result *[]point) {
	if node.IsLeaf {
		for _, p := range node.Children {
			if pointInBoundingBox(p, queryBBox) {
				*result = append(*result, p)
			}
		}
	} else {
		for _, child := range node.Children {
			childBBox := calculateBoundingBox(child)
			if bboxIntersectsQuery(childBBox, queryBBox) {
				tree.searchRecursive(&child, queryBBox, result)
			}
		}
	}
}

func (tree *RTree) NearestNeighbors(queryPoint point, k int) []point {
	result := make([]point, 0)
	tree.nearestNeighborsRecursive(tree.Root, queryPoint, k, &result)
	return result
}

func (tree *RTree) nearestNeighborsRecursive(node *RTreeNode, queryPoint point, k int, result *[]point) {
	if node.IsLeaf {
		for _, p := range node.Children {
			updateNearestNeighbors(queryPoint, p, k, result)
		}
	} else {
		sortedChildren := make([]RTreeNode, len(node.Children))
		copy(sortedChildren, node.Children)
		sortChildren(sortedChildren, queryPoint)

		for _, child := range sortedChildren {
			childBBox := calculateBoundingBox(child)
			if distance(queryPoint, childBBox) < result[len(result)-1].X {
				tree.nearestNeighborsRecursive(&child, queryPoint, k, result)
			}
		}
	}
}

func updateNearestNeighbors(queryPoint, point point, k int, result *[]point) {
	distance := distance(queryPoint, point)

	if len(*result) < k {
		*result = append(*result, point)
		sort.Slice(*result, func(i, j int) bool {
			return distance(queryPoint, calculateBoundingBox((*result)[i])) > distance(queryPoint, calculateBoundingBox((*result)[j]))
		})
	} else if distance < distance(queryPoint, calculateBoundingBox((*result)[0])) {
		(*result)[0] = point
		sort.Slice(*result, func(i, j int) bool {
			return distance(queryPoint, calculateBoundingBox((*result)[i])) > distance(queryPoint, calculateBoundingBox((*result)[j]))
		})
	}
}

func distance(point point, bbox *BoundingBox) float64 {
	return math.Sqrt(math.Pow(point.X-bbox.MinX, 2) + math.Pow(point.Y-bbox.MinY, 2))
}

func (tree *RTree) RangeQuery(queryBBox *BoundingBox) []point {
	result := make([]point, 0)
	tree.rangeQueryRecursive(tree.Root, queryBBox, &result)
	return result
}

func (tree *RTree) rangeQueryRecursive(node *RTreeNode, queryBBox *BoundingBox, result *[]point) {
	if node.IsLeaf {
		for _, p := range node.Children {
			if pointInBoundingBox(p, queryBBox) {
				*result = append(*result, p)
			}
		}
	} else {
		for _, child := range node.Children {
			childBBox := calculateBoundingBox(child)
			if bboxIntersectsQuery(childBBox, queryBBox) {
				tree.rangeQueryRecursive(&child, queryBBox, result)
			}
		}
	}
}

func (tree *RTree) WindowQuery(queryBBox *BoundingBox) []point {
	result := make([]point, 0)
	tree.windowQueryRecursive(tree.Root, queryBBox, &result)
	return result
}

func (tree *RTree) windowQueryRecursive(node *RTreeNode, queryBBox *BoundingBox, result *[]point) {
	if node.IsLeaf {
		for _, p := range node.Children {
			if pointInBoundingBox(p, queryBBox) {
				*result = append(*result, p)
			}
		}
	} else {
		for _, child := range node.Children {
			childBBox := calculateBoundingBox(child)
			if bboxFullyContained(childBBox, queryBBox) {
				tree.windowQueryRecursive(&child, queryBBox, result)
			}
		}
	}
}

func (tree *RTree) KNNQuery(queryPoint point, k int) []point {
	result := make([]point, 0)
	tree.knnSearch(tree.Root, queryPoint, k, &result)
	return result
}

func (tree *RTree) knnSearch(node *RTreeNode, queryPoint point, k int, result *[]point) {
	if node.IsLeaf {
		for _, p := range node.Children {
			*result = append(*result, p)
		}
	} else {
		distances := make([]struct {
			child   *RTreeNode
			distance float64
		}, len(node.Children))
		for i, child := range node.Children {
			distances[i] = struct {
				child   *RTreeNode
				distance float64
			}{&child, calculateMinDistance(queryPoint, calculateBoundingBox(child))}
		}
		sort.Slice(distances, func(i, j int) bool {
			return distances[i].distance < distances[j].distance
		})

		for _, d := range distances[:k] {
			tree.knnSearch(d.child, queryPoint, k, result)
		}
	}
}

func calculateMinDistance(point point, boundingBox *BoundingBox) float64 {
	minDistance := 0.0

	for i := 0; i < 2; i++ {
		if point.X < boundingBox.MinX {
			minDistance += math.Pow(boundingBox.MinX-point.X, 2)
		} else if point.X > boundingBox.MaxX {
			minDistance += math.Pow(point.X-boundingBox.MaxX, 2)
		}

		if point.Y < boundingBox.MinY {
			minDistance += math.Pow(boundingBox.MinY-point.Y, 2)
		} else if point.Y > boundingBox.MaxY {
			minDistance += math.Pow(point.Y-boundingBox.MaxY, 2)
		}
	}

	return math.Sqrt(minDistance)
}

func (tree *RTree) Update(oldPoint, newPoint point) {
	tree.recursiveUpdate(tree.Root, oldPoint, newPoint)
}

func (tree *RTree) recursiveUpdate(node *RTreeNode, oldPoint, newPoint point) {
	if node.IsLeaf {
		for i, p := range node.Children {
			if p == oldPoint {
				node.Children[i] = newPoint
				return
			}
		}
	} else {
		for _, child := range node.Children {
			if intersects(calculateBoundingBox(child), oldPoint) {
				tree.recursiveUpdate(&child, oldPoint, newPoint)
			}
		}
	}
}

func intersects(box1 *BoundingBox, box2 point) bool {
	return !(box1.MaxX < box2.X ||
		box1.MinX > box2.X ||
		box1.MaxY < box2.Y ||
		box1.MinY > box2.Y)
}

func (tree *RTree) Traverse(visitFunc func(*RTreeNode)) {
	tree.recursiveTraverse(tree.Root, visitFunc)
}

func (tree *RTree) recursiveTraverse(node *RTreeNode, visitFunc func(*RTreeNode)) {
	visitFunc(node)
	if !node.IsLeaf {
		for _, child := range node.Children {
			tree.recursiveTraverse(&child, visitFunc)
		}
	}
}

func printNodeInfo(node *RTreeNode, depth int) {
	indentation := "  "
	if node.IsLeaf {
		fmt.Printf("%sLeaf Node Bounding Box: %v\n", indentation, node.BoundingBox)
	} else {
		fmt.Printf("%sInternal Node Bounding Box: %v\n", indentation, node.BoundingBox)
	}
}
