import {deleteBook, makeNewHairStyle, moveUser, upgradeLaptop, UserType, UserWithBook, UserWithLaptopType} from './10';





test('reference type test', () => {
    const user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            street: 'Minsk'
        }
    }

    const awesomeUser = makeNewHairStyle(user, 2);

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
})

test('change address', () => {
    const user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            street: 'Minsk'
        }
    }

    const awesomeUser = moveUser(user, 'Kiev');

    expect(user.address).not.toBe(awesomeUser.address);
    expect(awesomeUser.address).toBe('Kiev');
})


test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            street: 'Minsk'
        },
        laptop :{
            title : 'Dell inspiron'
        }
    }

    const awesomeUser = upgradeLaptop(user, 'macbook');

    expect(user.laptop.title).not.toBe('macbook')
    expect(user.address).toBe(awesomeUser.address);
    expect(user.laptop).not.toBe(awesomeUser.laptop);
    expect(awesomeUser.laptop.title).toBe('macbook');
})


test('delete book', () => {
    const user: UserWithLaptopType&UserWithBook = {
        name: 'Dimych',
        hair: 32,
        address: {
            street: 'Minsk'
        },
        laptop :{
            title : 'Dell inspiron'
        },
        books : ['html', 'css', 'react', 'js']
    }

    const awesomeUser = deleteBook(user, 'js');

    expect(user).not.toBe(awesomeUser)
    expect(user.books.length).toBe(4);
    expect(awesomeUser.books).toStrictEqual(['html', 'css', 'react']);
    expect(awesomeUser.books.length).toBe(3);
})