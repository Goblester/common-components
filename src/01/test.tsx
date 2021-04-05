


type UsersType = {
    [key: string]: { id: number, name: string }
}

export function Test() {


    const users: UsersType = {
        '101': {id: 101, name: 'Dimych'},
        '213': {id: 213, name: 'Goblin'},
        '31': {id: 31, name: 'Danya'},
        '1': {id: 1, name: 'Olya'}
    };
    const user = {id: 13, name: '666'}

    users[user.id] = user

    delete users['31'];



    console.log(users);

    return (
        <div>

        </div>
    )
}