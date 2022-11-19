const form = document.getElementById('flexForm')
const vertical = document.getElementById('vertical')
const grid = document.getElementById('grid')

function verticalDisplay() {
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
}
function gridDisplay() {
    form.style.display = 'grid'
    form.style.gridTemplateColumns = '250px 250px 250px'
    form.style.gridTemplateRows = '1fr 1fr 1fr'
    form.style.gridTemplateAreas = "'i1 i1 i2' 'i4 i5 i2' 'i3 i3 i3' 'i6 i6 i6'"
}
vertical.addEventListener('click', verticalDisplay)
grid.addEventListener('click', gridDisplay)