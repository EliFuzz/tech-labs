class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Centroid:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def k_means(points, k):
    centroids = [Centroid(point.x, point.y) for point in points[:k]]

    while True:
        clusters = [[] for _ in range(k)]

        for point in points:
            nearest_idx = 0
            nearest_dist = float('inf')
            for i, centroid in enumerate(centroids):
                dist = (point.x - centroid.x) ** 2 + (point.y - centroid.y) ** 2
                if dist < nearest_dist:
                    nearest_idx = i
                    nearest_dist = dist
            clusters[nearest_idx].append(point)

        new_centroids = []
        for cluster in clusters:
            sum_x = sum(point.x for point in cluster)
            sum_y = sum(point.y for point in cluster)
            new_centroids.append(Centroid(sum_x / len(cluster), sum_y / len(cluster)))

        if converged(centroids, new_centroids):
            break
        centroids = new_centroids

    return centroids

def converged(old_centroids, new_centroids):
    return all(abs(old.x - new.x) < 1e-6 and abs(old.y - new.y) < 1e-6 for old, new in zip(old_centroids, new_centroids))
