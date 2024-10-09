import { handleLoginGithub, login } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleLoginGithub}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
