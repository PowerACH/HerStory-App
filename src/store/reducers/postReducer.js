const initState = {
    posts: [
        {
            "id": '1',
            "userImage":"https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg", 
            "username": "SpideyM",
            "postImage": "https://imgix.bustle.com/uploads/image/2020/5/27/8afbad4b-f30b-47d7-b96e-207f9c2539e1-spider-man-cap.jpeg",
            "imageCaption": "With great power comes a really awesome suit."
        },
        {
            "id": '2',
            "userImage":"https://cdn.vox-cdn.com/thumbor/JBJzwCXmTJs0NgnFtSPm_f5SMyw=/0x0:2000x1000/1200x800/filters:focal(654x138:974x458)/cdn.vox-cdn.com/uploads/chorus_image/image/59408999/Thanos_MCU.0.jpg", 
            "username": "TheeThanos",
            "postImage": "https://www.screengeek.net/wp-content/uploads/2019/12/avengers-endgame-thanos-snap.jpg",
            "imageCaption": "Im the real hero."
        },
        {
            "id": '3',
            "userImage":"https://i.pinimg.com/originals/62/6c/1d/626c1d301f5d1f25445e1ed71ea7c91c.jpg", 
            "username": "IAmGroot",
            "postImage": "https://herohyper.com/wp-content/uploads/2018/11/groot-rocket-herohyper-1000x600.jpeg",
            "imageCaption": "I am Groot, I am Groot, I AM GROOT"
        },
        {
            "id": '4',
            "userImage":"https://gamespot1.cbsistatic.com/uploads/scale_landscape/1575/15759911/3696271-ironman-vr-review-promothumb.jpg", 
            "username": "IronGuy",
            "postImage": "https://mk0uploadvrcom4bcwhj.kinstacdn.com/wp-content/uploads/2020/07/iron-man-vr-impulse-armor-flying.jpeg",
            "imageCaption": "Heroes are made by the path they choose, not the powers they are graced with."
        },
        {
            "id": '5',
            "userImage":"https://2.bp.blogspot.com/-JtY5ZWNlNB4/T6LJNJcv_KI/AAAAAAAAF28/DFSaUkO7PFk/s1600/Hulk-Movie.jpeg", 
            "username": "HulkSmash",
            "postImage": "https://sciencefiction.com/wp-content/uploads/2019/11/Hulk-Endgame.jpg",
            "imageCaption": "TBT Its called growth"
        }
]

}

const postReducer = (state = initState, action) => {
    return state
}

export default postReducer;