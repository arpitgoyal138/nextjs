import { users } from "../route";

export async function GET(_request, { params }) {
  const id = await params.id;
  //const { searchParams } = new URL(request.url);
  //const id = searchParams.get("id");
  const user = users.find((user) => user.id === Number(id));
  return Response.json(user, { status: 200 });
}
