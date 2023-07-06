import { useRouter } from "../hook/useRouter";

export const Root = () => {
  const { push } = useRouter();
  return (
    <>
      <h2>Root Page</h2>
      <button>Root Page</button>
      <button onClick={() => push("/about")}>Go to About</button>
    </>
  );
};
