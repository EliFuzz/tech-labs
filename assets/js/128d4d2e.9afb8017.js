"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2177],{11204:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>y,contentTitle:()=>x,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>C});var i=t(11527),s=t(88672),r=t(29140),o=t(52360),a=t(52296);const d='package main\n\nimport (\n    "math"\n)\n\ntype Point struct {\n    X, Y float64\n}\n\ntype Centroid struct {\n    X, Y float64\n}\n\nfunc kMeans(points []Point, k int) []Centroid {\n    centroids := make([]Centroid, k)\n    for i := range centroids {\n        centroids[i] = Centroid{points[i].X, points[i].Y}\n    }\n\n    for {\n        clusters := make([][]Point, k)\n        for _, point := range points {\n            nearestIdx := 0\n            nearestDist := math.Inf(1)\n            for i, centroid := range centroids {\n                dist := math.Pow(point.X-centroid.X, 2) + math.Pow(point.Y-centroid.Y, 2)\n                if dist < nearestDist {\n                    nearestIdx = i\n                    nearestDist = dist\n                }\n            }\n            clusters[nearestIdx] = append(clusters[nearestIdx], point)\n        }\n\n        newCentroids := make([]Centroid, k)\n        for i, cluster := range clusters {\n            sumX, sumY := 0.0, 0.0\n            for _, point := range cluster {\n                sumX += point.X\n                sumY += point.Y\n            }\n            newCentroids[i] = Centroid{sumX / float64(len(cluster)), sumY / float64(len(cluster))}\n        }\n\n        if converged(centroids, newCentroids) {\n            break\n        }\n        centroids = newCentroids\n    }\n\n    return centroids\n}\n\nfunc converged(oldCentroids, newCentroids []Centroid) bool {\n    for i := range oldCentroids {\n        if math.Abs(oldCentroids[i].X-newCentroids[i].X) > 1e-6 || math.Abs(oldCentroids[i].Y-newCentroids[i].Y) > 1e-6 {\n            return false\n        }\n    }\n    return true\n}\n',l="import java.util.ArrayList;\nimport java.util.List;\n\nclass Point {\n\n  double x, y;\n\n  Point(double x, double y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nclass Centroid {\n\n  double x, y;\n\n  Centroid(double x, double y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\npublic class KMeans {\n\n  public static List<Centroid> kMeans(List<Point> points, int k) {\n    List<Centroid> centroids = new ArrayList<>();\n    for (int i = 0; i < k; i++) {\n      centroids.add(new Centroid(points.get(i).x, points.get(i).y));\n    }\n\n    while (true) {\n      List<List<Point>> clusters = new ArrayList<>();\n      for (int i = 0; i < k; i++) {\n        clusters.add(new ArrayList<>());\n      }\n\n      for (Point point : points) {\n        int nearestIdx = 0;\n        double nearestDist = Double.POSITIVE_INFINITY;\n        for (int i = 0; i < k; i++) {\n          Centroid centroid = centroids.get(i);\n          double dist = Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2);\n          if (dist < nearestDist) {\n            nearestIdx = i;\n            nearestDist = dist;\n          }\n        }\n        clusters.get(nearestIdx).add(point);\n      }\n\n      List<Centroid> newCentroids = new ArrayList<>();\n      for (List<Point> cluster : clusters) {\n        double sumX = 0, sumY = 0;\n        for (Point point : cluster) {\n          sumX += point.x;\n          sumY += point.y;\n        }\n        newCentroids.add(new Centroid(sumX / cluster.size(), sumY / cluster.size()));\n      }\n\n      if (converged(centroids, newCentroids)) {\n        break;\n      }\n      centroids = newCentroids;\n    }\n\n    return centroids;\n  }\n\n  public static boolean converged(List<Centroid> oldCentroids, List<Centroid> newCentroids) {\n    for (int i = 0; i < oldCentroids.size(); i++) {\n      if (Math.abs(oldCentroids.get(i).x - newCentroids.get(i).x) > 1e-6 ||\n          Math.abs(oldCentroids.get(i).y - newCentroids.get(i).y) > 1e-6) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n",c="class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nclass Centroid {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nfunction kMeans(points, k) {\n  let centroids = [];\n  for (let i = 0; i < k; i++) {\n    centroids.push(new Centroid(points[i].x, points[i].y));\n  }\n\n  while (true) {\n    let clusters = new Array(k).fill().map(() => []);\n\n    for (let point of points) {\n      let nearestIdx = 0;\n      let nearestDist = Infinity;\n      for (let i = 0; i < k; i++) {\n        let centroid = centroids[i];\n        let dist =\n          Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2);\n        if (dist < nearestDist) {\n          nearestIdx = i;\n          nearestDist = dist;\n        }\n      }\n      clusters[nearestIdx].push(point);\n    }\n\n    let newCentroids = [];\n    for (let cluster of clusters) {\n      let sumX = 0,\n        sumY = 0;\n      for (let point of cluster) {\n        sumX += point.x;\n        sumY += point.y;\n      }\n      newCentroids.push(\n        new Centroid(sumX / cluster.length, sumY / cluster.length),\n      );\n    }\n\n    if (converged(centroids, newCentroids)) {\n      break;\n    }\n    centroids = newCentroids;\n  }\n\n  return centroids;\n}\n\nfunction converged(oldCentroids, newCentroids) {\n  for (let i = 0; i < oldCentroids.length; i++) {\n    if (\n      Math.abs(oldCentroids[i].x - newCentroids[i].x) > 1e-6 ||\n      Math.abs(oldCentroids[i].y - newCentroids[i].y) > 1e-6\n    ) {\n      return false;\n    }\n  }\n  return true;\n}\n",u="data class Point(val x: Double, val y: Double)\n\ndata class Centroid(var x: Double, var y: Double)\n\nfun kMeans(points: List<Point>, k: Int): List<Centroid> {\n    var centroids = points.take(k).map { Centroid(it.x, it.y) }\n\n    while (true) {\n        val clusters = List(k) { mutableListOf<Point>() }\n\n        for (point in points) {\n            var nearestIdx = 0\n            var nearestDist = Double.POSITIVE_INFINITY\n            for ((idx, centroid) in centroids.withIndex()) {\n                val dist = Math.pow(point.x - centroid.x, 2.0) + Math.pow(point.y - centroid.y, 2.0)\n                if (dist < nearestDist) {\n                    nearestIdx = idx\n                    nearestDist = dist\n                }\n            }\n            clusters[nearestIdx].add(point)\n        }\n\n        val newCentroids = mutableListOf<Centroid>()\n        for ((idx, cluster) in clusters.withIndex()) {\n            val sumX = cluster.sumByDouble { it.x }\n            val sumY = cluster.sumByDouble { it.y }\n            newCentroids.add(Centroid(sumX / cluster.size, sumY / cluster.size))\n        }\n\n        if (converged(centroids, newCentroids)) {\n            break\n        }\n        centroids = newCentroids\n    }\n\n    return centroids\n}\n\nfun converged(oldCentroids: List<Centroid>, newCentroids: List<Centroid>): Boolean {\n    return oldCentroids.zip(newCentroids).all { (old, new) ->\n        Math.abs(old.x - new.x) < 1e-6 && Math.abs(old.y - new.y) < 1e-6\n    }\n}\n",p="class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nclass Centroid:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\ndef k_means(points, k):\n    centroids = [Centroid(point.x, point.y) for point in points[:k]]\n\n    while True:\n        clusters = [[] for _ in range(k)]\n\n        for point in points:\n            nearest_idx = 0\n            nearest_dist = float('inf')\n            for i, centroid in enumerate(centroids):\n                dist = (point.x - centroid.x) ** 2 + (point.y - centroid.y) ** 2\n                if dist < nearest_dist:\n                    nearest_idx = i\n                    nearest_dist = dist\n            clusters[nearest_idx].append(point)\n\n        new_centroids = []\n        for cluster in clusters:\n            sum_x = sum(point.x for point in cluster)\n            sum_y = sum(point.y for point in cluster)\n            new_centroids.append(Centroid(sum_x / len(cluster), sum_y / len(cluster)))\n\n        if converged(centroids, new_centroids):\n            break\n        centroids = new_centroids\n\n    return centroids\n\ndef converged(old_centroids, new_centroids):\n    return all(abs(old.x - new.x) < 1e-6 and abs(old.y - new.y) < 1e-6 for old, new in zip(old_centroids, new_centroids))\n",m="#[derive(Clone, Copy)]\nstruct Point {\n    x: f64,\n    y: f64,\n}\n\n#[derive(Clone, Copy)]\nstruct Centroid {\n    x: f64,\n    y: f64,\n}\n\nfn k_means(points: &[Point], k: usize) -> Vec<Centroid> {\n    let mut centroids: Vec<Centroid> = points.iter().take(k).map(|p| Centroid { x: p.x, y: p.y }).collect();\n\n    loop {\n        let mut clusters: Vec<Vec<Point>> = vec![Vec::new(); k];\n\n        for point in points {\n            let mut nearest_idx = 0;\n            let mut nearest_dist = f64::INFINITY;\n            for (i, centroid) in centroids.iter().enumerate() {\n                let dist = (point.x - centroid.x).powi(2) + (point.y - centroid.y).powi(2);\n                if dist < nearest_dist {\n                    nearest_idx = i;\n                    nearest_dist = dist;\n                }\n            }\n            clusters[nearest_idx].push(*point);\n        }\n\n        let mut new_centroids: Vec<Centroid> = Vec::new();\n        for cluster in &clusters {\n            let sum_x: f64 = cluster.iter().map(|p| p.x).sum();\n            let sum_y: f64 = cluster.iter().map(|p| p.y).sum();\n            new_centroids.push(Centroid { x: sum_x / cluster.len() as f64, y: sum_y / cluster.len() as f64 });\n        }\n\n        if converged(&centroids, &new_centroids) {\n            break;\n        }\n        centroids = new_centroids;\n    }\n\n    centroids\n}\n\nfn converged(old_centroids: &[Centroid], new_centroids: &[Centroid]) -> bool {\n    old_centroids.iter().zip(new_centroids.iter()).all(|(old, new)| {\n        (old.x - new.x).abs() < 1e-6 && (old.y - new.y).abs() < 1e-6\n    })\n}\n",h="class Point {\n  constructor(\n    public x: number,\n    public y: number,\n  ) {}\n}\n\nclass Centroid {\n  constructor(\n    public x: number,\n    public y: number,\n  ) {}\n}\n\nfunction kMeans(points: Point[], k: number): Centroid[] {\n  let centroids: Centroid[] = points\n    .slice(0, k)\n    .map((p) => new Centroid(p.x, p.y));\n\n  while (true) {\n    let clusters: Point[][] = new Array(k).fill(null).map(() => []);\n\n    for (let point of points) {\n      let nearestIdx = 0;\n      let nearestDist = Infinity;\n      for (let i = 0; i < k; i++) {\n        let centroid = centroids[i];\n        let dist =\n          Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2);\n        if (dist < nearestDist) {\n          nearestIdx = i;\n          nearestDist = dist;\n        }\n      }\n      clusters[nearestIdx].push(point);\n    }\n\n    let newCentroids: Centroid[] = [];\n    for (let cluster of clusters) {\n      let sumX = cluster.reduce((acc, p) => acc + p.x, 0);\n      let sumY = cluster.reduce((acc, p) => acc + p.y, 0);\n      newCentroids.push(\n        new Centroid(sumX / cluster.length, sumY / cluster.length),\n      );\n    }\n\n    if (converged(centroids, newCentroids)) {\n      break;\n    }\n    centroids = newCentroids;\n  }\n\n  return centroids;\n}\n\nfunction converged(\n  oldCentroids: Centroid[],\n  newCentroids: Centroid[],\n): boolean {\n  return oldCentroids.every(\n    (old, i) =>\n      Math.abs(old.x - newCentroids[i].x) < 1e-6 &&\n      Math.abs(old.y - newCentroids[i].y) < 1e-6,\n  );\n}\n",f={title:"k-Means",description:"k-Means",hide_table_of_contents:!0},x=void 0,g={id:"education/computer-science/algorithms/algo/k-means",title:"k-Means",description:"k-Means",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/k-means.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/k-means",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/k-means",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/k-means.mdx",tags:[],version:"current",frontMatter:{title:"k-Means",description:"k-Means",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Jump Search (or Block Search)",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/jump-search"},next:{title:"k-NN",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/k-nn"}},y={},C=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function b(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(e.p,{children:"The k-Means algorithm is an unsupervised machine learning technique used for clustering data into k groups based on similarities in their features. It partitions the data into clusters by minimizing the sum of squared distances between data points and their respective cluster centroids"})}),(0,i.jsx)(o.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(e.p,{children:"The k-Means algorithm begins by randomly initializing k cluster centroids within the data space. Next, each data point is assigned to the nearest centroid, thereby forming k clusters. After the initial assignment, the centroids are recalculated as the mean of all data points assigned to each cluster. This process of assignment and centroid recalculation is repeated iteratively until convergence is achieved, meaning that the centroids no longer change significantly or a specified number of iterations is reached"})}),(0,i.jsx)(o.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Choose the number of clusters, k"}),"\n",(0,i.jsx)(e.li,{children:"Initialize k centroids randomly within the data space"}),"\n",(0,i.jsxs)(e.li,{children:["Repeat until convergence","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Assign each data point to the nearest centroid"}),"\n",(0,i.jsx)(e.li,{children:"Update the centroids by calculating the mean of all points assigned to each centroid"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Repeat until convergence or a maximum number of iterations is reached"}),"\n"]})}),(0,i.jsx)(o.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"it's essential to select an appropriate value for k, typically determined using domain knowledge or techniques like the elbow method"}),"\n",(0,i.jsx)(e.li,{children:"initialization of centroids can affect the final clustering, so multiple random initializations and selecting the best result can improve performance"}),"\n",(0,i.jsx)(e.li,{children:"pay attention to the choice of distance metric, usually Euclidean distance, but other metrics may be more suitable for certain types of data"}),"\n"]})})]}),"\n",(0,i.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"kMeans(data, k):\n    // Step 1: Initialization\n    centroids = randomly_initialize_centroids(data, k)\n    clusters = []\n    repeat:\n        // Step 2: Assignment\n        clusters = assign_points_to_clusters(data, centroids)\n        // Step 3: Update centroids\n        centroids = update_centroids(clusters)\n    until convergence\n    return clusters\n\nrandomly_initialize_centroids(data, k):\n    centroids = []\n    randomly_select k points from data and add them to centroids\n    return centroids\n\nassign_points_to_clusters(data, centroids):\n    clusters = initialize_empty_clusters(k)\n    for each point in data:\n        nearest_centroid = find_nearest_centroid(point, centroids)\n        add point to nearest_centroid's cluster in clusters\n    return clusters\n\nupdate_centroids(clusters):\n    centroids = []\n    for each cluster in clusters:\n        new_centroid = calculate_mean(cluster.points)\n        add new_centroid to centroids\n    return centroids\n\nfind_nearest_centroid(point, centroids):\n    min_distance = infinity\n    nearest_centroid = null\n    for each centroid in centroids:\n        distance = calculate_distance(point, centroid)\n        if distance < min_distance:\n            min_distance = distance\n            nearest_centroid = centroid\n    return nearest_centroid\n\ncalculate_distance(point1, point2):\n    // Euclidean distance\n    return sqrt(sum((point1[i] - point2[i])^2) for i in dimensions)\n\ninitialize_empty_clusters(k):\n    clusters = []\n    for i from 1 to k:\n        create a new cluster and add it to clusters\n    return clusters\n"})})}),(0,i.jsx)(o.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(r.Z,{queryString:"code",children:[(0,i.jsx)(o.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(a.Z,{language:"go",children:d})}),(0,i.jsx)(o.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(a.Z,{language:"java",children:l})}),(0,i.jsx)(o.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(a.Z,{language:"js",children:c})}),(0,i.jsx)(o.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(a.Z,{language:"kotlin",children:u})}),(0,i.jsx)(o.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(a.Z,{language:"python",children:p})}),(0,i.jsx)(o.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(a.Z,{language:"rust",children:m})}),(0,i.jsx)(o.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(a.Z,{language:"ts",children:h})})]})})]})]})}function w(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(b,{...n})}):b(n)}}}]);