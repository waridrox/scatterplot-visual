let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
let req = new XMLHttpRequest()

let values =[]

let xScale
let yScale

let xAxis
let yAxis

let width = 800
let height = 600
let padding = 40

let svg = d3.select('svg')
let tooltip = d3.select('#tooltip')



let generateAxes = () => {

    xAxis = d3.axisBottom(xScale)
                .tickFormat(d3.format('d'))
                

    yAxis = d3.axisLeft(yScale)
                .tickFormat(d3.timeFormat('%M:%S'))


    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) +')')

    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform','translate(' + padding + ', 0)')
}


req.open('GET', url, true)
req.onload = () => {
    values = JSON.parse(req.responseText)
    console.log(values)
    generateAxes()
}
req.send()
