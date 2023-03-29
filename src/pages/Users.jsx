import Table from 'react-bootstrap/Table';
import Checkbox from '../Checkbox';

function Users() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Cheack-box</th>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Data reg</th>
          <th>Last Auth</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Checkbox></Checkbox></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      
      </tbody>
    </Table>
  );
}

export default Users;