# DSA Implementation - Smart Resume Analyzer

This folder contains the mandatory Data Structures and Algorithms implementation for the Smart Resume Analyzer project.

The implementation is written in Java.

## 1. Trie

### Why Trie?

The Resume Analyzer works with technical skills such as:

- Java
- JavaScript
- React
- Node.js
- MongoDB
- Python

A Trie is used to efficiently store and search skill keywords.

### Operations

- Insert skill
- Search exact skill
- Search by prefix

### Complexity

For a skill of length `L`:

- Insert: O(L)
- Search: O(L)
- Prefix search: O(L)

### Application Usage

The Trie supports the skill-search and keyword-matching part of the Resume Analyzer.

---

## 2. Graph

### Why Graph?

The application needs to connect resume skills with suitable job roles.

Example:

Java → Software Engineer

React → Frontend Developer

Node.js → Backend Developer

MongoDB → Backend Developer

These relationships can naturally be represented using a Graph.

### Algorithm

The implementation uses an adjacency-list representation and BFS traversal to find job roles associated with resume skills.

### Complexity

For a graph with V vertices and E edges:

- BFS: O(V + E)

### Application Usage

The Graph supports the job matching and recommendation functionality of the Resume Analyzer.

---

## DSA Summary

| DSA | Purpose | Complexity |
|---|---|---|
| Trie | Skill searching and prefix matching | O(L) |
| Graph + BFS | Skill-to-job matching | O(V + E) |

## Why These Algorithms?

The Trie is suitable for fast keyword and prefix searching.

The Graph is suitable for representing relationships between skills and job roles.

Together they support the Resume Analyzer's skill analysis and job recommendation functionality.

1 → DSA integration
2 → Real AI feature
3 → Verify 10+ APIs
4 → MongoDB indexing + optimization
5 → Testing
6 → Deployment
7 → GitHub Issues/PR workflow
8 → README + diagrams + screenshots
9 → Presentation

"I implemented two DSA concepts in Java. First, I used a Trie for efficient skill and prefix searching. Second, I used a HashMap-based skill matcher to store skill weights and calculate how closely a user's resume matches the skills required by a job."