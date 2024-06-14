import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Tranding Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/19149595/pexels-photo-19149595/free-photo-of-facade-of-the-hawa-mahal-palace-in-jaipur-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Facade of the Hawa Mahal Palace in Jaipur, India</Text>
                    <Text style={styles.cardLabel}>Structure</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi rerum sit sapiente voluptas magni ut, repellendus, sed accusamus dolor dolorem adipisci amet molestiae eligendi assumenda cumque ducimus sunt similique.</Text>
                    <Text style={styles.cardFooter}>This is card footer</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 365,
        height: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 14
    },
    cardElevated: {
        // backgroundColor: '#9a8c98',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 200,
        marginLeft: 4,
        width: 357,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 10
    },
    cardTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardLabel: {
        borderRadius: 5,
        backgroundColor: '#e63946',
        width: 60,
        color: '#e5e5e5'
    },
    cardDescription: {
        fontSize: 14,
        textAlign: 'justify'
    },
    cardFooter: {
        fontSize: 12,
        marginTop: 5,
        textAlign: 'right'
    }
})