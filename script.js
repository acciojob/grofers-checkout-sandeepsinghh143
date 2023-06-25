const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
	let table=document.getElementsByTagName("table")[0];
	let tr=document.createElement("tr");
	table.append(tr);
	let items=document.querySelectorAll(".price");
	let sum=0;
	for(let i=0;i<items.length;i++){
		sum+=parseInt(items[i].innerText);
	}
  let result=document.createElement("td");
	item.innerText="Total Value";
	tr.append(item);
  let price=document.createElement("td");
	price.innerText=sum;
	price.id="ans";
	tr.append(price);
	return tr;
};

getSumBtn.addEventListener("click", getSum);

