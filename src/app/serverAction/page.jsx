import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        <button type="submit">Test me</button>
      </form>
      
      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
