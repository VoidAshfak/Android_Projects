import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


import Icon from 'react-native-vector-icons/MaterialIcons'


const ControlCenter = () => {


    const playerState = usePlaybackState().state
    const isPlaying = playerState === State.Playing ? true : false;

    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }



    const togglePlayback = async () => {
        const currentState = (await TrackPlayer.getPlaybackState()).state

        if (currentState === State.Playing) {
            await TrackPlayer.pause()
        } else {
            await TrackPlayer.play()
        }


    }



    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlayback()}>
                <Icon
                    style={styles.icon}
                    name={isPlaying ? "pause" : "play-arrow"}
                    size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});

export default ControlCenter