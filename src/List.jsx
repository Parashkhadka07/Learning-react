const List = ({ users }) => {
  return (
    <div>
      <table border={2}>
        <tr>
          <th>S.No</th>
          <th>name</th>
        </tr>
        {users.length > 0 ? (
          users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={2}>user not found</td>
          </tr>
        )}
      </table>
    </div>
  );
};
export default List;
