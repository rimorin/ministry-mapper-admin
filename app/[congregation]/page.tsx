const getUsers = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/firebase/users`
  );
  return res.json();
};

export default async function Congregation() {
  const users = await getUsers();
  return (
    <>
      <html>
        <body>
          <h1>Congregation</h1>
          <p>This is the page for congregation details</p>
          <ul>{users && users.map((item) => <li>{item.uid}</li>)}</ul>
        </body>
      </html>
    </>
  );
}
