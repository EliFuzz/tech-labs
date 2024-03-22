class RTreeNode:
    def __init__(self, is_leaf=True):
        self.is_leaf = is_leaf
        self.children = []
        self.bounding_box = None


class RTree:
    def __init__(self, max_children=4):
        self.root = RTreeNode()
        self.max_children = max_children

    def insert(self, point):
        self._insert_recursive(self.root, point)

    def _insert_recursive(self, node, point):
        if node.is_leaf:
            node.children.append(point)
            if len(node.children) > self.max_children:
                self._split(node)
        else:
            min_increase = float('inf')
            best_child = None

            for child in node.children:
                child_bbox = self._calculate_bounding_box(child)
                expanded_bbox = self._calculate_expanded_bbox(child_bbox, point)
                increase = self._calculate_area_increase(child_bbox, expanded_bbox)

                if increase < min_increase:
                    min_increase = increase
                    best_child = child

            self._insert_recursive(best_child, point)

    def _calculate_area_increase(self, old_bbox, new_bbox):
        old_area = (old_bbox[2] - old_bbox[0]) * (old_bbox[3] - old_bbox[1])
        new_area = (new_bbox[2] - new_bbox[0]) * (new_bbox[3] - new_bbox[1])
        return new_area - old_area

    def _calculate_expanded_bbox(self, old_bbox, point):
        min_x, min_y, max_x, max_y = old_bbox
        new_min_x = min(min_x, point[0])
        new_min_y = min(min_y, point[1])
        new_max_x = max(max_x, point[0])
        new_max_y = max(max_y, point[1])
        return (new_min_x, new_min_y, new_max_x, new_max_y)

    def _split(self, node):
        split_point = len(node.children) // 2
        new_node = RTreeNode(is_leaf=node.is_leaf)
        new_node.children = node.children[split_point:]
        node.children = node.children[:split_point]

        node.bounding_box = self._calculate_bounding_box(node.children)
        new_node.bounding_box = self._calculate_bounding_box(new_node.children)

        if node == self.root:
            new_root = RTreeNode(is_leaf=False)
            new_root.children = [node, new_node]
            new_root.bounding_box = self._calculate_bounding_box(new_root.children)
            self.root = new_root

    def _delete_recursive(self, node, point):
        if node.is_leaf:
            node.children = [p for p in node.children if p != point]
        else:
            for child in node.children:
                child_bbox = self._calculate_bounding_box(child)
                if self._point_in_bbox(point, child_bbox):
                    self._delete_recursive(child, point)
                    break
            node.bounding_box = self._calculate_bounding_box(node.children)

    def _search_recursive(self, node, query_bbox, result):
        if node.is_leaf:
            for point in node.children:
                if self._point_in_bbox(point, query_bbox):
                    result.append(point)
        else:
            for child in node.children:
                child_bbox = self._calculate_bounding_box(child)
                if self._bbox_intersects_query(child_bbox, query_bbox):
                    self._search_recursive(child, query_bbox, result)

    def _nearest_neighbors_recursive(self, node, query_point, k, result):
        if node.is_leaf:
            for point in node.children:
                self._update_nearest_neighbors(query_point, point, k, result)
        else:
            sorted_children = sorted(node.children, key=lambda child: self._distance(query_point, self._calculate_bounding_box(child)))

            for child in sorted_children:
                child_bbox = self._calculate_bounding_box(child)
                if self._distance(query_point, child_bbox) < result[-1][0]:
                    self._nearest_neighbors_recursive(child, query_point, k, result)

    def _update_nearest_neighbors(self, query_point, point, k, result):
        distance = self._distance(query_point, point)

        if len(result) < k:
            result.append((distance, point))
            result.sort(key=lambda x: x[0], reverse=True)
        elif distance < result[0][0]:
            result[0] = (distance, point)
            result.sort(key=lambda x: x[0], reverse=True)

    def _distance(self, point1, point2):
        return math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2)

    def range_query(self, query_bbox):
        result = []
        self._range_query_recursive(self.root, query_bbox, result)
        return result

    def _range_query_recursive(self, node, query_bbox, result):
          if node.is_leaf:
              for point in node.children:
                  if self._point_in_bbox(point, query_bbox):
                      result.append(point)
          else:
              for child in node.children:
                  child_bbox = self._calculate_bounding_box(child)
                  if self._bbox_intersects_query(child_bbox, query_bbox):
                      self._range_query_recursive(child, query_bbox, result)

    def _bbox_intersects_query(self, bbox, query_bbox):
        return not (bbox[2] < query_bbox[0] or
                    bbox[0] > query_bbox[2] or
                    bbox[3] < query_bbox[1] or
                    bbox[1] > query_bbox[3])

    def _window_query_recursive(self, node, query_bbox, result):
        if node.is_leaf:
            for point in node.children:
                if self._point_in_bbox(point, query_bbox):
                    result.append(point)
        else:
            for child in node.children:
                child_bbox = self._calculate_bounding_box(child)
                if self._bbox_fully_contained(child_bbox, query_bbox):
                    self._window_query_recursive(child, query_bbox, result)
    def _bbox_fully_contained(self, bbox1, bbox2):
        return bbox1[0] >= bbox2[0] and bbox1[1] >= bbox2[1] and bbox1[2] <= bbox2[2] and bbox1[3] <= bbox2[3]


    def _point_in_bbox(self, point, bbox):
            return bbox[0] <= point[0] <= bbox[2] and bbox[1] <= point[1] <= bbox[3]

    def _calculate_bounding_box(self, points):
        min_x = min(p[0] for p in points)
        min_y = min(p[1] for p in points)
        max_x = max(p[0] for p in points)
        max_y = max(p[1] for p in points)
        return (min_x, min_y, max_x, max_y)

    def knn_query(self, query_point, k):
        result = []

        _knn_search(self.root, query_point, k)

        result.sort(key=lambda x: x[1])
        return result[:k]

    def _knn_search(node, query_point, k):
        if node.is_leaf:
            for child in node.children:
                result.append((child, _distance(query_point, child.bounding_box)))
        else:
            distances = [(child, self.calculate_min_distance(query_point, child.bounding_box)) for child in node.children]
            distances.sort(key=lambda x: x[1])

            for child, _ in distances[:k]:
                knn_search(child, query_point, k)

    def calculate_min_distance(self, point, bounding_box):
        min_distance = 0

        for i in range(len(point)):
            if point[i] < bounding_box[i]:
                min_distance += (bounding_box[i] - point[i])**2
            elif point[i] > bounding_box[i + 2]:
                min_distance += (point[i] - bounding_box[i + 2])**2

        return math.sqrt(min_distance)

    def update(self, old_point, new_point):
        recursive_update(self.root, old_point, new_point)

    def recursive_update(node, old_point, new_point):
        if node.is_leaf:
            for i, child in enumerate(node.children):
                if child.bounding_box == old_point:
                    node.children[i].bounding_box = new_point
                    return
        else:
            for child in node.children:
                if self._intersects(child.bounding_box, old_point):
                    recursive_update(child, old_point, new_point)

    def _intersects(self, box1, box2):
          return not (box1[2] < box2[0] or
                      box1[0] > box2[2] or
                      box1[3] < box2[1] or
                      box1[1] > box2[3])

    def traverse(self, visit_func):
        recursive_traverse(self.root, visit_func)

    def recursive_traverse(node, visit_func):
                visit_func(node)
                if not node.is_leaf:
                    for child in node.children:
                        recursive_traverse(child, visit_func)

    def print_node_info(node, depth):
        indentation = "  " * depth
        if node.is_leaf:
            print(f"{indentation}Leaf Node Bounding Box:", node.bounding_box)
        else:
            print(f"{indentation}Internal Node Bounding Box:", node.bounding_box)
