const NotiziePrimoPiano = (props) => {
  return (
    <div className="pointer3 px-3 py-1">
      <a href={props.url} target="_blank" className="fw-semibold mb-0 linkNews">
        <p>{props.titolo}</p>
      </a>
      <p className="text-secondary pointer mb-1">{props.aggiornamento}</p>
    </div>
  );
};
export default NotiziePrimoPiano;
