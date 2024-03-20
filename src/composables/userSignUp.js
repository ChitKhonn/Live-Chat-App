import {ref} from "vue";
import {auth} from "@/firebase/config";

let error = ref(null);


let createAccount = async (displayName,email,password) => {
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        if(!res){
            throw new Error("Couldn't create new user!!!");
        }
        res.user.updateProfile({displayName});
        console.log(res.user);
    }catch(err){
        error.value = err.message;
        console.log(error.value);
    }
}
let userSignUp = () => {
    return {error , createAccount};
}

export default userSignUp;