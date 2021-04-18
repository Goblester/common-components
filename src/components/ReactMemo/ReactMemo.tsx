import React, {useState} from 'react';

type NewMessagesCounterPropsType = {
    count: number
}

type UsersPropsType = {
    users: Array<string>
}


export function Example1(args: any) {
    console.log('EXAMPLE')
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Danya', 'Vika'])

    const addUser = ()=>{
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return (
        <>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={addUser}>add User</button>
            <NewMessagesCounter count={counter} />
            <Users users={users}/>
        </>
    )
}




const NewMessagesCounter = ({count}: NewMessagesCounterPropsType) => {
    console.log('COUNTER');
    return (
        <div>
            {count}
        </div>
    )
}


const UsersSecret = ({users}: UsersPropsType) => {
    console.log('USERS');
    return (
        <div>
            {users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)
