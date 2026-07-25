import java.util.*;

public class Graph {
    private final Map<Integer, List<Integer>> adj = new HashMap<>();

    public void addEdge(int u, int v) {
        adj.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
        adj.computeIfAbsent(v, k -> new ArrayList<>());
    }

    public List<Integer> bfs(int start) {
        List<Integer> order = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        Set<Integer> seen = new HashSet<>();
        q.add(start); seen.add(start);
        while (!q.isEmpty()) {
            int u = q.poll();
            order.add(u);
            for (int v : adj.getOrDefault(u, Collections.emptyList())) {
                if (!seen.contains(v)) { seen.add(v); q.add(v); }
            }
        }
        return order;
    }
}
