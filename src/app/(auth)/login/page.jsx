import { handleLoginGithub } from "@/lib/action";

const LoginPage = async() => {
  
  return (
    <div>
      <form action={handleLoginGithub}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
