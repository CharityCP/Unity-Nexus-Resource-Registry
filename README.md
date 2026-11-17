# Unity Nexus Resource Allocation Registry (UNRA)

## Project Overview

**Synth Nova Chronicles | Codex Academy Capstone**

## Wireframe and design
![UNRA Dashboard Wireframe](./src/wireframe.png)

## Technologies Used

- React
- Vite
- JavaScript
- Supabase
- GitHub
- Netlify

## Implemented Features

- [x] Supabase database connection
- [x] Resources Registry
- [x] Missions Registry
- [x] Resource filtering
- [x] GitHub pull request and merge
- [x] Netlify deployment
- [ ] Resolve Weapons Registry API error

## Chapter 7 — Project Planning

### 1. Problem Sentence

The Unity Nexus needs a centralized system to organize and monitor resources, weapons, and missions. Without an organized registry, accessing critical mission information becomes inefficient. The Unity Nexus Resource Allocation Registry (UNRA) provides an interactive interface for viewing, filtering, and navigating mission-related records stored in Supabase.

### 2. Persona

**Primary User:** Unity Nexus Registry Operator

The Registry Operator is responsible for monitoring resources, reviewing available weapons, and accessing mission information to support Unity Nexus operations.

**User Needs:**
- Quickly access different registry categories.
- View organized and accurate records.
- Identify resources that require attention.
- Navigate between registries without leaving the application.
- Use a clear, visually consistent interface.

### 3. Project Scope

**Completed Features:**
- React application built with Vite.
- Supabase integration for retrieving registry data.
- Three connected registries: Resources, Weapons, and Missions.
- Reusable `useTable` hook for fetching records.
- Registry navigation using React state.
- Dynamic table rendering with `.map()`.
- Status-based filtering.
- Resource record count display.
- Custom sci-fi interface styling inspired by Synth Nova Chronicles.
- GitHub version control and Netlify deployment.

**Planned Improvements:**
- Create, update, and delete registry records.
- Additional mission-related interactive features.
- Expanded interface panels and visual refinements.
- Further testing and security improvements.

### 4. Table Design

The application uses three Supabase tables to organize Unity Nexus data.

| Table | Purpose | Fields Used in the Interface |
|---|---|---|
| `resources` | Tracks available resources and their status. | `id`, `type`, `quantity`, `status` |
| `weapons` | Organizes weapon records for Unity Nexus operations. | `id`, `weapon type`, `quantity`, `status` |
| `missions` | Stores mission-related information. | `id`, `objective`, `clearance_level`, `status` |

Each table contains multiple records retrieved from Supabase.

The application dynamically changes the displayed information based on the selected registry. Because the tables have different column structures, conditional rendering is used to display the appropriate information.

### 5. System Explanation

**Frontend:** React and Vite provide the user interface and application structure.

**Database:** Supabase stores the resource, weapon, and mission records.

**Reusable Data Fetching:** The custom `useTable` hook retrieves records from the selected Supabase table. This reduces repeated code and supports switching between registry categories.

**State Management:** React `useState` manages the active registry and selected status filter.

**Dynamic Rendering:** The application uses `.map()` to display retrieved records in table rows. Conditional rendering handles differences between registry fields.

**Filtering:** Users can select available status filters to narrow the displayed records.

**Styling:** Custom CSS creates the Unity Nexus terminal appearance using a dark navy background, teal accents, gold indicators, and a structured dashboard layout.

**Deployment:** The project is managed through GitHub and deployed using Netlify.

### Chapter 7 Reflection

This project strengthened my understanding of connecting React applications to Supabase, creating reusable components and hooks, and organizing data from multiple tables. I also gained experience with conditional rendering, state management, CSS layout, debugging API errors, and deploying a functional application.

The project serves as the foundation for additional registry management and interactive mission features planned for Week 8.

## Team

- **Project:** Unity Nexus Resource Allocation Registry (UNRA)
- **Developer:** Individual React + Supabase capstone
- **Collaboration:** Codex Academy pod discussions, planning, and feedback
- **Pod Documentation:** [View Pod Document](https://docs.google.com/document/d/1mQySxORC2Bp30ZHNkmuCxnYR95Vv0X6jM_2CmppKQQk/edit?tab=t.0)
