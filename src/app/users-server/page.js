export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  if (!users) {
    return (
      <div className="space-y-4 p-4">
        <h1>Error</h1>
      </div>
    );
  }
  return (
    <div className="space-y-4 p-4">
      <h1>All Users</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li
              className="shadow-md rounded-lg mb-2 bg-gray-200 p-4 text-black w-64"
              key={user.id}
            >
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
