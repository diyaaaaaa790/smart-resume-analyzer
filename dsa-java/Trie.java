import java.util.HashMap;
import java.util.Map;

public class Trie {

    // Node of the Trie
    static class TrieNode {
        Map<Character, TrieNode> children;
        boolean isEndOfWord;

        TrieNode() {
            children = new HashMap<>();
            isEndOfWord = false;
        }
    }

    private final TrieNode root;

    // Constructor
    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into Trie
    public void insert(String word) {

        TrieNode current = root;

        for (char ch : word.toLowerCase().toCharArray()) {

            current.children.putIfAbsent(ch, new TrieNode());

            current = current.children.get(ch);
        }

        current.isEndOfWord = true;
    }

    // Search exact word
    public boolean search(String word) {

        TrieNode current = root;

        for (char ch : word.toLowerCase().toCharArray()) {

            if (!current.children.containsKey(ch)) {
                return false;
            }

            current = current.children.get(ch);
        }

        return current.isEndOfWord;
    }

    // Check whether any word starts with prefix
    public boolean startsWith(String prefix) {

        TrieNode current = root;

        for (char ch : prefix.toLowerCase().toCharArray()) {

            if (!current.children.containsKey(ch)) {
                return false;
            }

            current = current.children.get(ch);
        }

        return true;
    }

    // Demonstration
    public static void main(String[] args) {

        Trie trie = new Trie();

        // Resume-related skills
        trie.insert("java");
        trie.insert("javascript");
        trie.insert("python");
        trie.insert("react");
        trie.insert("node");
        trie.insert("mongodb");
        trie.insert("docker");

        System.out.println("=== Smart Resume Analyzer - Trie Demo ===");

        System.out.println("Search 'java': "
                + trie.search("java"));

        System.out.println("Search 'python': "
                + trie.search("python"));

        System.out.println("Search 'html': "
                + trie.search("html"));

        System.out.println("Prefix 'jav': "
                + trie.startsWith("jav"));

        System.out.println("Prefix 'rea': "
                + trie.startsWith("rea"));
    }
}