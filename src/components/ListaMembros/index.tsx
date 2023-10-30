
export const ListaMembros = ({listas}) => {
  console.log(listas)
  return(
    <div>
    {  listas.map((lista) => (
        <div>
          <p>{lista.imagem}</p>
          <p>{lista.nome}</p>
          <p>{lista.filiacao}</p>
          <p>{lista.dataNascimento}</p>
          <p>{lista.estadoCivil}</p>
          <p>{lista.naturalidade}</p>
          <p>{lista.dataBatismo}</p>
          <p>{lista.dataMembro}</p>
          <p>{lista.endereco}</p>
          <p>{lista.congregado}</p>
          <p>{lista.cargo}</p>
          <p>{lista.pastor}</p>
          <p>{lista.portadorNecessidade}</p>
          <p>{lista.validade}</p>
        </div>
      ))}
    </div>
  )
}