import React,{useState} from 'react'
import { Text,View,TextInput } from 'react-native'
import UserInput from '../components/auth/UserInput'



const Signup=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[loading,setLoading]=useState(false)


    return (
        <View style={{flex:1, justifyContent:'center'}}>
            <Text style={{ fontSize:34, color:'red',marginLeft:100}}>
                SignUp
            </Text>
            <UserInput name='Name' value={name} setValue={setName}/>
            <UserInput name='Mail' value={email} setValue={setEmail}/>
            <UserInput name='Password' value={password} setValue={setPassword}/>
            <Text>{JSON.stringify({name,email,password},null,4)}</Text>
        </View>
    )
}
export default Signup