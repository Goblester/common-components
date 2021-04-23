import React, {useMemo, useState} from 'react';

type NewMessagesCounterPropsType = {
    count: number
}

type UsersPropsType = {
    users: Array<string>
}


export const CountPlusUsers = React.memo(function(args: any) {
    console.log('CountPlusUsers');
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Danya', 'Vika'])

    const addUser = ()=>{
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    const newUsers = useMemo(()=>{
        return users.filter(u=>u.indexOf('a')>-1);
    },[users])

    return (
        <>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={addUser}>add User</button>
            <NewMessagesCounter count={counter} />
            <Users users={newUsers}/>
        </>
    )
});




const NewMessagesCounter = ({count}: NewMessagesCounterPropsType) => {
    console.log('COUNTER');
    return (
        <div>
            {count}
        </div>
    )
}


const Users = React.memo(({users}: UsersPropsType) => {
    console.log('USERS');
    return (
        <div>
            {users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
});

