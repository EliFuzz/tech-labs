class RTreeNode {
  constructor(isLeaf = true) {
    this.isLeaf = isLeaf;
    this.children = [];
    this.boundingBox = null;
  }
}

class RTree {
  constructor(maxChildren = 4) {
    this.root = new RTreeNode();
    this.maxChildren = maxChildren;
  }

  static printNodeInfo(node, depth) {
    const indentation = "  ".repeat(depth);
    if (node.isLeaf) {
      console.log(
        `${indentation}Leaf Node Bounding Box: [${node.boundingBox.join(
          ", ",
        )}]`,
      );
    } else {
      console.log(
        `${indentation}Internal Node Bounding Box: [${node.boundingBox.join(
          ", ",
        )}]`,
      );
    }
  }

  insert(point) {
    this._insertRecursive(this.root, point);
  }

  _insertRecursive(node, point) {
    if (node.isLeaf) {
      node.children.push(point);
      if (node.children.length > this.maxChildren) {
        this._split(node);
      }
    } else {
      let minIncrease = Infinity;
      let bestChild = null;

      for (const child of node.children) {
        const childBBox = this._calculateBoundingBox(child);
        const expandedBBox = this._calculateExpandedBBox(childBBox, point);
        const increase = this._calculateAreaIncrease(childBBox, expandedBBox);

        if (increase < minIncrease) {
          minIncrease = increase;
          bestChild = child;
        }
      }

      this._insertRecursive(bestChild, point);
    }
  }

  _calculateAreaIncrease(oldBBox, newBBox) {
    const oldArea = (oldBBox[2] - oldBBox[0]) * (oldBBox[3] - oldBBox[1]);
    const newArea = (newBBox[2] - newBBox[0]) * (newBBox[3] - newBBox[1]);
    return newArea - oldArea;
  }

  _calculateExpandedBBox(oldBBox, point) {
    const [minX, minY, maxX, maxY] = oldBBox;
    const newMinX = Math.min(minX, point[0]);
    const newMinY = Math.min(minY, point[1]);
    const newMaxX = Math.max(maxX, point[0]);
    const newMaxY = Math.max(maxY, point[1]);
    return [newMinX, newMinY, newMaxX, newMaxY];
  }

  _split(node) {
    const splitPoint = Math.floor(node.children.length / 2);
    const newNode = new RTreeNode({ isLeaf: node.isLeaf });
    newNode.children = node.children.slice(splitPoint);
    node.children = node.children.slice(0, splitPoint);

    node.boundingBox = this._calculateBoundingBox(node.children);
    newNode.boundingBox = this._calculateBoundingBox(newNode.children);

    if (node === this.root) {
      const newRoot = new RTreeNode({ isLeaf: false });
      newRoot.children = [node, newNode];
      newRoot.boundingBox = this._calculateBoundingBox(newRoot.children);
      this.root = newRoot;
    }
  }

  _deleteRecursive(node, point) {
    if (node.isLeaf) {
      node.children = node.children.filter((p) => !this._pointsEqual(p, point));
    } else {
      for (const child of node.children) {
        const childBBox = this._calculateBoundingBox(child);
        if (this._pointInBoundingBox(point, childBBox)) {
          this._deleteRecursive(child, point);
          break;
        }
      }
      node.boundingBox = this._calculateBoundingBox(node.children);
    }
  }

  _searchRecursive(node, queryBBox, result) {
    if (node.isLeaf) {
      for (const point of node.children) {
        if (this._pointInBoundingBox(point, queryBBox)) {
          result.push(point);
        }
      }
    } else {
      for (const child of node.children) {
        const childBBox = this._calculateBoundingBox(child);
        if (this._bboxIntersectsQuery(childBBox, queryBBox)) {
          this._searchRecursive(child, queryBBox, result);
        }
      }
    }
  }

  _nearestNeighborsRecursive(node, queryPoint, k, result) {
    if (node.isLeaf) {
      for (const point of node.children) {
        this._updateNearestNeighbors(queryPoint, point, k, result);
      }
    } else {
      const sortedChildren = node.children
        .slice()
        .sort(
          (a, b) =>
            this._distance(queryPoint, this._calculateBoundingBox(a)) -
            this._distance(queryPoint, this._calculateBoundingBox(b)),
        );

      for (const child of sortedChildren) {
        const childBBox = this._calculateBoundingBox(child);
        if (
          this._distance(queryPoint, childBBox) < result[result.length - 1][0]
        ) {
          this._nearestNeighborsRecursive(child, queryPoint, k, result);
        }
      }
    }
  }

  _updateNearestNeighbors(queryPoint, point, k, result) {
    const distance = this._distance(queryPoint, point);

    if (result.length < k) {
      result.push([distance, point]);
      result.sort((a, b) => b[0] - a[0]);
    } else if (distance < result[0][0]) {
      result[0] = [distance, point];
      result.sort((a, b) => b[0] - a[0]);
    }
  }

  _distance(point1, point2) {
    return Math.sqrt(
      Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2),
    );
  }

  rangeQuery(queryBBox) {
    const result = [];
    this._rangeQueryRecursive(this.root, queryBBox, result);
    return result;
  }

  _rangeQueryRecursive(node, queryBBox, result) {
    if (node.isLeaf) {
      for (const point of node.children) {
        if (this._pointInBoundingBox(point, queryBBox)) {
          result.push(point);
        }
      }
    } else {
      for (const child of node.children) {
        const childBBox = this._calculateBoundingBox(child);
        if (this._bboxIntersectsQuery(childBBox, queryBBox)) {
          this._rangeQueryRecursive(child, queryBBox, result);
        }
      }
    }
  }

  _bboxIntersectsQuery(bbox, queryBBox) {
    return !(
      bbox[2] < queryBBox[0] ||
      bbox[0] > queryBBox[2] ||
      bbox[3] < queryBBox[1] ||
      bbox[1] > queryBBox[3]
    );
  }

  _windowQueryRecursive(node, queryBBox, result) {
    if (node.isLeaf) {
      for (const point of node.children) {
        if (this._pointInBoundingBox(point, queryBBox)) {
          result.push(point);
        }
      }
    } else {
      for (const child of node.children) {
        const childBBox = this._calculateBoundingBox(child);
        if (this._bboxFullyContained(childBBox, queryBBox)) {
          this._windowQueryRecursive(child, queryBBox, result);
        }
      }
    }
  }

  _bboxFullyContained(bbox1, bbox2) {
    return (
      bbox1[0] >= bbox2[0] &&
      bbox1[1] >= bbox2[1] &&
      bbox1[2] <= bbox2[2] &&
      bbox1[3] <= bbox2[3]
    );
  }

  _pointInBoundingBox(point, bbox) {
    return (
      point[0] >= bbox[0] &&
      point[0] <= bbox[2] &&
      point[1] >= bbox[1] &&
      point[1] <= bbox[3]
    );
  }

  _calculateBoundingBox(points) {
    const minX = Math.min(...points.map((p) => p[0]));
    const minY = Math.min(...points.map((p) => p[1]));
    const maxX = Math.max(...points.map((p) => p[0]));
    const maxY = Math.max(...points.map((p) => p[1]));
    return [minX, minY, maxX, maxY];
  }

  knnQuery(queryPoint, k) {
    const result = [];
    this._knnSearch(this.root, queryPoint, k, result);
    result.sort((a, b) => a[1] - b[1]);
    return result.slice(0, k);
  }

  _knnSearch(node, queryPoint, k, result) {
    if (node.isLeaf) {
      for (const child of node.children) {
        result.push([
          child,
          this._distance(queryPoint, this._calculateBoundingBox(child)),
        ]);
      }
    } else {
      const distances = node.children.map((child) => [
        child,
        this._calculateMinDistance(
          queryPoint,
          this._calculateBoundingBox(child),
        ),
      ]);
      distances.sort((a, b) => a[1] - b[1]);

      for (const [child, _] of distances.slice(
        0,
        Math.min(k, distances.length),
      )) {
        this._knnSearch(child, queryPoint, k, result);
      }
    }
  }

  _calculateMinDistance(point, boundingBox) {
    let minDistance = 0;

    for (let i = 0; i < point.length; i++) {
      if (point[i] < boundingBox[i]) {
        minDistance += Math.pow(boundingBox[i] - point[i], 2);
      } else if (point[i] > boundingBox[i + 2]) {
        minDistance += Math.pow(point[i] - boundingBox[i + 2], 2);
      }
    }

    return Math.sqrt(minDistance);
  }

  update(oldPoint, newPoint) {
    this._recursiveUpdate(this.root, oldPoint, newPoint);
  }

  _recursiveUpdate(node, oldPoint, newPoint) {
    if (node.isLeaf) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (this._pointsEqual(child, oldPoint)) {
          node.children[i] = newPoint;
          return;
        }
      }
    } else {
      for (const child of node.children) {
        if (this._intersects(child.boundingBox, oldPoint)) {
          this._recursiveUpdate(child, oldPoint, newPoint);
        }
      }
    }
  }

  _intersects(box1, box2) {
    return !(
      box1[2] < box2[0] ||
      box1[0] > box2[2] ||
      box1[3] < box2[1] ||
      box1[1] > box2[3]
    );
  }

  traverse(visitFunction) {
    this._recursiveTraverse(this.root, visitFunction);
  }

  _recursiveTraverse(node, visitFunction) {
    visitFunction.visit(node);
    if (!node.isLeaf) {
      for (const child of node.children) {
        this._recursiveTraverse(child, visitFunction);
      }
    }
  }
}
