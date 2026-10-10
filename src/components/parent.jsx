
import Child1 from "./Child1";

function Parent({ name }) {
  return (
    <div>
      <h1>This is Parent</h1>
      <div>{name}</div>

      <Child1 name={name} />
    </div>
  );
}

export default Parent;
