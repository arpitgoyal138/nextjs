import { revalidatePath } from "next/cache";

export default async function MockUsers() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://67bdfbbc321b883e790eb891.mockapi.io/users"
  );
  const users = await response.json();

  // Server Actions
  async function createNewUser(formData) {
    "use server";
    const name = formData.get("name");
    const response = await fetch(
      "https://67bdfbbc321b883e790eb891.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await response.json();
    revalidatePath("/mock-users");
    console.log("newUser", newUser);
  }

  return (
    <div className="space-y-4 p-4">
      <h1>All Users</h1>
      <div className="py-4">
        <form className="mb-4" action={createNewUser} method="post">
          <input
            type="text"
            name="name"
            className="mr-2 rounded border p-2 text-black"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Create User
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            className="shadow-md rounded-lg mb-2 bg-gray-200 p-4 text-black w-64"
            key={user.id}
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
