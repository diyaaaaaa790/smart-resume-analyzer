public class Trie {
    private static class Node {
        Node[] next = new Node[26];
        boolean end;
    }

    private final Node root = new Node();

    public void insert(String word) {
        Node node = root;
        for (char c : word.toCharArray()) {
            if (!Character.isLetter(c)) continue;
            int i = Character.toLowerCase(c) - 'a';
            if (node.next[i] == null) node.next[i] = new Node();
            node = node.next[i];
        }
        node.end = true;
    }

    public boolean search(String word) {
        Node node = root;
        for (char c : word.toCharArray()) {
            if (!Character.isLetter(c)) continue;
            int i = Character.toLowerCase(c) - 'a';
            if (node.next[i] == null) return false;
            node = node.next[i];
        }
        return node.end;
    }
}
