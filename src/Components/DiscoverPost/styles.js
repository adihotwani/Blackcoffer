import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin:5, backgroundColor:'white', flex:1,
    },
    subcontainer1: {flexDirection: 'row', marginBottom:  5},
    subCont1Image: {width: 30, height:30},
    subCont1Text:  {alignSelf: 'center', marginLeft: 10}, 
    subcontainer2: {flexDirection:'row', justifyContent:'space-between', padding: 5},
    subcontainer3: {flexDirection:'row', justifyContent: 'flex-start'},
    subcontainer4: {flexDirection:'row'},
    textMarginLeft:{marginLeft: 5}
})

export default styles;