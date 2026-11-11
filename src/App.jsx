import {  useTable } from './useTable';
function App() {
  const { rows, loading, errorMessage } = useTable("resources")
    if (loading) {
      return <p>Loading Unity Nexus Resources.....</p>
    }

    if (errorMessage) {
      return <p>{errorMessage}</p>
    }  
    
    return (
    <main>
      <section>
      <h1> Unity Nexus Allocation Registry</h1>
      <p>Monitor and manage Unity Nexus mission resources</p>
      <table>
        <tr>
          <th>Resource Name</th>
          <th>Type</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </table>

      <tbody>
        {rows.map((resource) => (
         <tr key={resource.id}>
          <td>{resource.name}</td>
          <td>{resource.type}</td>
          <td>{resource.quantity}</td>
          <td>{resource.status}</td>
         </tr>  
        ))}
      </tbody>
    </section>
    </main>
  )
}

export default App