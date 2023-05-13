const model =[
    {type: 'title', value: 'Hello from JS site'},
    {type: 'text', value: 'Some text here'},
    {type: 'columns', value: [
        '111111111',
        '222222222',
        '333333333'
    ]},
    {type: 'image', value: './assets/pic.jpg'}
]

const $site = document.querySelector('#site')
model.forEach(block => {  
    let html =''
    if (block.type === 'title')  html = title(block)
    else if (block.type === 'text') html = text(block)
    else if (block.type === 'columns') html = columns(block)
    else if (block.type === 'image') html = image(block)
})


function title(block){
    return  `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
    `
}
function text(block){
    return  `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
    `
}
function columns(block){
const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
                <div class="row">
                    ${html.join('')}
                </div>
    `
}
function image(block){
    return `
    <div class="row">
        <img scr="${block.value}" />
    </div>
        ` 
}