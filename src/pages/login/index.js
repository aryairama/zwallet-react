import React, { useEffect } from "react";
import Contatcs from "../../components/base/contacts/";

function Index() {
  useEffect(() => {
    document.title = "Tambah Produk Untuk Dijual";
  });
  return (
    <>
      <Contatcs />
    </>
  );
}

export default Index;
