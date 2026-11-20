import './App.css';
import {  useTable } from './useTable';
import { useState } from "react";
import ResourceForm from "./ResourceForm";
import OperatorLogin from "./OperatorLogin";

function App() {
  const [activeRegistry, setActiveRegistry] = useState("resources");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingResource, setEditingResource] = useState(null);

  const { rows, setRows, loading, errorMessage, fetchRows } = useTable(activeRegistry);
  const { rows: weapons } = useTable("weapons");
  console.log("Independent weapons count:" ,weapons.length);
  const filteredRows = rows.filter((resource) => 
  statusFilter === "All" ||
  resource.status === statusFilter);
    if (loading) {
      return <p>Loading Unity Nexus Resources.....</p>
    }

    if (errorMessage) {
  return (
    <div className="registry-error">
      <p>Unable to load {activeRegistry} records.</p>
      <button onClick={() => setActiveRegistry("resources")}>
        Return to Resources
      </button>
    </div>
  );
}
    
    return (
    <main className="terminal-layout">
      <aside className="terminal-sidebar">
        <h2>UNITY NEXUS</h2>
        <p>Registry Navigation</p>
       <nav className="sidebar-nav">
  <button
    className={activeRegistry === "resources" ? "active" : ""}
    onClick={() => setActiveRegistry("resources")}
  >
    Resources
  </button>

  <button
    className={activeRegistry === "weapons" ? "active" : ""}
    onClick={() => setActiveRegistry("weapons")}
  >
    Weapons
  </button>

  <button
    className={activeRegistry === "missions" ? "active" : ""}
    onClick={() => setActiveRegistry("missions")}
  >
    Missions
  </button>

  <div className="sidebar-divider">
  UPCOMING SYSTEMS
</div>

<div className="sidebar-future">
  <span>◇ Intelligence Assistant</span>
  <span>⌘ Code-Cracking Mission</span>
  <span>⚙ System Settings</span>
</div>

</nav>

        <OperatorLogin />
      </aside>


      <section className="registry-panel">
      <h1> Unity Nexus Allocation Registry</h1>
        <p>Monitor and manage Unity Nexus mission resources</p>
        <p className="resource-count">Total Resource Records: {rows.length}</p>

          <div className="registry-summary">
  <div className="summary-card">
    <span className="summary-icon">◇</span>
    <div>
      <h3>RESOURCES</h3>
      <p>{activeRegistry === "resources" ? rows.length : "—"}</p>
    </div>
  </div>

  <div className="summary-card">
    <span className="summary-icon">⚔</span>
    <div>
      <h3>WEAPONS</h3>
      <p>{weapons.length}</p>
    </div>
  </div>

  <div className="summary-card">
    <span className="summary-icon">◎</span>
    <div>
      <h3>MISSIONS</h3>
      <p>Mission Registry</p>
    </div>
  </div>
</div>

    <div className="registry-toolbar">
      <div className="registry-nav">
      <div className= "filter-controls">
        <button className="status-click" onClick={() => setActiveRegistry("weapons")}>
          Weapons
        </button>
        <button className="status-click" onClick={() => setActiveRegistry("resources")}>
          Resources
        </button>
        <button className="status-click" onClick={() => setActiveRegistry("missions")}>
          Missions
        </button>
      </div>
    </div>  
    <div></div>
        <button className="status-click" 
          onClick= {() => setStatusFilter("All")}>
          Show All Records
        </button>
        <button className= "status-click" 
          onClick ={() => setStatusFilter("Low Stock")}>
          Show Low Stock
        </button>
      </div>
    
  
      <table>
        <tbody>
        <tr>
          <th>{activeRegistry === "missions" 
          ? "Mission Title" : "Resource Name"}
          </th>

          <th>{activeRegistry === "missions" 
          ? "Objective" : "Type"}
          </th>

          <th>{activeRegistry === "missions" 
          ? "Clearance Level" : "Quantity"}
          </th>
          <th>Status</th>
          {activeRegistry === "resources" && <th>Actions</th>}
        </tr>
        </tbody>
      
      <tbody>
        {filteredRows.map((resource) => {
          const statusColor =
          resource.status === "Available"
          ? "#75d9d0"
          : "#d8ad62";
          return(
        
        <tr key={resource.id}>
          <td>{activeRegistry === "missions" ? resource.title : resource.name}</td>
          <td>{activeRegistry === "missions"
                ? resource.objective
                :activeRegistry === "weapons"
                ? resource["weapon type"] ?? resource.type
                : resource.type}
          </td>
          <td className="quantity">
            {activeRegistry === "missions"
            ? resource.clearance_level
            : resource.quantity}
          </td>
          <td className="status">
            <span className="status-indicator">
              <span className="status-dot"
              style = {{backgroundColor: statusColor,
                        boxShadow: '0 0 8px ${statusColor'
              }}></span>
            {resource.status}
            </span>
            </td>
          {activeRegistry === "resources" && (
            <td>
            <button
            type="button"
            onClick={() => setEditingResource(resource)}>
              Edit</button>
              </td>
            )}
        </tr>  
          );
        })}
      </tbody>
      </table>
      <ResourceForm 
      onResourceAdded={fetchRows}
      editingResource={editingResource}
      onEditComplete={() => setEditingResource(null)}
      />
    </section>
    <aside className="terminal-right-panel">
  <section className="mission-card">
    <h2>MISSION BRIEFING</h2>
    <div className="briefing-content">
  <div className="briefing-visual">
    <span>◆</span>
  </div>

  <div className="briefing-details">
    <p>MISSION INTEL</p>
    <p>STATUS: AWAITING BRIEFING</p>
    <small>Mission preview coming soon</small>
  </div>
</div>
  </section>

  <section className="mission-card">
  <h2>CODE-CRACKING MISSION</h2>

  <div className="cipher-preview">
    <div className="cipher-slots">
      <span>□</span>
      <span>□</span>
      <span>□</span>
      <span>□</span>
      <span>□</span>
      <span>□</span>
    </div>

    <p>ENCRYPTED ACCESS</p>
    <small>Mission challenge coming soon</small>
  </div>
</section>

  <section className="mission-card">
  <h2>INTELLIGENCE ASSISTANT</h2>

  <div className="assistant-preview">
    <div className="assistant-status">
      <span className="assistant-dot"></span>
      <span>AI SYSTEM // STANDBY</span>
    </div>

    <div className="assistant-message">
      <p>UNITY NEXUS INTELLIGENCE</p>
      <span>
        Tactical guidance interface awaiting activation.
      </span>
    </div>

    <div className="assistant-footer">
      <span>HINT PROTOCOL</span>
      <span>LEVEL 4 DEVELOPMENT</span>
    </div>
  </div>
</section>

</aside>
    </main>
  )
}

export default App