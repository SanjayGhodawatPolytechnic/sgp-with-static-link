import * as firebase from "firebase";

export const getPublication = async (dept) => {
    const dbRef = firebase.database().ref('publications').child(dept)
    let result = []
    await dbRef.on("value", snapshot => {
        if(snapshot.val()){
            result = Object.values(snapshot.val());
            console.log(result);
            return result;
        }
    })
}