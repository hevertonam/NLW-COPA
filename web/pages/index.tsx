interface HomeProps{
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () =>{
  //roda na camada back end, focada em construir interface
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)

  return{
    props:{
      count: data.count,

    }
  }
}