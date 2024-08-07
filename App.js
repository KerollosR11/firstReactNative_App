import '@expo/metro-runtime';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {

const todos=[
  {
    id : "1",
    title: 'todo-1',
    desc: 'description 1'
  },
  {
    id : "2",
    title: 'todo-2',
    desc: 'description 2'
  },
  {
    id : "3",
    title: 'todo-3',
    desc: 'description 3'
  }
]

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.txt}>Hello World!</Text>
      <StatusBar style="auto" /> */}
      <View>
        <TextInput
        style={styles.input}
        placeholder="add title"
        ></TextInput>

        <TextInput
        style={styles.input}
        placeholder="add description"
        ></TextInput>

        <TouchableOpacity
          style={styles.btn} 
        >
          <Text style={styles.txt}>Add</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.btnsContainer}>
      <TouchableOpacity
          style={styles.filterBtn} 
        >
          <Text style={styles.txt}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn} 
        >
          <Text style={styles.txt}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn} 
        >
          <Text style={styles.txt}>Done</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.dividerLine}
      >

      </View>

      <View>
        <FlatList
        style={styles.fList}

        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={
          ( {item} ) =>
            <View style={styles.todoCont}>
              <Text style={styles.todoTxt}>{item.title}</Text>
              <Text style={styles.todoTxt}>{item.desc}</Text>
            </View>
          
        }
        
        >

        </FlatList>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },

  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },

  input:{
    // width: Dimensions.get('window').width/1.5,
    height: 50,
    borderWidth:1,
    borderColor:"black",
    borderRadius: 10,
    marginBottom: 10,
    padding:10,
    fontSize:15,
  },
  btn:{
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    fontSize:15,
    color:"white",
    fontWeight:'bold'
    
  },

  btnsContainer:{
    display: "flex",
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    marginBottom:20

  },

  filterBtn:{
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:5
  },

  fList:{
    width:"100%"
  },

  todoCont:{
    width:"100%",
    backgroundColor:'black',
    marginBottom: 10,
    padding: 10
  },

  todoTxt:{
    color: "white",
    fontWeight: "bold",
    fontSize:20
  }
});
