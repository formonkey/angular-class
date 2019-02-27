module.exports = {
    posts: [
        { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123, player_id: 1 },
        { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456, player_id: 2 },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Jane Doe" }
    ],
    players: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" }
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
        { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
    ],
    tests: [
        { id: 987, post_id: 1, text: "Test 1" },
        { id: 995, post_id: 1, text: "Test 2" }
    ]
};
