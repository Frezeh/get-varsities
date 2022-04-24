import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

const ListItem = ({ data }) => {
    return (
        <TouchableWithoutFeedback>
            <View>
                <>
                    <View style={styles.container}>
                        <View style={styles.lefContainer}>
                            {/* <Image
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                                }}
                                style={styles.avatar}
                            /> */}
                            <View style={styles.midContainer}>
                                <Text style={styles.username}>Name: {data.name}</Text>
                                <Text numberOfLines={2} style={styles.website}>
                                    Website: {data.web_pages}
                                </Text>
                                <Text numberOfLines={2} style={styles.lastMessage}>
                                    Domain: {data.domains}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.verticalSepperatorLine} />
                    </View>
                </>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    lefContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    lastMessage: {
        fontSize: 14,
        color: 'grey',
    },
    website: {
        fontSize: 14,
        color: 'blue',
    },
    time: {
        fontSize: 12,
        color: 'grey',
    },
    verticalSepperatorLine: {
        height: 1,
        backgroundColor: 'rgba(50,52,54,0.2)',
        marginTop: 10,
        marginBottom: 10,
    },
});
