import React,{useState} from 'react'
import {View,Text,Button, TextInput,ScrollView,StyleSheet} from 'react-native'
import firebase from '../database/firebase'

const CreateUser = (props) => {
    const [state, setState] = useState({
        name: '',
        email:'',
        phone:''
    })

    const handleChangeText=(name,value)=>{
        setState({...state,[name]:value})
    }

    const saveUser = async() =>{
        if(state.name==''){
            alert('Please, provide a name!')
        }else{
           await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('UserList')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name" onChangeText={(value)=>handleChangeText('name',value)}/>
            </View>
            <View style={styles.inputGroup}> 
                <TextInput placeholder="Email" onChangeText={(value)=>handleChangeText('email',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone" onChangeText={(value)=>handleChangeText('phone',value)}/>
            </View>
            <View>
                <Button title="Save user" onPress={()=>saveUser()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35
    },
    inputGroup:{
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUser
