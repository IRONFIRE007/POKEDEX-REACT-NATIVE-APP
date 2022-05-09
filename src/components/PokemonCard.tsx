import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from '../interfaces/PokemonInterfaces'
import { FadeInImage } from './FadeInImage'

 const windowWidth = Dimensions.get('window').width
interface Props{
    pokemon:SimplePokemon;
}

export const PokemonCard = ({pokemon}:Props) => {


const [bgColor, setBgcolor] = useState('#c5c5c5')
const isMounted = useRef(true);

 const navigation =useNavigation<any>()

useEffect(() => {
  

  ImageColors.getColors(pokemon.picture,{fallback:'#c5c5c5'})
  .then(colors =>{
  if(!isMounted.current) return;

   if (colors.platform === 'android'){
    setBgcolor(colors.dominant|| '#c5c5c5')
   }

  })
  return ()=>{
    isMounted.current=false;
  }
  
}, [])


    return (
        <TouchableOpacity  
          activeOpacity={.8}
          onPress={ ()=> navigation.navigate('PokemonScreen',{simplePokemon:pokemon,color:bgColor}) }
        >
            <View style={{...styles.cardConatiner,width:windowWidth*.4,backgroundColor:bgColor}} >
            <View>
               <Text style={{...styles.name}}>{pokemon.name}
                {'\n#'+ pokemon.id}
               </Text> 
            </View>

            <View   style={{...styles.pokebolaContainer}}>
            <Image  source={require('../assets/pokebolaBlanca.png')} 
            style={{...styles.pokebola}}
            
            />
            </View>

            <FadeInImage 
              uri={pokemon.picture}
            style={styles.pokemonImage}
            />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardConatiner:{
        marginHorizontal:10,
        height:120,width:160,
        marginBottom:25,
        borderRadius:10,
        shadowColor: "#000",
         shadowOffset: {
	        width: 0,
	        height: 2,
                     },
       shadowOpacity: 0.25,
         shadowRadius: 3.84,
            elevation: 5,
    },
    name: {
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
      top:20,left:10  
    },
    pokebola:{
        width:100,height:100,position:'absolute',bottom:-25,
        right:-25,opacity:.4
    },
    pokemonImage:{
  width:120,height:120,position:'absolute',
        right:-5
    },
    pokebolaContainer:{
        width:100,height:100,bottom:0,right:0,position:'absolute',overflow:'hidden'
    }
})