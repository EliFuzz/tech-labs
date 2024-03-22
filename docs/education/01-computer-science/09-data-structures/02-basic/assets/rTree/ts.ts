class RTreeNode {
  is_leaf: boolean;
  children: any[];
  bounding_box: number[] | null;

  constructor(is_leaf: boolean = true) {
    this.is_leaf = is_leaf;
    this.children = [];
    this.bounding_box = null;
  }
}

class RTree {
  root: RTreeNode;
  max_children: number;

  constructor(max_children: number = 4) {
    this.root = new RTreeNode();
    this.max_children = max_children;
  }

  insert(point: number[]): void {
    this._insertRecursive(this.root, point);
  }

  rangeQuery(queryBbox: number[]): number[][] {
    const result: number[][] = [];
    this._rangeQueryRecursive(this.root, queryBbox, result);
    return result;
  }

  knnQuery(queryPoint: number[], k: number): [number, number][][] {
    const result: [number, number][][] = [];
    this._knnSearch(this.root, queryPoint, k, result);
    result.sort((a, b) => a[1] - b[1]);
    return result.slice(0, k);
  }

  calculateMinDistance(point: number[], boundingBox: number[]): number {
    let minDistance = 0;

    for (let i = 0; i < point.length; i++) {
      if (point[i] < boundingBox[i]) {
        minDistance += (boundingBox[i] - point[i]) ** 2;
      } else if (point[i] > boundingBox[i + 2]) {
        minDistance += (point[i] - boundingBox[i + 2]) ** 2;
      }
    }

    return Math.sqrt(minDistance);
  }

  update(oldPoint: number[], newPoint: number[]): void {
    this._recursiveUpdate(this.root, oldPoint, newPoint);
  }

  traverse(visitFunc: (node: RTreeNode) => void): void {
    this._recursiveTraverse(this.root, visitFunc);
  }

  printNodeInfo(node: RTreeNode, depth: number): void {
    const indentation = "  ".repeat(depth);
    if (node.is_leaf) {
      console.log(`${indentation}Leaf Node Bounding Box:`, node.bounding_box);
    } else {
      console.log(
        `${indentation}Internal Node Bounding Box:`,
        node.bounding_box,
      );
    }
  }

  private _insertRecursive(node: RTreeNode, point: number[]): void {
    if (node.is_leaf) {
      node.children.push(point);
      if (node.children.length > this.max_children) {
        this._split(node);
      }
    } else {
      let min_increase = Infinity;
      let best_child = null;

      for (const child of node.children) {
        const childBbox = this._calculateBoundingBox(child);
        const expandedBbox = this._calculateExpandedBbox(childBbox, point);
        const increase = this._calculateAreaIncrease(childBbox, expandedBbox);

        if (increase < min_increase) {
          min_increase = increase;
          best_child = child;
        }
      }

      if (best_child) {
        this._insertRecursive(best_child, point);
      }
    }
  }

  private _calculateAreaIncrease(oldBbox: number[], newBbox: number[]): number {
    const oldArea = (oldBbox[2] - oldBbox[0]) * (oldBbox[3] - oldBbox[1]);
    const newArea = (newBbox[2] - newBbox[0]) * (newBbox[3] - newBbox[1]);
    return newArea - oldArea;
  }

  private _calculateExpandedBbox(oldBbox: number[], point: number[]): number[] {
    const [minX, minY, maxX, maxY] = oldBbox;
    const newMinX = Math.min(minX, point[0]);
    const newMinY = Math.min(minY, point[1]);
    const newMaxX = Math.max(maxX, point[0]);
    const newMaxY = Math.max(maxY, point[1]);
    return [newMinX, newMinY, newMaxX, newMaxY];
  }

  private _split(node: RTreeNode): void {
    const splitPoint = Math.floor(node.children.length / 2);
    const newNode = new RTreeNode({ is_leaf: node.is_leaf });
    newNode.children = node.children.slice(splitPoint);
    node.children = node.children.slice(0, splitPoint);

    node.bounding_box = this._calculateBoundingBox(node.children);
    newNode.bounding_box = this._calculateBoundingBox(newNode.children);

    if (node === this.root) {
      const newRoot = new RTreeNode({ is_leaf: false });
      newRoot.children = [node, newNode];
      newRoot.bounding_box = this._calculateBoundingBox(newRoot.children);
      this.root = newRoot;
    }
  }

  private _deleteRecursive(node: RTreeNode, point: number[]): void {
    if (node.is_leaf) {
      node.children = node.children.filter((p) => p !== point);
    } else {
      for (const child of node.children) {
        const childBbox = this._calculateBoundingBox(child);
        if (this._pointInBbox(point, childBbox)) {
          this._deleteRecursive(child, point);
          break;
        }
      }
      node.bounding_box = this._calculateBoundingBox(node.children);
    }
  }

  private _searchRecursive(
    node: RTreeNode,
    queryBbox: number[],
    result: number[][],
  ): void {
    if (node.is_leaf) {
      for (const point of node.children) {
        if (this._pointInBbox(point, queryBbox)) {
          result.push(point);
        }
      }
    } else {
      for (const child of node.children) {
        const childBbox = this._calculateBoundingBox(child);
        if (this._bboxIntersectsQuery(childBbox, queryBbox)) {
          this._searchRecursive(child, queryBbox, result);
        }
      }
    }
  }

  private _nearestNeighborsRecursive(
    node: RTreeNode,
    queryPoint: number[],
    k: number,
    result: [number, number][],
  ): void {
    if (node.is_leaf) {
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
        const childBbox = this._calculateBoundingBox(child);
        if (
          this._distance(queryPoint, childBbox) < result[result.length - 1][0]
        ) {
          this._nearestNeighborsRecursive(child, queryPoint, k, result);
        }
      }
    }
  }

  private _updateNearestNeighbors(
    queryPoint: number[],
    point: number[],
    k: number,
    result: [number, number][],
  ): void {
    const distance = this._distance(queryPoint, point);

    if (result.length < k) {
      result.push([distance, ...point]);
      result.sort((a, b) => b[0] - a[0]);
    } else if (distance < result[0][0]) {
      result[0] = [distance, ...point];
      result.sort((a, b) => b[0] - a[0]);
    }
  }

  private _distance(point1: number[], point2: number[]): number {
    return Math.sqrt(
      (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2,
    );
  }

  private _rangeQueryRecursive(
    node: RTreeNode,
    queryBbox: number[],
    result: number[][],
  ): void {
    if (node.is_leaf) {
      for (const point of node.children) {
        if (this._pointInBbox(point, queryBbox)) {
          result.push(point);
        }
      }
    } else {
      for (const child of node.children) {
        const childBbox = this._calculateBoundingBox(child);
        if (this._bboxIntersectsQuery(childBbox, queryBbox)) {
          this._rangeQueryRecursive(child, queryBbox, result);
        }
      }
    }
  }

  private _bboxIntersectsQuery(bbox: number[], queryBbox: number[]): boolean {
    return !(
      bbox[2] < queryBbox[0] ||
      bbox[0] > queryBbox[2] ||
      bbox[3] < queryBbox[1] ||
      bbox[1] > queryBbox[3]
    );
  }

  private _windowQueryRecursive(
    node: RTreeNode,
    queryBbox: number[],
    result: number[][],
  ): void {
    if (node.is_leaf) {
      for (const point of node.children) {
        if (this._pointInBbox(point, queryBbox)) {
          result.push(point);
        }
      }
    } else {
      for (const child of node.children) {
        const childBbox = this._calculateBoundingBox(child);
        if (this._bboxFullyContained(childBbox, queryBbox)) {
          this._windowQueryRecursive(child, queryBbox, result);
        }
      }
    }
  }

  private _bboxFullyContained(bbox1: number[], bbox2: number[]): boolean {
    return (
      bbox1[0] >= bbox2[0] &&
      bbox1[1] >= bbox2[1] &&
      bbox1[2] <= bbox2[2] &&
      bbox1[3] <= bbox2[3]
    );
  }

  private _pointInBbox(point: number[], bbox: number[]): boolean {
    return (
      bbox[0] <= point[0] &&
      point[0] <= bbox[2] &&
      bbox[1] <= point[1] &&
      point[1] <= bbox[3]
    );
  }

  private _calculateBoundingBox(points: number[][]): number[] {
    const minX = Math.min(...points.map((p) => p[0]));
    const minY = Math.min(...points.map((p) => p[1]));
    const maxX = Math.max(...points.map((p) => p[0]));
    const maxY = Math.max(...points.map((p) => p[1]));
    return [minX, minY, maxX, maxY];
  }

  private _knnSearch(
    node: RTreeNode,
    queryPoint: number[],
    k: number,
    result: [number, number][][],
  ): void {
    if (node.is_leaf) {
      for (const child of node.children) {
        result.push([
          child,
          this._distance(queryPoint, this._calculateBoundingBox(child)),
        ]);
      }
    } else {
      const distances: [number[], number][] = node.children.map((child) => [
        child,
        this.calculateMinDistance(
          queryPoint,
          this._calculateBoundingBox(child),
        ),
      ]);

      distances.sort((a, b) => a[1] - b[1]);

      for (const [child, _] of distances.slice(0, k)) {
        this._knnSearch(child, queryPoint, k, result);
      }
    }
  }

  private _recursiveUpdate(
    node: RTreeNode,
    oldPoint: number[],
    newPoint: number[],
  ): void {
    if (node.is_leaf) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].bounding_box.join(",") === oldPoint.join(",")) {
          node.children[i].bounding_box = newPoint;
          return;
        }
      }
    } else {
      for (const child of node.children) {
        if (this._intersects(child.bounding_box, oldPoint)) {
          this._recursiveUpdate(child, oldPoint, newPoint);
        }
      }
    }
  }

  private _intersects(box1: number[], box2: number[]): boolean {
    return !(
      box1[2] < box2[0] ||
      box1[0] > box2[2] ||
      box1[3] < box2[1] ||
      box1[1] > box2[3]
    );
  }

  private _recursiveTraverse(
    node: RTreeNode,
    visitFunc: (node: RTreeNode) => void,
  ): void {
    visitFunc(node);
    if (!node.is_leaf) {
      for (const child of node.children) {
        this._recursiveTraverse(child, visitFunc);
      }
    }
  }
}
