const container = document.querySelector('.container');
const gridArea = document.querySelector('.gridArea');
const button = document.querySelector('#newBtn');

//creates a grid based off a number for row and column
function createGrid(numRows) {
    //creates a number of divs with the class
    //grid-row based off the number of rows submitted
    for (r=0; r<numRows; r++) {
        let row = document.createElement('div');
        row.className = "grid-row";
        //gives them a width and height of 500 px divided by the no. of columns
        row.style.width = (500/numRows) + "px";
        row.style.height = (500/numRows) + "px";
        
    //creates a number of divs with the class
    //grid-column based off the number of columns submitted
    for (c=0; c<numRows; c++) {
        let columnDiv = document.createElement('div');
        columnDiv.className = "grid-column";
        //gives them a width and height of 500 px divided by the no. of columns
        columnDiv.style.width = (500/numRows) + "px";
        columnDiv.style.height = (500/numRows) + "px";
        //appends these columns into the divs created earlier
        row.appendChild(columnDiv);
    }
    //appends the rows and their child columns into the grid area as a whole
    gridArea.appendChild(row);

    //cellId is set to the grid-column classes
    let cellId = document.getElementsByClassName('grid-column');
    //while there are still blank grid-columns the for loop still runs
    for (i=0; i<cellId.length;i++) {
        //when mouse over runs the on hover function
        cellId[i].addEventListener('mouseover', onHover);
    }
}
    return gridArea;
}

createGrid(9);

//changes the background colour of the cell on hover
function onHover() {
    this.style.backgroundColor = '#b2abcd';
}

//when the new grid button is clicked the divs are all deleted
//the user is prompted for a no. sides
//and then a new grid is created with this no.
button.addEventListener('click', function() {
    gridArea.innerHTML='';
    userGrid = prompt('How many sides do you want?');
    createGrid(userGrid);
});



