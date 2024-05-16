import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InvitationState {
    videoId: string;
    videoUrl: string;
}

const initialState: InvitationState = {
    videoId: "",
    videoUrl: "",
};

const invitationSlice = createSlice({
    name: "invitation",
    initialState,
    reducers: {
        setVideoId: (state, action: PayloadAction<string>) => {
            state.videoId = action.payload;
        },
        setVideoUrl: (state, action: PayloadAction<string>) => {
            state.videoUrl = action.payload;
        },
    },
});

export const { setVideoId, setVideoUrl } = invitationSlice.actions;
export default invitationSlice.reducer;

export const getInvitationData = (id: string | string[] | undefined) => async (dispatch: any) => {
    try {
        // Call invitation API to get the video ID
        const invitationResponse = await getInvitation(id);
        const videoUrl = invitationResponse?.data?.signedUrl;
        dispatch(setVideoUrl(videoUrl));
    } catch (error) {
        console.error("Error retrieving invitation data:", error);
    }
};
// export const handleAcceptInvitation = (id: string | string[] | undefined) => async (dispatch: any) => {
//     acceptInvitation(id).then((data) => {
//         if (data?.response?.status == 201) {
//         //    const router = useRouter();
//         //    router.push("./invitationAccepted");
//         }
//     });
// };