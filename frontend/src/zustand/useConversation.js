import {create} from "zustand";

const useConversation = create((set)=>{
    return {
        selectedConversation : null,
        setSelectedConversation : (selectedConversation) => set({selectedConversation}),
        messages : [],
        setMessages : (messages) => set({messages})
    }
})
export default useConversation;





// {
//     return {
//             selectedConversation : null,
//             setSelectedConversation : (selectedConversation) => set({selectedConversation}),
//             messages : [],
//             setMessages : () => (messages) => set({ messages })
//     }
// }