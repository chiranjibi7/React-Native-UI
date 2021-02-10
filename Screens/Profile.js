import React from 'react'
import { StyleSheet, View } from 'react-native'
import Card from '../Components/Card';
import Photo from '../Components/Photo';
import NameSection from "../Components/Name";
import Description from "../Components/Description";
import ActiveNumbers from "../Components/ActiveNumbers";
import Follow from "../Components/Follow";

const Profile = () => {
    return (
       <Card style={styles.profile}>
           <View style={styles.fullProfile}>
               <Photo/>
               <NameSection/>
               <Description/>
               <ActiveNumbers/>
               <Follow/>
           </View>
       </Card>
    )
}

export default Profile

const styles = StyleSheet.create({
    profile:{
        flex:1,
        width:'90%',
        marginVertical:30,
        borderRadius:10,
    },
    fullProfile:{
        flex:1,
        margin:30,
    }   
})
