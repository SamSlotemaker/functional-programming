export function createBarChart(array, x, y) {
    const container = document.querySelector('#svg-container')
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight
    const svg = d3.select('#svg-container')
        .append("svg").attr("width", containerWidth - 100).attr("height", containerHeight - 100);
    const width = +svg.attr('width')
    const height = +svg.attr('height')

    const xValue = d => d[x]
    const yValue = d => d[y]
    const margin = {
        top: 0,
        right: 20,
        bottom: 20,
        left: 50
    }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const renderBarChart = data => {
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, xValue)])
            .range([0, innerWidth])


        const yScale = d3.scaleBand()
            .domain(data.map(yValue))
            .range([0, innerHeight])
            .padding(0.1)

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
            .attr('transform', `translate(0, ${innerHeight})`)

        g.selectAll('rect').data(data)
            .enter().append('rect')
            .attr('y', d => yScale(yValue(d)))
            .attr('width', d => xScale(xValue(d)))
            .attr('height', yScale.bandwidth())
    }
    renderBarChart(array)
}