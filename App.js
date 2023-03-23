import { useState } from 'react';
import { StyleSheet, Text, View, Button , TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(''); 
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText)
  } ;
  
  function addGoalHandler () {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      enteredGoalText
    ]);
  } ;

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal' onChangeText={goalInputHandler}/>
        <Button title="Add Goal"  onPress={addGoalHandler}/>
      </View>
      <View style={styles.golsContainer}>
        {courseGoals.map((goal) => <Text>{goal}</Text> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex :1 ,
   paddingTop : 50,
   paddingHorizontal : 16  
  },
  inputContainer: {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingBottom : 24,
    borderBottomWidth : 1,
    borderBottomColor : '#cccccc' 
  },
  textInput: {
    borderWidth : 1,
    borderColor : '#cccccc',
    width : '80%',
    marginRight : 8,
    padding : 8
  },
  golsContainer:{
    flex : 3
  }
});
