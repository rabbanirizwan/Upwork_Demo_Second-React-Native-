import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Image, View, SafeAreaView } from 'react-native'

const Second = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <View style={{paddingHorizontal:20}}>
                <TouchableOpacity>
                    <Image
                        resizeMode="contain"
                        resizeMethod="resize"
                        source={require("./third.png")}
                    />

                </TouchableOpacity>
            </View>
            <View style={{height: 500, }}>
                <View style={{ alignItems: "center", paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold", fontFamily: "fantasy" }}>Device Name</Text>
                    <Text style={{ fontSize: 16, color: "#4A4A4A", textAlign: "center", marginVertical: 20, fontFamily: "Times" }}>00:0a:95:9d:68:16</Text>
                </View>
                <View style={{ height:300, justifyContent: "space-evenly" }}>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: "white", borderRadius: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginHorizontal: 20 }}>
                        <Text style={{ color: "black", fontSize: 16 }}>Scan</Text>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={require("./four.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: "#5a55ca", borderRadius: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginHorizontal: 20 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>Connect</Text>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={require("./two.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: "#EBEBEB", borderRadius: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginHorizontal: 20 }}>
                        <Text style={{ color: "gray", fontSize: 16 }}>Read temperature</Text>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={require("./five.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 16, color: "gray" }}>Not, Jhonathon?</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#5a55ca", fontSize: 16 }}>click here</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>  to re-register</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Second

const styles = StyleSheet.create({
    parent: {
        backgroundColor: "#F5F6FA",
        flex: 1,

        justifyContent: "space-between",
        paddingVertical: 20

    }
})