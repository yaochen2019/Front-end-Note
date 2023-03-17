type IArray = Array<{
    author:string;
} &
    ({
        type:"history",
        range:string
    } | {
        type:"story",
        theme:string
    })
>