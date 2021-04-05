export type UserType = {
    name: string,
    hair: number,
    address: { street: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBook = UserType & {
    books: BooksType
}

export type BooksType = Array<string>


export const makeNewHairStyle = (u: UserType, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy;
}

export const moveUser = (u: UserType, street: string) => {
    const copy = {
        ...u,
        address: {
            ...u.address,
            street: street
        }
    }
    return copy;
}

export const upgradeLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const deleteBook = (u: UserWithLaptopType & UserWithBook, book: string)=>({
  ...u,
  books: u.books.filter(b => b !== book)
})