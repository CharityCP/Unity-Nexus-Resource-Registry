import './App.css';
import {  useTable } from './useTable';
import { useState } from "react";
function App() {
  const [activeRegistry, setActiveRegistry] = useState("resources");
  const { rows, loading, errorMessage } = useTable(activeRegistry);
  const { rows: weapons } = useTable("weapons");
  const [statusFilter, setStatusFilter] = useState("All");
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
    <main>
      <section>
      <h1> Unity Nexus Allocation Registry</h1>
        <p>Monitor and manage Unity Nexus mission resources</p>
        <p className="resource-count">
          Total Resource Records: {rows.length}</p>

    <div className="registry-toolbar">
      <div className="registry-nav">
      <div className= "filter-controls">
        <button className="status-click" onClick={() => setActiveRegistry("weapoons")}>
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
        </tr>  
          );
        })}
      </tbody>
      </table>
    </section>
    </main>
  )
}

export default App