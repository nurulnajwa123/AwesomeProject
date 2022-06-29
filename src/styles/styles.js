//login 1st page
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      margin:20,
    },
    highlight:{
      fontWeight:"bold",
      fontSize:35,
      color:"#000000",
      marginBottom:20
    },
    inputView:{
      width:"90%",
      backgroundColor:"#cdd0dd",
      height:50,
      marginBottom:10,
      justifyContent:"center",
      padding:20,
    },
    inputText:{
      height:50,
      color:"black",
      marginTop: 5,
      textAlign:"center",
     },
    loginButton:{
      width:"40%",
      backgroundColor:"#785a6a",
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10,
    },
    loginText:{
      color:"white",
      fontWeight: "bold"
    },
    SignUpText:{
      color:"black",
      fontWeight:"bold"
    },
    //2ngpage passing value
    button:{
      width:"50%",
      backgroundColor:"#785a6a",
      height: 50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    buttonText:{
      color:"white",
      fontWeight:"bold"
    },

    // api 3rd page
    list:{
       paddingVertical: 4,
       margin: 10,
    },
    boxText:{
       color:"black"
    },
    //register
    register: {
      flex: 2,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      margin:20,
    },
    registerHighlight:{
      fontWeight:"bold",
      fontSize:25,
      color:"#000000",
      marginBottom:30,
    },
    clearButton:{
      width:"40%",
      backgroundColor:"#a9a9a9",
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10,
    },
    //Detail
    containerDetail:{
      flex: 2,
      justifyContent: "center", 
      alignItems: "center",
      margin:30,
    },
    text:{
      height:20,
      color:"black",
      margin:10,
    },
    detailName:{
      fontWeight:"bold",
      color: "black",
      fontSize:22,
      marginBottom:10,
      marginTop: 10,
      textAlign: "center",
    },
    closeButton:{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 280,
        position:"absolute"
    },
    closeIcon:{
      height: 20,
      width: 20,
      marginBottom: 50,
      position:"absolute"
    },
    picture:{
      width:200, 
      height: 200, 
      borderRadius: 300/2, 
      justifyContent: "center",
      alignItems: "center",
    },
    hightlight2:{
      fontWeight:"bold",
      fontSize:20,
      color:"#000000",
      marginBottom:15,
      marginTop:10,
     },
     centeredView: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: 'rgba(0,0,0,0.6)'
  },
     modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 10,
  },
    });
      