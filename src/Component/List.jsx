export default function List({ id, item, password, onRemove }) {
  return (
    <>
      <li>{item}</li>
      <li>{password}</li>
      {/* <li>{place}</li> */}
      <button
        onClick={function () {
          return onRemove(id);
        }}
      >
        Delete
      </button>
    </>
  );
}