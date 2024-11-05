import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Header } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      // Usamos a função eval para simplificar, mas tenha cuidado com isso em produção
      setInput(eval(input).toString());
    } catch {
      setInput('Erro');
    }
  };

  const clearInput = () => {
   
  };

  return (
  
    <View style={styles.container}>
     <Text style={styles.titulo}>Vamos calcular?</Text>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '-'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {[].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
{ /* add function map*/}
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
      
        {['0', 'C', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => (item === '=' ? calculateResult() : item === 'C' ? clearInput() : handlePress(item))}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    fontSize: 48,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    textAlign: 'right',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 20,
    /*Completar estilo dos buttons*/
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  titulo:{
    /*estilo do texto*/
  }
});

export default App;
