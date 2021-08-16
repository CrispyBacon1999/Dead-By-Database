import { Typography } from "@material-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";

function Index() {
  const [session, loading] = useSession();

  return (
    <div>
      <Typography variant="h2">Dead by Database</Typography>
      <>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </>
    </div>
  );
}

export default Index;
