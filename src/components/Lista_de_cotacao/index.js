import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { Fragment } from 'react'
import styles from './style'//importando o style
import Itens_de_cotacao from './Itens_de_cotacao/index'

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

//nessa secao deve ser mostrado o preco atual em destaque

export default function Lista_de_cotacao(props) {

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

  //filters days vem da page sistema
  const daysQuery = props.updateDay //erro está aqui como vamos resolver? 
  const ListTransactions = props.coinsList //erro está aqui como vamos resolver? 
 

    return (

    //o fragment permite que componentes sejam criados fora da view
    <Fragment>

       <View style={styles.Filtros}> {/*dentro dessa view vai ficar os botoes de dias e mes do app*/}

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> daysQuery(7) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>7D</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> daysQuery(15) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>15D</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> daysQuery(30) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>1M</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> daysQuery(90) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>3M</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> daysQuery(180) } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>6M</Text>
         </TouchableOpacity>

       </View>

        <ScrollView>
          
       <FlatList
        
        data = {props.ListTransactions}
        renderItem={ ( {item} ) => { 
          return <Itens_de_cotacao valor={item.valor} data={item.data}/>
        }}
      /> 

       </ScrollView>

    </Fragment>

    
  
    )
  
}