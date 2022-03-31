import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView,TouchableOpacity, View, TextInput } from 'react-native';


const carro = {
  name: 'fucsa',
  ano: '1975',
  portas: 2,
  cor: 'preto',
};

const App = () =>{
  
  const showSpread = ({name,ano, ...rest}) =>{ 

    
    //const { name, ano, ...rest} = carro;
    //console.log('Name:', name);
    //console.log('Ano:', ano);
    //console.log('Restante:', rest);
    //console.log('cor:', cor);

    const newCar = {
      name,
      ano:'2005',
      ...rest,
    };
    console.log(newCar);
  };

  const [value, setValue]= useState('');

  const handleChange = (value =>{
    setValue(value);
  });

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=> showSpread(carro)}>
        <Text>Click</Text>
      </TouchableOpacity>
      <View style={styles.view}>
        <TextInput placeholder='Digite aqui' style={styles.input} onChangeText={handleChange}/>
        <Text>{value.toUpperCase()}</Text>
      </View> 

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  input:{
    height: 60,
    width:200,
    borderWidth: 1,
  },
});

export default App;

