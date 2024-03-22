use std::cmp::{max, min};

#[derive(Debug)]
struct RTreeNode {
    is_leaf: bool,
    children: Vec<(f64, f64)>,
    bounding_box: Option<(f64, f64, f64, f64)>,
}

impl RTreeNode {
    fn new(is_leaf: bool) -> Self {
        RTreeNode {
            is_leaf,
            children: Vec::new(),
            bounding_box: None,
        }
    }
}

#[derive(Debug)]
struct RTree {
    root: RTreeNode,
    max_children: usize,
}

impl RTree {
    fn new(max_children: usize) -> Self {
        let root = RTreeNode::new(true);
        RTree { root, max_children }
    }

    fn insert(&mut self, point: (f64, f64)) {
        self.insert_recursive(&mut self.root, point);
    }

    fn insert_recursive(&mut self, node: &mut RTreeNode, point: (f64, f64)) {
        if node.is_leaf {
            node.children.push(point);
            if node.children.len() > self.max_children {
                self.split(node);
            }
        } else {
            let mut min_increase = f64::INFINITY;
            let mut best_child = None;

            for child in &node.children {
                let child_bbox = self.calculate_bounding_box(child);
                let expanded_bbox = self.calculate_expanded_bbox(child_bbox, point);
                let increase = self.calculate_area_increase(&child_bbox, &expanded_bbox);

                if increase < min_increase {
                    min_increase = increase;
                    best_child = Some(child);
                }
            }

            if let Some(best_child) = best_child {
                self.insert_recursive(best_child, point);
            }
        }
    }

    fn calculate_area_increase(&self, old_bbox: &(f64, f64, f64, f64), new_bbox: &(f64, f64, f64, f64)) -> f64 {
        let old_area = (old_bbox.2 - old_bbox.0) * (old_bbox.3 - old_bbox.1);
        let new_area = (new_bbox.2 - new_bbox.0) * (new_bbox.3 - new_bbox.1);
        new_area - old_area
    }

    fn calculate_expanded_bbox(&self, old_bbox: (f64, f64, f64, f64), point: (f64, f64)) -> (f64, f64, f64, f64) {
        let (min_x, min_y, max_x, max_y) = old_bbox;
        let new_min_x = min(min_x, point.0);
        let new_min_y = min(min_y, point.1);
        let new_max_x = max(max_x, point.0);
        let new_max_y = max(max_y, point.1);
        (new_min_x, new_min_y, new_max_x, new_max_y)
    }

    fn split(&mut self, node: &mut RTreeNode) {
        let split_point = node.children.len() / 2;
        let mut new_node = RTreeNode::new(node.is_leaf);
        new_node.children = node.children.split_off(split_point);
        node.bounding_box = Some(self.calculate_bounding_box(&node.children));
        new_node.bounding_box = Some(self.calculate_bounding_box(&new_node.children));

        if node.is_leaf {
            let new_root = RTreeNode::new(false);
            new_root.children.push(node.clone());
            new_root.children.push(new_node);
            new_root.bounding_box = Some(self.calculate_bounding_box(&new_root.children));
            self.root = new_root;
        } else {
            let parent_bounding_box = self.calculate_bounding_box(&[&node.children, &new_node.children].concat());
            node.bounding_box = Some(self.calculate_bounding_box(&node.children));
            new_node.bounding_box = Some(self.calculate_bounding_box(&new_node.children));
            let parent = &mut node.children;
            parent.push(new_node);
            node.bounding_box = Some(parent_bounding_box);
        }
    }

    fn delete_recursive(&mut self, node: &mut RTreeNode, point: (f64, f64)) {
        if node.is_leaf {
            node.children.retain(|p| p != &point);
        } else {
            for child in &mut node.children {
                let child_bbox = self.calculate_bounding_box(child);
                if self.point_in_bbox(&point, &child_bbox) {
                    self.delete_recursive(child, point);
                    break;
                }
            }
            node.bounding_box = Some(self.calculate_bounding_box(&node.children));
        }
    }

    fn search_recursive(&self, node: &RTreeNode, query_bbox: (f64, f64, f64, f64), result: &mut Vec<(f64, f64)>) {
        if node.is_leaf {
            for point in &node.children {
                if self.point_in_bbox(point, &query_bbox) {
                    result.push(*point);
                }
            }
        } else {
            for child in &node.children {
                let child_bbox = self.calculate_bounding_box(child);
                if self.bbox_intersects_query(&child_bbox, &query_bbox) {
                    self.search_recursive(child, query_bbox, result);
                }
            }
        }
    }

    fn nearest_neighbors_recursive(&self, node: &RTreeNode, query_point: (f64, f64), k: usize, result: &mut Vec<(f64, (f64, f64))>) {
        if node.is_leaf {
            for point in &node.children {
                self.update_nearest_neighbors(query_point, *point, k, result);
            }
        } else {
            let mut sorted_children = node.children.clone();
            sorted_children.sort_by(|a, b| {
                let dist_a = self.distance(query_point, self.calculate_bounding_box(a));
                let dist_b = self.distance(query_point, self.calculate_bounding_box(b));
                dist_a.partial_cmp(&dist_b).unwrap()
            });

            for child in &sorted_children {
                let child_bbox = self.calculate_bounding_box(child);
                if self.distance(query_point, child_bbox) < result.last().map(|x| x.0).unwrap_or(f64::INFINITY) {
                    self.nearest_neighbors_recursive(child, query_point, k, result);
                }
            }
        }
    }

    fn update_nearest_neighbors(&self, query_point: (f64, f64), point: (f64, f64), k: usize, result: &mut Vec<(f64, (f64, f64))>) {
        let distance = self.distance(query_point, point);

        if result.len() < k {
          result.push((distance, point));
                  result.sort_by(|a, b| b.0.partial_cmp(&a.0).unwrap());
              } else if distance < result[0].0 {
                  result[0] = (distance, point);
                  result.sort_by(|a, b| b.0.partial_cmp(&a.0).unwrap());
              }
          }

    fn distance(&self, point1: (f64, f64), point2: (f64, f64)) -> f64 {
        ((point1.0 - point2.0).powi(2) + (point1.1 - point2.1).powi(2)).sqrt()
    }

    fn range_query(&self, query_bbox: (f64, f64, f64, f64)) -> Vec<(f64, f64)> {
        let mut result = Vec::new();
        self.range_query_recursive(&self.root, query_bbox, &mut result);
        result
    }

    fn range_query_recursive(&self, node: &RTreeNode, query_bbox: (f64, f64, f64, f64), result: &mut Vec<(f64, f64)>) {
        if node.is_leaf {
            for point in &node.children {
                if self.point_in_bbox(point, &query_bbox) {
                    result.push(*point);
                }
            }
        } else {
            for child in &node.children {
                let child_bbox = self.calculate_bounding_box(child);
                if self.bbox_intersects_query(&child_bbox, &query_bbox) {
                    self.range_query_recursive(child, query_bbox, result);
                }
            }
        }
    }

    fn bbox_intersects_query(&self, bbox: &(f64, f64, f64, f64), query_bbox: &(f64, f64, f64, f64)) -> bool {
        !(bbox.2 < query_bbox.0 || bbox.0 > query_bbox.2 || bbox.3 < query_bbox.1 || bbox.1 > query_bbox.3)
    }

    fn window_query_recursive(&self, node: &RTreeNode, query_bbox: (f64, f64, f64, f64), result: &mut Vec<(f64, f64)>) {
        if node.is_leaf {
            for point in &node.children {
                if self.point_in_bbox(point, &query_bbox) {
                    result.push(*point);
                }
            }
        } else {
            for child in &node.children {
                let child_bbox = self.calculate_bounding_box(child);
                if self.bbox_fully_contained(&child_bbox, &query_bbox) {
                    self.window_query_recursive(child, query_bbox, result);
                }
            }
        }
    }

    fn bbox_fully_contained(&self, bbox1: &(f64, f64, f64, f64), bbox2: &(f64, f64, f64, f64)) -> bool {
        bbox1.0 >= bbox2.0 && bbox1.1 >= bbox2.1 && bbox1.2 <= bbox2.2 && bbox1.3 <= bbox2.3
    }

    fn point_in_bbox(&self, point: &(f64, f64), bbox: &(f64, f64, f64, f64)) -> bool {
        bbox.0 <= point.0 && point.0 <= bbox.2 && bbox.1 <= point.1 && point.1 <= bbox.3
    }

    fn calculate_bounding_box(&self, points: &[(f64, f64)]) -> (f64, f64, f64, f64) {
        let min_x = points.iter().map(|p| p.0).fold(f64::INFINITY, f64::min);
        let min_y = points.iter().map(|p| p.1).fold(f64::INFINITY, f64::min);
        let max_x = points.iter().map(|p| p.0).fold(f64::NEG_INFINITY, f64::max);
        let max_y = points.iter().map(|p| p.1).fold(f64::NEG_INFINITY, f64::max);
        (min_x, min_y, max_x, max_y)
    }

    fn knn_query(&self, query_point: (f64, f64), k: usize) -> Vec<(f64, (f64, f64))> {
        let mut result = Vec::new();
        self.knn_search(&self.root, query_point, k, &mut result);
        result.sort_by(|a, b| a.0.partial_cmp(&b.0).unwrap());
        result.truncate(k);
        result
    }

    fn knn_search(&self, node: &RTreeNode, query_point: (f64, f64), k: usize, result: &mut Vec<(f64, (f64, f64))>) {
        if node.is_leaf {
            for child in &node.children {
                result.push((self.distance(query_point, *child), *child));
            }
        } else {
            let mut distances: Vec<_> = node.children.iter()
                .map(|child| (child, self.calculate_min_distance(query_point, child)))
                .collect();
            distances.sort_by(|a, b| a.1.partial_cmp(&b.1).unwrap());

            for (child, _) in distances.iter().take(k) {
                self.knn_search(child, query_point, k, result);
            }
        }
    }

    fn calculate_min_distance(&self, point: (f64, f64), bounding_box: &(f64, f64, f64, f64)) -> f64 {
        let mut min_distance = 0.0;

        for i in 0..2 {
            if point.0 < bounding_box.0 {
                min_distance += (bounding_box.0 - point.0).powi(2);
            } else if point.0 > bounding_box.2 {
                min_distance += (point.0 - bounding_box.2).powi(2);
            }

            if point.1 < bounding_box.1 {
                min_distance += (bounding_box.1 - point.1).powi(2);
            } else if point.1 > bounding_box.3 {
                min_distance += (point.1 - bounding_box.3).powi(2);
            }
        }

        min_distance.sqrt()
    }

    fn update(&mut self, old_point: (f64, f64), new_point: (f64, f64)) {
        self.recursive_update(&mut self.root, old_point, new_point);
    }

    fn recursive_update(&mut self, node: &mut RTreeNode, old_point: (f64, f64), new_point: (f64, f64)) {
        if node.is_leaf {
            for i in 0..node.children.len() {
                if node.children[i] == old_point {
                    node.children[i] = new_point;
                    return;
                }
            }
        } else {
            for child in &mut node.children {
                if self.intersects(child, &old_point) {
                    self.recursive_update(child, old_point, new_point);
                    return;
                }
            }
        }
    }

    fn intersects(&self, box1: &(f64, f64, f64, f64), box2: &(f64, f64)) -> bool {
        !(box1.2 < box2.0 || box1.0 > box2.2 || box1.3 < box2.1 || box1.1 > box2.3)
    }

    fn traverse(&self, visit_func: impl FnMut(&RTreeNode)) {
        self.recursive_traverse(&self.root, visit_func);
    }

    fn recursive_traverse(&self, node: &RTreeNode, mut visit_func: impl FnMut(&RTreeNode)) {
        visit_func(node);
        if !node.is_leaf {
            for child in &node.children {
                self.recursive_traverse(child, &mut visit_func);
            }
        }
    }

    fn print_node_info(&self, node: &RTreeNode, depth: usize) {
        let indentation = "  ".repeat(depth);
        if node.is_leaf {
            println!("{indentation}Leaf Node Bounding Box: {:?}", node.bounding_box);
        } else {
            println!("{indentation}Internal Node Bounding Box: {:?}", node.bounding_box);
        }
    }
}
