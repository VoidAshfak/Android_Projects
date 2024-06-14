import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <FlatCard />
                <ElevatedCards />
                <FancyCard />
                <ContactList />
                <ActionCard />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


export default App