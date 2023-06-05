// PascalCasing
function Message() {
    // JSX: Javascript XML
    const name = 'John';
    if (name) {
        return <h1>Hi {name}, I'm a Message</h1>;
    }
    else {
        return <h1>Hi, I'm a Message</h1>;
    }
    
}

export default Message;