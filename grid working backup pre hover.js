const container = document.querySelector('.container');
const gridArea = document.querySelector('.gridArea');

//creates a grid based off a number for row and column
function createGrid(row, column) {
    //creates a number of divs with the class
    //grid-row based off the number of rows submitted
    for (r=0; r<row; r++) {
        let row = document.createElement('div');
        row.className = "grid-row";
        //gives them a width and height of 500 px divided by the no. of columns
        row.style.width = (500/column) + "px";
        row.style.height = (500/column) + "px";
        
    //creates a number of divs with the class
    //grid-column based off the number of columns submitted
    for (c=0; c<column; c++) {
        let columnDiv = document.createElement('div');
        columnDiv.className = "grid-column";
        //gives them a width and height of 500 px divided by the no. of columns
        columnDiv.style.width = (500/column) + "px";
        columnDiv.style.height = (500/column) + "px";
        //appends these columns into the divs created earlier
        row.appendChild(columnDiv);
    }
    //appends the rows and their child columns into the grid area as a whole
    gridArea.appendChild(row);

    let cellId = document.getElementsByClassName('grid-column');
    for (i=0; i<cellId.length;i++) {
        cellId[i].addEventListener('mouseover', onHover);
    }
}
    return gridArea;
}
createGrid(9,9);

function onHover() {
    this.style.backgroundColor = '#b5cdbe';
}




