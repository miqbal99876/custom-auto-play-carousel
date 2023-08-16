//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { styles } from './styles';

const carouselData = [
    {
        id: 1,
        image: require('../../assets/images/image3.jpg')
    },
    {
        id: 2,
        image: require('../../assets/images/image2.jpg')
    },
    {
        id: 3,
        image: require('../../assets/images/image1.jpg')
    },
    {
        id: 4,
        image: require('../../assets/images/image4.jpg')
    },
    {
        id: 5,
        image: require('../../assets/images/image5.jpg')
    },
    {
        id: 6,
        image: require('../../assets/images/image6.jpg')
    },
]

// create a component
const Carousel = () => {
    const flatListRef = useRef();
    const screenWidth = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = useState(0)

    //auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;
            flatListRef.current.scrollToIndex({
                index: nextIndex,

            });

            // Update the active index after scrolling
            setActiveIndex(nextIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [activeIndex]);
    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index
    })

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={item.image} style={styles.image} />
            </View>
        )

    };
    const renderdots = () => {
        return (
            carouselData.map((dot, index) => {
                return (
                    <View key={index} style={{
                        backgroundColor: activeIndex === index ? '#eaba40' : '#ded4e8',
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        marginHorizontal: 5
                    }}>

                    </View>
                )
            })
        )

    }
    const handleScroll = (event) => {
        // get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x;

        // get the index of current active item
        const index = scrollPosition / screenWidth;

        // update the index
        setActiveIndex(index)
    }
    return (
        <View style={styles.container}>
            <View style={{ height: 220, }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={carouselData}
                    renderItem={renderItem}
                    pagingEnabled
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={handleScroll}
                    ref={flatListRef}
                    getItemLayout={getItemLayout}
                />
                <View style={styles.dots}>
                    {renderdots()}
                </View>
            </View>

        </View>
    );
};


//make this component available to the app
export default Carousel;
