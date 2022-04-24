import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, FlatList, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import ListItem from './ListItems'
import axios from 'axios';

const NoData = () => {
    return (
        <View style={styles.messages}>
            <Text style={styles.messageTitle}>{'Get all higher instituion in a country'}</Text>
            <Text style={styles.messageSubtitle}>
                {'Enter a country in lowercase and search for higher instituions'}
            </Text>
        </View>
    );
};

export default function Dashboard({ navigation }) {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('');
    const [request, setRequest] = useState(false);

    useEffect(() => {
        const SearchCountry = async () => {
            try {
                return axios
                    .get(`http://universities.hipolabs.com/search?country=${country}`)
                    .then(data => {
                        if (request) setData(data.data);
                    }).catch((error) => console.log(error));
            } catch (error) {
                console.log(error);
            }
        }

        SearchCountry()
    }, [request]);

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Enter a country'}
                        placeholderTextColor="white"
                        value={country}
                        onChangeText={(e) => setCountry(e)}
                    />
                </View>
                <View style={{ marginRight: 5 }}>
                    <TouchableHighlight
                        style={styles.solid}
                        onPress={() => setRequest(true)}
                    >
                        <Text style={styles.solidText}>{'Search'}</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View>
                <View style={styles.verticalSepperatorLine} />
            </View>
            <View>
                {data.length === 0 && <NoData />}
                {data.length > 0 && (
                    <FlatList
                        style={{ width: '100%' }}
                        data={data}
                        renderItem={({ item }) => (
                            <ListItem
                                data={item}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}