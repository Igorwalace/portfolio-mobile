import React from 'react'
import { Image, ScrollView, ViewBase, ViewComponent } from 'react-native'
import { Text, View } from 'react-native'

const Projects = () => {

    const numbers = [1, 2, 3, 4, 5, 6]

    return (
        <View className='' >
            <Text className='text-white text-base' >Meus Projetos</Text>
            <View className='py-5 flex-row flex-wrap gap-4' >
                {
                    numbers.map((number, index) => {
                        return (
                            <Image
                                key={index}
                                className='w-[45%] h-[103px] rounded-xl'
                                source={require("../../assets/IStore.png")}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Projects