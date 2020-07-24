const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _subscriber() {
        console.log('No subscribers (observers)')
    },
    _state: {
        dialogsPage: {
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
                { id: 1, message: 'Hello' },
                { id: 2, message: "I don't no" },
                { id: 3, message: 'Abrakadabra' },
                { id: 4, message: 'Step for my sister' },
                { id: 5, message: 'Omnon nim' },
                { id: 6, message: 'Nuaah' },
                { id: 7, message: 'Poly' }
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                { id: 1, nickname: 'Katerina', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis, corrupti assumenda quidem impedit delectus facere in neque nulla, odio quibusdam, reprehenderit quaerat expedita quod cum iure ipsum provident laborum.', avatar: 'https://www.vranimesociety.com/assets/logo-ca820fd22dfa0d8709ba05792671557237691b242eaa87ddc8e5438fe8c72fdc.webp', like: 0 },
                { id: 2, nickname: 'Elza', text: 'I don\'t no', avatar: 'https://data.whicdn.com/images/333477434/original.jpg', like: 10 },
                { id: 3, nickname: 'Bot9000', text: 'Whyyyyyyyyyyyyyyyyyyyyy?', avatar: 'https://i.pinimg.com/736x/f8/8f/31/f88f31f29fb6e42b8c387743405166b7.jpg', like: 5 },
                { id: 4, nickname: 'Human', text: 'Why not :)', avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg', like: 1 },
                { id: 5, nickname: 'Solo', text: 'Olivia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTB1XNd7zac9ZAJs3LHlgHbGdhVsjyohiqHQ&usqp=CAU', like: 4 }
            ],
            newPostText: ''
        }
    },
    get state() {
        return this._state;
    },
    set state(state) {
        this._state = state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    // addPost() {
    //     let text = this.state.profilePage.newPostText;

    //     if (text.trim().length > 0) {
    //         let newPost = {
    //             id: this.state.profilePage.posts.length + 1,
    //             nickname: 'Re Senpai',
    //             text: text,
    //             avatar: 'https://pbs.twimg.com/profile_images/890664645740175360/ATnwBuw_.jpg',
    //             like: 0
    //         }
    //         this.state.profilePage.posts.unshift(newPost);
    //     }

    //     this.state.profilePage.newPostText = '';
    //     this._subscriber(this.state);
    // },
    // sendMessage() {
    //     let text = this.state.dialogsPage.newMessageText;
    //     if (text.trim().length > 0) {
    //         let newMessage = {
    //             id: this.state.dialogsPage.messages.length + 1,
    //             message: text
    //         }
    //         this.state.dialogsPage.messages.push(newMessage);
    //     }

    //     this.state.dialogsPage.newMessageText = '';
    //     this._subscriber(this.state);
    // },
    // updateNewPostText(newText) {
    //     this.state.profilePage.newPostText = newText;
    //     this._subscriber(this.state);
    // },
    // updateNewMessageText(newText) {
    //     this.state.dialogsPage.newMessageText = newText;
    //     this._subscriber(this.state);
    // },
    dispatch(action) {
        // Возможно кейсы тут не катят
        let text;
        switch (action.type) {
            case ADD_POST:
                text = this.state.profilePage.newPostText;

                if (text.trim().length > 0) {
                    let newPost = {
                        id: this.state.profilePage.posts.length + 1,
                        nickname: 'Re Senpai',
                        text: text,
                        avatar: 'https://pbs.twimg.com/profile_images/890664645740175360/ATnwBuw_.jpg',
                        like: 0
                    }
                    this.state.profilePage.posts.unshift(newPost);
                }

                this.state.profilePage.newPostText = '';
                this._subscriber(this.state);
                break;
            case SEND_MESSAGE:
                text = this.state.dialogsPage.newMessageText;

                if (text.trim().length > 0) {
                    let newMessage = {
                        id: this.state.dialogsPage.messages.length + 1,
                        message: text
                    }
                    this.state.dialogsPage.messages.push(newMessage);
                }

                this.state.dialogsPage.newMessageText = '';
                this._subscriber(this.state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this.state.profilePage.newPostText = action.newText;
                this._subscriber(this.state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this.state.dialogsPage.newMessageText = action.newText;
                this._subscriber(this.state);
                break
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    newText: text
})

export default store;
window.store = store;