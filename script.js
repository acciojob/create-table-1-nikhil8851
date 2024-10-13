function insert_Row() {
    //Write your code here
  const table = document.querySelector(`#sampleTable`)
	const newrow = table.insertRow(0)

	const cell1 = newrow.insertCell(0)
    const cell2  = newrow.insertCell(1)

	cell1.textContent = "New Cell1"
	cell2.textContent = "New Cell2"
}