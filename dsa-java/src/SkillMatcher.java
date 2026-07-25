import java.util.HashMap;
import java.util.Map;

public class SkillMatcher {

    // HashMap stores each skill and its importance/weight
    private final Map<String, Integer> skillWeights;

    public SkillMatcher() {

        skillWeights = new HashMap<>();

        // Common technical skills and their weights
        skillWeights.put("java", 10);
        skillWeights.put("javascript", 10);
        skillWeights.put("react", 10);
        skillWeights.put("node", 10);
        skillWeights.put("python", 10);
        skillWeights.put("mongodb", 8);
        skillWeights.put("sql", 8);
        skillWeights.put("docker", 7);
        skillWeights.put("git", 5);
        skillWeights.put("html", 5);
        skillWeights.put("css", 5);
    }

    // Calculate how well resume skills match required job skills
    public int calculateMatchScore(String[] resumeSkills,
                                   String[] requiredSkills) {

        int score = 0;
        int totalWeight = 0;

        // Calculate total possible score
        for (String skill : requiredSkills) {

            String normalizedSkill = skill.toLowerCase().trim();

            totalWeight += skillWeights.getOrDefault(
                    normalizedSkill,
                    5
            );
        }

        // Calculate score for matching skills
        for (String resumeSkill : resumeSkills) {

            String normalizedResumeSkill =
                    resumeSkill.toLowerCase().trim();

            if (containsSkill(requiredSkills, normalizedResumeSkill)) {

                score += skillWeights.getOrDefault(
                        normalizedResumeSkill,
                        5
                );
            }
        }

        if (totalWeight == 0) {
            return 0;
        }

        return (score * 100) / totalWeight;
    }

    // Check whether required skill exists
    private boolean containsSkill(
            String[] requiredSkills,
            String resumeSkill) {

        for (String skill : requiredSkills) {

            if (skill.toLowerCase().trim()
                    .equals(resumeSkill)) {

                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        SkillMatcher matcher = new SkillMatcher();

        // Skills extracted from resume
        String[] resumeSkills = {
                "Java",
                "React",
                "Node",
                "MongoDB",
                "Git"
        };

        // Skills required by a job
        String[] requiredSkills = {
                "Java",
                "React",
                "Node",
                "Python",
                "MongoDB"
        };

        int score = matcher.calculateMatchScore(
                resumeSkills,
                requiredSkills
        );

        System.out.println(
                "=== Smart Resume Analyzer - Skill Matcher ==="
        );

        System.out.println(
                "Resume Skills: Java, React, Node, MongoDB, Git"
        );

        System.out.println(
                "Required Skills: Java, React, Node, Python, MongoDB"
        );

        System.out.println(
                "Job Match Score: " + score + "%"
        );
    }
}