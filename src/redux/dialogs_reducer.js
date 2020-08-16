const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych', avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a324d029-f3c5-47cf-bb14-076a55a2890d/dd5m106-1883bc46-c968-43d9-af90-512af1d75a81.png/v1/fill/w_1280,h_1203,q_80,strp/anime_icon__24_by_pixieinktvis_dd5m106-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjAzIiwicGF0aCI6IlwvZlwvYTMyNGQwMjktZjNjNS00N2NmLWJiMTQtMDc2YTU1YTI4OTBkXC9kZDVtMTA2LTE4ODNiYzQ2LWM5NjgtNDNkOS1hZjkwLTUxMmFmMWQ3NWE4MS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nKj6IudxTYJvU_DFizfws9xNQG-3CQ4FkwXBvS3gLzo' },
        { id: 2, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_YQsXigyxSWIoL4k12KqnbizdyyKh_K9d3g&usqp=CAU' },
        { id: 3, name: 'Valera', avatar: 'https://i1.sndcdn.com/avatars-000676457144-7o0rlx-t500x500.jpg' },
        { id: 4, name: 'Polya', avatar: 'https://data.whicdn.com/images/339052847/original.jpg' },
        { id: 5, name: 'Anna', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk4C8dpia5QGFBF6kmQFFSYhBQIOLwqiyHCw&usqp=CAU' },
        { id: 6, name: 'Oliva', avatar: 'https://www.vhv.rs/dpng/d/221-2213190_anime-kakegurui-marysaotome-icon-aesthetic-anime-icon-teal.png' },
        { id: 7, name: 'Korina', avatar: 'https://res.cloudinary.com/teepublic/image/private/s--o2A9Wz_k--/c_crop,x_10,y_10/c_fit,h_1090/c_crop,g_north_west,h_1038,w_1038,x_11,y_39/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-111,y_-111/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1568331395/production/designs/5938683_0.jpg' }
    ],
    messages: [
        { id: 1, type: 'answer', message: 'Hello' },
        { id: 2, type: 'answer', message: "I don't no" },
        { id: 3, type: 'user',  message: 'Abrakadabra' },
        { id: 4, type: 'answer',  message: 'Step for my sister' },
        { id: 5, type: 'user',  message: 'Omnon nim' },
        { id: 6, type: 'answer',  message: 'Nuaah' },
        { id: 7, type: 'answer',  message: 'Poly' }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageBody;
            if (text.trim().length > 0) {
                let newMessage = {
                    id: state.messages.length + 1,
                    type: 'user',
                    message: text
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            } else {
                return {
                    ...state
                }
            }      
    }
    return state;
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;