const NotiziePrimoPiano = (props) => {
  return (
    <>
      <p className="fw-semibold mb-0 pointer2">{props.titolo}</p>
      <p className="text-secondary pointer">{props.aggiornamento}</p>
    </>
  );
};
export default NotiziePrimoPiano;
