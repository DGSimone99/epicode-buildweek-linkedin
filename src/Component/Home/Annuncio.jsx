import { useState } from "react";

const Annuncio = () => {
  const user = useSelector((state) => state.user.content);
  return (
    <Container className="bg-white border rounded-3 p-3">
      <p>Annuncio ...</p>
    </Container>
  );
};
export default Annuncio;
