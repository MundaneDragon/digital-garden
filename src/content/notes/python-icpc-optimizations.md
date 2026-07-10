---
title: "Algorithmic Optimizations for ICPC and SPAR"
date: "2025-09-12"
tags: ["Python", "Algorithms", "ICPC"]
type: "note"
---

# Algorithmic Optimizations for ICPC and SPAR

Competitive programming rewards recognising the DP shape of a problem before you reach for brute force. One pattern that shows up repeatedly in ICPC regionals and SPAR (Sydney Programming and Algorithms Round) is the grid-based DP with monotonic state transitions — shortest path on a DAG, edit distance with bounded operations, or knapsack variants with dependency constraints. The key insight is to precompute a memo table where each cell depends only on its immediate neighbours, letting you collapse what looks like an `O(n²)` recurrence into an `O(n)` pass with a sliding window.

```python
def min_cost_path(grid: list[list[int]]) -> int:
    """DP on a 2D grid — O(rows * cols) with in-row prefix optimisation."""
    rows, cols = len(grid), len(grid[0])
    dp = [[float("inf")] * cols for _ in range(rows)]
    dp[0][0] = grid[0][0]

    for r in range(rows):
        # Left-to-right sweep using prefix minima
        prefix = float("inf")
        for c in range(cols):
            prefix = min(prefix, dp[r][c]) if r > 0 or c > 0 else dp[r][c]
            dp[r][c] = min(dp[r][c], prefix + grid[r][c])
        # Right-to-left sweep
        suffix = float("inf")
        for c in range(cols - 1, -1, -1):
            suffix = min(suffix, dp[r][c]) if r > 0 or c < cols - 1 else dp[r][c]
            dp[r][c] = min(dp[r][c], suffix + grid[r][c])
        # Propagate downward
        if r + 1 < rows:
            for c in range(cols):
                dp[r + 1][c] = min(dp[r + 1][c], dp[r][c] + grid[r + 1][c])

    return dp[rows - 1][cols - 1]
```

The two-pass sweep per row avoids a naive neighbour scan per cell and keeps the constant factor low — useful when the problem author sets `cols` near `10⁵` to weed out quadratic solutions.
