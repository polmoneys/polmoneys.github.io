
  function optionOrDefault(defaultOption, optionsObject, switchValue) {
        return optionsObject[switchValue] || defaultOption;
    }

    const dflt = 'You’ve received some sort of notification we don’t know about.';

    const textOptions = {
        citation: 'You received a citation from {{actingUser}}.',
        follow:   '{{actingUser}} started following your work',
        mention:  '{{actingUser}} mentioned you in a post.',
    }

    function getNotificationPtrn(notification) {
        return optionOrDefault(dflt, textOptions, notification.type);
    }

function isString(val) {
   return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
}
  
// preplan
const add = (a, b) => a + b
const dbl = (num) => num * 2
const pipe = (f, g) => (...args) => g(f(...args))
const sumThenDbl = pipe(add, dbl)
const result = sumThenDbl(2, 1) // 6


// plan a
const inc = (num) => num+1
const dbl = (num) => num*2
const sqr = (num) => num*num

// Pipe L-t-R
const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)

const incDblSqr = pipe(inc, dbl, sqr)
const result = incDblSqr(2)

document.getElementById('output').innerHTML = result



// plan b

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

// Usage : compose functions right to left
// compose(minus8, add10, multiply10)(4) === 42
//
// The resulting function can accept as many arguments as the first function does
// compose(add2, multiply)(4, 10) === 42




// plan c
const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


const set = prop => obj => value =>
    (obj[prop] = value, obj)

const setInnerHtml = set('innerHTML')


// const panelTag = tag({ tag: 'div', attr: { class: 'panel panel-default' }})
// const panelBody = tag({ tag: 'div', attr: { class: 'panel-body' }})
// const basicPanel = compose(panelTag, panelBody)
// const listGroupPanel = compose(basicPanel, listGroup


  //  * main.js
const content = document.getElementById('content')
const main = e =>
  compose(setInnerHtml(e), listGroupPanel)

const list = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
  'Vestibulum at eros'
]

main(content)(list)
