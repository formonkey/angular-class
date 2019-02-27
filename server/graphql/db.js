module.exports = {
    users: [
        {id: 1, username: 'skullpanda', password: 'test123', profile_id: 1},
        {id: 2, username: 'noevite', password: 'test123', profile_id: 2}
    ],
    profiles: [
        {id: 1, role: 'ADMIN', name: 'Isaac', surname: 'Martin'},
        {id: 2, role: 'ADMIN', name: 'Noelia', surname: 'Villa'}
    ],
    posts: [
        {id: 1, title: "Lorem Ipsum", views: 254, profile_id: 1},
        {id: 2, title: "Sic Dolor amet", views: 65, profile_id: 1},
    ],
    comments: [
        {id: 1, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03'), user_id: 2},
        {id: 2, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17'), user_id: 3}
    ],
};
