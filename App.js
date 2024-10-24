import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}> 
    <View style={styles.butaoContainer}>
     <TouchableOpacity styles={styles.butao}>
      <Text styles={styles.butaoText}>
        -
      </Text>
     </TouchableOpacity>
     <TouchableOpacity styles={styles.butao}>
      <Text styles={styles.butaoText}>
        +
      </Text>
     </TouchableOpacity>  <TouchableOpacity styles={styles.butao}>
      <Text styles={styles.butaoText}>
        x
      </Text>
     </TouchableOpacity>
 
    </View>
     </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  butaoText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'Green'
  },
  butao: {
    backgroundColor: 'black',
    width: '20%',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20
  },
  butaoContainer:{
flexDirection: 'row',
flexWrap: "wrap",
justifyContent: "center",
width: "80%"

  }
    
});
