
type PropsType = {
    name: string,
    age: number,
    lessons: Array<{title:string}>,
    address: {
        street: {
            name: string
        }
    }
}

let props:PropsType;

beforeEach(()=>{
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: 'sad'},{title: "happy"}, {title: 'meta'}],
        address: {
            street: {
                name: "sweet street"
            }
        }
    }

})

test("destructuring should work well",()=>{

    const [ls1, ...lessons1] = props.lessons;
    const [,,ls3] = props.lessons

    const {name, age, lessons, ...adr}=  props;
    expect(ls1).toStrictEqual({title: "sad"});
    expect(lessons1.length).toBe(2);
    expect(ls3.title).toBe("meta");
    expect(adr).toStrictEqual({address:{street:{name: "sweet street"}}});
})


export default "";