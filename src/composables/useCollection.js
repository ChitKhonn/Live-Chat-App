import {ref} from "vue";
import {db} from "@/firebase/config";

let useCollection = (collection) => {
    let error = ref(null);
    let addChatData =async (chat) => {
       try {
           await db.collection(collection).add(chat);
       }catch (e) {
           error.value = "could not sent the message to firebase";
           console.log(e.message)
       }
    }

    return {error,addChatData}
}

export default useCollection;
