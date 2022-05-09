import React from 'react'
import { View, Text,ScrollView, StyleSheet } from 'react-native'
import { PokemonFull } from '../interfaces/PokemonInterfaces'
import { FadeInImage } from './FadeInImage'


interface Props {
    pokemon: PokemonFull
}
  

export const PokemonDetails = ({pokemon}:Props) => {
    return (
       <ScrollView style={{...StyleSheet.absoluteFillObject}} >
             
          <View style={{...styled.container}}>

     <Text  style={styled.title}>Types</Text>

                  <View>

  <Text> { pokemon.types.map((type) =>(
            <Text style={styled.pSize} key={type.type.name} >{type.type.name}</Text>))} </Text>

                  </View>

  <Text  style={{fontSize:20,marginTop:10}}>Peso</Text>
  <Text  style={{fontSize:15,marginTop:5}}>{pokemon.weight}KG</Text>
                  <Text  style={{...styled.title}}>Sprites</Text>
                  <View>

      

    <ScrollView 
      style={{flexDirection:'row'}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
     <FadeInImage uri={pokemon.sprites.front_default} 
     style={styled.basicSprite}
     />
     <FadeInImage uri={pokemon.sprites.back_default} 
     style={styled.basicSprite}
     />

<FadeInImage uri={pokemon.sprites.front_shiny} 
     style={styled.basicSprite}
     />

<FadeInImage uri={pokemon.sprites.back_shiny} 
     style={styled.basicSprite}
     />




    </ScrollView>

     </View>

       <View  >
       <Text  style={styled.subTitle}>Habilities</Text>
       <View>
         
       { pokemon.abilities.map((ability) =>(
            <Text style={styled.pSize} 
            key={ability.ability.name}
            >{ability.ability.name}  </Text>))} 
        </View>
       </View>



                   
       <View  >
       <Text  style={styled.subTitle}>Movies</Text>
       <View>
         
       <Text> { pokemon.moves.map((move) =>(
                <Text style={styled.pSize}
                key={move.move.name}
                >{move.move.name}  </Text>
            ))} </Text>
        </View>
       
       </View>



       <View  >
       <Text  style={styled.subTitle}>Stats</Text>
       <View >
         
         { pokemon.stats.map((stat) =>(
            
            <View>
             <Text  key={stat.stat.name}> { stat.stat.name }</Text>
             <Text  key={stat.base_stat}> { stat.base_stat}</Text>
 
            </View>


            ))} 
            
            
        </View>
       
       </View>


          </View>
  

       </ScrollView>
    )
}



const styled = StyleSheet.create({
    container: {
        marginHorizontal:20,
        marginTop:360
    },
    title:{
   fontWeight:'bold',
   fontSize:25,marginTop:15

    },
    basicSprite:{
        width:100,height:100,left:-10
    },
    subTitle:{
        fontSize:30,marginTop:5,fontWeight:'bold'
    },
    pSize:{
        fontSize:16
    }
})
