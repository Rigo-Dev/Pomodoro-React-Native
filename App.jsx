import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import { Audio } from 'expo-av'

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActivate, setIsActivate] = useState(false)


  useEffect(() => {
   let interval = null

   if(isActivate){
    interval = setInterval(() =>{
      setTime(time-1)
    }, 1000)
   }else{
    clearInterval(interval)
   }

   if (time == 0){
    setIsActivate(false)
    setIsWorking(prev => !prev )
    setTime(isWorking ? 300 : 1500)
   }

   return () => clearInterval(interval)
  }, [isActivate, time])
  

  function handleStartStop(){ 
    // playSound()
    setIsActivate(!isActivate)
  }

//  async function playSound(){
//     const { sound } = await Audio.Sound.createAsync(
//       require('./assets/click.mp3')
//     )
//     await sound.playAsync()
//   }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === 'android' && 30 }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <StatusBar style="auto" />
        <Timer time={time}/>
        <TouchableOpacity onPress={handleStartStop} style={styles.button}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{isActivate ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button:{
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center',
  }
});
