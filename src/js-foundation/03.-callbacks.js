

const users = [
    {
        id: 1,
        name: 'Jhon Doe',
    },
    {
        id:2,
        name: 'Jane Doe',
    }
];


function getUserById( id, callback ){
    const usuario = users.find( function(user){
        return user.id === id;
    });

    if(!usuario){
        return callback(`User not found with id ${id}`);
    }

    return callback(null, usuario);

    
    
}

module.exports = {
    getUserById,
}