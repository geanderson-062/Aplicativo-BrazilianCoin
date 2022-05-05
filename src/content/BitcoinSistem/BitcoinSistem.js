
import React, {useState, useEffect} from 'react'

//importando o componentes

//valor atual do bitcoin
import Preco_atual from '../../components/Preco_atual/index'

//grafico mostrando a variacao do preco
import Grafico from '../../components/Grafico/index'

//botoes de filtragem de dados da api
import Lista_de_cotacao from '../../components/Lista_de_cotacao/index'

// aqui vamos tratar os dados da api

//adcionando 0 para ficar no padrao americano e nao causar erro na api
function addZero(number){

  //se number for menor ou igual 9 adcione um zero
  if(number <=9){
      return "0" + number
  }
  return number
}

function url (qtdDays){

  //constante para trabalhar com as datas
  const date = new Date();

  //quantidade de dias que passaram
  const listlastDays = qtdDays

  //const que finaliza a pesquisa 
  const end_date =
   
    //pegando o ano e pegando mes e dia e adcionando 0 para nao quebrara url 
    `${date.getFullYear()}-{addZero$(date.getMonth()+1)}-${addZero(date.getDate())}`;

    //setando apos o fim do calulo do final da data e subtrai a quantidade de dias 
    date.setDate(date.getDate() - listlastDays)
 
  //cont que inica a pesquisa
  const start_date = `${date.getFullYear()}-{addZero$(date.getMonth()+1)}-${addZero(date.getDate())}`;

  //passando a url da api 
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;;

}

//vai pegar os parametros da url e colocar na lista 
async function getListCoins(url) {
  let response = await fetch(url);
  let retunrApi = await response.json();
  let selectListQuotations = retunrApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data; 

}

//vai pegaro os paramentros e colocar no preco 
async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  return dataG;

}
  
export function BitcoinSistem() {

  //constantesp para armazenar valores selecionados
  const [coinsList, setcoinsList] = useState([]);
  const [coinsGrafichList, setcoinsGrafichList] = useState([0]);
  const [days, setdays] = useState(30);//quantidade de itens exibidos na lista 
  const [updateData, setupdateData] = useState(true);

  function updateDay(number) {
    setdays(number);
    setupdateData(true);
}

useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setcoinsList(data);
    });
    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setcoinsGrafichList(dataG);
    });
    if (updateData) {
      setupdateData(false);
    }
  }, [updateData]);
  
    return (

        <>

          <Preco_atual/>

          <Grafico/>

          <Lista_de_cotacao filterDay={updateDay} ListTransactions={coinsList}/>

        </> 

    )
      
  }