export const user = {
    name: "Gaurav",
    email: "gauravchhiapa295@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
        // status: undefined
        status: "active"
    },
    playlist: [
        {
            course: 'abc',
            poster: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
        }
    ]
}