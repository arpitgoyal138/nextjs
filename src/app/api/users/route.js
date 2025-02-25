export const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bob Smith" },
];
export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const data = await request.json();
  const new_user = {
    id: users.length + 1,
    name: data.name,
  };
  users.push(new_user);
  return new Response(JSON.stringify(new_user), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

export async function PUT(request) {
  const data = await request.json();
  return Response.json(data);
}

export async function DELETE(request) {
  const data = await request.json();
  return Response.json(data);
}
