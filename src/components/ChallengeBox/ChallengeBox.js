import React from 'react';
import { useContext } from 'react';
import { View, Text, Image } from "react-native";
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Audio } from 'expo-av';
import styles from './styles';

export default function ChallengeBox(){

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)
    const [sound, setSound] = React.useState();

    async function playSounds(){
        const { sound } = await Audio.Sound.createAsync(require('../../../assets/challengeFailed.mp3'))
        setSound(sound);
        await sound.playAsync();
    }

    function handleChallengeSucceeded(){
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
        playSounds()
    }

    return(
        <View style={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <View style={styles.challengeActive}>
                    <Text style={styles.winXP}>Ganhe {activeChallenge.amount} xp</Text>
                    <View style={styles.main}>
                        <Image 
                            style={styles.imageExercise}
                            source={require('../../../icons/exercise.png')}/>
                        <Text style={styles.textBold}>Novo desafio</Text>
                        <Text style={styles.textP}>{activeChallenge.description}</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.itens}>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="#4953B8"
                                style={styles.challengeFailedButton}
                                onPress={() => {handleChallengeFailed()}}
                            >
                                <Text style={styles.textButton}>Falhei</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.itens}>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="#4953B8"
                                style={styles.challengeSucceededButton}
                                onPress={() => {handleChallengeSucceeded()}}
                            >
                                <Text style={styles.textButton}>Completei</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.challengeNotActive}>
                    <Text style={styles.textBold}>Finalize um ciclo para receber um desafio</Text>
                    <View>
                        <Image 
                            style={styles.levelUp}
                            source={require("../../../icons/level-up.png")}/>
                        <Text style={styles.textP}>Avance de level completando desafios.</Text>
                    </View>
                </View>
            )}
        </View>
    )
}