import java.util.*;

public class Graph {

    // Adjacency list
    private final Map<String, List<String>> graph = new HashMap<>();

    // Add a relationship between a skill and a job role
    public void addRelationship(String skill, String jobRole) {

        graph.putIfAbsent(skill, new ArrayList<>());

        graph.get(skill).add(jobRole);
    }

    // Find job roles related to resume skills using BFS
    public Set<String> findMatchingJobs(List<String> resumeSkills) {

        Queue<String> queue = new LinkedList<>();

        Set<String> visited = new HashSet<>();

        Set<String> matchedJobs = new LinkedHashSet<>();

        // Add resume skills to queue
        for (String skill : resumeSkills) {

            String normalizedSkill = skill.toLowerCase().trim();

            if (graph.containsKey(normalizedSkill)) {
                queue.add(normalizedSkill);
                visited.add(normalizedSkill);
            }
        }

        // BFS traversal
        while (!queue.isEmpty()) {

            String currentSkill = queue.poll();

            List<String> jobs = graph.get(currentSkill);

            if (jobs == null) {
                continue;
            }

            for (String job : jobs) {

                matchedJobs.add(job);
            }
        }

        return matchedJobs;
    }

    public static void main(String[] args) {

        Graph jobGraph = new Graph();

        // Skill → Job relationships

        jobGraph.addRelationship(
                "java",
                "Software Engineer"
        );

        jobGraph.addRelationship(
                "java",
                "Backend Developer"
        );

        jobGraph.addRelationship(
                "react",
                "Frontend Developer"
        );

        jobGraph.addRelationship(
                "react",
                "Full Stack Developer"
        );

        jobGraph.addRelationship(
                "node.js",
                "Backend Developer"
        );

        jobGraph.addRelationship(
                "node.js",
                "Full Stack Developer"
        );

        jobGraph.addRelationship(
                "mongodb",
                "Backend Developer"
        );

        jobGraph.addRelationship(
                "python",
                "Python Developer"
        );

        // Example resume skills
        List<String> resumeSkills = Arrays.asList(
                "Java",
                "React",
                "Node.js",
                "MongoDB"
        );

        Set<String> matchedJobs =
                jobGraph.findMatchingJobs(resumeSkills);

        System.out.println("Resume Skills:");
        System.out.println(resumeSkills);

        System.out.println();

        System.out.println("Matched Job Roles:");

        for (String job : matchedJobs) {
            System.out.println("- " + job);
        }
    }
}