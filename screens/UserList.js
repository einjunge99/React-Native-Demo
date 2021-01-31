import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import firebase from '../database/firebase'

const UserList = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {

            const users = [];

            querySnapshot.docs.forEach((doc) => {
                const { name, email, phone } = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUsers(users)
        })
    }, [])

    return (
        <ScrollView>
            <Button title="Create user" onPress={() => props.navigation.navigate("CreateUser")} />
            {users.map((user) => {
                return (
                    <ListItem key={user.id} bottomDivider onPress={()=>
                        props.navigation.navigate('DetailUser')
                    }>
                        <ListItem.Chevron />
                        <Avatar source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} rounded/>
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
            })}
        </ScrollView>
    )
}

export default UserList
