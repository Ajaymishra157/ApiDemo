import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

    const ImageCarousel = () => {
        const images = [
            img1,
            img2,
        ];
    
        const renderItem = ({ item }) => {
            return (
                <View style={styles.slide}>
                    <Image source={item} style={styles.image} />
                </View>
            );
        };
  return (
    <Carousel
    data={images}
    renderItem={renderItem}
    sliderWidth={screenWidth}
    itemWidth={screenWidth}
    layout={'default'}
/>
);
};

const styles = StyleSheet.create({
slide: {
width: screenWidth,
justifyContent: 'center',
alignItems: 'center',
},
image: {
width: '100%',
height: 200, // Aap height ko apne hisab se adjust kar sakte hain
resizeMode: 'cover',
},
});
export default ImageCarousel;
