---
title: "Migrating Toohak to TypeScript (COMP1531)"
date: "2023-11-25"
tags: ["TypeScript", "Node.js", "Agile"]
type: "article"
---

# Migrating Toohak to TypeScript (COMP1531)

Toohak was a real-time quiz platform built for the UNSW Software Engineering Fundamentals course, modelled after Kahoot's core loop: an admin launches a quiz session, players join via a lobby code, and questions advance on a synchronised countdown timer. My primary contribution was migrating the entire Express + Socket.IO backend from plain JavaScript to strict TypeScript under a two-sprint Agile cycle. I defined typed interfaces for the session lifecycle — `QuizSession`, `Player`, `Question`, and `AnswerSubmission` — which eliminated an entire class of runtime bugs where malformed socket payloads would crash the game loop. The timer service leveraged `setInterval` guarded by server-validated timestamps so clients couldn't manipulate their local clock to extend answering windows. RESTful routes (`POST /sessions`, `GET /sessions/:id/results`) were documented with JSDoc annotations and validated through a custom middleware chain that returned structured error responses. By the end of the migration, the integration-test suite passed against every flow in the PRD, and the team shipped the final deliverable with zero TypeScript `// @ts-ignore` suppressions.
