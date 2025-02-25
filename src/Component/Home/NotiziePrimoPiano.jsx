const NotiziePrimoPiano = (props) => {
  return (
    <>
      <p className="fw-semibold mb-0">{props.titolo}</p>
      <p className="text-secondary">{props.aggiornamento}</p>
    </>
  );
};
export default NotiziePrimoPiano;
