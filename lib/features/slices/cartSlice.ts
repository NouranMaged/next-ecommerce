import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  itemsCount: number;
}

const initialState: CartState = {
    itemsCount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incremented: (state) => {
            state.itemsCount += 1;
          },
          decremented: (state) => {
            state.itemsCount -= 1;
          },
          initializeScreen: (state, action: PayloadAction<number>) => {
            state.itemsCount = action.payload;
          },
      
     
    },
});

export const { incremented,decremented,initializeScreen } = cartSlice.actions;
export default cartSlice.reducer;

// export const getInvitationData = (id: string | string[] | undefined) => async (dispatch: any) => {
//     try {
//         // Call invitation API to get the video ID
//         const invitationResponse = await getInvitation(id);
//         const videoUrl = invitationResponse?.data?.signedUrl;
//         dispatch(setVideoUrl(videoUrl));
//     } catch (error) {
//         console.error("Error retrieving invitation data:", error);
//     }
// };
// export const handleAcceptInvitation = (id: string | string[] | undefined) => async (dispatch: any) => {
//     acceptInvitation(id).then((data) => {
//         if (data?.response?.status == 201) {
//         //    const router = useRouter();
//         //    router.push("./invitationAccepted");
//         }
//     });
// };