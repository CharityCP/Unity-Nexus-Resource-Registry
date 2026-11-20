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

- [x] React and Vite application setup
- [x] Supabase database connection
- [x] Resources, Weapons, and Missions registries
- [x] Reusable `useTable` hook for database fetching
- [x] Registry navigation using React state
- [x] Resource filtering using `.filter()`
- [x] Dynamic table rendering using `.map()`
- [x] Citizen account registration and sign-in
- [x] Supabase Authentication and sign-out
- [x] Row Level Security (RLS) policies
- [x] Resource creation and editing
- [x] Database refresh after resource changes
- [x] Three-column Unity Nexus dashboard design
- [x] GitHub version control and deployment workflow
- [x] Netlify deployment

### Reserved for Level 4

- [ ] Interactive code-cracking missions
- [ ] AI-powered hint-only Intelligence Assistant
- [ ] Dynamic mission briefing experiences
- [ ] Additional Citizen progression features

## Technical Implementation

### React Components and State

The application uses React functional components, props, and state to manage the registry interface.

- `App.jsx` manages active registry selection, filtering, and editing state.
- `ResourceForm.jsx` provides reusable form functionality for creating and editing resource records.
- `OperatorLogin.jsx` handles Citizen registration, sign-in, and sign-out.
- `useState` manages interactive values and form inputs.
- `.filter()` processes records according to the selected status.
- `.map()` dynamically renders registry records as table rows.

### Reusable useTable Hook

The custom `useTable.js` hook connects React to Supabase.

The hook uses:
- `useState` to store records, loading status, and errors.
- `useEffect` to retrieve records when the selected table changes.
- `async/await` to handle asynchronous database requests.
- `fetchRows()` to retrieve the latest records after changes.

The same hook supports the Resources, Weapons, and Missions registries without duplicating database-fetching logic.

### Supabase Database

The application connects to three Supabase tables:

- `resources` — stores resource information, quantities, and statuses.
- `weapons` — stores available weapon records and their attributes.
- `missions` — stores mission-related information.

The Resources registry supports creating and editing records. Database operations are subject to Supabase Row Level Security policies.

### Authentication and Authorization

Supabase Authentication allows Citizens to register and sign in using email and password credentials.

Authentication establishes the user's identity. Authorization is enforced separately through database policies.

The application uses Row Level Security to control access to protected database operations, including operator-restricted resource updates.

## Changes Since Week 7

During Week 7, I established the foundation for the Unity Nexus Resource Allocation Registry using React, Vite, and Supabase.

During Week 8, I expanded the application's functionality, improved database security, and developed a more complete interactive dashboard.

### Features Added or Improved

- Created a reusable `useTable` hook to fetch records from multiple Supabase tables.
- Completed the Resources, Weapons, and Missions registry displays.
- Implemented resource creation and editing through `ResourceForm.jsx`.
- Added Citizen registration, sign-in, and sign-out using Supabase Authentication.
- Configured Row Level Security policies to restrict protected database operations.
- Added authentication feedback and automatic form resets.
- Improved registry navigation, filtering, and data refresh.
- Developed a three-column dashboard with a consistent futuristic design.
- Added preview interfaces for Mission Briefing, Code-Cracking Mission, and Intelligence Assistant.

### Challenges and Solutions

**Database permissions:** Some registry records initially failed to display for authenticated users. I investigated Supabase queries and Row Level Security policies, then updated the necessary SELECT policies.

**Authentication:** While building Citizen registration, misplaced braces and inconsistent variable names caused React errors. I used browser console messages and debugging to locate and correct them.

**Resource editing:** I connected the selected resource to React state, populated the form with existing data, and used a Supabase UPDATE query targeting the record's ID.

**Dashboard layout:** The initial layout did not match my design reference. I corrected the CSS grid structure and refined the sidebar, central registry, and mission panels.

### What I Learned

This capstone strengthened my understanding of reusable React components, state management, asynchronous database operations, authentication, authorization, and debugging.

I also gained experience transforming a visual design concept into a functioning application while maintaining a GitHub development workflow.

## Project Scope and Future Development

### Completed Capstone Scope

The Unity Nexus Resource Allocation Registry provides a functional foundation for managing mission-related information within Synth Nova Chronicles.

The completed application includes:

- Three Supabase-connected registries: Resources, Weapons, and Missions.
- Dynamic record rendering and status filtering.
- Resource creation and editing.
- Citizen registration and authentication.
- Database access controlled through Row Level Security.
- Reusable React components and a custom data-fetching hook.
- A futuristic three-column interface.
- GitHub version control and Netlify deployment.

### Left Out and Why

**Interactive Code-Cracking Missions**

The current application includes a visual preview. Interactive puzzles, validation, and mission progression were postponed to Level 4 so I could prioritize database functionality and authentication.

**AI Intelligence Assistant**

The assistant currently displays a standby interface. AI integration was postponed to Level 4, when I will study Python and AI development. The future assistant will provide guidance and hints without solving challenges for users.

**Dynamic Mission Briefings**

The Mission Briefing panel is currently a visual preview. Interactive mission details and advanced storytelling features require additional development beyond this capstone.

**Advanced Citizen Progression**

Expanded Citizen profiles, clearance levels, and progression systems will be developed in later phases.

### Development Priorities

My priority was to complete a working React and Supabase application before expanding into more advanced interactive features.

This approach allowed me to focus on reusable code, database connections, authentication, security, testing, and maintainable application structure.

The completed registry will serve as a technical foundation for future Synth Nova Chronicles systems.

## Chapter 7 — Project Planning

### 1. Problem Sentence

The Unity Nexus needs a centralized system to organize and monitor resources, weapons, and missions. Without an organized registry, accessing critical mission information becomes inefficient. The Unity Nexus Resource Allocation Registry (UNRA) provides an interactive interface for viewing, filtering, and navigating mission-related records stored in Supabase.

### 2. Persona

**Primary User: Unity Nexus Registry Operator**

The Registry Operator monitors resources, reviews available weapons, and accesses mission information to support Unity Nexus operations.

**Secondary User: Registered Unity Nexus Citizen**

Citizens can create accounts through the application's registration form and sign in using Supabase Authentication. They can explore the registry and access information according to the database's security policies.

**User Needs:**
- Create an account and sign in without accessing Supabase directly.
- Navigate between Resources, Weapons, and Missions.
- View organized registry records.
- Identify resources that need attention.
- Add resource records when permitted.
- Edit existing resources when authorized.
- Receive clear feedback after authentication.
- Interact with a visually consistent Unity Nexus interface.

**Access and Security:**

Supabase Authentication manages user registration and sign-in. Row Level Security (RLS) policies determine which database operations each authenticated user is permitted to perform. Protected resource updates are restricted to the designated operator.


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

## Testing and Deployment

### Testing

The application has been tested during development using the Vite local development server and browser developer tools.

Completed development checks include:

- Loading records from Supabase.
- Switching between Resources, Weapons, and Missions.
- Filtering registry records by status.
- Creating and editing resource records.
- Registering new Citizen accounts.
- Signing in and signing out.
- Confirming new accounts appear in Supabase Authentication.
- Debugging React errors using browser console messages.

### Final Deployment Verification

The final Netlify deployment will be verified after the README pull request is merged into `main`.

Final checks will include:
- Confirming the live site loads.
- Testing Citizen registration and login.
- Checking registry navigation and displayed records.
- Verifying authorized and unauthorized database operations.
- Confirming changes persist after refreshing.

## Project Links

- **Live Application:** [Add Netlify URL]
- **GitHub Repository:** [(https://github.com/CharityCP/Unity-Nexus-Resource-Registry)]
- **Final Pull Request:** [Add merged PR URL]
## Final Reflection

This project allowed me to combine my background in visual arts and instructional design with my growing software development skills.

I wanted to create more than a traditional database interface. My goal was to build a functional system that feels like technology within the Synth Nova Chronicles universe.

Through this capstone, I strengthened my understanding of React components, props, state, reusable hooks, asynchronous functions, Supabase, authentication, and database security.

One of my most important lessons was understanding the difference between making an application work and designing it to be maintainable, secure, and understandable to other developers.

I also learned to use AI as a learning and debugging partner while developing my own understanding of the code.

The Unity Nexus Resource Allocation Registry represents an important foundation for the larger interactive universe I intend to continue developing.


## Team

- **Project:** Unity Nexus Resource Allocation Registry (UNRA)
- **Developer:** Individual React + Supabase capstone
- **Collaboration:** Codex Academy pod discussions, planning, and feedback
- **Pod Documentation:** [View Pod Document](https://docs.google.com/document/d/1mQySxORC2Bp30ZHNkmuCxnYR95Vv0X6jM_2CmppKQQk/edit?tab=t.0)
