import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    height: "100%",
    maxWidth: 900,
    marginTop: 0,
    marginBottom: 'auto',
    paddingTop: 40,

    display: 'flex',
    flexDirection: 'column',
  },

  backButton: {
    width: '30%', 
    height: 40,
    margin: 10,

    backgroundColor: '#5965E0',
    alignItems: 'center',
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  addTaskButton:{
    margin:10,
    width: '95%',
    height: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5965E0', 
  },
  addButtonText:{
    fontSize: 20,
    color: '#000000'
  },
  itens:{
    backgroundColor:'#5965E0',
    paddingVertical: 8,
    width: '100%',
    padding: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskText:{
    fontSize:18,
    color: '#FFFFFF',
  },
  showFailedTask:{
    flexDirection: 'row',
  },
  taskView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight:5,
    paddingHorizontal: 10
  },
  taskTotal: {
    backgroundColor: '#5965E0',
    paddingHorizontal: 10,
    width: 120,
    borderTopLeftRadius:5,
    borderBottomLeftRadius: 5
  },
  taskCompleted: {
    backgroundColor: '#008000',
    paddingHorizontal: 10,
    width: 120,
    
  },
  taskFailed: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 10,
    width: 120,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    textAlign: 'center'

  },
  taskTable: {
    textAlign: 'center',
    color: '#fff',
  },
  taskTableTop: {
    color: '#fff',
    textAlign: 'center'
  }
})