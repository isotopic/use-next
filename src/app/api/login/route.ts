interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: body.username,
        password: body.password,
        // expiresInMins: 60, // optional
      }),
    });
    const user = await response.json();
    return new Response(JSON.stringify(user));
  } catch (e) {
    console.log("Error on api/login");
    console.log(e);

    return new Response(JSON.stringify(null));
  }
}
