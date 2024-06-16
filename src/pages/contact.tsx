import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const Contact = () => {
    return (
        <View className='py-8 pb-14' >
            <Text className='text-white text-base' >Deseja entrar em contato comigo?</Text>
            <Text className='text-[#7587a8] py-1 text-[13px]' >Você pode me mandar uma mensagem em umas das redes, ou me enviar um email abaixo.</Text>
            <View className='py-5 space-y-3' >
                <TextInput
                    className='border-[1px] border-[#7587A8] p-3 rounded-xl'
                    placeholder='nome'
                    placeholderTextColor='#7587A8'
                />
                <TextInput
                    className='border-[1px] border-[#7587A8] p-3 rounded-xl'
                    placeholder='email'
                    placeholderTextColor='#7587A8'
                />
                <TextInput
                    className='border-[1px] h-20 border-[#7587A8] p-3 rounded-xl mb-4'
                    placeholder='digite sua mensagem'
                    multiline={true}
                    numberOfLines={4}
                    placeholderTextColor='#7587A8'
                />
                <Button color='#7587A8'  title="Submit" />
            </View >
        </View>
    )
}

export default Contact