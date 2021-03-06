const tpl = '<p>hello，我是<%name%>，职业：<%job%><p>'

const data = {
    name: 'hugo',
    job: 'FE'
}

function compile(tpl, data) {
    const regex = /\<%(.*?)%\>/g
    const string = tpl.trim().replace(regex, function (match, $1) {
        if ($1) {
            return data[$1]
        } else {
            return ''
        }
    })
    console.log(string) // <p>hello，我是hugo，职业：FE<p>
}



// const compile = function (tpl, data) {
//     const regex = /\<%(*)%\>/g
//     return tpl.trim().replace(regex, function (match, $1)  {
//         console.log(match)
//         console.log($1)
//     })
// }

compile(tpl, data)