declare module '*.scss' {
    const content: {
        toString(): string
    };
    
    export default content;
}